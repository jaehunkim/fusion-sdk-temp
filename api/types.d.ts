import { NetworkEnum } from '../constants';
import { HttpProviderConnector } from '../connector';
export declare type FusionApiConfig = {
    url: string;
    network: NetworkEnum;
    httpProvider?: HttpProviderConnector;
};
export declare type PaginationMeta = {
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
};
export declare type PaginationOutput<T extends Record<string, any> = Record<string, any>> = {
    meta: PaginationMeta;
    items: T[];
};
