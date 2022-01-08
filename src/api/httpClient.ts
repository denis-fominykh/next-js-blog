import axios, { AxiosRequestConfig } from 'axios';

import { AxiosResponseSuccess } from '~/api/types';

function createHttpClient() {
  return axios.create({
    baseURL: 'https://swapi.dev/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const httpClient = createHttpClient();

export async function makeHttpRequest<SuccessPayload>(
  config: AxiosRequestConfig,
): AxiosResponseSuccess<SuccessPayload> {
  const { headers } = config;

  return httpClient.request<SuccessPayload>({ ...config, headers });
}
