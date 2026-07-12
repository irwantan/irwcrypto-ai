import { View, Text, TextInput, Pressable, ScrollView, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { getApiKey, setApiKey } from './dashscope';
import { CONFIG } from './config';

export default function SettingsScreen() {
  const router = useRouter();
  const [apiKey, setApiKeyInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    (async () => {
      const stored = await getApiKey();
      setApiKeyInput(stored);
      setLoading(false);
    })();
  }, []);

  const handleSave = async () => {
    try {
      await setApiKey(apiKey.trim());
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
      Alert.alert('Saved', 'DashScope API key has been saved securely.');
    } catch (e) {
      Alert.alert('Error', 'Failed to save API key.');
    }
  };

  const handleClear = async () => {
    Alert.alert(
      'Clear API Key',
      'Are you sure you want to remove your API key?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: async () => {
            await setApiKey('');
            setApiKeyInput('');
            Alert.alert('Cleared', 'API key removed.');
          },
        },
      ]
    );
  };

  if (loading) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <Text className="text-gray-600">Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        {/* Header */}
        <Text className="text-3xl font-bold text-gray-900 mb-2">⚙️ Settings</Text>
        <Text className="text-gray-600 mb-6">Configure your mining optimization</Text>

        {/* API Key Section */}
        <View className="bg-purple-50 rounded-lg p-6 mb-6 border border-purple-200">
          <Text className="text-lg font-semibold text-gray-900 mb-2">🤖 DashScope API Key</Text>
          <Text className="text-gray-600 text-sm mb-4">
            Enter your Alibaba Cloud DashScope API key to enable AI-powered mining recommendations.
            Your key is stored securely on this device.
          </Text>

          <TextInput
            className="bg-white border border-gray-300 rounded-lg p-3 text-sm font-mono mb-4"
            value={apiKey}
            onChangeText={setApiKeyInput}
            placeholder="sk-xxxxxxxxxxxxxxxxxxxx"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={apiKey.length > 10}
          />

          <View className="flex-row gap-3">
            <Pressable
              onPress={handleSave}
              className="bg-purple-600 rounded-lg px-4 py-3 flex-1 active:opacity-80"
            >
              <Text className="text-white text-center font-semibold">
                {saved ? '✅ Saved!' : 'Save Key'}
              </Text>
            </Pressable>

            <Pressable
              onPress={handleClear}
              className="bg-gray-300 rounded-lg px-4 py-3 flex-1 active:opacity-80"
            >
              <Text className="text-gray-700 text-center font-semibold">Clear</Text>
            </Pressable>
          </View>
        </View>

        {/* API Info */}
        <View className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
          <Text className="text-lg font-semibold text-gray-900 mb-3">API Configuration</Text>
          <View className="mb-2">
            <Text className="text-gray-500 text-xs">Host</Text>
            <Text className="text-gray-800 text-sm font-mono">{CONFIG.DASHSCOPE_API_HOST}</Text>
          </View>
          <View className="mb-2">
            <Text className="text-gray-500 text-xs">Model</Text>
            <Text className="text-gray-800 text-sm font-mono">{CONFIG.DEFAULT_MODEL}</Text>
          </View>
          <View>
            <Text className="text-gray-500 text-xs">Endpoint</Text>
            <Text className="text-gray-800 text-sm font-mono">{CONFIG.DASHSCOPE_API_ENDPOINT}</Text>
          </View>
        </View>

        {/* How to get API key */}
        <View className="bg-blue-50 rounded-lg p-6 mb-6 border border-blue-200">
          <Text className="text-lg font-semibold text-gray-900 mb-3">How to Get a DashScope API Key</Text>
          <Text className="text-gray-700 text-sm leading-6">
            1. Go to https://dashscope.console.aliyun.com{'\n'}
            2. Sign in with your Alibaba Cloud account{'\n'}
            3. Navigate to API-KEY Management{'\n'}
            4. Create a new API key{'\n'}
            5. Copy and paste it above{'\n'}{'\n'}
            The Qwen model provides intelligent mining optimization recommendations based on your current mining metrics.
          </Text>
        </View>

        {/* Back */}
        <Pressable
          onPress={() => router.back()}
          className="bg-blue-600 rounded-lg p-4 active:opacity-80"
        >
          <Text className="text-white text-lg font-semibold text-center">
            ← Back to Dashboard
          </Text>
        </Pressable>

        {/* Footer */}
        <View className="mt-8 pt-6 border-t border-gray-200">
          <Text className="text-center text-gray-600 text-sm">IrwCrypto AI v1.0.0</Text>
          <Text className="text-center text-gray-500 text-xs mt-1">by irwan</Text>
        </View>
      </View>
    </ScrollView>
  );
}
