import { Alert } from 'react-native';
import tokenStore from 'src/apps/store/auth-store.app';
import useTranslation from 'src/hooks/use-translation.hook';
import useLoginForm from './hooks/use-login-form.hook';
import useLoginHook from './hooks/use-login.hook';
import useLoginMutation from './mutations/use-login.mutation.hook';

export default function useLoginViewModel() {
  const navigation = useLoginHook();
  const loginForm = useLoginForm();
  const { t } = useTranslation();

  const loginMutation = useLoginMutation({
    onSuccess: async (req: { accessToken: string; refreshToken: string }) => {
      Alert.alert('Login successful');

      tokenStore.actions.storeTokens(req);
      await tokenStore.actions.persist();

      navigation.handleLogin();
    },
    onFailure: () => {
      Alert.alert('Login failed');
    },
  });

  return {
    handleGoToRegister: navigation.handleRegister,
    loginForm,
    loginMutation,
    t,
  };
}
