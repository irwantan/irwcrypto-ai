# IrwCrypto AI - Setup & Deployment Guide

## Overview

**IrwCrypto AI** adalah aplikasi mobile mining cryptocurrency dengan integrasi AI DashScope Qwen untuk optimasi hasil mining pada perangkat mid-entry.

**Fitur Utama:**
- Dashboard real-time dengan status mining (hashrate, temperature, earnings)
- Settings untuk konfigurasi wallet, AI, thermal protection
- Statistics screen untuk analytics dan tracking
- Loading screen dengan animasi dan credit
- AI-powered mining optimization menggunakan DashScope Qwen
- Mock mining service (siap untuk integrasi native C++ module)

## Tech Stack

- **Frontend:** React Native + Expo 54
- **Language:** TypeScript
- **Styling:** NativeWind (Tailwind CSS)
- **State Management:** Context API
- **AI:** DashScope Qwen (Alibaba Cloud)
- **Build:** Expo + EAS Build

## Prerequisites

1. **Node.js** v18+ dan npm/pnpm
2. **Expo CLI:** `npm install -g expo-cli`
3. **EAS CLI:** `npm install -g eas-cli` (untuk build APK)
4. **DashScope API Key** (sudah tersedia di `DASHSCOPE_SETUP.md`)

## Installation

### 1. Clone Repository
```bash
git clone https://github.com/irwantan/irwcrypto-ai.git
cd irwcrypto-ai
```

### 2. Install Dependencies
```bash
npm install
# atau
pnpm install
```

### 3. Setup Environment Variables


```

### 4. Setup GitHub Secrets (untuk CI/CD)

Go to: https://github.com/irwantan/irwcrypto-ai/settings/secrets/actions

Tambahkan secrets:
- `DASHSCOPE_API_KEY`
- `DASHSCOPE_API_HOST`
- `DASHSCOPE_API_ENDPOINT`

## Development

### Start Development Server
```bash
npm run dev
```

Ini akan start Metro bundler dan Expo server. Akses di:
- **Web:** http://localhost:8081
- **Mobile:** Scan QR code dengan Expo Go app

### Build for Web
```bash
npm run build
```

### Test
```bash
npm test
```

## Building APK

### Option 1: Using EAS Build (Recommended)
```bash
eas build --platform android
```

### Option 2: Local Build
```bash
npx expo prebuild --clean
cd android
./gradlew assembleRelease
```

APK akan tersimpan di: `android/app/build/outputs/apk/release/app-release.apk`

## Project Structure

```
irwcrypto-ai/
├── app/                          # Expo Router pages
│   ├── (tabs)/
│   │   ├── index.tsx            # Home/Dashboard screen
│   │   ├── settings.tsx         # Settings screen
│   │   └── statistics.tsx       # Statistics screen
│   ├── loading.tsx              # Loading screen dengan animasi
│   └── _layout.tsx              # Root layout
├── lib/
│   ├── context/
│   │   └── mining-context.tsx   # Mining state management
│   ├── services/
│   │   ├── ai-service.ts        # DashScope Qwen integration
│   │   └── mining-service.ts    # Mining engine (mock)
│   ├── types/
│   │   └── mining.ts            # Type definitions
│   └── theme-provider.tsx       # Theme context
├── components/                   # Reusable components
├── assets/                       # Images, fonts, etc.
├── app.config.ts                # Expo configuration
├── tailwind.config.js           # Tailwind configuration
└── DASHSCOPE_SETUP.md           # DashScope integration docs
```

## DashScope AI Integration

### Available Functions

1. **Pool Analysis**
   - Analyze mining pool fees, stability, profitability
   - Recommend best pool based on current conditions

2. **Optimal Mining Time**
   - Recommend when to mine (based on electricity cost, device temperature)
   - Suggest pause/resume times

3. **Thermal Management**
   - Monitor CPU/Battery temperature
   - Suggest thread count reduction if overheating
   - Recommend mining pause if critical temperature

### Example Usage

```typescript
import { AIService } from '@/lib/services/ai-service';

const aiService = new AIService(process.env.DASHSCOPE_API_KEY);

// Analyze pool profitability
const poolAnalysis = await aiService.analyzePoolProfitability({
  poolName: 'VerusHash Pool',
  currentFee: 1.5,
  hashrate: 100,
});

// Get mining recommendations
const recommendations = await aiService.getMiningRecommendations({
  currentTemperature: 45,
  batteryLevel: 80,
  cpuUsage: 85,
});
```

## Troubleshooting

### Issue: Metro bundler fails to start
```bash
# Clear cache
npm run dev -- --clear
```

### Issue: APK build fails
```bash
# Clean build
npx expo prebuild --clean
```

### Issue: DashScope API errors
- Verify API key is correct
- Check API endpoint URL
- Ensure internet connection
- Check rate limits on DashScope dashboard

## Performance Optimization

### For Mid-Entry Devices

1. **Reduce Thread Count:** Start with 2-4 threads
2. **Monitor Temperature:** Keep CPU below 60°C
3. **Battery Management:** Mine only when charging or battery > 50%
4. **Memory Usage:** App uses ~150MB RAM (optimized)

### Mining Algorithm

Currently using mock implementation. For production:
- Integrate native C++ module for VerusHash
- Use JNI for Android integration
- Implement thread pool management
- Add thermal throttling

## Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit pull request

## License

MIT License - See LICENSE file for details

## Support

For issues, questions, or suggestions:
- Email: irwan.bintangnetwork@gmail.com
- GitHub Issues: https://github.com/irwantan/irwcrypto-ai/issues

## Credits

**Developer:** Irwan Tan  
**Email:** irwan.bintangnetwork@gmail.com  
**AI Integration:** DashScope Qwen (Alibaba Cloud)

---

**Last Updated:** June 2026  
**Version:** 1.0.0
