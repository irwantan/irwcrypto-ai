import { View, Text, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'expo-router';
import { CONFIG } from './config';
import { getMiningRecommendation, getApiKey, MiningRecommendation } from './dashscope';

export default function HomeScreen() {
  const router = useRouter();
  const [miningActive, setMiningActive] = useState(false);
  const [hashrate, setHashrate] = useState(0);
  const [temperature, setTemperature] = useState(45);
  const [earnings, setEarnings] = useState(0);
  const [coin, setCoin] = useState('BTC');
  const [aiLoading, setAiLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<MiningRecommendation | null>(null);
  const [hasApiKey, setHasApiKey] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if API key exists
  useEffect(() => {
    (async () => {
      const key = await getApiKey();
      setHasApiKey(key.length > 0);
    })();
  }, []);

  // Simulate mining data updates
  useEffect(() => {
    if (miningActive) {
      const interval = setInterval(() => {
        setHashrate(prev => prev + Math.random() * 10);
        setTemperature(prev => Math.min(prev + Math.random() * 2, 85));
        setEarnings(prev => prev + Math.random() * 0.00001);
        setError(null);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setHashrate(0);
      setTemperature(45);
      setEarnings(0);
    }
  }, [miningActive]);

  // Fetch AI recommendation
  const fetchRecommendation = useCallback(async () => {
    setAiLoading(true);
    setError(null);
    try {
      const rec = await getMiningRecommendation(hashrate, temperature, earnings, coin);
      setRecommendation(rec);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setAiLoading(false);
    }
  }, [hashrate, temperature, earnings, coin]);

  // Auto-refresh recommendation every 30s while mining
  useEffect(() => {
    if (!miningActive || !hasApiKey) return;
    fetchRecommendation();
    const interval = setInterval(fetchRecommendation, 30000);
    return () => clearInterval(interval);
  }, [miningActive, hasApiKey, fetchRecommendation]);

  const tempColor = temperature > 80 ? 'text-red-600' : temperature > 60 ? 'text-orange-600' : 'text-green-600';

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        {/* Header */}
        <Text className="text-3xl font-bold text-gray-900 mb-2">IrwCrypto AI</Text>
        <Text className="text-gray-600 mb-6">Advanced Mining Optimization</Text>

        {/* Error banner */}
        {error && (
          <View className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <Text className="text-red-700 text-sm">{error}</Text>
          </View>
        )}

        {/* Status Card */}
        <View className="bg-blue-50 rounded-lg p-6 mb-6 border border-blue-200">
          <Text className="text-lg font-semibold text-gray-900 mb-4">Mining Status</Text>

          <View className="mb-4">
            <Text className="text-gray-600 text-sm">Status</Text>
            <Text className={`text-2xl font-bold ${miningActive ? 'text-green-600' : 'text-gray-600'}`}>
              {miningActive ? '🔄 Mining Active' : '⏸️ Idle'}
            </Text>
          </View>

          <View className="mb-4">
            <Text className="text-gray-600 text-sm">Hashrate</Text>
            <Text className="text-xl font-semibold text-gray-900">{hashrate.toFixed(2)} H/s</Text>
          </View>

          <View className="mb-4">
            <Text className="text-gray-600 text-sm">Temperature</Text>
            <Text className={`text-xl font-semibold ${tempColor}`}>
              {temperature.toFixed(1)}°C
            </Text>
          </View>

          <View>
            <Text className="text-gray-600 text-sm">Earnings</Text>
            <Text className="text-xl font-semibold text-gray-900">{earnings.toFixed(8)} {coin}</Text>
          </View>
        </View>

        {/* Mining Control */}
        <Pressable
          onPress={() => setMiningActive(!miningActive)}
          className={`${miningActive ? 'bg-red-600' : 'bg-green-600'} rounded-lg p-4 mb-6 active:opacity-80`}
        >
          <Text className="text-white text-lg font-semibold text-center">
            {miningActive ? '⏹️ STOP MINING' : '▶️ START MINING'}
          </Text>
        </Pressable>

        {/* AI Recommendation */}
        <View className="bg-purple-50 rounded-lg p-6 mb-6 border border-purple-200">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-lg font-semibold text-gray-900">🤖 AI Recommendation</Text>
            {aiLoading && <ActivityIndicator size="small" color="#7c3aed" />}
          </View>

          {!hasApiKey ? (
            <View>
              <Text className="text-gray-700 text-sm mb-4">
                Set your DashScope API key in Settings to enable AI-powered mining optimization.
              </Text>
              <Pressable
                onPress={() => router.push('/settings')}
                className="bg-purple-600 rounded-lg p-3 active:opacity-80"
              >
                <Text className="text-white text-center font-semibold">⚙️ Go to Settings</Text>
              </Pressable>
            </View>
          ) : recommendation ? (
            <View>
              <View className="bg-white rounded-lg p-4 mb-3 border border-purple-100">
                <Text className="text-gray-600 text-xs mb-1">💡 Advice</Text>
                <Text className="text-gray-900 text-sm">{recommendation.advice}</Text>
              </View>

              <View className="bg-white rounded-lg p-3 mb-2 border border-purple-100">
                <Text className="text-gray-600 text-xs">🏆 Optimal Pool</Text>
                <Text className="text-gray-800 text-sm">{recommendation.optimalPool}</Text>
              </View>

              <View className="bg-white rounded-lg p-3 mb-2 border border-purple-100">
                <Text className="text-gray-600 text-xs">⚡ Target Hashrate</Text>
                <Text className="text-gray-800 text-sm">{recommendation.suggestedHashrate}</Text>
              </View>

              <View className="bg-white rounded-lg p-3 mb-2 border border-purple-100">
                <Text className="text-gray-600 text-xs">🌡️ Thermal Status</Text>
                <Text className="text-gray-800 text-sm">{recommendation.thermalWarning}</Text>
              </View>

              <View className="bg-white rounded-lg p-3 border border-purple-100">
                <Text className="text-gray-600 text-xs">💰 Profitability</Text>
                <Text className="text-gray-800 text-sm">{recommendation.profitability}</Text>
              </View>

              <Pressable
                onPress={fetchRecommendation}
                className="bg-purple-100 rounded-lg p-3 mt-3 active:opacity-80"
              >
                <Text className="text-purple-700 text-center text-sm font-semibold">
                  🔄 Refresh Recommendation
                </Text>
              </Pressable>
            </View>
          ) : (
            <Text className="text-gray-500 text-sm">Start mining to get AI recommendations.</Text>
          )}
        </View>

        {/* Settings Link */}
        <Pressable
          onPress={() => router.push('/settings')}
          className="bg-gray-100 rounded-lg p-4 mb-6 active:opacity-80 border border-gray-200"
        >
          <Text className="text-gray-700 text-center font-semibold">⚙️ Settings</Text>
        </Pressable>

        {/* Footer */}
        <View className="mt-8 pt-6 border-t border-gray-200">
          <Text className="text-center text-gray-600 text-sm">IrwCrypto AI v1.0.0 — by irwan</Text>
        </View>
      </View>
    </ScrollView>
  );
}
