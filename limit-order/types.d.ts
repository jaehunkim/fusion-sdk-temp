export declare type OrderInfoData = {
    makerAsset: string;
    takerAsset: string;
    makingAmount: string;
    takingAmount: string;
    maker: string;
    salt?: string;
    allowedSender?: string;
    receiver?: string;
};
export declare type InteractionsData = {
    makerAssetData?: string;
    takerAssetData?: string;
    getMakingAmount?: string;
    getTakingAmount?: string;
    predicate?: string;
    permit?: string;
    preInteraction?: string;
    postInteraction?: string;
};
export declare type LimitOrderV3Struct = {
    salt: string;
    makerAsset: string;
    takerAsset: string;
    maker: string;
    receiver: string;
    allowedSender: string;
    makingAmount: string;
    takingAmount: string;
    offsets: string;
    interactions: string;
};
