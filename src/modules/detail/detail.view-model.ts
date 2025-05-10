import useBack from '@src/hooks/use-back.hook';
import useTranslation from '@src/hooks/use-translation.hook';
import { useParams, useSearchParams } from 'react-router';

export default function useDetailViewModel() {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const goBack = useBack();
  const { t } = useTranslation();

  return {
    detailId: searchParams.get('id'),
    detailTitle: searchParams.get('title'),
    detailType: params.type,
    handleGoBack: goBack,
    t,
  };
}
