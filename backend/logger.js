const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;
const path = require('path');

// Custom log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

const logger = createLogger({
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Timestamp format
    logFormat
  ),
  transports: [
    // Log to a file
    new transports.File({
      filename: path.join(__dirname, 'logs', 'app.log'),
      level: 'info'  // Only log info level and above
    }),
    // Also log errors to a separate file
    new transports.File({
      filename: path.join(__dirname, 'logs', 'error.log'),
      level: 'error'
    }),
    // Optionally log to the console
    new transports.Console({
      level: 'debug'  // Log everything to console
    })
  ]
});

module.exports = logger;
