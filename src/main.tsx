import { createRoot } from 'react-dom/client';
import ContainerApp from './apps/container/container.app';
import './main.css';

createRoot(document.getElementById('root')!).render(<ContainerApp />);
