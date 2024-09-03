import sunnyBackground from '../img/sunny-background.png';
import cloudyBackground from '../img/cloudy-background.png';
import rainyBackground from '../img/rainy-background.png';
import snowyBackground from '../img/snowy-background.png';

export type WeatherIconCode =
  | '01d'
  | '01n'
  | '02d'
  | '02n'
  | '03d'
  | '03n'
  | '04d'
  | '04n'
  | '09d'
  | '09n'
  | '10d'
  | '10n'
  | '11d'
  | '11n'
  | '13d'
  | '13n'
  | '50d'
  | '50n';

type CustomIconPath = string;

const iconMapping: Record<WeatherIconCode, CustomIconPath> = {
  '01d': sunnyBackground,
  '01n': sunnyBackground,
  '02d': sunnyBackground,
  '02n': sunnyBackground,
  '03d': cloudyBackground,
  '03n': cloudyBackground,
  '04d': cloudyBackground,
  '04n': cloudyBackground,
  '09d': rainyBackground,
  '09n': rainyBackground,
  '10d': rainyBackground,
  '10n': rainyBackground,
  '11d': rainyBackground,
  '11n': rainyBackground,
  '13d': snowyBackground,
  '13n': snowyBackground,
  '50d': cloudyBackground,
  '50n': cloudyBackground
};

export default function getWeatherIcon(iconCode: WeatherIconCode): CustomIconPath {
  return iconMapping[iconCode];
}
