const https = require('https');
const fs = require('fs');

const imagePath = 'C:\\temp\\sidebar_small.png';
const imageBuffer = fs.readFileSync(imagePath);
const imageBase64 = imageBuffer.toString('base64');

// Try multiple models
const models = [
  'Salesforce/blip-image-captioning-base',
  'nlpconnect/vit-gpt2-image-captioning',
];

function tryModel(model, callback) {
  const payload = JSON.stringify({
    inputs: 'data:image/png;base64,' + imageBase64
  });

  const data = [];
  const boundary = '----WebKitFormBoundary' + Date.now();

  // Use JSON payload
  const options = {
    hostname: 'api-inference.huggingface.co',
    path: '/models/' + model,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    },
    timeout: 25000
  };

  const req = https.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => { body += chunk; });
    res.on('end', () => {
      console.log('\n=== Model: ' + model + ' (status ' + res.statusCode + ') ===');
      console.log('Response:', body.substring(0, 2000));
      callback(null, body);
    });
  });

  req.on('error', (e) => {
    console.error('Error with ' + model + ':', e.message);
    callback(e);
  });

  req.on('timeout', () => {
    console.error('Timeout with ' + model);
    req.destroy();
    callback(new Error('timeout'));
  });

  req.write(payload);
  req.end();
}

tryModel(models[0], (err) => {
  if (err || ('' + '').indexOf('error') >= 0) {
    tryModel(models[1], () => { process.exit(0); });
  } else {
    process.exit(0);
  }
});