import {
  type IHttpClient,
  type RequestConfig,
} from '@common/http-client/http-client.interface';
import { CommonError } from '@src/clients/http/models/error.model';
import urlcat from 'urlcat';

export interface BasicHttpClientConfig {
  baseUrl?: string;
  headers?: Record<string, string>;
}

export default class BasicHttpClient implements IHttpClient {
  baseUrl: string;
  headers?: Record<string, string>;

  constructor() {
    this.baseUrl = '';
  }

  protected getDefaultHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
    };
  }

  protected async handleError<T>(error: CommonError): Promise<T> {
    throw error;
  }

  updateConfig(config: BasicHttpClientConfig): void {
    if (config.baseUrl) this.baseUrl = config.baseUrl;
    if (config.headers) this.headers = { ...this.headers, ...config.headers };
  }

  private buildHeaders(headers: HeadersInit): Record<string, string> {
    const resolvedHeaders = {
      ...this.getDefaultHeaders(),
      ...this.headers,
    };

    if (Array.isArray(headers)) {
      headers.forEach(([key, value]) => {
        resolvedHeaders[key] = value;
      });
    } else if (headers instanceof Headers) {
      headers.forEach((value, key) => {
        resolvedHeaders[key] = value;
      });
    } else {
      Object.entries(headers).forEach(([key, value]) => {
        resolvedHeaders[key] = value;
      });
    }

    return resolvedHeaders;
  }

  async makeRequest<T>(
    url: string,
    config: RequestInit & { method: string } & Pick<
        RequestConfig,
        'searchParams'
      >,
  ): Promise<T> {
    const headers = this.buildHeaders(config.headers || {});
    const requestOptions = { ...config, headers };

    if (config.method === 'GET' || config.method === 'HEAD') {
      delete requestOptions.body;
    }

    const requestUrl = urlcat(this.baseUrl, url, config.searchParams || {});

    try {
      const response = await fetch(requestUrl, requestOptions);

      if (!response.ok) {
        const json = await response.json();

        throw new CommonError(
          {
            code: json.error?.code,
            message: json.error?.message,
            name: '',
          },
          {
            body: config.body,
            headers,
            method: config.method,
            signal: config.signal,
            status: response.status,
            url: requestUrl,
          },
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof CommonError) {
        return this.handleError<T>(error);
      }

      return this.handleError<T>(
        new CommonError(
          {
            code: 'internal/server-error',
            message: '',
            name: '',
          },
          {
            body: config.body,
            headers,
            method: config.method,
            signal: config.signal,
            status: 500,
            url: requestUrl,
          },
        ),
      );
    }
  }

  async delete<T>(url: string, config?: RequestConfig): Promise<T> {
    return this.makeRequest<T>(url, {
      ...config,
      method: 'DELETE',
    });
  }

  async get<T>(url: string, config?: RequestConfig): Promise<T> {
    return this.makeRequest<T>(url, {
      ...config,
      method: 'GET',
    });
  }

  async patch<T>(
    url: string,
    data?: object,
    config?: RequestConfig,
  ): Promise<T> {
    return this.makeRequest<T>(url, {
      ...config,
      body: JSON.stringify(data),
      method: 'PATCH',
    });
  }

  async post<T>(
    url: string,
    data?: object,
    config?: RequestConfig,
  ): Promise<T> {
    return this.makeRequest<T>(url, {
      ...config,
      body: JSON.stringify(data),
      method: 'POST',
    });
  }

  async put<T>(url: string, data?: object, config?: RequestConfig): Promise<T> {
    return this.makeRequest<T>(url, {
      ...config,
      body: JSON.stringify(data),
      method: 'PUT',
    });
  }
}
