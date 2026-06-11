// Environment configuration
// In React Native/Expo, we cannot use process.env directly
// Instead, we use expo-constants or hardcode for production

export const CONFIG = {
  DASHSCOPE_API_KEY: process.env.EXPO_PUBLIC_DASHSCOPE_API_KEY || "sk-ws-H.ILXEDR.eDbZ.MEYCIQCOa-6ST7faHeGZddFrDfCkBoN_mi7HPrmpI60qqjuJKQIhAN-odwbsxdOocFazq3FXbfyx2QoM8BkM6rpH0zZVwGdA",
  DASHSCOPE_API_HOST: process.env.EXPO_PUBLIC_DASHSCOPE_API_HOST || "https://ws-4ljejcvn8v9wvmny.ap-southeast-1.maas.aliyuncs.com",
  DASHSCOPE_API_ENDPOINT: process.env.EXPO_PUBLIC_DASHSCOPE_API_ENDPOINT || "https://ws-4ljejcvn8v9wvmny.ap-southeast-1.maas.aliyuncs.com/api/v1"
};
