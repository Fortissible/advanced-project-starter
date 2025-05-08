export type LoginUserReq = {
  username: string;
  password: string;
  expiresInMins?: number; // optional, defaults to 60
};

export type LoginUserRes = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
};
