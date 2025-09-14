import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid, 
  Card, 
  CardContent,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  CircularProgress,
  Autocomplete
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const EnhancedColdStorageInsights = () => {
  const [loading, setLoading] = useState(true);
  const [storageData, setStorageData] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  
  // Simulating data loading from CSV
  useEffect(() => {
    // This would normally be an API call to load the CSV data
    // For now, we'll create some mock data based on the CSV structure
    const mockDataFromCSV = [
      {
        state: 'Andhra Pradesh',
        projects: 27,
        capacity: 179281,
        availableCapacity: 43000,
        temperature: '2-4°C',
        humidity: '85-90%',
        costPerUnit: 'Rs. 350 per ton/month',
        facilities: [
          { name: 'AP Cold Storage Hub', location: 'Vijayawada', capacity: 45000, available: 12000, temp: '2°C' },
          { name: 'Coastal Preservation Center', location: 'Rajahmundry', capacity: 35000, available: 8000, temp: '3°C' },
          { name: 'Krishna Valley Storage', location: 'Guntur', capacity: 52000, available: 15000, temp: '4°C' },
          { name: 'Godavari Cooling Systems', location: 'Kakinada', capacity: 47281, available: 8000, temp: '2°C' }
        ]
      },
      {
        state: 'Gujarat',
        projects: 205,
        capacity: 925058,
        availableCapacity: 230000,
        temperature: '0-5°C',
        humidity: '80-90%',
        costPerUnit: 'Rs. 320 per ton/month',
        facilities: [
          { name: 'Ahmedabad Cold Chain', location: 'Ahmedabad', capacity: 155000, available: 42000, temp: '2°C' },
          { name: 'Surat Fresh Storage', location: 'Surat', capacity: 125000, available: 38000, temp: '1°C' },
          { name: 'Kutch Cold Systems', location: 'Bhuj', capacity: 95000, available: 25000, temp: '0°C' },
          { name: 'Vadodara Preservation Hub', location: 'Vadodara', capacity: 118000, available: 35000, temp: '3°C' }
        ]
      },
      {
        state: 'Punjab',
        projects: 57,
        capacity: 267231,
        availableCapacity: 78000,
        temperature: '1-4°C',
        humidity: '85-92%',
        costPerUnit: 'Rs. 380 per ton/month',
        facilities: [
          { name: 'Amritsar Cold Hub', location: 'Amritsar', capacity: 65000, available: 18000, temp: '2°C' },
          { name: 'Ludhiana Storage Center', location: 'Ludhiana', capacity: 72000, available: 22000, temp: '3°C' },
          { name: 'Jalandhar Cold Chain', location: 'Jalandhar', capacity: 53000, available: 15000, temp: '1°C' },
          { name: 'Patiala Fresh Storage', location: 'Patiala', capacity: 58000, available: 21000, temp: '2°C' }
        ]
      },
      {
        state: 'Uttar Pradesh',
        projects: 127,
        capacity: 635152,
        availableCapacity: 185000,
        temperature: '1-5°C',
        humidity: '80-90%',
        costPerUnit: 'Rs. 310 per ton/month',
        facilities: [
          { name: 'Lucknow Cold Systems', location: 'Lucknow', capacity: 125000, available: 35000, temp: '3°C' },
          { name: 'Kanpur Storage Hub', location: 'Kanpur', capacity: 135000, available: 42000, temp: '2°C' },
          { name: 'Agra Fresh Preservation', location: 'Agra', capacity: 98000, available: 28000, temp: '1°C' },
          { name: 'Varanasi Cold Chain', location: 'Varanasi', capacity: 105000, available: 32000, temp: '2°C' }
        ]
      },
      {
        state: 'Himachal Pradesh',
        projects: 10,
        capacity: 23025,
        availableCapacity: 8500,
        temperature: '0-4°C',
        humidity: '85-95%',
        costPerUnit: 'Rs. 400 per ton/month',
        facilities: [
          { name: 'Shimla Apple Storage', location: 'Shimla', capacity: 8500, available: 2500, temp: '1°C' },
          { name: 'Kullu Valley Cold Hub', location: 'Kullu', capacity: 7200, available: 3000, temp: '0°C' },
          { name: 'Mandi Preservation Center', location: 'Mandi', capacity: 4800, available: 1800, temp: '2°C' },
          { name: 'Solan Fruit Storage', location: 'Solan', capacity: 2525, available: 1200, temp: '1°C' }
        ]
      },
      {
        state: 'Karnataka',
        projects: 19,
        capacity: 106011,
        availableCapacity: 32000,
        temperature: '2-6°C',
        humidity: '80-90%',
        costPerUnit: 'Rs. 360 per ton/month',
        facilities: [
          { name: 'Bangalore Fresh Storage', location: 'Bangalore', capacity: 35000, available: 9500, temp: '4°C' },
          { name: 'Mysore Cold Systems', location: 'Mysore', capacity: 28000, available: 7800, temp: '3°C' },
          { name: 'Mangalore Coastal Storage', location: 'Mangalore', capacity: 22000, available: 6500, temp: '2°C' },
          { name: 'Hubli Preservation Hub', location: 'Hubli', capacity: 21011, available: 8200, temp: '4°C' }
        ]
      }
    ];
    
    // Simulate loading delay
    setTimeout(() => {
      setStorageData(mockDataFromCSV);
      setFilteredData(mockDataFromCSV);
      
      // Extract state options for dropdown
      const states = mockDataFromCSV.map(item => item.state);
      setStateOptions(states);
      
      setLoading(false);
    }, 1000);
  }, []);
  
  // Handle state selection
  const handleStateChange = (event, newValue) => {
    setSelectedState(newValue);
    
    if (newValue) {
      const filtered = storageData.filter(item => item.state === newValue);
      setFilteredData(filtered);
    } else {
      setFilteredData(storageData);
    }
  };
  
  // Calculate total available capacity
  const totalAvailableCapacity = filteredData.reduce((sum, item) => sum + item.availableCapacity, 0);
  
  return (
    <Container maxWidth="xl">
      <Box sx={{ pt: 3, pb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Cold Storage Insights
        </Typography>
        
        <Paper sx={{ p: 3, mb: 4, bgcolor: '#e8f5e9' }}>
          <Typography variant="h6" gutterBottom>
            Cold Storage Facilities Across India
          </Typography>
          <Typography variant="body1">
            Find and analyze cold storage facilities with real-time monitoring of capacity, temperature, and availability.
            Data sourced from official agricultural records.
          </Typography>
        </Paper>
        
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {/* Search and Filter Section */}
            <Paper sx={{ p: 3, mb: 4 }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Autocomplete
                    options={stateOptions}
                    value={selectedState}
                    onChange={handleStateChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search by State"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                          ...params.InputProps,
                          startAdornment: (
                            <>
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                              {params.InputProps.startAdornment}
                            </>
                          ),
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                    <Typography variant="h6" color="primary">
                      Available Capacity: {totalAvailableCapacity.toLocaleString()} tons
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Across {filteredData.length} states and {filteredData.reduce((sum, item) => sum + item.projects, 0)} facilities
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
            
            {/* State-wise Storage Overview */}
            <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
              {selectedState ? `${selectedState} Cold Storage Facilities` : 'State-wise Cold Storage Overview'}
            </Typography>
            
            {filteredData.length === 0 ? (
              <Paper sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h6" color="text.secondary">
                  No cold storage facilities found for the selected criteria.
                </Typography>
              </Paper>
            ) : (
              <>
                {/* Summary Table */}
                <TableContainer component={Paper} sx={{ mb: 4 }}>
                  <Table>
                    <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                      <TableRow>
                        <TableCell><Typography fontWeight="bold">State</Typography></TableCell>
                        <TableCell align="right"><Typography fontWeight="bold">Total Projects</Typography></TableCell>
                        <TableCell align="right"><Typography fontWeight="bold">Total Capacity (tons)</Typography></TableCell>
                        <TableCell align="right"><Typography fontWeight="bold">Available Capacity (tons)</Typography></TableCell>
                        <TableCell align="right"><Typography fontWeight="bold">Avg. Temperature</Typography></TableCell>
                        <TableCell align="right"><Typography fontWeight="bold">Cost</Typography></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredData.map((item) => (
                        <TableRow key={item.state}>
                          <TableCell component="th" scope="row">
                            <Typography fontWeight="medium">{item.state}</Typography>
                          </TableCell>
                          <TableCell align="right">{item.projects}</TableCell>
                          <TableCell align="right">{item.capacity.toLocaleString()}</TableCell>
                          <TableCell align="right">{item.availableCapacity.toLocaleString()}</TableCell>
                          <TableCell align="right">{item.temperature}</TableCell>
                          <TableCell align="right">{item.costPerUnit}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                
                {/* Detailed Facilities */}
                {filteredData.map((stateData) => (
                  <Box key={stateData.state} sx={{ mb: 5 }}>
                    <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box component="span" sx={{ width: 12, height: 12, bgcolor: 'primary.main', borderRadius: '50%', mr: 1 }}></Box>
                      {stateData.state} - Available Facilities
                    </Typography>
                    
                    <Grid container spacing={3}>
                      {stateData.facilities.map((facility, idx) => (
                        <Grid item xs={12} sm={6} md={3} key={idx}>
                          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                              <Typography variant="h6" gutterBottom>
                                {facility.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" gutterBottom>
                                {facility.location}
                              </Typography>
                              <Divider sx={{ my: 1.5 }} />
                              <Box sx={{ mt: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                  <Typography variant="body2">Total Capacity:</Typography>
                                  <Typography variant="body2" fontWeight="bold">{facility.capacity.toLocaleString()} tons</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                  <Typography variant="body2">Available Space:</Typography>
                                  <Typography variant="body2" fontWeight="bold" color="success.main">
                                    {facility.available.toLocaleString()} tons
                                  </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                  <Typography variant="body2">Temperature:</Typography>
                                  <Typography variant="body2" fontWeight="bold">{facility.temp}</Typography>
                                </Box>
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                ))}
              </>
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default EnhancedColdStorageInsights;
