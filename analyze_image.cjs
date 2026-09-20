const { Jimp } = require('jimp');

Jimp.read('C:\\temp\\sr.png')
  .then(img => {
    const w = img.bitmap.width, h = img.bitmap.height;
    console.log('Image dimensions:', w + 'x' + h);

    function px(x, y) {
      const c = img.getPixelColor(x, y);
      const r = (c >> 16) & 0xff, g = (c >> 8) & 0xff, b = c & 0xff;
      const a = (c >> 24) & 0xff;
      return { r, g, b, a, hex: '#' + ((1 << 24) + (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase() };
    }

    const midY = Math.floor(h / 2);

    // Scan columns rightward to find sidebar boundary
    console.log('\n=== Column scan at y=' + midY + ' (sidebar width detection) ===');
    for (let x = 0; x < w; x += Math.max(1, Math.floor(w / 50))) {
      console.log('x=' + String(x).padStart(4, '0') + ': ' + px(x, midY).hex);
    }

    // Find exact sidebar width
    let sideW = 0;
    const base = px(5, midY);
    for (let x = 5; x < w; x++) {
      const p = px(x, midY);
      const diff = Math.abs(p.r - base.r) + Math.abs(p.g - base.g) + Math.abs(p.b - base.b);
      if (diff > 50) { sideW = x; break; }
    }
    console.log('\nEstimated sidebar width at mid-height: ' + sideW);

    // Shape detection at corners
    console.log('\n=== Top-left corner (y=0..100, x=0..100) ===');
    for (let y = 0; y < 100; y += 5) {
      let line = 'y=' + String(y).padStart(3, '0') + ': ';
      for (let x = 0; x < 100; x += 3) {
        const p = px(x, y);
        const br = (p.r + p.g + p.b) / 3;
        line += br < 80 ? '#' : (br < 150 ? '+' : (br < 220 ? '.' : ' '));
      }
      console.log(line);
    }

    console.log('\n=== Bottom-left corner (y=' + (h-100) + '..' + h + ', x=0..100) ===');
    for (let y = h - 100; y < h; y += 5) {
      let line = 'y=' + String(y).padStart(4, '0') + ': ';
      for (let x = 0; x < 100; x += 3) {
        const p = px(x, y);
        const br = (p.r + p.g + p.b) / 3;
        line += br < 80 ? '#' : (br < 150 ? '+' : (br < 220 ? '.' : ' '));
      }
      console.log(line);
    }

    // Brand header colors
    console.log('\n=== Brand header sample points (x=0..220, y=0..120) ===');
    for (const y of [10, 25, 45, 70, 95, 115]) {
      let line = 'y=' + y + ': ';
      for (let x = 5; x < 220; x += 10) {
        const p = px(x, y);
        const br = (p.r + p.g + p.b) / 3;
        line += br < 80 ? '#' : (br < 150 ? '+' : (br < 220 ? '.' : ' '));
      }
      console.log(line);
    }

    // Bottom dock
    const dockStart = h - 120;
    console.log('\n=== Bottom dock (y=' + dockStart + '..' + h + ', x=0..220) ===');
    for (let y = dockStart; y < h; y += 6) {
      let line = 'y=' + String(y).padStart(4, '0') + ': ';
      for (let x = 5; x < 220; x += 8) {
        const p = px(x, y);
        const br = (p.r + p.g + p.b) / 3;
        line += br < 80 ? '#' : (br < 150 ? '+' : (br < 220 ? '.' : ' '));
      }
      console.log(line);
    }

    // Nav items
    const navStart = Math.floor(h * 0.25), navEnd = Math.floor(h * 0.7);
    console.log('\n=== Nav items (y=' + navStart + '..' + navEnd + ', x=0..220) ===');
    for (let y = navStart; y < navEnd; y += 8) {
      let line = 'y=' + String(y).padStart(4, '0') + ': ';
      for (let x = 5; x < 220; x += 4) {
        const p = px(x, y);
        const br = (p.r + p.g + p.b) / 3;
        line += br < 80 ? '#' : (br < 150 ? '+' : (br < 220 ? '.' : ' '));
      }
      console.log(line);
    }

    // Specific colors at key points
    console.log('\n=== Key color samples ===');
    console.log('Background at (5,5): ' + px(5, 5).hex);
    console.log('Background at (5,' + midY + '): ' + px(5, midY).hex);
    console.log('Background at (5,' + (h-5) + '): ' + px(5, h-5).hex);
    console.log('Background at (' + sideW + ',' + midY + '): ' + px(sideW, midY).hex);

    // Save small version
    img.resize({ w: 500, h: 500 }).write('C:\\temp\\sidebar_small.png');
    if (sideW > 0) {
      img.crop({ x: 0, y: 0, w: sideW, h: h }).resize({ w: 300, h: 500 }).write('C:\\temp\\sidebar_cropped.png');
    }
    console.log('\nSaved small images to C:\\temp');
  })
  .catch(err => console.error('Error:', err));