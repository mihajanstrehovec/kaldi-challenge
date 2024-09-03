import { Box, FormHelperText, Typography } from '@mui/material';

export default function FormikError({ touched, errors }: { touched?: boolean; errors?: string }) {
  return (
    <Box>
      {touched ? (
        <FormHelperText id="city-error" disabled={false} error={touched && Boolean(errors)} sx={{ position: 'absolute' }}>
          <Typography fontWeight={500} sx={{ typography: { xs: 'body2', md: 'body1' } }} color={'deep-red'}>
            {errors}
          </Typography>
        </FormHelperText>
      ) : (
        <></>
      )}
    </Box>
  );
}
