import useTranslation from 'src/hooks/use-translation.hook';
import useDetail from '../../hooks/use-detail.hook';
import useProductQuery from './queries/use-products.query';

export default function useProductViewModel() {
  const { t } = useTranslation();
  const useProducts = useProductQuery();
  const handleToDetail = useDetail();

  return {
    handleToDetail,
    useProducts,
    t,
  };
}
