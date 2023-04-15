"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersApi = void 0;
const tslib_1 = require("tslib");
const connector_1 = require("../../connector");
const params_1 = require("../params");
class OrdersApi {
    constructor(config, httpClient) {
        this.config = config;
        this.httpClient = httpClient;
    }
    static new(config, httpClient = new connector_1.AxiosProviderConnector()) {
        return new OrdersApi(config, httpClient);
    }
    getActiveOrders(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const err = params.validate();
            if (err) {
                throw new Error(err);
            }
            const queryParams = (0, params_1.concatQueryParams)(params.build());
            const url = `${this.config.url}/v1.0/${this.config.network}/order/active/${queryParams}`;
            return this.httpClient.get(url);
        });
    }
    getOrderStatus(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const err = params.validate();
            if (err) {
                throw new Error(err);
            }
            const url = `${this.config.url}/v1.0/${this.config.network}/order/status/${params.orderHash}`;
            return this.httpClient.get(url);
        });
    }
    getOrdersByMaker(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const err = params.validate();
            if (err) {
                throw new Error(err);
            }
            const queryParams = (0, params_1.concatQueryParams)(params.buildQueryParams());
            const url = `${this.config.url}/v1.0/${this.config.network}/order/maker/${params.address}/${queryParams}`;
            return this.httpClient.get(url);
        });
    }
}
exports.OrdersApi = OrdersApi;
//# sourceMappingURL=orders.api.js.map