import { Container, Grid2, Stack } from '@mui/material';
import SearchHistoryButtons from '../components/SearchHistoryButtons';
import BackgroundBox from '../components/BackgroundBox';
import CityForm from '../components/CityForm';

export default function Home() {
  return (
    <Container sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
      <BackgroundBox>
        <Grid2 size={{ xs: 12, md: 10 }} height={'100%'} alignContent={'center'}>
          <Stack spacing={2}>
            <CityForm />
            <SearchHistoryButtons />
          </Stack>
        </Grid2>
      </BackgroundBox>
    </Container>
  );
}
