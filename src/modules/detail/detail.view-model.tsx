import { RouteProp, useRoute } from '@react-navigation/native';
import RouteNames from 'src/configs/routes/route.constant';
import { RouteStackParam } from 'src/configs/routes/route.type';
import useTranslation from 'src/hooks/use-translation.hook';
import useBack from '../auth/hooks/use-back.hook';

export default function useDetailViewModel() {
  const route = useRoute<RouteProp<RouteStackParam, RouteNames.Detail>>();
  const goBack = useBack();
  const { t } = useTranslation();

  return {
    detailId: route.params.id,
    detailTitle: route.params.title,
    detailType: route.params.type,
    handleGoBack: goBack,
    t,
  };
}
