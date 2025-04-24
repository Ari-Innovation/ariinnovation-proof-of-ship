import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThirdwebProvider } from 'thirdweb/react';

import { queryClient } from './providers/client/query/queryClient.ts';
import ConnectivityProvider from './providers/client/connectivity/ConnectivityProvider.tsx';
import App from './App.tsx';
import './App.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConnectivityProvider>
        <ThirdwebProvider>
          <App />
        </ThirdwebProvider>
      </ConnectivityProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);
