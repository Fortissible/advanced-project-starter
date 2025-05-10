import useTranslation from '@src/hooks/use-translation.hook';
import useDetailNavigation from '@src/modules/home/hooks/use-detail-navigation.hook';
import useProductQuery from '@src/modules/home/views/products/queries/use-product.query';

export default function useProductViewModel() {
  const { t } = useTranslation();
  const useProducts = useProductQuery();
  const handleToDetail = useDetailNavigation();

  return {
    handleToDetail,
    useProducts,
    t,
  };
}
