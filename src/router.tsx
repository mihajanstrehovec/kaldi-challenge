import { Home } from '@mui/icons-material';
import { createBrowserRouter } from 'react-router-dom';
import WeatherReport from './pages/WeatherReport';
import ErrorPage from './pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/:city',
    element: <WeatherReport />,
    errorElement: <ErrorPage />
  }
]);
