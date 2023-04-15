import { LimitOrderV3Struct } from '../../limit-order';
import { NetworkEnum } from '../../constants';
import { PaginationOutput } from '../types';
import { AuctionPoint } from '../quoter';
import { PaginationParams } from '../pagination';
export declare type OrdersApiConfig = {
    network: NetworkEnum;
    url: string;
};
export declare type ActiveOrdersRequestParams = PaginationParams;
export declare type ActiveOrder = {
    orderHash: string;
    signature: string;
    deadline: string;
    auctionStartDate: string;
    auctionEndDate: string;
    remainingMakerAmount: string;
    order: LimitOrderV3Struct;
};
export declare type ActiveOrdersResponse = PaginationOutput<ActiveOrder>;
export declare type OrderStatusParams = {
    orderHash: string;
};
export declare enum OrderStatus {
    Pending = "pending",
    Filled = "filled",
    FalsePredicate = "false-predicate",
    NotEnoughBalanceOrAllowance = "not-enough-balance-or-allowance",
    Expired = "expired",
    PartiallyFilled = "partially-filled",
    WrongPermit = "wrong-permit",
    Cancelled = "cancelled",
    InvalidSignature = "invalid-signature"
}
export declare type Fill = {
    txHash: string;
    filledMakerAmount: string;
    filledAuctionTakerAmount: string;
};
export declare type OrderStatusResponse = {
    status: OrderStatus;
    order: LimitOrderV3Struct;
    points: AuctionPoint[] | null;
    fills: Fill[];
    auctionStartDate: number;
    auctionDuration: number;
    initialRateBump: number;
    isNativeCurrency: boolean;
};
export declare type OrdersByMakerParams = {
    address: string;
} & PaginationParams;
export declare type OrderFillsByMakerOutput = {
    orderHash: string;
    status: OrderStatus;
    makerAsset: string;
    makerAmount: string;
    takerAsset: string;
    cancelTx: string | null;
    fills: Fill[];
    points: AuctionPoint[] | null;
    auctionStartDate: number;
    auctionDuration: number;
    initialRateBump: number;
    isNativeCurrency: boolean;
};
export declare type OrdersByMakerResponse = PaginationOutput<OrderFillsByMakerOutput>;
