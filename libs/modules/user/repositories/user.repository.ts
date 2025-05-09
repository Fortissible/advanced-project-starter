import { IHttpClient } from '@common/http-client/http-client.interface';
import { GetAuthUserRes } from '@modules/user/models/get-auth-user.model';
import { GetUserReq, GetUserRes } from '@modules/user/models/get-user.model';
import { GetUsersRes } from '@modules/user/models/get-users.model';
import {
  LoginUserReq,
  LoginUserRes,
} from '@modules/user/models/login-user.model';
import {
  RefreshTokenReq,
  RefreshTokenRes,
} from '@modules/user/models/refresh-token.model';
import {
  RegisterUserReq,
  RegisterUserRes,
} from '@modules/user/models/register-user.model';
import IUserRepository from './user.repository.interface';

export default function userRepositoryImpl(
  httpClient: IHttpClient,
): IUserRepository {
  const getAllUser = async () => {
    const res = await httpClient.get<GetUsersRes>('/users?limit=10');

    return res;
  };

  const getUserDetail = async (req: GetUserReq) => {
    const res = await httpClient.get<GetUserRes>(`/users/${req.userId}`);

    return res;
  };

  const loginUser = async (req: LoginUserReq) => {
    const res = await httpClient.post<LoginUserRes>('/user/login', req);

    return res;
  };

  const registerUser = async (req: RegisterUserReq) => {
    const res = await httpClient.post<RegisterUserRes>('/users/add', req);

    return res;
  };

  const getAuthUser = async () => {
    const res = await httpClient.get<GetAuthUserRes>('/auth/me');

    return res;
  };

  const refreshToken = async (req: RefreshTokenReq) => {
    const res = await httpClient.post<RefreshTokenRes>('/auth/refresh', req);

    return res;
  };

  return {
    getAllUser,
    getUserDetail,
    loginUser,
    registerUser,
    getAuthUser,
    refreshToken,
  };
}
