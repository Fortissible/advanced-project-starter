import { IHttpClient } from '@common/http-client/http-client.interface';
import postRepositoryImpl from '@modules/post/repositories/post.repository';
import userRepositoryImpl from '@modules/user/repositories/user.repository';
import { HttpClient } from '@src/clients/http/http.client';
import { envConfig } from '@src/configs/env/env.config';
import { container, InjectionToken } from 'tsyringe';

export const HTTP_CLIENT: InjectionToken<IHttpClient> = 'HttpClient';
export const httpClient = container.resolve<IHttpClient>(
  HTTP_CLIENT,
) as HttpClient;

httpClient.updateConfig({
  baseUrl: envConfig.dummyJsonBaseUrl,
});

export const dummyJsonApiService = {
  posts: postRepositoryImpl(httpClient),
  users: userRepositoryImpl(httpClient),
};
