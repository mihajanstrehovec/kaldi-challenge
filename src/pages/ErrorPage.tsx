import { Container, Stack, Typography } from '@mui/material';

export default function ErrorPage() {
  return (
    <Container sx={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      <Stack>
        <Typography variant={'h1'} fontWeight={500} color="white" textAlign={'center'} sx={{ textShadow: '0px 0px 6px black;' }}>
          404
        </Typography>
        <Typography variant={'h6'} color="white" textAlign={'center'} sx={{ textShadow: '0px 0px 6px black;' }}>
          Sorry this page does not exist {':('}
        </Typography>
      </Stack>
    </Container>
  );
}
