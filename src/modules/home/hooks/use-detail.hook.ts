import { useNavigation } from '@react-navigation/native';
import RouteNames from 'src/configs/routes/route.constant';
import { UseNavigation } from 'src/configs/routes/route.type';
import { DetailType } from 'src/modules/detail/detail.route';

export default function useDetail() {
  const { push } = useNavigation<UseNavigation>();
  const handleToDetail = (id: string, title: string, type: DetailType) => {
    push(RouteNames.Detail, {
      id,
      title,
      type,
    });
  };

  return handleToDetail;
}
