import React, { useState, useEffect, useMemo } from 'react';
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
  CircularProgress,
  Autocomplete
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const EnhancedColdStorageInsights = () => {
  const [loading, setLoading] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [stateOptions, setStateOptions] = useState([]);
  const [facilitiesData, setFacilitiesData] = useState([]);
  
  // GeoData from GeoIndiaHandlerGis.ashx - sample of cold storage facilities with location data
  const geoData = useMemo(() => [
    { NameofProject: "ESS EMM GEE ICE FACTORY & COLD STORAGE", latitude: 32.6475, longitude: 74.9432, StateName: "Jammu & Kashmir", DistrictName: "Jammu" },
    { NameofProject: "SNOW VALLEY COLD CHAIN", latitude: 32.6412, longitude: 74.9386, StateName: "Jammu & Kashmir", DistrictName: "Samba" },
    { NameofProject: "AL NOOR AGRI  FRESH PVT. LTD.", latitude: 33.808852, longitude: 74.933234, StateName: "Jammu & Kashmir", DistrictName: "Pulwama" },
    { NameofProject: "AMAR COLD STORAGE", latitude: 32.7142, longitude: 74.8935, StateName: "Jammu & Kashmir", DistrictName: "Jammu" },
    { NameofProject: "HIGHLAND INDUSTRIES", latitude: 32.6469, longitude: 74.9423, StateName: "Jammu & Kashmir", DistrictName: "Jammu" },
    { NameofProject: "BAHU COLD STORAGE & ICE FACTORY (P) LTD.", latitude: 32.7146, longitude: 74.8809, StateName: "Jammu & Kashmir", DistrictName: "Jammu" },
    { NameofProject: "COMAL AGROFOODS LIMITED", latitude: 29.9216, longitude: 75.3922, StateName: "Himachal Pradesh", DistrictName: "Una" },
    { NameofProject: "DEV BHUMI COLD CHAIN LTD", latitude: 31.2109, longitude: 77.4057, StateName: "Himachal Pradesh", DistrictName: "Shimla" },
    { NameofProject: "SHIV SHANKAR COLD STORE", latitude: 31.4681, longitude: 76.2435, StateName: "Himachal Pradesh", DistrictName: "Una" },
    { NameofProject: "HORTITECH FOODS", latitude: 30.9128, longitude: 76.8297, StateName: "Himachal Pradesh", DistrictName: "Solan" },
    { NameofProject: "ZIRA FOODS", latitude: 31.3442, longitude: 76.2427, StateName: "Himachal Pradesh", DistrictName: "Una" },
    { NameofProject: "SHIVIN C.A. STORE", latitude: 30.7547, longitude: 76.6731, StateName: "Himachal Pradesh", DistrictName: "Shimla" },
    { NameofProject: "BIJA POULTRY FARM PVT. LTD.", latitude: 31.3462, longitude: 77.4998, StateName: "Himachal Pradesh", DistrictName: "Shimla" },
    { NameofProject: "ANUBHUTI LOGISTICS PVT. LTD.", latitude: 30.613, longitude: 76.8706, StateName: "Punjab", DistrictName: "Mohali" },
    { NameofProject: "GMH AGRIHUB (SOLE PROPRIETOR-GURMIT SINGH)", latitude: 30.9323, longitude: 75.4916, StateName: "Punjab", DistrictName: "Ludhiana" },
    { NameofProject: "SAKSHI FRUITS & VEGETABLE COLD STORE", latitude: 31.6316, longitude: 74.957, StateName: "Punjab", DistrictName: "Amritsar" },
    { NameofProject: "LALLY COLD STORAGE", latitude: 31.4554, longitude: 75.4565, StateName: "Punjab", DistrictName: "Kapurthala" },
    { NameofProject: "CHEEMA COLD STORE", latitude: 30.7085, longitude: 75.7891, StateName: "Punjab", DistrictName: "Ludhiana" },
    { NameofProject: "SATGUR COLD STORAGE (PROP : KULWINDER SINGH)", latitude: 31.2396, longitude: 75.5001, StateName: "Punjab", DistrictName: "Jalandhar" },
    { NameofProject: "MATTA COLD STORAGE", latitude: 30.597, longitude: 74.8085, StateName: "Punjab", DistrictName: "Faridkot" },
    { NameofProject: "SHANKAR COLD STORES", latitude: 29.9868, longitude: 76.0534, StateName: "Punjab", DistrictName: "Patiala" },
    { NameofProject: "KARTAR COLD STORE", latitude: 30.7786, longitude: 75.4842, StateName: "Punjab", DistrictName: "Ludhiana" },
    { NameofProject: "UPPAL AGROFRESH (INDIA) PVT. LTD.", latitude: 30.4901, longitude: 76.8653, StateName: "Punjab", DistrictName: "Mohali" },
    { NameofProject: "MALWA FRESH FOODS", latitude: 30.2603, longitude: 75.2625, StateName: "Punjab", DistrictName: "Bathinda" },
    { NameofProject: "SUKHJIT COLD STORAGE (PROP: S.SUKHJIT SINGH BHATTI", latitude: 31.2742, longitude: 75.5775, StateName: "Punjab", DistrictName: "Jalandhar" },
    { NameofProject: "FRIENDS COLD STORAGE", latitude: 30.791, longitude: 76.2039, StateName: "Punjab", DistrictName: "Ludhiana" },
    { NameofProject: "SAKSHI FRUIT & VEG. COLD STORE (PROP:RAMAN GUPTA)", latitude: 31.6316, longitude: 74.957, StateName: "Punjab", DistrictName: "Amritsar" },
    { NameofProject: "ARYAVARTA COOL CHAIN", latitude: 30.6125, longitude: 76.8696, StateName: "Punjab", DistrictName: "Mohali" },
    { NameofProject: "GUPTA COLD STORAGE", latitude: 30.0903, longitude: 75.2277, StateName: "Punjab", DistrictName: "Jalandhar" },
    { NameofProject: "SAROJ OVERSEAS PVT. LTD.", latitude: 28.9092, longitude: 77.064, StateName: "Haryana", DistrictName: "Sonipat" },
    { NameofProject: "HARSHNA ICE & COLD STORAGE PVT. LTD.", latitude: 28.8974, longitude: 77.1066, StateName: "Haryana", DistrictName: "Sonipat" },
    { NameofProject: "ASSAM TRADING COMPANY", latitude: 29.0044, longitude: 77.02, StateName: "Haryana", DistrictName: "Sonipat" },
    { NameofProject: "ISHWAR COLD STORE", latitude: 28.8934, longitude: 77.1036, StateName: "Haryana", DistrictName: "Sonipat" },
    { NameofProject: "MRIGESH AGRO & COLD STORAGE PVT. LTD.", latitude: 28.8771, longitude: 77.1048, StateName: "Haryana", DistrictName: "Sonipat" },
    { NameofProject: "R.S FREEZING & COOLING CHAMBERS PVT. LTD.", latitude: 28.8896, longitude: 77.0982, StateName: "Haryana", DistrictName: "Sonipat" },
    { NameofProject: "FLEX FOODS LIMITED", latitude: 30.127924, longitude: 78.166084, StateName: "Uttrakhand", DistrictName: "Dehradun" },
    { NameofProject: "ANNAPURNA COLD STORAGE & ICE FACTORY", latitude: 29.010714, longitude: 79.382895, StateName: "Uttrakhand", DistrictName: "Udham Singh Nagar" },
    { NameofProject: "SHRI JI COLD STORAGE", latitude: 26.9632, longitude: 76.7223, StateName: "Rajasthan", DistrictName: "Bharatpur" },
    { NameofProject: "SHRI POONRASAR ENTERPRISES PRIVATE LIMITED", latitude: 28.0562, longitude: 73.2967, StateName: "Rajasthan", DistrictName: "Bikaner" },
    { NameofProject: "STERLITE AGRO LIMITED", latitude: 25.2616, longitude: 74.6392, StateName: "Rajasthan", DistrictName: "Bhilwara" },
    { NameofProject: "SRI GAJANAND SHEETGRAH PRIVATE LIMITED", latitude: 26.8996715, longitude: 77.7882963, StateName: "Rajasthan", DistrictName: "Dhaulpur" },
    { NameofProject: "PRATAP COLD STORAGE PVT. LTD.", latitude: 26.7821092, longitude: 77.7947313, StateName: "Rajasthan", DistrictName: "Dhaulpur" },
    { NameofProject: "MAA KAILA DEVI COLD STORAGE", latitude: 26.7345529, longitude: 77.8940347, StateName: "Rajasthan", DistrictName: "Dhaulpur" },
    { NameofProject: "RAM RAGHU SHEETGRAH PVT. LTD.", latitude: 27.16, longitude: 78.16, StateName: "Uttar Pradesh", DistrictName: "Firozabad" },
    { NameofProject: "KALESHWAR COLD STORAGE PVT. LTD.", latitude: 27.12, longitude: 78.14, StateName: "Uttar Pradesh", DistrictName: "Faizabad" },
    { NameofProject: "GOLDEN COLD STORAGE", latitude: 27.098, longitude: 80.9458, StateName: "Uttar Pradesh", DistrictName: "Lucknow" },
    { NameofProject: "M. D. FRESH VEG PVT. LTD.", latitude: 27.8156, longitude: 78.0209, StateName: "Uttar Pradesh", DistrictName: "Aligarh" },
    { NameofProject: "SINGH ICE & PRESERVATION (P) LTD.", latitude: 26.6416, longitude: 80.4564, StateName: "Uttar Pradesh", DistrictName: "Unnao" },
    { NameofProject: "NANDINI COLD STORAGE", latitude: 13.25, longitude: 77.55, StateName: "Karnataka", DistrictName: "Bangalore" },
    { NameofProject: "DAIMAND COLD STORAGE", latitude: 12.96, longitude: 77.6, StateName: "Karnataka", DistrictName: "Bangalore" },
    { NameofProject: "ARUN MILK PRODUCTS", latitude: 13.24, longitude: 77.55, StateName: "Karnataka", DistrictName: "Bangalore" },
    { NameofProject: "KALPAKA COLD STORAGE", latitude: 13.0, longitude: 77.61, StateName: "Karnataka", DistrictName: "Bangalore" },
    { NameofProject: "KARNATAKA COLD STORAGE PVT LTD", latitude: 12.94, longitude: 77.57, StateName: "Karnataka", DistrictName: "Bangalore" },
    { NameofProject: "NANDHI COLD STORAGE", latitude: 12.98, longitude: 78.07, StateName: "Karnataka", DistrictName: "Bangalore" },
    { NameofProject: "SNOWMAN FROZEN FOODS.LTD", latitude: 12.97, longitude: 77.59, StateName: "Karnataka", DistrictName: "Bangalore" },
    { NameofProject: "SRI RAGAVEDRA COLD STOREGE", latitude: 13.03, longitude: 77.54, StateName: "Karnataka", DistrictName: "Bangalore" },
    { NameofProject: "PARAYIL FOOD PRODUCTS PVT LTD", latitude: 9.88564, longitude: 76.2971, StateName: "Kerala", DistrictName: "Alappuzha" },
    { NameofProject: "N.S. RATHINAM AND SONS PRIVATE LIMITED", latitude: 10.4531, longitude: 77.9469, StateName: "Tamil Nadu", DistrictName: "Dindigul" },
    { NameofProject: "SNOWFIELD (PARTNERSHIP FIRM)", latitude: 13.0571, longitude: 80.1439, StateName: "Tamil Nadu", DistrictName: "Thiruvallur" },
    { NameofProject: "LAKSHMI SAAI AGRI COLD STORAGE PVT. LTD.", latitude: 13.2751, longitude: 80.1507, StateName: "Tamil Nadu", DistrictName: "Thiruvallur" },
    { NameofProject: "MAGGI COLD STORAGE PRIVATE LIMITED", latitude: 13.1803, longitude: 80.21, StateName: "Tamil Nadu", DistrictName: "Thiruvallur" },
    { NameofProject: "DHIRA COLD STORAGE PRIVATE LIMITED", latitude: 9.96259, longitude: 78.0413, StateName: "Tamil Nadu", DistrictName: "Madurai" },
    { NameofProject: "ANTARRTICA, PROP-D.V. KARUNAKAR", latitude: 13.0372, longitude: 80.0435, StateName: "Tamil Nadu", DistrictName: "Thiruvallur" },
    { NameofProject: "GOPAL KRISHNA COLD STORAGES", latitude: 13.0551, longitude: 80.0572, StateName: "Tamil Nadu", DistrictName: "Thiruvallur" },
    { NameofProject: "SAI SRINIVASA COLD STORAGE", latitude: 17.252, longitude: 80.1395, StateName: "Telangana", DistrictName: "Khammam" },
    { NameofProject: "GANGAA COLD STORAGE", latitude: 17.9802, longitude: 79.5957, StateName: "Telangana", DistrictName: "Warangal" },
    { NameofProject: "SRI KRISHNA COLD STORAGE", latitude: 17.2433, longitude: 80.1385, StateName: "Telangana", DistrictName: "Khammam" },
    { NameofProject: "SRI PEDDAMMA COLD STORAGE LLP", latitude: 16.9549, longitude: 80.0444, StateName: "Telangana", DistrictName: "Nalgonda" },
    { NameofProject: "SREE HARSHA COLD STORAGE", latitude: 16.8186, longitude: 80.0296, StateName: "Telangana", DistrictName: "Nalgonda" }
  ], []);

  // Load state options on initial render
  useEffect(() => {
    // Extract unique state names from geoData
    const uniqueStates = [...new Set(geoData.map(facility => facility.StateName))];
    setStateOptions(uniqueStates.sort());
    setLoading(false);
  }, [geoData]);
  
  // Update facilities when state is selected
  useEffect(() => {
    if (selectedState) {
      // Filter facilities data based on selected state
      const filteredFacilities = geoData.filter(facility => facility.StateName === selectedState);
      setFacilitiesData(filteredFacilities);
    } else {
      setFacilitiesData([]);
    }
  }, [selectedState, geoData]);

  return (
    <Container maxWidth="xl">
      <Box sx={{ pt: 3, pb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Cold Storage Facilities Search
        </Typography>
        
        <Paper sx={{ p: 3, mb: 4, bgcolor: '#e8f5e9' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h6">
                Cold Storage Facilities Across India
              </Typography>
              <Typography variant="body1">
                Search for cold storage facilities by state to view facility names and their locations.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Autocomplete
                options={stateOptions}
                value={selectedState}
                onChange={(event, newValue) => setSelectedState(newValue)}
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
          </Grid>
        </Paper>
        
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {/* Display facilities for selected state */}
            {selectedState ? (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h5" gutterBottom>
                  {selectedState} - Cold Storage Facilities ({facilitiesData.length})
                </Typography>
                
                {facilitiesData.length > 0 ? (
                  <Grid container spacing={3}>
                    {facilitiesData.map((facility, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ height: '100%' }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              {facility.NameofProject}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {facility.DistrictName}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Typography variant="body1" align="center" color="text.secondary" sx={{ mt: 4 }}>
                    No facilities found for {selectedState}.
                  </Typography>
                )}
              </Box>
            ) : (
              <Typography variant="body1" align="center" color="text.secondary" sx={{ mt: 4 }}>
                Please select a state to view cold storage facilities.
              </Typography>
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default EnhancedColdStorageInsights;
