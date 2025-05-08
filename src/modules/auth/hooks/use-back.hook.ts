import { useNavigation } from '@react-navigation/native';
import { UseNavigation } from 'src/configs/routes/route.type';

export default function useBack() {
  const { goBack } = useNavigation<UseNavigation>();

  return goBack;
}
