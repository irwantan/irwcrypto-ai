// Environment configuration — no hardcoded secrets
// Users configure their own API key via the Settings screen
// Stored securely in expo-secure-store

export const CONFIG = {
  DASHSCOPE_API_KEY: "",  // User must set their own key via Settings
  DASHSCOPE_API_HOST: "https://dashscope.aliyuncs.com",
  DASHSCOPE_API_ENDPOINT: "https://dashscope.aliyuncs.com/api/v1",
  DEFAULT_MODEL: "qwen-plus",
};
