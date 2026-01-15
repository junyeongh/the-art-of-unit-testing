// Interfaces
export interface ComplicatedLogger {
  info(text: string): string;
  debug(text: string, obj?: any): string;
  warn(text: string): string;
  error(text: string, location: string, stacktrace: string): string;
}

// Implementation
export class ComplicatedLoggerImpl implements ComplicatedLogger {
  info(text: string): string {
    const message = `INFO: ${text}`;
    console.log(message);
    return message;
  }

  debug(text: string, obj?: any): string {
    const message = obj
      ? `DEBUG: ${text} ${JSON.stringify(obj)}`
      : `DEBUG: ${text}`;
    console.log(message);
    return message;
  }

  warn(text: string): string {
    const message = `WARN: ${text}`;
    console.warn(message);
    return message;
  }

  error(text: string, location: string, stacktrace: string): string {
    const message = `ERROR: ${text}\nLocation: ${location}\nStacktrace: ${stacktrace}`;
    console.error(message);
    return message;
  }
}

// Default instance and exported functions
const defaultLogger = new ComplicatedLoggerImpl();

export const info = (text: string): string => defaultLogger.info(text);
export const debug = (text: string, obj?: any): string => defaultLogger.debug(text, obj);
export const warn = (text: string): string => defaultLogger.warn(text);
export const error = (text: string, location: string, stacktrace: string): string => defaultLogger.error(text, location, stacktrace);
