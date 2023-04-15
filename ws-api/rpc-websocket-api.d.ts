import { PaginationParams } from '../api/pagination';
import { WsProviderConnector } from '../connector/ws';
import { OnGetActiveOrdersCb, OnGetAllowedMethodsCb, OnPongCb } from './types';
export declare class RpcWebsocketApi {
    readonly provider: WsProviderConnector;
    constructor(provider: WsProviderConnector);
    onPong(cb: OnPongCb): void;
    ping(): void;
    getActiveOrders({ limit, page }?: PaginationParams): void;
    onGetActiveOrders(cb: OnGetActiveOrdersCb): void;
    getAllowedMethods(): void;
    onGetAllowedMethods(cb: OnGetAllowedMethodsCb): void;
}
