"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosProviderConnector = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
class AxiosProviderConnector {
    get(url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.get(url);
            return res.data;
        });
    }
    post(url, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.post(url, data);
            return res.data;
        });
    }
}
exports.AxiosProviderConnector = AxiosProviderConnector;
//# sourceMappingURL=axios-provider.connector.js.map