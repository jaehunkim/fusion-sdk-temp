import { FusionApi, Quote } from '../api';
import { FusionSDKConfigParams, OrderInfo, OrderParams, PreparedOrder, QuoteParams } from './types';
import { ActiveOrdersRequestParams, ActiveOrdersResponse, OrdersByMakerParams, OrdersByMakerResponse, OrderStatusResponse } from '../api/orders';
import { FusionOrder } from '../fusion-order';
export declare class FusionSDK {
    private readonly config;
    readonly api: FusionApi;
    constructor(config: FusionSDKConfigParams);
    getActiveOrders({ page, limit }?: ActiveOrdersRequestParams): Promise<ActiveOrdersResponse>;
    getOrderStatus(orderHash: string): Promise<OrderStatusResponse>;
    getOrdersByMaker({ limit, page, address }: OrdersByMakerParams): Promise<OrdersByMakerResponse>;
    getQuote(params: QuoteParams): Promise<Quote>;
    createOrder(params: OrderParams): Promise<PreparedOrder>;
    submitOrder(order: FusionOrder, quoteId: string): Promise<OrderInfo>;
    placeOrder(params: OrderParams): Promise<OrderInfo>;
    buildCancelOrderCallData(orderHash: string): Promise<string>;
    private getNonce;
}
