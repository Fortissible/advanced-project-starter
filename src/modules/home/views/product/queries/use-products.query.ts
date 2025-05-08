import { useQuery } from '@tanstack/react-query';
import { fakeStoreApiService } from 'src/services/fake-store-api/fake-store-api.service';

export default function useProductQuery() {
  const { data, isError, isFetched, isPending, refetch } = useQuery({
    queryFn: () => fakeStoreApiService.product.getAllProduct(),
    queryKey: ['getProducts'],
  });

  return { data, isError, isFetched, isPending, refetch };
}
