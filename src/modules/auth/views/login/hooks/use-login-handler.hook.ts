import RouteNames from '@src/configs/router/router.names';
import { useNavigate } from 'react-router';

export default function useLoginHandler() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(RouteNames.Posts);
  };

  const handleRegister = () => {
    navigate(RouteNames.Register);
  };

  return {
    handleLogin,
    handleRegister,
  };
}
