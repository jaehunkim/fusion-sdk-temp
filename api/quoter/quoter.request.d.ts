import { QuoterRequestParams } from './types';
export declare class QuoterRequest {
    readonly fromTokenAddress: string;
    readonly toTokenAddress: string;
    readonly amount: string;
    readonly walletAddress: string;
    readonly enableEstimate: boolean;
    readonly permit: string | undefined;
    readonly fee: number | undefined;
    constructor(params: QuoterRequestParams);
    static new(params: QuoterRequestParams): QuoterRequest;
    validate(): string | null;
    build(): QuoterRequestParams;
}
