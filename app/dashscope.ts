import * as SecureStore from 'expo-secure-store';
import { CONFIG } from './config';

const API_KEY_STORAGE_KEY = 'dashscope_api_key';

export async function getApiKey(): Promise<string> {
  const stored = await SecureStore.getItemAsync(API_KEY_STORAGE_KEY);
  return stored || CONFIG.DASHSCOPE_API_KEY;
}

export async function setApiKey(key: string): Promise<void> {
  if (key) {
    await SecureStore.setItemAsync(API_KEY_STORAGE_KEY, key);
  } else {
    await SecureStore.deleteItemAsync(API_KEY_STORAGE_KEY);
  }
}

export interface MiningRecommendation {
  advice: string;
  optimalPool: string;
  suggestedHashrate: string;
  thermalWarning: string;
  profitability: string;
}

export async function getMiningRecommendation(
  hashrate: number,
  temperature: number,
  earnings: number,
  coin: string = 'BTC'
): Promise<MiningRecommendation> {
  const apiKey = await getApiKey();

  if (!apiKey) {
    return {
      advice: 'Set your DashScope API key in Settings to enable AI recommendations.',
      optimalPool: '--',
      suggestedHashrate: '--',
      thermalWarning: temperature > 75 ? '⚠️ Temperature is high — reduce intensity' : '✅ Normal',
      profitability: earnings > 0 ? `Current: ${earnings.toFixed(8)} ${coin}` : '--',
    };
  }

  const prompt = `You are a crypto mining optimization AI. Given these mining metrics:
- Hashrate: ${hashrate.toFixed(2)} H/s
- Temperature: ${temperature.toFixed(1)}°C
- Current earnings: ${earnings.toFixed(8)} ${coin}
- Coin: ${coin}

Provide concise mining optimization advice in this JSON format only:
{
  "advice": "brief optimization recommendation",
  "optimalPool": "best pool suggestion",
  "suggestedHashrate": "recommended hashrate target",
  "thermalWarning": "thermal status advice",
  "profitability": "profitability assessment"
}`;

  try {
    const response = await fetch(`${CONFIG.DASHSCOPE_API_HOST}/api/v1/services/aigc/text-generation/generation`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: CONFIG.DEFAULT_MODEL,
        input: {
          messages: [
            { role: 'system', content: 'You are a crypto mining optimization assistant. Always respond with valid JSON only.' },
            { role: 'user', content: prompt },
          ],
        },
        parameters: {
          result_format: 'message',
          temperature: 0.7,
          max_tokens: 500,
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('DashScope API error:', response.status, errText);
      return {
        advice: `API error (${response.status}). Check your API key.`,
        optimalPool: '--',
        suggestedHashrate: '--',
        thermalWarning: temperature > 75 ? '⚠️ High temp' : '✅ Normal',
        profitability: '--',
      };
    }

    const data = await response.json();
    const text = data?.output?.choices?.[0]?.message?.content || '';

    // Try to parse JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[0]);
      } catch {
        // Fall through to raw text
      }
    }

    // If no JSON, wrap the raw text
    return {
      advice: text || 'No recommendation available.',
      optimalPool: '--',
      suggestedHashrate: '--',
      thermalWarning: temperature > 75 ? '⚠️ High temp' : '✅ Normal',
      profitability: '--',
    };
  } catch (error: any) {
    console.error('DashScope fetch failed:', error);
    return {
      advice: `Network error: ${error.message}`,
      optimalPool: '--',
      suggestedHashrate: '--',
      thermalWarning: temperature > 75 ? '⚠️ High temp' : '✅ Normal',
      profitability: '--',
    };
  }
}
