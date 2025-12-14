'use client'


import { Box, Container, Typography} from '@mui/material'

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" component="h1">
          Weather Forecast
        </Typography>

        <Typography variant="h2" component="h2">
          Your Personal Weather Dashboard
        </Typography>

        <Typography variant="body1" component="p">
          Get accurate weather forecasts for any location worldwide. 
          Stay informed about temperature, humidity, wind conditions, and more.
        </Typography>

        <Typography variant="h3" component="h3">
          Features
        </Typography>

        <Typography variant="body2" component="p">
          Real-time weather updates
        </Typography>

        <Typography variant="body2" component="p">
          5-day detailed forecast
        </Typography>

        <Typography variant="body2" component="p">
          Search any city globally
        </Typography>

        <Typography variant="body2" component="p" color="text.secondary">
          Powered by professional weather data services
        </Typography>
      </Container>
    </Box>
  );
}