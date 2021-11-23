import { LogFormatterService } from './log-formatter.service';

export type LogFormatterServiceType = new () => LogFormatterService;

export abstract class LoggerConfig {

  logFormatterType?: LogFormatterServiceType;
  abstract enableDebug: boolean;
}
