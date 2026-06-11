# 🚀 IrwCrypto AI

**Advanced Mining Optimization with DashScope Qwen AI**

[![React Native](https://img.shields.io/badge/React%20Native-0.76.5-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-52.0-purple.svg)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

<p align="center">
  <img src="https://img.shields.io/badge/Status-Production%20Ready-success.svg" alt="Status">
  <img src="https://img.shields.io/badge/Build-APK%20Ready-success.svg" alt="Build">
  <img src="https://img.shields.io/badge/Animated%20Splash-✓-success.svg" alt="Splash">
  <img src="https://img.shields.io/badge/Icon%20Generator-✓-success.svg" alt="Icon">
</p>

---

## 📱 Features

### Core Features
- ✅ **Real-time Mining Monitoring** - Live hashrate, temperature, earnings tracking
- ✅ **AI Optimization** - DashScope Qwen AI for mining optimization
- ✅ **Start/Stop Controls** - Easy mining management
- ✅ **Temperature Monitoring** - Color-coded alerts (green/orange/red)
- ✅ **Earnings Calculator** - BTC earnings tracking

### Visual Features
- ✨ **Animated Splash Screen** - 3.5s professional animation with:
  - Logo scale & rotation effects
  - Shimmer sweep animation
  - Circuit ring rotation
  - Gradient background
  - Proper branding
- 🎨 **Modern UI** - TailwindCSS (NativeWind) for sleek design
- 🎯 **Professional Icon** - Gradient design with Bitcoin + AI theme

---

## 🎬 Demo

### Animated Splash Screen
- Duration: 3.5 seconds
- Logo spring animation
- Infinite ring rotation
- Shimmer sweep effect
- Fade in/out transitions

### App Interface
- Mining dashboard with live metrics
- Temperature color indicators
- One-tap start/stop controls
- Clean, modern design

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo Go app (for testing)
- EAS CLI (for building)

### Installation

```bash
# Clone or navigate to project
cd d:\IRWAN\irwcrypto-ai

# Dependencies already installed!
# If needed: npm install

# Start development server
npm start

# Scan QR code with Expo Go app
```

### Generate Icons (First Time)

1. **Open icon generator:**
   ```bash
   # File: generate-icon.html
   # Double-click to open in browser
   ```

2. **Download icons:**
   - Click "📦 Download Both"
   - Or download individually:
     - icon.png (1024x1024)
     - favicon.png (512x512)

3. **Copy to assets:**
   ```bash
   Copy to: d:\IRWAN\irwcrypto-ai\assets\
   Replace existing files
   ```

4. **Test:**
   ```bash
   npm start
   # See animated splash screen!
   ```

---

## 📦 Build APK

### Method 1: EAS Build (Recommended)

```bash
# Install EAS CLI (one time)
npm install -g eas-cli

# Login to Expo
eas login

# Configure project (one time)
eas build:configure

# Build production APK
npm run build

# Or build preview (for testing)
npm run build:preview

# Download APK from expo.dev after ~15 minutes
```

### Method 2: Local Build

```bash
# Generate native folders
npm run prebuild

# Build with Gradle
cd android
gradlew.bat assembleRelease  # Windows
./gradlew assembleRelease     # Mac/Linux

# APK location:
# android/app/build/outputs/apk/release/app-release.apk
```

---

## 🛠️ Tech Stack

### Frontend
- **React Native** 0.76.5 - Mobile framework
- **Expo** 52.0 - Development platform
- **TypeScript** 5.3 - Type safety
- **Expo Router** 4.0 - Navigation

### Styling
- **NativeWind** 4.1 - TailwindCSS for React Native
- **TailwindCSS** 3.4 - Utility-first CSS

### Animation
- **Reanimated** 3.16 - Smooth animations
- **React Native SVG** 15.15 - Vector graphics

### Backend
- **DashScope Qwen AI** - AI optimization
- **Environment Variables** - Secure config

---

## 📂 Project Structure

```
irwcrypto-ai/
├── app/
│   ├── components/
│   │   └── AnimatedSplash.tsx    # Animated splash screen
│   ├── _layout.tsx                # Root layout
│   ├── index.tsx                  # Mining dashboard
│   └── config.ts                  # Environment config
├── assets/
│   ├── icon.png                   # App icon (1024x1024)
│   └── favicon.png                # Web favicon (512x512)
├── .env                           # Environment variables
├── app.json                       # Expo configuration
├── eas.json                       # Build configuration
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
├── metro.config.js                # Metro bundler
├── tailwind.config.js             # TailwindCSS config
├── babel.config.js                # Babel config
├── generate-icon.html             # Icon generator tool
└── [Documentation files]
```

---

## 📚 Documentation

### Quick References
- **START_HERE.txt** - Quick start (3 steps)
- **GENERATE_ICONS_NOW.txt** - Icon generation guide
- **FINAL_COMPLETE_STATUS.md** - Complete status

### Detailed Guides
- **ICON_GENERATOR_GUIDE.md** - Icon & splash guide
- **BUILD_GUIDE.md** - Complete build instructions
- **QUICK_START.md** - Development guide
- **TODO.md** - Action checklist

### Utilities
- **check-build-ready.js** - Build readiness checker
- **generate-assets.js** - Assets helper

---

## ⚙️ Configuration

### Environment Variables

File: `.env`
```env
EXPO_PUBLIC_DASHSCOPE_API_KEY=your-key-here
EXPO_PUBLIC_DASHSCOPE_API_HOST=your-host-here
EXPO_PUBLIC_DASHSCOPE_API_ENDPOINT=your-endpoint-here
```

### Customization

**Splash Duration:**
```typescript
// app/components/AnimatedSplash.tsx
setTimeout(() => onFinish(); }, 3500);  // milliseconds
```

**App Colors:**
```typescript
// Edit gradient colors in AnimatedSplash.tsx
backgroundColor: '#1E40AF'  // Change this
```

**Icon Design:**
```html
<!-- Edit generate-icon.html -->
bgGradient.addColorStop(0, '#1e40af');  // Colors
```

---

## 🧪 Testing

### Development Testing
```bash
npm start
# Scan QR with Expo Go app
```

### Build Readiness Check
```bash
node check-build-ready.js
```

Expected output:
```
✅ BUILD READY!
✅ icon.png - Found
✅ favicon.png - Found
✅ .env file configured
✅ node_modules installed
✅ All config files present
```

---

## 🔧 Troubleshooting

### Metro Bundler Issues
```bash
npx expo start --clear
```

### Dependencies Issues
```bash
rm -rf node_modules
npm install
```

### Build Issues
```bash
npx expo prebuild --clean
```

### Icon Missing
```bash
# Open generate-icon.html
# Download icons
# Copy to assets/
```

---

## 📊 Performance

- **Splash Duration**: 3.5 seconds
- **App Size**: ~50-60 MB (APK)
- **Min Android**: 6.0 (API 23)
- **Target Android**: 14 (API 34)

---

## 🎯 Roadmap

- [x] Core mining features
- [x] DashScope AI integration
- [x] Animated splash screen
- [x] Professional icon generator
- [x] Build configuration
- [ ] Pool switching
- [ ] Historical charts
- [ ] Push notifications
- [ ] Multi-coin support
- [ ] Cloud sync

---

## 📱 App Info

- **Package**: com.irwan.irwcryptoai
- **Version**: 1.0.0
- **Version Code**: 1
- **Min SDK**: 23 (Android 6.0)
- **Target SDK**: 34 (Android 14)

---

## 🤝 Contributing

This is a personal project by Irwan. For suggestions or issues, contact via email.

---

## 📄 License

MIT License - feel free to use and modify.

---

## 📞 Contact & Support

**Developer:** Irwan  
**Email:** irwan.bintangnetwork@gmail.com

For support:
1. Check documentation files
2. Run `node check-build-ready.js`
3. Read `BUILD_GUIDE.md`
4. Contact via email

---

## 🎉 Acknowledgments

- **Expo Team** - Amazing development platform
- **React Native** - Cross-platform framework
- **DashScope** - AI optimization API
- **TailwindCSS** - Utility-first CSS
- **Community** - Open-source packages

---

## ⭐ Show Your Support

If you like this project, give it a star! ⭐

---

<p align="center">
  <strong>IrwCrypto AI</strong><br>
  Advanced Mining Optimization<br>
  <br>
  Made with ❤️ by Irwan<br>
  <a href="mailto:irwan.bintangnetwork@gmail.com">irwan.bintangnetwork@gmail.com</a>
</p>

<p align="center">
  <sub>© 2026 Irwan. All rights reserved.</sub>
</p>
