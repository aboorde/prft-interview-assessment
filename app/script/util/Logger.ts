/// <reference path="../util/_app.ts" />

module prtf.interview {
    
    export enum LogLevel {
        Information = 0,
        Debug = 1,
        Warning = 2,
        Error = 3
    }

    export interface ILogger {
        log(message: string): void;
        LogLevel: LogLevel;
    }

    export class BaseLogger {

        private logLevel: LogLevel;

        constructor(logLevel: LogLevel) {
            this.LogLevel = logLevel;
        }

        get LogLevel() {
            return this.logLevel;
        }

        set LogLevel(logLevel) {
            if (this.logLevel != logLevel) {
                this.logLevel = logLevel;
            }
        }
    }

    export class ConsoleLogger extends BaseLogger implements ILogger {

        constructor(logLevel: LogLevel) {
            super(logLevel);
        }

        public log(message: string): void {
            switch (this.LogLevel) {
                case LogLevel.Information:
                    console.info(message);
                    break;

                case LogLevel.Debug:
                    console.debug(message);
                    break;

                case LogLevel.Error:
                    console.error(message);
                    break;

                case LogLevel.Warning:
                    console.warn(message);
                    break;
            }
        }
    }
}