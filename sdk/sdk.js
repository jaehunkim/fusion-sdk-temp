"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FusionSDK = void 0;
const tslib_1 = require("tslib");
const api_1 = require("../api");
const constants_1 = require("../constants");
const limit_order_1 = require("../limit-order");
const orders_1 = require("../api/orders");
const nonce_manager_1 = require("../nonce-manager/nonce-manager");
const types_1 = require("../nonce-manager/types");
const encoders_1 = require("./encoders");
class FusionSDK {
    constructor(config) {
        this.config = config;
        this.api = api_1.FusionApi.new({
            url: config.url,
            network: config.network,
            httpProvider: config.httpProvider
        });
    }
    getActiveOrders({ page, limit } = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const request = orders_1.ActiveOrdersRequest.new({ page, limit });
            return this.api.getActiveOrders(request);
        });
    }
    getOrderStatus(orderHash) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const request = orders_1.OrderStatusRequest.new({ orderHash });
            return this.api.getOrderStatus(request);
        });
    }
    getOrdersByMaker({ limit, page, address }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const request = orders_1.OrdersByMakerRequest.new({ limit, page, address });
            return this.api.getOrdersByMaker(request);
        });
    }
    getQuote(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const request = api_1.QuoterRequest.new({
                fromTokenAddress: params.fromTokenAddress,
                toTokenAddress: params.toTokenAddress,
                amount: params.amount,
                walletAddress: constants_1.ZERO_ADDRESS,
                permit: params.permit,
                enableEstimate: false,
                fee: params === null || params === void 0 ? void 0 : params.takingFeeBps
            });
            return this.api.getQuote(request);
        });
    }
    createOrder(params) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const quoterRequest = api_1.QuoterRequest.new({
                fromTokenAddress: params.fromTokenAddress,
                toTokenAddress: params.toTokenAddress,
                amount: params.amount,
                walletAddress: params.walletAddress,
                permit: params.permit,
                enableEstimate: true,
                fee: (_a = params.fee) === null || _a === void 0 ? void 0 : _a.takingFeeBps
            });
            const quote = yield this.api.getQuote(quoterRequest);
            if (!quote.quoteId) {
                throw new Error('quoter has not returned quoteId');
            }
            const nonce = yield this.getNonce(params.walletAddress, params.nonce);
            const order = quote.createFusionOrder({
                receiver: params.receiver,
                preset: params.preset,
                nonce,
                permit: params.permit,
                takingFeeReceiver: (_b = params.fee) === null || _b === void 0 ? void 0 : _b.takingFeeReceiver
            });
            const domain = (0, limit_order_1.getLimitOrderV3Domain)(this.config.network);
            const hash = order.getOrderHash(domain);
            return { order, hash, quoteId: quote.quoteId };
        });
    }
    submitOrder(order, quoteId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.config.blockchainProvider) {
                throw new Error('blockchainProvider has not set to config');
            }
            const orderStruct = order.build();
            const domain = (0, limit_order_1.getLimitOrderV3Domain)(this.config.network);
            const signature = yield this.config.blockchainProvider.signTypedData(orderStruct.maker, order.getTypedData(domain));
            const relayerRequest = api_1.RelayerRequest.new({
                order: orderStruct,
                signature,
                quoteId
            });
            yield this.api.submitOrder(relayerRequest);
            return {
                order: orderStruct,
                signature,
                quoteId,
                orderHash: order.getOrderHash(domain)
            };
        });
    }
    placeOrder(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { order, quoteId } = yield this.createOrder(params);
            return this.submitOrder(order, quoteId);
        });
    }
    buildCancelOrderCallData(orderHash) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getOrderRequest = orders_1.OrderStatusRequest.new({ orderHash });
            const orderData = yield this.api.getOrderStatus(getOrderRequest);
            if (!orderData) {
                throw new Error(`Can not get order with the specified orderHash ${orderHash}`);
            }
            const { order } = orderData;
            return (0, encoders_1.encodeCancelOrder)({
                makerAsset: order.makerAsset,
                takerAsset: order.takerAsset,
                maker: order.maker,
                receiver: order.receiver,
                allowedSender: order.allowedSender,
                interactions: order.interactions,
                makingAmount: order.makingAmount,
                takingAmount: order.takingAmount,
                salt: order.salt,
                offsets: order.offsets
            });
        });
    }
    getNonce(walletAddress, nonce) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.config.blockchainProvider) {
                throw new Error('blockchainProvider has not set to config');
            }
            // in case of auto request from node
            if (nonce === types_1.OrderNonce.Auto) {
                const nonceManager = nonce_manager_1.NonceManager.new({
                    provider: this.config.blockchainProvider
                });
                return nonceManager.getNonce(walletAddress);
            }
            return nonce;
        });
    }
}
exports.FusionSDK = FusionSDK;
//# sourceMappingURL=sdk.js.map