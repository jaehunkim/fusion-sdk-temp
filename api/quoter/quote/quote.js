"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quote = void 0;
const types_1 = require("../types");
const preset_1 = require("../preset");
const auction_suffix_1 = require("../../../auction-suffix");
const fusion_order_1 = require("../../../fusion-order");
const utils_1 = require("../../../utils");
const constants_1 = require("../../../constants");
const interactions_factory_1 = require("../../../limit-order/interactions-factory");
const order_params_1 = require("./order-params");
const predicate_factory_1 = require("../../../limit-order/predicate-factory");
const utils_2 = require("../../../sdk/utils");
class Quote {
    constructor(network, params, response) {
        this.network = network;
        this.params = params;
        this.fromTokenAmount = response.fromTokenAmount;
        this.feeToken = response.feeToken;
        this.presets = {
            [types_1.PresetEnum.fast]: new preset_1.Preset(response.presets.fast),
            [types_1.PresetEnum.medium]: new preset_1.Preset(response.presets.medium),
            [types_1.PresetEnum.slow]: new preset_1.Preset(response.presets.slow)
        };
        this.toTokenAmount = response.toTokenAmount;
        this.prices = response.prices;
        this.volume = response.volume;
        this.quoteId = response.quoteId;
        this.whitelist = response.whitelist;
        this.settlementAddress = response.settlementAddress;
        this.recommendedPreset = response.recommended_preset;
    }
    createFusionOrder(paramsData) {
        const params = order_params_1.FusionOrderParams.new({
            preset: (paramsData === null || paramsData === void 0 ? void 0 : paramsData.preset) || this.recommendedPreset,
            receiver: paramsData === null || paramsData === void 0 ? void 0 : paramsData.receiver,
            permit: paramsData === null || paramsData === void 0 ? void 0 : paramsData.permit,
            nonce: paramsData === null || paramsData === void 0 ? void 0 : paramsData.nonce
        });
        const preset = this.getPreset(params.preset);
        const salt = preset.createAuctionSalt();
        const suffix = new auction_suffix_1.AuctionSuffix({
            points: preset.points,
            whitelist: this.whitelist.map((resolver) => ({
                address: resolver,
                allowance: 0
            })),
            fee: {
                takingFeeRatio: (0, utils_2.bpsToRatioFormat)(this.params.fee) || constants_1.ZERO_NUMBER,
                takingFeeReceiver: (paramsData === null || paramsData === void 0 ? void 0 : paramsData.takingFeeReceiver) || constants_1.ZERO_ADDRESS
            }
        });
        const takerAsset = (0, utils_1.isNativeCurrency)(this.params.toTokenAddress)
            ? constants_1.WRAPPER_ADDRESS_MAP[this.network]
            : this.params.toTokenAddress;
        const takerAssetReceiver = (0, utils_1.isNativeCurrency)(this.params.toTokenAddress)
            ? constants_1.UNWRAPPER_CONTRACT_ADDRESS_MAP[this.network]
            : params.receiver;
        return new fusion_order_1.FusionOrder({
            makerAsset: this.params.fromTokenAddress,
            takerAsset,
            makingAmount: this.fromTokenAmount,
            takingAmount: preset.auctionEndAmount,
            maker: this.params.walletAddress,
            receiver: takerAssetReceiver,
            allowedSender: this.settlementAddress
        }, salt, suffix, {
            postInteraction: this.buildUnwrapPostInteractionIfNeeded(params.receiver),
            // todo: change hardcoded extended deadline
            predicate: this.handlePredicate({
                deadline: salt.auctionStartTime + salt.duration + 32,
                address: this.params.walletAddress,
                nonce: params.nonce
            }),
            permit: params.permit
                ? this.params.fromTokenAddress + params.permit.substring(2)
                : undefined
        });
    }
    getPreset(type = types_1.PresetEnum.fast) {
        return this.presets[type];
    }
    handlePredicate(params) {
        if (params === null || params === void 0 ? void 0 : params.nonce) {
            return predicate_factory_1.PredicateFactory.timestampBelowAndNonceEquals(params.address, params.nonce, params.deadline);
        }
        return predicate_factory_1.PredicateFactory.timestampBelow(params.deadline);
    }
    buildUnwrapPostInteractionIfNeeded(receiver) {
        if (!(0, utils_1.isNativeCurrency)(this.params.toTokenAddress)) {
            return undefined;
        }
        return interactions_factory_1.InteractionsFactory.unwrap(constants_1.UNWRAPPER_CONTRACT_ADDRESS_MAP[this.network], receiver || this.params.walletAddress);
    }
}
exports.Quote = Quote;
//# sourceMappingURL=quote.js.map