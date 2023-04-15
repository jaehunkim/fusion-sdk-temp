import { Cost, PresetEnum, QuoterResponse } from '../types';
import { Preset } from '../preset';
import { FusionOrder } from '../../../fusion-order';
import { NetworkEnum } from '../../../constants';
import { QuoterRequest } from '../quoter.request';
import { FusionOrderParamsData } from './types';
export declare class Quote {
    private readonly network;
    private readonly params;
    readonly fromTokenAmount: string;
    readonly feeToken: string;
    readonly presets: Record<PresetEnum, Preset>;
    readonly recommendedPreset: PresetEnum;
    readonly toTokenAmount: string;
    readonly prices: Cost;
    readonly volume: Cost;
    readonly whitelist: string[];
    readonly settlementAddress: string;
    readonly quoteId: string | null;
    constructor(network: NetworkEnum, params: QuoterRequest, response: QuoterResponse);
    createFusionOrder(paramsData?: FusionOrderParamsData): FusionOrder;
    getPreset(type?: PresetEnum): Preset;
    private handlePredicate;
    private buildUnwrapPostInteractionIfNeeded;
}
