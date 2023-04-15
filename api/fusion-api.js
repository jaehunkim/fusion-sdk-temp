"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FusionApi = void 0;
const quoter_1 = require("./quoter");
const relayer_1 = require("./relayer");
const connector_1 = require("../connector");
const orders_1 = require("./orders");
class FusionApi {
    constructor(config) {
        this.quoterApi = quoter_1.QuoterApi.new({
            url: `${config.url}/quoter`,
            network: config.network
        }, config.httpProvider);
        this.relayerApi = relayer_1.RelayerApi.new({
            url: `${config.url}/relayer`,
            network: config.network
        }, config.httpProvider);
        this.ordersApi = orders_1.OrdersApi.new({ url: `${config.url}/orders`, network: config.network }, config.httpProvider);
    }
    static new(config) {
        return new FusionApi({
            network: config.network,
            url: config.url,
            httpProvider: config.httpProvider || new connector_1.AxiosProviderConnector()
        });
    }
    getQuote(params) {
        return this.quoterApi.getQuote(params);
    }
    getActiveOrders(params = orders_1.ActiveOrdersRequest.new()) {
        return this.ordersApi.getActiveOrders(params);
    }
    getOrderStatus(params) {
        return this.ordersApi.getOrderStatus(params);
    }
    getOrdersByMaker(params) {
        return this.ordersApi.getOrdersByMaker(params);
    }
    submitOrder(params) {
        return this.relayerApi.submit(params);
    }
    submitOrderBatch(params) {
        return this.relayerApi.submitBatch(params);
    }
}
exports.FusionApi = FusionApi;
//# sourceMappingURL=fusion-api.js.map