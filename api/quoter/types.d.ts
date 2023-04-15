import { NetworkEnum } from '../../constants';
export declare type QuoterRequestParams = {
    fromTokenAddress: string;
    toTokenAddress: string;
    amount: string;
    walletAddress: string;
    enableEstimate?: boolean;
    permit?: string;
    fee?: number;
};
export declare type QuoterApiConfig = {
    network: NetworkEnum;
    url: string;
};
export declare type QuoterResponse = {
    fromTokenAmount: string;
    feeToken: string;
    presets: QuoterPresets;
    recommended_preset: PresetEnum;
    toTokenAmount: string;
    prices: Cost;
    volume: Cost;
    settlementAddress: string;
    whitelist: string[];
    quoteId: string | null;
};
export declare type QuoterPresets = {
    fast: PresetData;
    medium: PresetData;
    slow: PresetData;
};
export declare type PresetData = {
    auctionDuration: number;
    startAuctionIn: number;
    bankFee: string;
    initialRateBump: number;
    auctionStartAmount: string;
    auctionEndAmount: string;
    tokenFee: string;
    points: AuctionPoint[];
};
export declare type AuctionPoint = {
    delay: number;
    coefficient: number;
};
export declare type Cost = {
    usd: {
        fromToken: string;
        toToken: string;
    };
};
export declare enum PresetEnum {
    fast = "fast",
    medium = "medium",
    slow = "slow"
}
