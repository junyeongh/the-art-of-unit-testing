type LogLevel = "info" | "debug" | "warn" | "error";
const LogLevel: LogLevel = "info"

export const getLogLevel = (): LogLevel => {
  return LogLevel;
}