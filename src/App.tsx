import './App.css';
import { ThemeProvider } from 'styled-components';
import Wrapper from './components/layout/Wrapper/Wrapper';
// import AddBandForm from './modules/dashboard/Band/AddBandForm';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const theme = {
  white: '#ECECEF',
  dark: '#0A0A0B',
  gray: '#6B6B71',
  red: '#772525',
  redLight: '#F2A9A9',
  rounded: '.24rem'
}

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ThemeProvider theme={theme}>
              <Wrapper>
                <RouterProvider router={ router } />
              </Wrapper>
            </ThemeProvider>
          </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
