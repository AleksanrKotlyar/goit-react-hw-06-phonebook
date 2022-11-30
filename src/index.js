import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './components/Utils/index.css';
import { theme } from './components/Utils/theme';
import { ThemeProvider } from 'styled-components';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
