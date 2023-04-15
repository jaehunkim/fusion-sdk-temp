import { WebSocket } from 'ws';
export declare type AnyFunction = (...args: any[]) => any;
export declare type AnyFunctionWithThis = (this: WebSocket, ...args: any[]) => void;
export declare type WsApiConfig = {
    url: string;
    lazyInit?: boolean;
};
export declare type OnMessageCb = (data: any) => void;
