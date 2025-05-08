import errorCodes from '../../../constants/error.constant';

export type ICommonError = {
  code?: keyof typeof errorCodes;
  message?: string;
  name: string;
};

export type IRequest = {
  body: unknown;
  headers: Record<string, string>;
  method: string;
  signal: AbortSignal | undefined | null;
  status: number;
  url: string;
};

export class CommonError extends Error implements ICommonError {
  code?: keyof typeof errorCodes;

  request?: IRequest;

  constructor({ code, message, ...params }: ICommonError, request?: IRequest) {
    super(message || (code && errorCodes?.[code]) || '');

    Object.assign(this, { ...params, code, request });
  }

  public getRequest() {
    return this.request;
  }
}
