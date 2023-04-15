"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FusionOrder = void 0;
const limit_order_1 = require("../limit-order");
class FusionOrder extends limit_order_1.LimitOrder {
    constructor(orderInfo, auction, auctionSuffix, interactions) {
        super(orderInfo, interactions);
        this.auction = auction;
        this.auctionSuffix = auctionSuffix;
    }
    build() {
        this.salt = this.auction.build();
        const order = super.build();
        return Object.assign(Object.assign({}, order), { interactions: order.interactions + this.auctionSuffix.build() });
    }
}
exports.FusionOrder = FusionOrder;
//# sourceMappingURL=fusion-order.js.map