import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import WeatherReport from './pages/WeatherReport';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { SearchHistoryProvider } from './SearchHistoryContext';
import ErrorPage from './pages/ErrorPage';

const theme = createTheme({
  typography: {
    fontFamily: '"Barlow", "Helvetica", "Arial", sans-serif'
  },
  palette: {
    primary: {
      main: '#FFFFFF',
      dark: '#DDD'
    },

    text: {
      primary: '#757575'
    }
  }
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/:city',
    element: <WeatherReport />,
    errorElement: <ErrorPage />
  }
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <SearchHistoryProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </SearchHistoryProvider>
  </React.StrictMode>
);

reportWebVitals();
