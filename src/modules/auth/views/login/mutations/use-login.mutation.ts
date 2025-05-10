import { LoginSchema } from '@src/modules/auth/views/login/mutations/schemas/login.schema';
import { dummyJsonApiService } from '@src/services/dummy-json/dummy-json-api.service';
import { useMutation } from '@tanstack/react-query';

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
        username: data.username,
        password: data.password,
      }),
    onSuccess: (res) => {
      onSuccess({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
      });
    },
    onError: () => {
      onFailure();
    },
  });

  return {
    login,
    isPending,
  };
}
