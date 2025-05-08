import { useNavigation } from '@react-navigation/native';
import RouteNames from 'src/configs/routes/route.constant';
import { UseNavigation } from 'src/configs/routes/route.type';

export default function useNavigate() {
  const { navigate, push } = useNavigation<UseNavigation>();
  const handleLogin = () => {
    // Navigate to TabNavigation -> Posts tab
    navigate(RouteNames.TabNavigation, {
      screen: RouteNames.Posts,
      params: undefined,
    });
  };
  const handleRegister = () => {
    // Navigate to TabNavigation -> Posts tab
    push(RouteNames.Register);
  };

  return { handleLogin, handleRegister };
}
