import { GetAuthUserRes } from '../models/get-auth-user.model';
import { GetUserReq, GetUserRes } from '../models/get-user.model';
import { GetUsersRes } from '../models/get-users.model';
import { LoginUserReq, LoginUserRes } from '../models/login-user.model';
import {
  RefreshTokenReq,
  RefreshTokenRes,
} from '../models/refresh-token.model';
import {
  RegisterUserReq,
  RegisterUserRes,
} from '../models/register-user.model';

export default interface IUserRepository {
  loginUser: (req: LoginUserReq) => Promise<LoginUserRes>;
  refreshToken: (req: RefreshTokenReq) => Promise<RefreshTokenRes>;
  getAllUser: () => Promise<GetUsersRes>;
  getUserDetail: (req: GetUserReq) => Promise<GetUserRes>;
  registerUser: (req: RegisterUserReq) => Promise<RegisterUserRes>;
  getAuthUser: () => Promise<GetAuthUserRes>;
}
