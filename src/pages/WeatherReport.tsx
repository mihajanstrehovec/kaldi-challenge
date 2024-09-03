import { Button, Container, Grid2, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import SearchHistoryButtons from '../components/SearchHistoryButtons';
import BackgroundBox from '../components/BackgroundBox';
import WeatherInfoGrid from '../components/WeatherInfoGrid';
import useWeatherQuery, { WeatherApiResponse } from '../hooks/useWeatherHook';
import { SearchContextType, useSearchHistory } from '../SearchHistoryContext';
import WeatherInfoGridSkeleton from '../components/WeatherInfoGridSkeleton';
import CityForm from '../components/CityForm';
import HouseIcon from '@mui/icons-material/House';

export default function WeatherReport() {
  const { addSearch } = useSearchHistory() as SearchContextType;
  const navigate = useNavigate();
  let { city } = useParams();

  let weatherQuery = useWeatherQuery({ city: city || '' });
  let data: WeatherApiResponse = weatherQuery.data;

  useEffect(() => {
    if (data && data.cod === 200 && city) {
      console.log(data);
      addSearch(city);
    }
  }, [city, data, addSearch]);

  return (
    <Container
      sx={{
        display: { xs: 'block', sm: 'flex' },
        alignItems: { sm: 'center' },
        justifyContent: 'center',
        height: { sm: '100vh' },
        paddingY: { xs: 2, md: 0 }
      }}>
      <BackgroundBox>
        <Grid2 container display={'flex'}>
          <Grid2 size={{ xs: 2, sm: 1 }} alignContent={'center'} display={'block'}>
            <Button onClick={() => navigate('/')} sx={{ padding: 0 }}>
              <HouseIcon fontSize="large" sx={{ marginLeft: '-10px' }} />
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 10, sm: 11 }}>
            <CityForm />
          </Grid2>
        </Grid2>

        {weatherQuery.isFetching ? (
          <WeatherInfoGridSkeleton />
        ) : !data.main ? (
          <Typography variant={'h6'} color="white" textAlign={'center'} marginY={5} sx={{ textShadow: '0px 0px 6px black' }}>
            Sadly we couldn't find any weather data for your city. Please try a different city.
          </Typography>
        ) : (
          <WeatherInfoGrid
            temp={data.main.temp}
            feels_like={data.main.feels_like}
            temp_max={data.main.temp_max}
            temp_min={data.main.temp_min}
            humidity={data.main.humidity}
            wind={data.wind.speed}
            weather_icon={data.weather[0].icon}
          />
        )}
        <SearchHistoryButtons />
      </BackgroundBox>
    </Container>
  );
}
