import { Box } from '@mui/material';

export default function BackgroundBox({ children }: { children: React.ReactNode }) {
  return (
    <Box
      height={{ md: 650 }}
      width={'100%'}
      paddingY={'17px'}
      paddingX={{ xs: 1, md: 5 }}
      boxShadow={3}
      borderRadius={'22px'}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        // pseudo element for applying background blur
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#ffffff26',
          backdropFilter: 'blur(3px)',
          background: 'linear-gradient(90deg, rgba(255,255,255,0.16290266106442575) 0%, rgba(82,82,82,0.16010154061624648) 100%)',
          zIndex: 1
        },
        '& > *': {
          position: 'relative',
          zIndex: 2
        }
      }}>
      {children}
    </Box>
  );
}
