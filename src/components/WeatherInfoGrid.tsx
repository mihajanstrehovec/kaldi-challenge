import { Grid2 } from '@mui/material';
import WeatherInfoPaper from './WeatherInfoPaper';
import humidityBackground from '../img/humidity-background.png';
import minmaxBackground from '../img/minmax-background.png';
import windBackground from '../img/wind-background.png';
import Temperature from './WeatherData/Temperature';
import Humidity from './WeatherData/Humidity';
import MinMaxTemp from './WeatherData/MinMaxTemp';
import Wind from './WeatherData/Wind';
import getWeatherIcon, { WeatherIconCode } from '../utils/getWeatherIcon';

export interface WeatherInfoGridProps {
  temp: number;
  feels_like: number;
  humidity: number;
  temp_max: number;
  temp_min: number;
  wind: number;
  weather_icon: WeatherIconCode;
}

export default function WeatherInfoGrid({ temp, feels_like, humidity, temp_max, temp_min, wind, weather_icon }: WeatherInfoGridProps) {
  return (
    <Grid2 container spacing={2} paddingY={3} paddingX={{ xs: 1, sm: 14, lg: 24 }}>
      <Grid2 size={6}>
        <WeatherInfoPaper backgroundImg={getWeatherIcon(weather_icon)}>
          <Temperature temperature={temp} feels_like={feels_like} />
        </WeatherInfoPaper>
      </Grid2>
      <Grid2 size={6}>
        <WeatherInfoPaper backgroundImg={humidityBackground} sx={{ position: 'relative' }}>
          <Humidity humidity={humidity} />
        </WeatherInfoPaper>
      </Grid2>
      <Grid2 size={6}>
        <WeatherInfoPaper backgroundImg={minmaxBackground} backgroundSize="contain" backgroundPosition="center">
          <MinMaxTemp max={temp_max} min={temp_min} />
        </WeatherInfoPaper>
      </Grid2>
      <Grid2 size={6}>
        <WeatherInfoPaper backgroundImg={windBackground} backgroundSize="contain" backgroundPosition="left">
          <Wind wind={wind} />
        </WeatherInfoPaper>
      </Grid2>
    </Grid2>
  );
}
