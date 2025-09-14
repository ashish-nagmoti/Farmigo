import React from 'react';
import {
  Box,
  Typography,
  Paper,
  useTheme,
} from '@mui/material';
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Tooltip,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import indiaStatesGeoJson from '../../data/india-states.json';

const StateWiseMap = ({ data, onStateSelect }) => {
  const theme = useTheme();
  
  // Function to get color based on number of projects
  const getColor = (totalProjects) => {
    return totalProjects > 100 ? '#006d2c' :
           totalProjects > 50 ? '#31a354' :
           totalProjects > 20 ? '#74c476' :
           totalProjects > 10 ? '#a1d99b' :
           totalProjects > 5 ? '#c7e9c0' :
                              '#edf8e9';
  };

  // Style function for GeoJSON features
  const style = (feature) => {
    const stateName = feature.properties.name;
    const stateData = data.find(item => item.state.toLowerCase() === stateName.toLowerCase());
    
    return {
      fillColor: stateData ? getColor(stateData.totalProjects) : '#edf8e9',
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  };

  // On each feature event handlers
  const onEachFeature = (feature, layer) => {
    const stateName = feature.properties.name;
    const stateData = data.find(item => item.state.toLowerCase() === stateName.toLowerCase());
    
    if (stateData) {
      layer.bindTooltip(() => {
        return `
          <div>
            <strong>${stateData.state}</strong><br/>
            Projects: ${stateData.totalProjects}<br/>
            Capacity: ${stateData.totalCapacity.toLocaleString()} MT
          </div>
        `;
      });
      
      layer.on({
        click: () => onStateSelect(stateData.state)
      });
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        State-wise Cold Storage Distribution
      </Typography>
      
      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <Typography variant="body2" gutterBottom>
          Click on a state to view detailed information. States are colored based on the number of cold storage projects.
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 20, height: 20, backgroundColor: '#edf8e9', mr: 1 }} />
            <Typography variant="caption">0-5 Projects</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 20, height: 20, backgroundColor: '#c7e9c0', mr: 1 }} />
            <Typography variant="caption">6-10 Projects</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 20, height: 20, backgroundColor: '#a1d99b', mr: 1 }} />
            <Typography variant="caption">11-20 Projects</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 20, height: 20, backgroundColor: '#74c476', mr: 1 }} />
            <Typography variant="caption">21-50 Projects</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 20, height: 20, backgroundColor: '#31a354', mr: 1 }} />
            <Typography variant="caption">51-100 Projects</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 20, height: 20, backgroundColor: '#006d2c', mr: 1 }} />
            <Typography variant="caption">100+ Projects</Typography>
          </Box>
        </Box>
      </Paper>
      
      <Box sx={{ height: 500, width: '100%', border: `1px solid ${theme.palette.divider}` }}>
        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={5}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON
            data={indiaStatesGeoJson}
            style={style}
            onEachFeature={onEachFeature}
          />
        </MapContainer>
      </Box>
    </Box>
  );
};

export default StateWiseMap;
