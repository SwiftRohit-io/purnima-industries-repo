import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { site } from '@/config/site';
import { initAnalytics } from '@/lib/analytics';
import './styles/index.css';

if (import.meta.env.PROD) initAnalytics(site.gtagId);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
