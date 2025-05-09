import { IHttpClient } from '@common/http-client/http-client.interface';
import productRepositoryImpl from '@modules/product/repositories/product.repository';
import { HttpClient } from '@src/clients/http/http.client';
import { envConfig } from '@src/configs/env/env.config';
import { container, InjectionToken } from 'tsyringe';

export const HTTP_CLIENT: InjectionToken<IHttpClient> = 'HttpClient';
export const httpClient = container.resolve<IHttpClient>(
  HTTP_CLIENT,
) as HttpClient;

httpClient.updateConfig({
  baseUrl: envConfig.fakeApiStoreBaseUrl,
});

export const fakeStoreApiService = {
  product: productRepositoryImpl(httpClient),
};
