# 📱 Panduan Build APK - IrwCrypto AI

## ✅ Checklist Sebelum Build

### 1. Assets (PENTING!)
Pastikan file-file berikut ada di folder `assets/`:
- [ ] `icon.png` (1024x1024 px) - Icon aplikasi
- [ ] `favicon.png` (48x48 px) - Web favicon

**Cara cepat untuk testing:**
- Copy file PNG apa saja ke folder assets
- Rename menjadi `icon.png` dan `favicon.png`
- Untuk production, gunakan design yang proper

### 2. Environment Variables
File `.env` sudah dikonfigurasi dengan DashScope API credentials.

### 3. Dependencies
```bash
npm install
```

---

## 🚀 Metode 1: Build dengan EAS (RECOMMENDED)

### Persiapan EAS

1. **Install EAS CLI:**
```bash
npm install -g eas-cli
```

2. **Login ke Expo:**
```bash
eas login
```
Gunakan akun Expo Anda (buat di expo.dev jika belum punya).

3. **Configure Project:**
```bash
eas build:configure
```
Ini akan update `app.json` dengan project ID.

### Build APK

**Production Build:**
```bash
npm run build
```
atau
```bash
eas build --platform android --profile production
```

**Preview Build (untuk testing cepat):**
```bash
npm run build:preview
```
atau
```bash
eas build --platform android --profile preview
```

### Download APK

Setelah build selesai (~10-15 menit):
1. Buka link yang diberikan di terminal
2. Atau buka https://expo.dev/accounts/[username]/projects/irwcrypto-ai/builds
3. Download APK dari dashboard

---

## 🏗️ Metode 2: Local Build (Tanpa EAS)

### Prerequisites
- Android Studio installed
- Android SDK configured
- Java JDK 17+

### Steps

1. **Prebuild:**
```bash
npm run prebuild
```

2. **Build Release APK:**
```bash
cd android
./gradlew assembleRelease
```

Windows:
```bash
cd android
gradlew.bat assembleRelease
```

3. **Locate APK:**
APK akan tersedia di:
```
android/app/build/outputs/apk/release/app-release.apk
```

### Troubleshooting Local Build

**Error: SDK not found**
```bash
# Set ANDROID_HOME environment variable
# Windows:
setx ANDROID_HOME "C:\Users\YourName\AppData\Local\Android\Sdk"

# Linux/Mac:
export ANDROID_HOME=$HOME/Android/Sdk
```

**Error: Java version**
Pastikan menggunakan JDK 17:
```bash
java -version
```

---

## 📦 Metode 3: Quick Test Build

Untuk testing cepat tanpa build APK:

```bash
npm start
```

Kemudian:
- Scan QR code dengan **Expo Go** app di Android phone
- Atau tekan `a` untuk buka di Android emulator

---

## 🔧 Troubleshooting Umum

### Error: Missing icon.png
```bash
node generate-assets.js
```
Kemudian tambahkan file icon.png dan favicon.png ke folder assets/.

### Error: Metro bundler
```bash
npx expo start --clear
```

### Error: Dependencies
```bash
rm -rf node_modules
npm install
```

### Error: EAS Build gagal
1. Pastikan akun Expo sudah verified
2. Check app.json configuration
3. Pastikan assets lengkap

---

## 📲 Install APK ke Device

### Via USB (ADB)
```bash
adb install path/to/app-release.apk
```

### Via File Manager
1. Copy APK ke phone
2. Buka file manager
3. Tap APK file
4. Allow "Install from unknown sources" jika diminta
5. Install

---

## 🎯 Tips Production

1. **Update Version:**
   - Edit `version` di `app.json`
   - Edit `versionCode` di `app.json` (android section)

2. **Signing:**
   - EAS handle signing automatically
   - Untuk local build, generate keystore:
   ```bash
   keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
   ```

3. **Optimize:**
   - Enable Proguard/R8
   - Remove console.logs
   - Optimize images

---

## 📞 Support

Created by: Irwan  
Email: irwan.bintangnetwork@gmail.com

Build issues? Check:
- https://docs.expo.dev/build/setup/
- https://reactnative.dev/docs/signed-apk-android
