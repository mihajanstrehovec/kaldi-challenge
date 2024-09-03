import { Paper, PaperProps } from '@mui/material';

interface WeatherInfoPaperProps extends PaperProps {
  children: React.ReactNode;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundImg?: string;
}

export default function WeatherInfoPaper({
  children,
  backgroundImg,
  backgroundSize = 'cover',
  backgroundPosition = 'inherit',
  sx
}: WeatherInfoPaperProps) {
  return (
    <Paper
      elevation={3}
      sx={{
        height: { xs: 150, md: 230 },
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: backgroundSize,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: backgroundPosition,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx
      }}>
      {children}
    </Paper>
  );
}
