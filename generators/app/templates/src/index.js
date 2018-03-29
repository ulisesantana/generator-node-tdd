import * as os from 'os';
import logger from './lib/logger';

const hoursUptime = () => (os.uptime() / 60 / 60).toFixed(2);
const levelUptimeMessage = (level) => `Level log is ${level.toUpperCase()} and the system has been ${hoursUptime()} hours uptime.`;
const createLog = (level) => ({level, message: levelUptimeMessage(level) });

const logs = [
  createLog('error'),
  createLog('warn'),
  createLog('info'),
  createLog('verbose'),
  createLog('debug'),
  createLog('silly')
];

logs.map((log, index) => setTimeout(()=> logger[log.level](log.message), index * 100));
