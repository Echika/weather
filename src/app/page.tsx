"use client";

import {
  Box,
  Container,
  Button,
  Typography,
  TextField,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { WbSunny, Water, Air } from "@mui/icons-material";
import { WeatherData } from "@/types/weather.types";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData>({
    city: "London",
    temperature: "72",
    condition: "Partly cloudy",
    humidity: "65",
    feelsLike: "68",
    windSpeed: "12",
  });
  const [temperature, setTemperature] = useState<string>("72");
  const [currentCity, setCurrentCity] = useState<string>("London");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [condition, setCondition] = useState<string>("Partly Cloudy");
  const [humidity, setHumidity] = useState<string>("65");
  const [feelsLike, setFeelsLike] = useState<string>("68");
  const [windSpeed, setWindSpeed] = useState<string>("12");

  const fetchWeather = async () => {
    if (!city) return;

    setIsLoading(true);
    setMessage("Loading weather data...");

    try {
      const response = await fetch(`https://wttr.in/${city}?format=j1`);
      if (!response.ok) {
        throw new Error("City not found!");
      }
      const data = await response.json();
      const current = data.current_condition[0];

      setWeatherData({
        city: city,
        temperature: current.temp_F,
        condition: current.weatherDesc[0].value,
        feelsLike: current.FeelsLikeF,
        humidity: current.humidity,
        windSpeed: current.windspeedMiles,
      });

      setCurrentCity(city);
      setTemperature(current.temp_F);
      setCondition(current.weatherDesc[0].value);
      setFeelsLike(current.FeelsLikeF);
      setHumidity(current.humidity);
      setWindSpeed(current.windspeedMiles);
      setMessage(`Weather data loaded for ${city}!`);
      console.log(data);
    } catch (error) {
      setMessage(`Error: Could not find weather for ${city}`);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
          Get accurate weather forecasts for any location worldwide. Stay
          informed about temperature, humidity, wind conditions, and more.
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            marginTop: 4,
            flexWrap: "wrap",
          }}
        >
          {/* Search Section */}
          <Box sx={{ marginTop: 4, marginBottom: 3 }}>
            <Typography variant="h3" component="h2" sx={{ marginBottom: 2 }}>
              Search Weather
            </Typography>

            <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
              <TextField
                label="Enter city name"
                variant="outlined"
                fullWidth
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && city) {
                    fetchWeather();
                  }
                }}
                placeholder="e.g. London, Amsterdam, Lagos"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={fetchWeather}
                disabled={!city || isLoading}
              >
                {isLoading ? "Loading..." : "Search"}
              </Button>
              <Button
                onClick={() => {
                  setCity("");
                  setMessage("");
                  setWeatherData({
                    city: "London",
                    temperature: "72",
                    condition: "Partly Cloudy",
                    feelsLike: "68",
                    humidity: "65",
                    windSpeed: "12",
                  });
                }}
                variant="outlined"
                color="secondary"
                disabled={!city}
              >
                Clear
              </Button>
            </Box>

            {city && (
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Searching for: <strong>{city}</strong>
              </Typography>
            )}

            {message && (
              <Typography
                variant="body1"
                sx={{ marginBottom: 2, color: "yellow" }}
              >
                {message}
              </Typography>
            )}
          </Box>

          {/* Weather Card Section */}
          <Box sx={{ marginTop: 6 }}>
            <Typography variant="h3" component="h2" sx={{ marginBottom: 3 }}>
              Current Weather
            </Typography>
            {isLoading ? (
              <Card
                sx={{
                  padding: 4,
                  color: "white",
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography variant="h4">Loading weather data...</Typography>
                  <Typography
                    variant="body1"
                    sx={{ marginTop: 2, opacity: 0.7 }}
                  >
                    Please wait
                  </Typography>
                </CardContent>
              </Card>
            ) : (
              <Card
                sx={{
                  padding: 2,
                  color: "white",
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{ marginBottom: 2 }}
                  >
                    {weatherData.city}
                  </Typography>

                  <Typography
                    variant="h1"
                    component="p"
                    sx={{
                      fontSize: { xs: "3rem", md: "5rem" },
                      fontWeight: 700,
                      marginBottom: 1,
                    }}
                  >
                    {weatherData.temperature}°F
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{ marginBottom: 3, opacity: 0.9 }}
                  >
                    {weatherData.condition}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 4,
                      marginTop: 3,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <WbSunny sx={{ fontSize: 30, opacity: 0.7 }} />
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                          Feels Like
                        </Typography>
                        <Typography variant="h6">{feelsLike}°F</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Water sx={{ fontSize: 30, opacity: 0.7 }} />
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                          Humidity
                        </Typography>
                        <Typography variant="h6">
                          {weatherData.humidity}%
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Air sx={{ fontSize: 30, opacity: 0.7 }} />
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                          Wind Speed
                        </Typography>
                        <Typography variant="h6">
                          {weatherData.windSpeed} mph
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
