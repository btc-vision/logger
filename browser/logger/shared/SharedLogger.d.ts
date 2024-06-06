import { ILogger } from '../interfaces/ILogger';
import { ChalkInstance } from 'chalk';
export declare class SharedLogger implements ILogger {
    #private;
    protected readonly chalk: ChalkInstance;
    readonly moduleName: string;
    readonly logColor: string;
    protected enableLogs: boolean;
    protected hideLogs: boolean;
    private prefix;
    constructor(chalk?: ChalkInstance);
    setLogPrefix(prefix: string): void;
    getStartPrefix(): string;
    disable(): void;
    enable(): void;
    fancyLog(msg1: string, highlight1: string, msg2: string, highlight2: string, msg3: string): void;
    log(...args: any[]): void;
    lightOrangeLog(...args: any[]): void;
    error(...args: any[]): void;
    warn(...args: any[]): void;
    debug(...args: any[]): void;
    success(...args: any[]): void;
    fail(...args: any[]): void;
    debugBright(...args: any[]): void;
    important(...args: any[]): void;
    panic(...args: any[]): void;
    info(...args: any[]): void;
    securityNotice(...args: any[]): void;
    traceLog(...args: any[]): void;
}