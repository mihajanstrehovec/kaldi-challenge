import { useQuery } from '@tanstack/react-query';
import { WeatherIconCode } from '../utils/getWeatherIcon';

export interface WeatherApiResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: WeatherIconCode;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  rain?: {
    '1h'?: number;
    '3h'?: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

const apiKey = process.env.REACT_APP_API_KEY;

export interface WeatherQuery {
  city: string;
  initialData?: WeatherApiResponse;
}

export default function useWeatherQuery({ city, initialData }: WeatherQuery) {
  const queryFn = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    return response.json();
  };

  return useQuery({
    queryKey: ['weather', city],
    queryFn,
    initialData
  });
}
