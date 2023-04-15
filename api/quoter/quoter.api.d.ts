import { AxiosProviderConnector, HttpProviderConnector } from '../../connector';
import { QuoterRequest } from './quoter.request';
import { QuoterApiConfig } from './types';
import { Quote } from './quote';
export declare class QuoterApi {
    private readonly config;
    private readonly httpClient;
    constructor(config: QuoterApiConfig, httpClient: HttpProviderConnector);
    static new(config: QuoterApiConfig, httpClient?: AxiosProviderConnector): QuoterApi;
    getQuote(params: QuoterRequest): Promise<Quote>;
}
