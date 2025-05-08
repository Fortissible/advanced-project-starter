import { User } from './user.model';

export type GetUserReq = {
  userId: string;
};

export type GetUserRes = User;
