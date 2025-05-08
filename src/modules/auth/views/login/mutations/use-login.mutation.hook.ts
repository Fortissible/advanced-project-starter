import { useMutation } from '@tanstack/react-query';
import { dummyJsonApiService } from 'src/services/dummy-json/dummy-json-api.service';
import { LoginSchema } from './schema/login.schema';

type LoginMutationType = {
  onSuccess: (res: { accessToken: string; refreshToken: string }) => void;
  onFailure: () => void;
};

export default function useLoginMutation({
  onSuccess,
  onFailure,
}: LoginMutationType) {
  const { mutate: login, isPending } = useMutation({
    mutationFn: (data: LoginSchema) =>
      dummyJsonApiService.users.loginUser({
        password: data.password,
        username: data.username,
      }),
    onSuccess: (res) => {
      // Save token or user data as needed
      onSuccess({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
      });
    },
    onError: (err: any) => {
      onFailure();
    },
  });

  return {
    login,
    isPending,
  };
}
