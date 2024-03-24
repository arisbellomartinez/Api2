// Import necessary modules
const { createLogger, transports, format }= require("winston") ;

// Create a custom logger instance
const customLogger = createLogger({
    transports: [
        // Log information level messages to info.log file
        new transports.File({
            filename: "info.log",
            level: "info",
            format: format.combine(format.timestamp(), format.json())
        }),
        // Log error level messages to error.log file
        new transports.File({
            filename: "error.log",
            level: "error",
            format: format.combine(format.timestamp(), format.json())
        }),
        // Log warning level messages to warn.log file
        new transports.File({
            filename: "warn.log",
            level: "warn",
            format: format.combine(format.timestamp(), format.json())
        })
    ]
});

// Export the custom logger instance
module.exports= logger = customLogger;