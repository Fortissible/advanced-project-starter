import queryConfig from '@src/configs/query/query.config';
import { QueryClient } from '@tanstack/react-query';

const queryAppClient = new QueryClient(queryConfig);

export default queryAppClient;
