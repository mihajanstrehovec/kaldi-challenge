import { Stack, Typography } from '@mui/material';

interface MinMaxTempProps {
  min: number;
  max: number;
}

export default function MinMaxTemp({ min, max }: MinMaxTempProps) {
  return (
    <Stack>
      <Typography variant="h2" fontWeight={400}>
        {Math.round(max)}°
      </Typography>
      <Typography variant="h2" fontWeight={400}>
        {Math.round(min)}°
      </Typography>
    </Stack>
  );
}
