import { Box, Typography } from '@mui/material';

interface WindProps {
  wind: number;
}

export default function Wind({ wind }: WindProps) {
  return (
    <Box display={'flex'} sx={{ alignItems: 'flex-end' }}>
      <Typography variant="h2" fontWeight={400} lineHeight={1}>
        {Math.round(wind)}
      </Typography>
      <Typography variant="h6" fontWeight={400} sx={{ display: 'absolute', bottom: 0 }}>
        km/h
      </Typography>
    </Box>
  );
}
