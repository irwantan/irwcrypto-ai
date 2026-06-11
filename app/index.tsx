import { View, Text, ScrollView, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { CONFIG } from './config';

export default function HomeScreen() {
  const [miningActive, setMiningActive] = useState(false);
  const [hashrate, setHashrate] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    // Simulate mining data
    if (miningActive) {
      const interval = setInterval(() => {
        setHashrate(prev => prev + Math.random() * 10);
        setTemperature(prev => Math.min(prev + Math.random() * 2, 85));
        setEarnings(prev => prev + Math.random() * 0.00001);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [miningActive]);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        {/* Header */}
        <Text className="text-3xl font-bold text-gray-900 mb-2">IrwCrypto AI</Text>
        <Text className="text-gray-600 mb-6">Advanced Mining Optimization</Text>

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
            <Text className={`text-xl font-semibold ${temperature > 80 ? 'text-red-600' : temperature > 60 ? 'text-orange-600' : 'text-green-600'}`}>
              {temperature.toFixed(1)}°C
            </Text>
          </View>

          <View>
            <Text className="text-gray-600 text-sm">Earnings</Text>
            <Text className="text-xl font-semibold text-gray-900">{earnings.toFixed(8)} BTC</Text>
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

        {/* DashScope AI Info */}
        <View className="bg-purple-50 rounded-lg p-6 border border-purple-200">
          <Text className="text-lg font-semibold text-gray-900 mb-3">🤖 DashScope Qwen AI</Text>
          <Text className="text-gray-700 text-sm leading-6 mb-4">
            This app uses DashScope Qwen AI to optimize mining performance by analyzing pool profitability, thermal conditions, and recommending optimal mining times.
          </Text>
          <View className="bg-white rounded p-3 mb-3">
            <Text className="text-xs font-mono text-gray-600">
              API Host:{'\n'}
              {CONFIG.DASHSCOPE_API_HOST.replace('https://', '')}
            </Text>
          </View>
          <Text className="text-xs text-gray-500">
            Configure DashScope API key in Settings for full AI features.
          </Text>
        </View>

        {/* Footer */}
        <View className="mt-8 pt-6 border-t border-gray-200">
          <Text className="text-center text-gray-600 text-sm">
            by irwan
          </Text>
          <Text className="text-center text-gray-500 text-xs mt-1">
            irwan.bintangnetwork@gmail.com
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
