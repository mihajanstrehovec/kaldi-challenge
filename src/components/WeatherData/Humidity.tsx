import { Box, Typography } from '@mui/material';

interface HumidityProps {
  humidity: number;
}

export default function Humidity({ humidity }: HumidityProps) {
  return (
    <Box>
      <Typography variant="h6" fontWeight={400} color={'white'} lineHeight={1} position={'absolute'} top={10} left={15}>
        Humidity
      </Typography>
      <Box display={'flex'} sx={{ alignItems: 'flex-end' }}>
        <Typography variant="h2" fontWeight={400} lineHeight={1}>
          {Math.round(humidity)}
        </Typography>
        <Typography variant="h6" fontWeight={400} sx={{ display: 'absolute', bottom: 0 }}>
          %
        </Typography>
      </Box>
    </Box>
  );
}
