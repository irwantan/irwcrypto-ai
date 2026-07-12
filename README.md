# IrwCrypto AI 🤖⛏️

Advanced cryptocurrency mining monitoring & optimization powered by DashScope Qwen AI.

## Features

- 📊 **Real-time mining dashboard** — hashrate, temperature, earnings
- 🤖 **AI-powered recommendations** — DashScope Qwen analyzes your metrics and suggests optimizations
- 🌡️ **Thermal monitoring** — color-coded temperature alerts (green/orange/red)
- ⚙️ **Secure settings** — API key stored in device secure storage
- 🎬 **Animated splash screen** — polished startup experience

## Tech Stack

- React Native 0.76.5 via Expo SDK 52
- TypeScript 5.3
- Expo Router 4.0
- NativeWind 4.1 (TailwindCSS)
- React Native Reanimated 3.16
- Expo SecureStore (API key storage)
- DashScope Qwen AI API (Alibaba Cloud)

## Quick Start

```bash
npm install
npm start           # Development server
npm run android      # Run on Android device/emulator
npm run prebuild     # Generate Android native project
npm run build:android # Build release APK
```

## Setting Up DashScope AI

1. Go to https://dashscope.console.aliyun.com
2. Sign in with your Alibaba Cloud account
3. Navigate to **API-KEY Management**
4. Create a new API key
5. Open the app → **Settings** → paste your key

Your API key is stored securely on the device using Expo SecureStore.

## Building APK

### Local Build
```bash
npm run prebuild
cd android && ./gradlew assembleRelease
```

### GitHub Actions (Auto)
Push to `main` branch — the workflow automatically builds and releases APK.

### EAS Build
```bash
npm run build        # Production build via EAS
npm run build:preview # Preview build
```

## Project Structure

```
app/
  _layout.tsx          — Root layout + splash screen
  index.tsx            — Mining dashboard (main screen)
  settings.tsx         — API key configuration
  config.ts            — Environment config
  dashscope.ts         — DashScope AI API client
  components/
    AnimatedSplash.tsx — Animated splash screen
android/               — Native Android project (auto-generated)
assets/                — App icons
```

## API Integration

The app calls DashScope's text generation API (`qwen-plus` model) with your mining metrics and receives structured JSON recommendations including:
- Optimization advice
- Optimal pool suggestion
- Target hashrate
- Thermal status warning
- Profitability assessment

Recommendations auto-refresh every 30 seconds while mining is active.

## Configuration

| Variable | Description |
|----------|-------------|
| `EXPO_PUBLIC_DASHSCOPE_API_KEY` | DashScope API key (or set via Settings screen) |
| `EXPO_PUBLIC_DASHSCOPE_API_HOST` | DashScope API host (default: `dashscope.aliyuncs.com`) |

---

**by irwan** — irwan.bintangnetwork@gmail.com
