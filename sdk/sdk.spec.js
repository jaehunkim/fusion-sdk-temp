"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ts_mockito_1 = require("ts-mockito");
const connector_1 = require("../connector");
const sdk_1 = require("./sdk");
const constants_1 = require("../constants");
function createHttpProviderFake(mock) {
    const httpProvider = {
        get: jest.fn().mockImplementationOnce(() => {
            return Promise.resolve(mock);
        }),
        post: jest.fn().mockImplementation(() => {
            return Promise.resolve(null);
        })
    };
    return httpProvider;
}
describe(__filename, () => {
    let web3Provider;
    let web3ProviderConnector;
    beforeEach(() => {
        web3Provider = (0, ts_mockito_1.mock)();
        web3ProviderConnector = new connector_1.Web3ProviderConnector((0, ts_mockito_1.instance)(web3Provider));
    });
    it('returns encoded call data to cancel order', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const url = 'https://test.com';
        const expected = {
            order: {
                salt: '45144194282371711345892930501725766861375817078109214409479816083205610767025',
                maker: '0x6f250c769001617aff9bdf4b9fd878062e94af83',
                offsets: '970558080243398695134547109586957793750899628853613079895592438595584',
                receiver: '0x0000000000000000000000000000000000000000',
                makerAsset: '0x6eb15148d0ea88433dd8088a3acc515d27e36c1b',
                takerAsset: '0xdac17f958d2ee523a2206206994597c13d831ec7',
                interactions: '0x2cc2878d000063ceb60f0000000000006f250c769001617aff9bdf4b9fd878062e94af83006c00c2fe001800c44c0000000084d99aa569d93a9ca187d83734c8c4a519c4e9b1ffffffff0a',
                makingAmount: '2246481050155000',
                takingAmount: '349837736598',
                allowedSender: '0xa88800cd213da5ae406ce248380802bd53b47647'
            },
            cancelTx: null,
            points: null,
            auctionStartDate: 1674491231,
            auctionDuration: 180,
            initialRateBump: 50484,
            status: 'filled',
            createdAt: '2023-01-23T16:26:38.803Z',
            fromTokenToUsdPrice: '0.01546652159249409068',
            toTokenToUsdPrice: '1.00135361305236370022',
            fills: [
                {
                    txHash: '0xcdd81e6860fc038d4fe8549efdf18488154667a2088d471cdaa7d492f24178a1',
                    filledMakerAmount: '2246481050155001',
                    filledAuctionTakerAmount: '351593117428'
                }
            ],
            isNativeCurrency: false
        };
        const httpProvider = createHttpProviderFake(expected);
        const sdk = new sdk_1.FusionSDK({
            url,
            network: constants_1.NetworkEnum.ETHEREUM,
            httpProvider,
            blockchainProvider: web3ProviderConnector
        });
        const orderHash = `0x1beee023ab933cf5446c298eadadb61c05705f2156ef5b2db36c160b36f31ce4`;
        const callData = yield sdk.buildCancelOrderCallData(orderHash);
        expect(callData).toBe('0x2d9a56f6000000000000000000000000000000000000000000000000000000000000002063ceb55f0000b400c53400000000000000000000000000000000006dc95382b10000000000000000000000006eb15148d0ea88433dd8088a3acc515d27e36c1b000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec70000000000000000000000006f250c769001617aff9bdf4b9fd878062e94af830000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a88800cd213da5ae406ce248380802bd53b476470000000000000000000000000000000000000000000000000007fb29a0fd37f80000000000000000000000000000000000000000000000000000005173f43a9600000024000000240000002400000024000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000004b2cc2878d000063ceb60f0000000000006f250c769001617aff9bdf4b9fd878062e94af83006c00c2fe001800c44c0000000084d99aa569d93a9ca187d83734c8c4a519c4e9b1ffffffff0a000000000000000000000000000000000000000000');
    }));
    it('throws an exception if order is not get from api', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const url = 'https://test.com';
        const expected = undefined;
        const httpProvider = createHttpProviderFake(expected);
        const sdk = new sdk_1.FusionSDK({
            url,
            network: constants_1.NetworkEnum.ETHEREUM,
            httpProvider,
            blockchainProvider: web3ProviderConnector
        });
        const orderHash = `0x1beee023ab933cf5446c298eadadb61c05705f2156ef5b2db36c160b36f31ce4`;
        const promise = sdk.buildCancelOrderCallData(orderHash);
        yield expect(promise).rejects.toThrow('Can not get order with the specified orderHash 0x1beee023ab933cf5446c298eadadb61c05705f2156ef5b2db36c160b36f31ce4');
    }));
});
//# sourceMappingURL=sdk.spec.js.map