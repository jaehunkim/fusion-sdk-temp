import { AuctionSalt } from '../auction-salt';
import { AuctionSuffix } from '../auction-suffix';
import { LimitOrder, InteractionsData, LimitOrderV3Struct, OrderInfoData } from '../limit-order';
export declare class FusionOrder extends LimitOrder {
    private readonly auction;
    private readonly auctionSuffix;
    constructor(orderInfo: OrderInfoData, auction: AuctionSalt, auctionSuffix: AuctionSuffix, interactions?: InteractionsData);
    build(): LimitOrderV3Struct;
}
