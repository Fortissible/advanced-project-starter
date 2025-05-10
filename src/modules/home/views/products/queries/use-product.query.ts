import { fakeStoreApiService } from '@src/services/fake-store/fake-store-api.service';
import { useQuery } from '@tanstack/react-query';

export default function useProductQuery() {
  const { data, isError, isFetched, isPending, refetch } = useQuery({
    queryFn: () => fakeStoreApiService.product.getAllProduct(),
    queryKey: ['getProducts'],
  });

  return { data, isError, isFetched, isPending, refetch };
}
