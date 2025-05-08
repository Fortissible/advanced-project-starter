import { useQuery } from '@tanstack/react-query';
import { dummyJsonApiService } from 'src/services/dummy-json/dummy-json-api.service';

export default function useUsersQuery() {
  const { data, isError, isFetched, isPending, refetch } = useQuery({
    queryFn: () => dummyJsonApiService.users.getAllUser(),
    queryKey: ['getUsers'],
  });

  return { data, isError, isFetched, isPending, refetch };
}
