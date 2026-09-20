const { Jimp } = require('jimp');

Jimp.read('C:\\temp\\sr.png').then(img => {
  const w = img.bitmap.width, h = img.bitmap.height;
  console.log('Size:', w, 'x', h);

  const px = (x, y) => {
    const idx = (y * w + x) * 4;
    return [img.bitmap.data[idx], img.bitmap.data[idx+1], img.bitmap.data[idx+2]];
  };

  const bgR = 4, bgG = 7, bgB = 14;
  function isBg(r, g, b) {
    return (Math.abs(r - bgR) + Math.abs(g - bgG) + Math.abs(b - bgB) < 30);
  }
  function br(p) { return (p[0] + p[1] + p[2]) / 3; }

  // Count non-bg pixels per row in left 280px
  console.log('\n=== Content bands in left 280px ===');
  const bands = [];
  let inBand = false, bandStart = 0;
  for (let y = 0; y < h; y++) {
    let count = 0, firstX = -1, lastX = -1;
    for (let x = 0; x < 280; x++) {
      const p = px(x, y);
      if (!isBg(p[0], p[1], p[2])) {
        count++;
        if (firstX < 0) firstX = x;
        lastX = x;
      }
    }
    if (count >= 8) {
      if (!inBand) { bandStart = y; inBand = true; }
    } else {
      if (inBand) { bands.push({ start: bandStart, end: y-1 }); inBand = false; }
    }
  }
  if (inBand) bands.push({ start: bandStart, end: h-1 });

  for (const band of bands) {
    const height = band.end - band.start + 1;
    console.log('  y=' + band.start + '..' + band.end + ' (height=' + height + ')');
  }

  // Detailed view of each band
  for (const band of bands) {
    const midY = Math.floor((band.start + band.end) / 2);
    console.log('\n  --- Band y=' + band.start + '..' + band.end + ' (mid=' + midY + ') ---');
    let line = '  x: ';
    for (let x = 0; x < 280; x += 4) {
      const p = px(x, midY);
      const b = br(p);
      if (isBg(p[0], p[1], p[2])) line += ' ';
      else if (b > 200) line += '#';
      else if (p[2] > p[0] + 30) line += 'B';
      else line += '+';
    }
    console.log(line);
    // Also check a few rows in the band
    for (let ry = band.start; ry <= band.end; ry += Math.max(1, Math.floor((band.end - band.start) / 8))) {
      let l = '  y=' + ry + ': ';
      for (let x = 0; x < 280; x += 5) {
        const p = px(x, ry);
        const b = br(p);
        if (isBg(p[0], p[1], p[2])) l += ' ';
        else if (b > 200) l += '#';
        else if (p[2] > p[0] + 30) l += 'B';
        else l += '+';
      }
      console.log(l);
    }
  }

  // Left edge shape
  console.log('\n=== Top-left corner (x=0..30, y=0..30) ===');
  for (let y = 0; y < 30; y++) {
    let line = '  ';
    for (let x = 0; x < 30; x++) {
      const p = px(x, y);
      line += isBg(p[0], p[1], p[2]) ? '.' : '#';
    }
    console.log('y=' + String(y).padStart(2, '0') + ': ' + line);
  }

  // Right edge of sidebar
  console.log('\n=== Right edge of sidebar (x=240..300) ===');
  for (let y = 0; y < h; y += 20) {
    let line = 'y=' + String(y).padStart(4, '0') + ': ';
    for (let x = 240; x < 300; x += 3) {
      const p = px(x, y);
      const b = br(p);
      if (isBg(p[0], p[1], p[2])) line += ' ';
      else if (b > 200) line += '#';
      else if (p[2] > p[0] + 30) line += 'B';
      else line += '+';
    }
    console.log(line);
  }
})
.catch(e => console.error(e));