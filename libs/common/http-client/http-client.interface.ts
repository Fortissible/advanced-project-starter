export type RequestConfig = {
  headers?: Record<string, string>;
  searchParams?:
    | Record<string, string | string[] | undefined>
    | URLSearchParams;
  signal?: AbortSignal;
};

export interface IHttpClient {
  delete<T>(url: string, config?: RequestConfig): Promise<T>;
  get<T>(url: string, config?: RequestConfig): Promise<T>;
  patch<T>(url: string, data?: object, config?: RequestConfig): Promise<T>;
  post<T>(url: string, data?: object, config?: RequestConfig): Promise<T>;
  put<T>(url: string, data?: object, config?: RequestConfig): Promise<T>;
}
