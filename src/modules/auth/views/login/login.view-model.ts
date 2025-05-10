import useLoginForm from '@src/modules/auth/views/login/hooks/use-login-form.hook';
import useLoginHandler from '@src/modules/auth/views/login/hooks/use-login-handler.hook';
import useLoginMutation from '@src/modules/auth/views/login/mutations/use-login.mutation';
import { useTranslation } from 'react-i18next';

export function useLoginViewModel() {
  const loginHandler = useLoginHandler();
  const loginForm = useLoginForm();
  const { t } = useTranslation();

  const loginMutation = useLoginMutation({
    onSuccess: async (res) => {
      alert('Login successful');
      localStorage.setItem('accessToken', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);
      loginHandler.handleLogin();
    },
    onFailure: () => {
      alert('Login failed');
    },
  });

  return {
    handleGoToRegister: loginHandler.handleRegister,
    loginForm,
    loginMutation,
    t,
  };
}
