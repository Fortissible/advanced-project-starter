export type RefreshTokenRes = {
  accessToken: string;
  refreshToken: string;
};

export type RefreshTokenReq = {
  refreshToken: string;
  expiresInMins: number;
};
