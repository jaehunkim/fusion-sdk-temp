import WebSocket from 'ws';
import { AnyFunction, AnyFunctionWithThis, OnMessageCb, WsApiConfig } from './types';
import { WsProviderConnector } from './websocket-provider.connector';
export declare class WebsocketClient implements WsProviderConnector {
    readonly ws: WebSocket;
    private readonly url;
    private readonly initialized;
    constructor(config: WsApiConfig);
    init(): void;
    on(event: string, cb: AnyFunctionWithThis): void;
    off(event: string, cb: AnyFunctionWithThis): void;
    onOpen(cb: AnyFunctionWithThis): void;
    send<T>(message: T): void;
    onMessage(cb: OnMessageCb): void;
    onClose(cb: AnyFunction): void;
    onError(cb: AnyFunction): void;
    close(): void;
    private checkInitialized;
}
