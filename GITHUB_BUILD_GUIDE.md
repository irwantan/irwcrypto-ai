# 🚀 Build APK dengan GitHub Actions (CEPAT & GRATIS!)

## ✅ Keuntungan GitHub Actions:

- ✅ **Gratis** - 2000 menit/bulan untuk private repos
- ✅ **Otomatis** - Push code → Auto build APK
- ✅ **Parallel** - Bisa build banyak sekaligus
- ✅ **Cloud** - Tidak pakai resources PC Anda
- ✅ **History** - Semua APK tersimpan

---

## 📋 Setup (5 Menit!)

### **STEP 1: Get Expo Token**

```bash
# Di terminal
eas whoami

# Jika sudah login, get token:
npx expo login
```

Atau manual:
1. Buka: https://expo.dev/accounts/[username]/settings/access-tokens
2. Click "Create Token"
3. Name: `GITHUB_ACTIONS`
4. Copy token (simpan!)

---

### **STEP 2: Setup GitHub Repository**

#### A. Create Repo (jika belum punya)

```bash
cd d:\IRWAN\irwcrypto-ai

# Initialize git
git init

# Add remote (ganti dengan repo Anda)
git remote add origin https://github.com/[username]/irwcrypto-ai.git

# Add files
git add .

# Commit
git commit -m "Initial commit - IrwCrypto AI with animated splash"

# Push
git push -u origin main
```

Atau kalau belum punya repo:
1. Buka: https://github.com/new
2. Repo name: `irwcrypto-ai`
3. Click "Create repository"
4. Follow instructions

---

#### B. Add Expo Token to GitHub Secrets

1. Buka repo di GitHub
2. Go to: **Settings** → **Secrets and variables** → **Actions**
3. Click: **New repository secret**
4. Name: `EXPO_TOKEN`
5. Value: (paste token dari Step 1)
6. Click: **Add secret**

---

### **STEP 3: Push & Build!**

```bash
# Push code ke GitHub
git add .
git commit -m "Add GitHub Actions workflow"
git push

# GitHub Actions akan otomatis build APK!
```

---

## 📥 Download APK dari GitHub

### **Option 1: Via GitHub UI**

1. Buka repo: `https://github.com/[username]/irwcrypto-ai`
2. Click tab **Actions**
3. Click workflow run terbaru
4. Scroll down ke **Artifacts**
5. Download: `irwcrypto-ai-apk`
6. Extract ZIP → dapat APK

### **Option 2: Via GitHub CLI**

```bash
# Install GitHub CLI dulu
# https://cli.github.com/

# Download latest APK
gh run download
```

---

## 🔄 Build Baru (Auto!)

Setiap kali push ke GitHub:

```bash
git add .
git commit -m "Update app"
git push

# GitHub Actions otomatis build APK baru!
```

---

## 🎯 Manual Trigger

Bisa juga trigger manual tanpa push:

1. Buka repo → **Actions**
2. Click workflow: **Build Android APK**
3. Click: **Run workflow**
4. Select branch: `main`
5. Click: **Run workflow**

---

## ⏱️ Build Time

- **EAS Build**: 10-15 menit
- **GitHub Actions**: 8-12 menit (similar)
- **Advantage**: Bisa build multiple parallel!

---

## 💡 Advanced: Multiple Build Profiles

Edit `.github/workflows/build-apk.yml`:

```yaml
strategy:
  matrix:
    profile: [development, preview, production]

steps:
  - name: Build APK
    run: eas build --platform android --profile ${{ matrix.profile }} --non-interactive
```

Akan build 3 APK sekaligus!

---

## 🐛 Troubleshooting

### Issue: "EXPO_TOKEN not found"
→ Check GitHub Secrets, pastikan nama: `EXPO_TOKEN`

### Issue: "eas command not found"
→ GitHub Actions sudah install otomatis, ignore

### Issue: Build failed
→ Check logs di GitHub Actions tab

---

## 📊 Comparison

| Method | Speed | Cost | Auto | Cloud |
|--------|-------|------|------|-------|
| Local Build | Fast | Free | ❌ | ❌ |
| EAS Build | 10-15min | Free* | ❌ | ✅ |
| GitHub Actions | 8-12min | Free | ✅ | ✅ |

*EAS: 30 builds/month free

---

## 🎊 Quick Start Commands

```bash
# 1. Get Expo token
eas whoami

# 2. Init git (if not yet)
cd d:\IRWAN\irwcrypto-ai
git init
git add .
git commit -m "Initial commit"

# 3. Add remote
git remote add origin https://github.com/[username]/irwcrypto-ai.git

# 4. Push
git push -u origin main

# 5. Add EXPO_TOKEN to GitHub Secrets
# (Manual via GitHub UI)

# 6. Done! APK will build automatically
```

---

## 🔗 Useful Links

- GitHub Actions Docs: https://docs.github.com/actions
- Expo GitHub Action: https://github.com/expo/expo-github-action
- EAS Build: https://docs.expo.dev/build/introduction/

---

## ✅ File Sudah Dibuat:

- `.github/workflows/build-apk.yml` ✓

Tinggal:
1. Push ke GitHub
2. Add EXPO_TOKEN secret
3. Auto build! 🚀

---

**📞 Support: irwan.bintangnetwork@gmail.com**
