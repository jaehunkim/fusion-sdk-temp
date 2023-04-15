"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoterRequest = void 0;
const utils_1 = require("../../utils");
const constants_1 = require("../../constants");
const validations_1 = require("../../validations");
class QuoterRequest {
    constructor(params) {
        this.fromTokenAddress = params.fromTokenAddress.toLowerCase();
        this.toTokenAddress = params.toTokenAddress.toLowerCase();
        this.amount = params.amount;
        this.walletAddress = params.walletAddress.toLowerCase();
        this.enableEstimate = params.enableEstimate || false;
        this.permit = params.permit;
        this.fee = params.fee;
    }
    static new(params) {
        return new QuoterRequest(params);
    }
    validate() {
        if ((0, utils_1.isNativeCurrency)(this.fromTokenAddress)) {
            return `cannot swap ${constants_1.NATIVE_CURRENCY}: wrap native currency to it's wrapper fist`;
        }
        if (this.fromTokenAddress === constants_1.ZERO_ADDRESS ||
            this.toTokenAddress === constants_1.ZERO_ADDRESS) {
            return `replace ${constants_1.ZERO_ADDRESS} with ${constants_1.NATIVE_CURRENCY}`;
        }
        if (this.fromTokenAddress === this.toTokenAddress) {
            return 'fromTokenAddress and toTokenAddress should be different';
        }
        if (!(0, validations_1.isValidAddress)(this.fromTokenAddress)) {
            return `${this.fromTokenAddress} is invalid fromTokenAddress`;
        }
        if (!(0, validations_1.isValidAddress)(this.toTokenAddress)) {
            return `${this.toTokenAddress} is invalid toTokenAddress`;
        }
        if (!(0, validations_1.isValidAddress)(this.walletAddress)) {
            return `${this.walletAddress} is invalid walletAddress`;
        }
        if (!(0, validations_1.isValidAmount)(this.amount)) {
            return `${this.amount} is invalid amount`;
        }
        return null;
    }
    build() {
        return {
            fromTokenAddress: this.fromTokenAddress,
            toTokenAddress: this.toTokenAddress,
            amount: this.amount,
            walletAddress: this.walletAddress,
            enableEstimate: this.enableEstimate,
            permit: this.permit,
            fee: this.fee
        };
    }
}
exports.QuoterRequest = QuoterRequest;
//# sourceMappingURL=quoter.request.js.map