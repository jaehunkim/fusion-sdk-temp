import { FusionApiConfig } from './types';
import { QuoterRequest } from './quoter';
import { RelayerRequest } from './relayer';
import { Quote } from './quoter/quote/quote';
import { ActiveOrdersRequest, ActiveOrdersResponse, OrdersByMakerRequest, OrderStatusRequest, OrderStatusResponse, OrdersByMakerResponse } from './orders';
export declare class FusionApi {
    private readonly quoterApi;
    private readonly relayerApi;
    private readonly ordersApi;
    constructor(config: FusionApiConfig);
    static new(config: FusionApiConfig): FusionApi;
    getQuote(params: QuoterRequest): Promise<Quote>;
    getActiveOrders(params?: ActiveOrdersRequest): Promise<ActiveOrdersResponse>;
    getOrderStatus(params: OrderStatusRequest): Promise<OrderStatusResponse>;
    getOrdersByMaker(params: OrdersByMakerRequest): Promise<OrdersByMakerResponse>;
    submitOrder(params: RelayerRequest): Promise<void>;
    submitOrderBatch(params: RelayerRequest[]): Promise<void>;
}
