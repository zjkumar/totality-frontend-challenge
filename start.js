// start.js
const { execSync } = require('child_process');

process.env.NODE_OPTIONS = '--openssl-legacy-provider';

const command = process.argv[2] || 'dev';
execSync(`next ${command}`, { stdio: 'inherit' });
