const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
function read(names) {
  for (const name of names) {
    const file = path.join(root, name);
    if (fs.existsSync(file)) {
      const value = fs.readFileSync(file, 'utf8').trim();
      if (value) return value;
    }
  }
  return ''; // Optional integrations must not prevent building the local POS.
}
const config = {
  swifta: read(['swifta.txt']),
  sozuri: fs.existsSync(path.join(__dirname, 'sozuri-config.json')) ? require('./sozuri-config.json') : {}
};
fs.writeFileSync(path.join(__dirname, 'src/provider-config.json'), JSON.stringify(config));
console.log('Native provider configuration prepared.');
