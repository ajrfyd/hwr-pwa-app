import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from './lib/styles/global.ts';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import client from './lib/query/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <GlobalStyles />
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
