import { Stack, Typography } from '@mui/material';

interface TemperatureProps {
  temperature: number;
  feels_like: number;
}

export default function Temperature({ temperature, feels_like }: TemperatureProps) {
  return (
    <Stack>
      <Typography variant="h2" fontWeight={400}>
        {Math.round(temperature)}°
      </Typography>
      <Typography textAlign={'right'} variant="body1" fontWeight={400}>
        Feels like {Math.round(feels_like)}°
      </Typography>
    </Stack>
  );
}
