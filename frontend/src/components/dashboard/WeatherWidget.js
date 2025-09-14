import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Box,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  WbSunny as SunnyIcon,
  Cloud as CloudIcon,
  Opacity as OpacityIcon,
  Air as AirIcon,
} from '@mui/icons-material';

const WeatherWidget = () => {
  // Mock weather data
  const weatherData = {
    location: 'Shimla, Himachal Pradesh',
    currentTemp: 24,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    forecast: [
      { day: 'Wed', temp: 25, condition: 'Sunny' },
      { day: 'Thu', temp: 23, condition: 'Cloudy' },
      { day: 'Fri', temp: 21, condition: 'Rain' },
      { day: 'Sat', temp: 19, condition: 'Rain' },
      { day: 'Sun', temp: 22, condition: 'Cloudy' },
    ],
  };

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Sunny':
        return <SunnyIcon sx={{ fontSize: 36, color: '#ff9800' }} />;
      case 'Cloudy':
        return <CloudIcon sx={{ fontSize: 36, color: '#90a4ae' }} />;
      case 'Rain':
        return <OpacityIcon sx={{ fontSize: 36, color: '#2196f3' }} />;
      case 'Partly Cloudy':
        return <CloudIcon sx={{ fontSize: 36, color: '#90a4ae' }} />;
      default:
        return <SunnyIcon sx={{ fontSize: 36, color: '#ff9800' }} />;
    }
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        title="Weather Forecast"
        subheader={weatherData.location}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {getWeatherIcon(weatherData.condition)}
            <Box sx={{ ml: 2 }}>
              <Typography variant="h3">{weatherData.currentTemp}°C</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {weatherData.condition}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <OpacityIcon sx={{ fontSize: 18, mr: 1, color: '#2196f3' }} />
              <Typography variant="body2">
                Humidity: {weatherData.humidity}%
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AirIcon sx={{ fontSize: 18, mr: 1, color: '#90a4ae' }} />
              <Typography variant="body2">
                Wind: {weatherData.windSpeed} km/h
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {weatherData.forecast.map((day) => (
            <Box
              key={day.day}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="caption">{day.day}</Typography>
              {getWeatherIcon(day.condition)}
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                {day.temp}°
              </Typography>
            </Box>
          ))}
        </Box>
        
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Optimal conditions for apple harvesting this week. Plan irrigation for Friday due to expected rainfall.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
