import * as os from 'os';

console.log(`${(os.uptime() / 60 / 60).toFixed(2)} hours uptime.`);
