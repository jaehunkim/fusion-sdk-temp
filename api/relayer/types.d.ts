import { NetworkEnum } from '../../constants';
import { LimitOrderV3Struct } from '../../limit-order';
export declare type RelayerRequestParams = {
    order: LimitOrderV3Struct;
    signature: string;
    quoteId: string;
};
export declare type RelayerApiConfig = {
    network: NetworkEnum;
    url: string;
};
