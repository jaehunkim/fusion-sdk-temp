"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoterApi = void 0;
const tslib_1 = require("tslib");
const connector_1 = require("../../connector");
const params_1 = require("../params");
const quote_1 = require("./quote");
class QuoterApi {
    constructor(config, httpClient) {
        this.config = config;
        this.httpClient = httpClient;
    }
    static new(config, httpClient = new connector_1.AxiosProviderConnector()) {
        return new QuoterApi(config, httpClient);
    }
    getQuote(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const err = params.validate();
            if (err) {
                throw new Error(err);
            }
            const queryParams = (0, params_1.concatQueryParams)(params.build());
            const url = `${this.config.url}/v1.0/${this.config.network}/quote/receive/${queryParams}`;
            const res = yield this.httpClient.get(url);
            return new quote_1.Quote(this.config.network, params, res);
        });
    }
}
exports.QuoterApi = QuoterApi;
//# sourceMappingURL=quoter.api.js.map