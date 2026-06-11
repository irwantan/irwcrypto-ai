const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

console.log('🎨 IrwCrypto AI - Automatic Icon Generator\n');

function drawIcon(canvas, size) {
    const ctx = canvas.getContext('2d');
    const centerX = size / 2;
    const centerY = size / 2;
    
    // Background gradient
    const bgGradient = ctx.createLinearGradient(0, 0, size, size);
    bgGradient.addColorStop(0, '#1e40af');
    bgGradient.addColorStop(0.5, '#7c3aed');
    bgGradient.addColorStop(1, '#ec4899');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, size, size);
    
    // Outer glow circle
    const glowGradient = ctx.createRadialGradient(centerX, centerY, size * 0.2, centerX, centerY, size * 0.45);
    glowGradient.addColorStop(0, 'rgba(96, 165, 250, 0.3)');
    glowGradient.addColorStop(1, 'rgba(96, 165, 250, 0)');
    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, size * 0.45, 0, Math.PI * 2);
    ctx.fill();
    
    // Circuit ring
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = size * 0.01;
    ctx.setLineDash([size * 0.04, size * 0.02]);
    ctx.beginPath();
    ctx.arc(centerX, centerY, size * 0.38, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Bitcoin symbol with AI twist
    ctx.strokeStyle = 'white';
    ctx.lineWidth = size * 0.04;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Vertical lines
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - size * 0.25);
    ctx.lineTo(centerX, centerY + size * 0.25);
    ctx.stroke();
    
    // Top B curve
    ctx.beginPath();
    ctx.arc(centerX + size * 0.08, centerY - size * 0.08, size * 0.12, Math.PI * 0.5, Math.PI * 1.5, true);
    ctx.stroke();
    
    // Bottom B curve
    ctx.beginPath();
    ctx.arc(centerX + size * 0.08, centerY + size * 0.08, size * 0.12, Math.PI * 0.5, Math.PI * 1.5, true);
    ctx.stroke();
    
    // Middle line
    ctx.beginPath();
    ctx.moveTo(centerX - size * 0.08, centerY);
    ctx.lineTo(centerX + size * 0.2, centerY);
    ctx.stroke();
    
    // AI nodes (corners)
    const nodeSize = size * 0.025;
    const corners = [
        [centerX - size * 0.3, centerY - size * 0.3],
        [centerX + size * 0.3, centerY - size * 0.3],
        [centerX - size * 0.3, centerY + size * 0.3],
        [centerX + size * 0.3, centerY + size * 0.3]
    ];
    
    const nodeColors = ['#60A5FA', '#A78BFA', '#F472B6', '#60A5FA'];
    corners.forEach((corner, i) => {
        // Node glow
        const nodeGlow = ctx.createRadialGradient(corner[0], corner[1], 0, corner[0], corner[1], nodeSize * 3);
        nodeGlow.addColorStop(0, nodeColors[i] + '88');
        nodeGlow.addColorStop(1, nodeColors[i] + '00');
        ctx.fillStyle = nodeGlow;
        ctx.beginPath();
        ctx.arc(corner[0], corner[1], nodeSize * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Node
        ctx.fillStyle = nodeColors[i];
        ctx.beginPath();
        ctx.arc(corner[0], corner[1], nodeSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Node connection lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = size * 0.005;
        ctx.beginPath();
        ctx.moveTo(corner[0], corner[1]);
        ctx.lineTo(centerX, centerY);
        ctx.stroke();
    });
    
    // Center pulse
    const pulseGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, size * 0.05);
    pulseGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
    pulseGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = pulseGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, size * 0.05, 0, Math.PI * 2);
    ctx.fill();
}

// Create assets directory if it doesn't exist
const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

console.log('📦 Generating App Icon (1024x1024)...');
// Generate app icon (1024x1024)
const iconCanvas = createCanvas(1024, 1024);
drawIcon(iconCanvas, 1024);
const iconBuffer = iconCanvas.toBuffer('image/png');
const iconPath = path.join(assetsDir, 'icon.png');
fs.writeFileSync(iconPath, iconBuffer);
console.log('   ✅ icon.png created at:', iconPath);

console.log('\n📦 Generating Favicon (512x512)...');
// Generate favicon (512x512)
const faviconCanvas = createCanvas(512, 512);
drawIcon(faviconCanvas, 512);
const faviconBuffer = faviconCanvas.toBuffer('image/png');
const faviconPath = path.join(assetsDir, 'favicon.png');
fs.writeFileSync(faviconPath, faviconBuffer);
console.log('   ✅ favicon.png created at:', faviconPath);

console.log('\n' + '='.repeat(60));
console.log('✅ ICONS GENERATED SUCCESSFULLY!');
console.log('='.repeat(60));
console.log('\n📂 Location:');
console.log('   - ' + iconPath);
console.log('   - ' + faviconPath);
console.log('\n🎨 Design:');
console.log('   - Gradient background (Blue → Purple → Pink)');
console.log('   - Bitcoin ₿ symbol with AI circuit nodes');
console.log('   - Professional glow effects');
console.log('\n🚀 Next Steps:');
console.log('   1. Run: npm start');
console.log('   2. Test animated splash screen');
console.log('   3. Run: npm run build');
console.log('\n🎉 Ready to build APK!\n');
