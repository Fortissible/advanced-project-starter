import RouteNames from '@src/configs/router/router.names';
import { DetailRouteParams } from '@src/modules/detail/detail.route';
import { useNavigate } from 'react-router';
import urlcat from 'urlcat';

export default function useDetailNavigation() {
  const navigate = useNavigate();
  const handleToDetail = (params: DetailRouteParams) => {
    navigate(urlcat(RouteNames.Detail, params));
  };

  return handleToDetail;
}
