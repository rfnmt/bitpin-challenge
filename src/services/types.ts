import { AxiosRequestConfig } from 'axios';

export interface GetAPIArgs {
    url: string;
    config?: AxiosRequestConfig;
    queryParamsObj?: Record<string, string>;
}

export interface ResponseType {
    data: unknown;
    status: number;
}
