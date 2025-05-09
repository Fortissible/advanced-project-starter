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

export default interface IUserRepository {
  loginUser: (req: LoginUserReq) => Promise<LoginUserRes>;
  refreshToken: (req: RefreshTokenReq) => Promise<RefreshTokenRes>;
  getAllUser: () => Promise<GetUsersRes>;
  getUserDetail: (req: GetUserReq) => Promise<GetUserRes>;
  registerUser: (req: RegisterUserReq) => Promise<RegisterUserRes>;
  getAuthUser: () => Promise<GetAuthUserRes>;
}
