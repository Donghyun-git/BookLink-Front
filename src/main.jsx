import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { queryClient } from './services/query';

export let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback>
            <App />
          </Suspense>
        </QueryClientProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
