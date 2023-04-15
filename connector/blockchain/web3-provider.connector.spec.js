"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ts_mockito_1 = require("ts-mockito");
const limit_order_1 = require("../../limit-order");
const web3_provider_connector_1 = require("./web3-provider-connector");
describe('Web3 provider connector', () => {
    let web3Provider;
    let web3ProviderConnector;
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
        web3ProviderConnector = new web3_provider_connector_1.Web3ProviderConnector((0, ts_mockito_1.instance)(web3Provider));
    });
    it('should call eth_signTypedData_v4 rpc method', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const walletAddress = '0xasd';
        const extendedWeb3 = {
            signTypedDataV4: jest.fn()
        };
        (0, ts_mockito_1.when)(web3Provider.extend((0, ts_mockito_1.anything)())).thenReturn(extendedWeb3);
        yield web3ProviderConnector.signTypedData(walletAddress, typedData);
        expect(extendedWeb3.signTypedDataV4).toHaveBeenCalledWith(walletAddress, JSON.stringify(typedData));
    }));
});
//# sourceMappingURL=web3-provider.connector.spec.js.map