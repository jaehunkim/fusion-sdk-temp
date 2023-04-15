"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const nonce_manager_1 = require("./nonce-manager");
describe('Nonce Manager', () => {
    const provider = jest.fn().mockReturnValue({
        signTypedData: (_walletAddress, _typedData) => {
            return Promise.resolve('0x');
        },
        ethCall: (_contractAddress, _callData) => {
            return Promise.resolve('0x0000000000000000000000000000000000000000000000000000000000000005');
        }
    })();
    it('should get nonce', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const nonceManager = nonce_manager_1.NonceManager.new({ provider });
        const nonce = yield nonceManager.getNonce('0xfb3c7eb936cAA12B5A884d612393969A557d4307');
        expect(nonce).toBe('5');
    }));
});
//# sourceMappingURL=nonce-manager.spec.js.map