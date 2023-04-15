"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ts_mockito_1 = require("ts-mockito");
const private_key_provider_connector_1 = require("./private-key-provider.connector");
const limit_order_1 = require("../../limit-order");
describe('Private Key provider connector', () => {
    let web3Provider;
    let privateKeyProviderConnector;
    const testPrivateKey = '0xd8d1f95deb28949ea0ecc4e9a0decf89e98422c2d76ab6e5f736792a388c56c7';
    const limitOrder = {
        salt: '618054093254',
        makerAsset: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        takerAsset: '0x111111111117dc0aa78b770fa6a738034120c302',
        maker: '0xfb3c7eb936cAA12B5A884d612393969A557d4307',
        receiver: '0x0000000000000000000000000000000000000000',
        allowedSender: '0x0000000000000000000000000000000000000000',
        makingAmount: '1000000000000000000',
        takingAmount: '1000000000000000000',
        offsets: '9813420589127697917471531885823684359047649055178615469676279994777600',
        // eslint-disable-next-line max-len
        interactions: '0x20b83f2d0000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a76400007e2d21830000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a7640000bfa7514300000000000000000000000000000000000000000000000000000068000000240000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000006863592c2b0000000000000000000000000000000000000000000000000000000063593ad9cf6fc6e3000000000000000000000000fb3c7eb936caa12b5a884d612393969a557d43070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    };
    const typedData = {
        primaryType: 'Order',
        types: {
            EIP712Domain: limit_order_1.EIP712Domain,
            Order: limit_order_1.Order
        },
        domain: {
            name: limit_order_1.LimitOrderV3TypeDataName,
            version: limit_order_1.LimitOrderV3TypeDataVersion,
            chainId: 1,
            verifyingContract: limit_order_1.VerifyingContract
        },
        message: limitOrder
    };
    beforeEach(() => {
        web3Provider = (0, ts_mockito_1.mock)();
        privateKeyProviderConnector = new private_key_provider_connector_1.PrivateKeyProviderConnector(testPrivateKey, (0, ts_mockito_1.instance)(web3Provider));
    });
    it('should sign typed data by private key', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const walletAddress = '0xa07c1d51497fb6e66aa2329cecb86fca0a957fdb';
        const signature = yield privateKeyProviderConnector.signTypedData(walletAddress, typedData);
        expect(signature).toBe('0x464f41de691938f7aaec6a157abb072684c7ba9ba5fe631b53e09ba6b66e5d0b5029927710662a15ba6f157d3269ed368447542240bdbcb8c433450caf84c93e1c');
    }));
});
//# sourceMappingURL=private-key-provider.connector.spec.js.map