# IrwCrypto AI - Advanced Mining Optimization

Aplikasi mobile untuk optimasi mining cryptocurrency menggunakan DashScope Qwen AI.

## 🚀 Setup Development

### Prerequisites
- Node.js 18+ dan npm/yarn
- Expo CLI
- Android Studio (untuk emulator Android)
- EAS CLI (untuk build APK)

### Install Dependencies

```bash
npm install
```

atau

```bash
yarn install
```

### Setup Environment Variables

File `.env` sudah tersedia dengan konfigurasi:
- EXPO_PUBLIC_DASHSCOPE_API_KEY
- EXPO_PUBLIC_DASHSCOPE_API_HOST  
- EXPO_PUBLIC_DASHSCOPE_API_ENDPOINT

### Setup Assets

Tambahkan file-file berikut ke folder `assets/`:
- `icon.png` - Icon aplikasi (1024x1024 px)
- `splash.png` - Splash screen (200px width)
- `favicon.png` - Web favicon (48x48 px)

Atau gunakan placeholder untuk testing.

## 📱 Menjalankan Aplikasi

### Development Mode

```bash
npm start
```

atau

```bash
expo start
```

Kemudian:
- Tekan `a` untuk membuka di Android emulator
- Scan QR code dengan Expo Go app di phone Anda

### Preview Build

```bash
npm run android
```

## 📦 Build APK

### Persiapan Build

1. Install EAS CLI (jika belum):
```bash
npm install -g eas-cli
```

2. Login ke Expo account:
```bash
eas login
```

3. Configure project:
```bash
eas build:configure
```

### Build APK Production

```bash
npm run build
```

atau

```bash
eas build --platform android --profile production
```

### Build APK Preview (untuk testing)

```bash
eas build --platform android --profile preview
```

APK akan tersedia di Expo dashboard setelah build selesai (~10-15 menit).

### Local Build (tanpa EAS)

```bash
npm run prebuild
npx react-native run-android --mode=release
```

APK akan tersedia di: `android/app/build/outputs/apk/release/`

## 🛠️ Troubleshooting

### Missing Assets
Jika error terkait assets (icon.png, splash.png), buat placeholder atau download dari sumber gratis.

### Metro Bundler Issues
```bash
npx expo start --clear
```

### Build Issues
```bash
npx expo prebuild --clean
```

## 📄 Lisensi

Created by Irwan (irwan.bintangnetwork@gmail.com)

## 🔑 Features

- ✅ Real-time mining monitoring
- ✅ Hashrate tracking
- ✅ Temperature monitoring
- ✅ Earnings calculator
- ✅ DashScope Qwen AI integration
- ✅ Modern UI dengan TailwindCSS (NativeWind)

## 🏗️ Tech Stack

- React Native
- Expo Router
- TypeScript
- NativeWind (TailwindCSS)
- DashScope Qwen AI API

