import { CircularProgress, Grid2 } from '@mui/material';
import WeatherInfoPaper from './WeatherInfoPaper';

export default function WeatherInfoGridSkeleton() {
  return (
    <Grid2 container spacing={2} paddingY={3} paddingX={{ xs: 0, sm: 24 }}>
      {[...Array(4).keys()].map((index) => (
        <Grid2 size={6} key={'grid' + index}>
          <WeatherInfoPaper key={'paper' + index}>
            <CircularProgress key={'progress' + index} color="inherit" size={70} />
          </WeatherInfoPaper>
        </Grid2>
      ))}
    </Grid2>
  );
}
