// Build readiness checker
const fs = require('fs');
const path = require('path');

console.log('🔍 Checking IrwCrypto AI Build Readiness...\n');

let allGood = true;

// Check 1: Assets
console.log('📦 Checking Assets...');
const assetsPath = path.join(__dirname, 'assets');
const requiredAssets = ['icon.png', 'favicon.png'];

requiredAssets.forEach(asset => {
  const assetPath = path.join(assetsPath, asset);
  if (fs.existsSync(assetPath)) {
    console.log(`   ✅ ${asset} - Found`);
  } else {
    console.log(`   ❌ ${asset} - MISSING!`);
    allGood = false;
  }
});

// Check 2: Environment variables
console.log('\n🔐 Checking Environment Variables...');
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const hasApiKey = envContent.includes('EXPO_PUBLIC_DASHSCOPE_API_KEY');
  const hasHost = envContent.includes('EXPO_PUBLIC_DASHSCOPE_API_HOST');
  
  if (hasApiKey && hasHost) {
    console.log('   ✅ .env file configured');
  } else {
    console.log('   ⚠️  .env file missing some variables');
  }
} else {
  console.log('   ❌ .env file not found');
  allGood = false;
}

// Check 3: Dependencies
console.log('\n📚 Checking Dependencies...');
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (fs.existsSync(nodeModulesPath)) {
  console.log('   ✅ node_modules installed');
} else {
  console.log('   ❌ node_modules not found - Run: npm install');
  allGood = false;
}

// Check 4: Configuration files
console.log('\n⚙️  Checking Configuration Files...');
const configFiles = [
  'package.json',
  'app.json',
  'tsconfig.json',
  'metro.config.js',
  'tailwind.config.js',
  'eas.json'
];

configFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`   ✅ ${file}`);
  } else {
    console.log(`   ❌ ${file} - MISSING!`);
    allGood = false;
  }
});

// Check 5: App files
console.log('\n📱 Checking App Files...');
const appFiles = [
  'app/_layout.tsx',
  'app/index.tsx',
  'app/config.ts'
];

appFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`   ✅ ${file}`);
  } else {
    console.log(`   ❌ ${file} - MISSING!`);
    allGood = false;
  }
});

// Final verdict
console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('✅ BUILD READY!');
  console.log('\nNext steps:');
  console.log('1. Make sure assets (icon.png, favicon.png) are added');
  console.log('2. Run: npm start (for testing)');
  console.log('3. Run: npm run build (for APK)');
} else {
  console.log('❌ NOT READY - Fix issues above first');
  console.log('\nCommon fixes:');
  console.log('- Run: npm install');
  console.log('- Run: node generate-assets.js');
  console.log('- Add icon.png and favicon.png to assets/');
}
console.log('='.repeat(50) + '\n');
