"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelayerApi = void 0;
const connector_1 = require("../../connector");
class RelayerApi {
    constructor(config, httpClient) {
        this.config = config;
        this.httpClient = httpClient;
    }
    static new(config, httpClient = new connector_1.AxiosProviderConnector()) {
        return new RelayerApi(config, httpClient);
    }
    submit(params) {
        const url = `${this.config.url}/v1.0/${this.config.network}/order/submit`;
        return this.httpClient.post(url, params);
    }
    submitBatch(params) {
        const url = `${this.config.url}/v1.0/${this.config.network}/order/submit/many`;
        return this.httpClient.post(url, params);
    }
}
exports.RelayerApi = RelayerApi;
//# sourceMappingURL=relayer.api.js.map