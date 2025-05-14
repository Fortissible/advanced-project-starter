import { z } from 'zod';

export const searchQuerySchema = z.object({
  q: z.string().min(1, 'Search query is required'),
  page: z.string().optional(),
  per_page: z.string().optional(),
});

export type SearchQuerySchema = z.infer<typeof searchQuerySchema>;
