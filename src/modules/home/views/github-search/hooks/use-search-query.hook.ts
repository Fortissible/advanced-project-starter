import { zodResolver } from '@hookform/resolvers/zod';
import {
  searchQuerySchema,
  SearchQuerySchema,
} from '@src/modules/home/views/github-search/queries/use-search-query.schema';
import { useForm } from 'react-hook-form';

export default function useSearchQuery() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SearchQuerySchema, undefined, SearchQuerySchema>({
    resolver: zodResolver(searchQuerySchema),
    defaultValues: {
      q: 'tom',
    },
  });

  return {
    getValues,
    control,
    handleSubmit,
    errors,
  };
}
