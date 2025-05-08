import { setupServer } from 'msw/node';
import postHandler from './handlers/post.handler';

const mockPostServer = setupServer(...postHandler);

export default mockPostServer;
