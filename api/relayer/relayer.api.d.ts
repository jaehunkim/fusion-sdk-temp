import { AxiosProviderConnector, HttpProviderConnector } from '../../connector';
import { RelayerRequest } from './relayer.request';
import { RelayerApiConfig } from './types';
export declare class RelayerApi {
    private readonly config;
    private readonly httpClient;
    constructor(config: RelayerApiConfig, httpClient: HttpProviderConnector);
    static new(config: RelayerApiConfig, httpClient?: AxiosProviderConnector): RelayerApi;
    submit(params: RelayerRequest): Promise<void>;
    submitBatch(params: RelayerRequest[]): Promise<void>;
}
