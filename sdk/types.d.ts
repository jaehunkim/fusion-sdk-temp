import { BlockchainProviderConnector, HttpProviderConnector } from '../connector';
import { NetworkEnum } from '../constants';
import { LimitOrderV3Struct } from '../limit-order';
import { PresetEnum } from '../api';
import { OrderNonce } from '../nonce-manager/types';
import { FusionOrder } from '../fusion-order';
export declare type FusionSDKConfigParams = {
    url: string;
    network: NetworkEnum;
    blockchainProvider?: BlockchainProviderConnector;
    httpProvider?: HttpProviderConnector;
};
export declare type QuoteParams = {
    fromTokenAddress: string;
    toTokenAddress: string;
    amount: string;
    permit?: string;
    takingFeeBps?: number;
};
export declare type OrderParams = {
    fromTokenAddress: string;
    toTokenAddress: string;
    amount: string;
    walletAddress: string;
    permit?: string;
    receiver?: string;
    preset?: PresetEnum;
    nonce?: OrderNonce | string | number;
    fee?: TakingFeeInfo;
};
export declare type TakingFeeInfo = {
    takingFeeBps: number;
    takingFeeReceiver: string;
};
export declare type OrderInfo = {
    order: LimitOrderV3Struct;
    signature: string;
    quoteId: string;
    orderHash: string;
};
export declare type PreparedOrder = {
    order: FusionOrder;
    hash: string;
    quoteId: string;
};
export declare type Nonce = string | number | undefined;
