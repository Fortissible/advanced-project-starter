import BasicHttpClient from '@common/http-client/http-client.impl';
import { store } from '@src/configs/store/store.config';
import { CommonError } from './models/error.model';

export class HttpClient extends BasicHttpClient {
  constructor() {
    super();

    this.baseUrl = '';
  }

  protected override getDefaultHeaders(): Record<string, string> {
    const baseHeader = super.getDefaultHeaders();

    const { accessToken } = store.getState().auth;

    return {
      ...baseHeader,
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    };
  }

  protected async handleError<T>(error: CommonError): Promise<T> {
    return super.handleError(error);
  }
}
