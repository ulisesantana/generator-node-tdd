import * as winston from 'winston';

const logger = new winston.Logger({
  level: String(process.env.NODE_ENV).toLowerCase() === 'production' ? 'info' : 'silly',
  colorize: true,
  transports: [new winston.transports.Console({
    timestamp: () => (new Date).toISOString().replace('T', ' '),
    formatter: function(options) {
      return options.timestamp() + ' ' +
        winston.config.colorize(options.level, `[${options.level.toUpperCase()}]`) + ' ' +
        (options.message ? options.message : '') +
        (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
    }  })
  ]
});

module.exports = logger;
