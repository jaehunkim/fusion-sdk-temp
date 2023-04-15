import { AxiosProviderConnector, HttpProviderConnector } from '../../connector';
import { ActiveOrdersRequest, OrdersByMakerRequest, OrderStatusRequest } from './orders.request';
import { ActiveOrdersResponse, OrdersApiConfig, OrdersByMakerResponse, OrderStatusResponse } from './types';
export declare class OrdersApi {
    private readonly config;
    private readonly httpClient;
    constructor(config: OrdersApiConfig, httpClient: HttpProviderConnector);
    static new(config: OrdersApiConfig, httpClient?: AxiosProviderConnector): OrdersApi;
    getActiveOrders(params: ActiveOrdersRequest): Promise<ActiveOrdersResponse>;
    getOrderStatus(params: OrderStatusRequest): Promise<OrderStatusResponse>;
    getOrdersByMaker(params: OrdersByMakerRequest): Promise<OrdersByMakerResponse>;
}
