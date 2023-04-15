"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_provider_connector_1 = require("./axios-provider.connector");
const axios_1 = tslib_1.__importDefault(require("axios"));
describe('Axios Http provider connector', () => {
    let httpConnector;
    beforeEach(() => {
        httpConnector = new axios_provider_connector_1.AxiosProviderConnector();
    });
    it('should make get() request', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const url = 'https://123.com/test/?val=1';
        const returnedValue = {
            data: { a: 1 }
        };
        jest.spyOn(axios_1.default, 'get').mockImplementationOnce(() => Promise.resolve(returnedValue));
        const res = yield httpConnector.get(url);
        expect(res).toStrictEqual(returnedValue.data);
        expect(axios_1.default.get).toHaveBeenCalledWith(url);
    }));
    it('should make post() request', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const url = 'https://123.com/test/?val=1';
        const body = { info: 123 };
        const returnedValue = {
            data: { a: 1 }
        };
        jest.spyOn(axios_1.default, 'post').mockImplementationOnce(() => Promise.resolve(returnedValue));
        const res = yield httpConnector.post(url, body);
        expect(res).toStrictEqual(returnedValue.data);
        expect(axios_1.default.post).toHaveBeenCalledWith(url, body);
    }));
});
//# sourceMappingURL=axios-provider.connector.spec.js.map