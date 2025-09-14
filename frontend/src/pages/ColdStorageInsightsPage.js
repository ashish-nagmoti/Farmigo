import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
  Paper,
  CircularProgress,
  Alert,
} from '@mui/material';
import { 
  fetchStatewiseColdStorageData,
  fetchColdStorageInsightsSummary
} from '../redux/slices/insightsSlice';
import InsightsSummaryCards from '../components/insights/InsightsSummaryCards';
import StateWiseTable from '../components/insights/StateWiseTable';
import StateWiseMap from '../components/insights/StateWiseMap';
import StateDetails from '../components/insights/StateDetails';
import StatewiseCharts from '../components/insights/StatewiseCharts';
import Meta from '../components/ui/Meta';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const ColdStorageInsightsPage = () => {
  const dispatch = useDispatch();
  const [tabValue, setTabValue] = useState(0);
  const [selectedState, setSelectedState] = useState(null);
  
  const { 
    statewiseData, 
    summaryData, 
    loading, 
    error 
  } = useSelector((state) => state.insights);

  useEffect(() => {
    dispatch(fetchStatewiseColdStorageData());
    dispatch(fetchColdStorageInsightsSummary());
  }, [dispatch]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setTabValue(3); // Switch to the State Details tab
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert severity="error" sx={{ mt: 4 }}>
          Error loading cold storage insights: {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <Meta title="Cold Storage Insights | Farmigo" />
      
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Cold Storage Insights
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph>
          Comprehensive data on cold storage projects across India from 2017 to 2022. 
          This data is sourced from government records and provides insights into cold storage 
          capacity and project distribution by state.
        </Typography>

        {summaryData && <InsightsSummaryCards summaryData={summaryData} />}

        <Paper sx={{ mt: 4 }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Table View" />
            <Tab label="Map View" />
            <Tab label="Charts" />
            <Tab label="State Details" disabled={!selectedState} />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            {statewiseData && (
              <StateWiseTable 
                data={statewiseData} 
                onStateSelect={handleStateSelect}
              />
            )}
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            {statewiseData && (
              <StateWiseMap 
                data={statewiseData} 
                onStateSelect={handleStateSelect}
              />
            )}
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            {statewiseData && (
              <StatewiseCharts data={statewiseData} />
            )}
          </TabPanel>

          <TabPanel value={tabValue} index={3}>
            {selectedState && statewiseData && (
              <StateDetails stateData={statewiseData.find(s => s.state === selectedState)} />
            )}
          </TabPanel>
        </Paper>
      </Box>
    </Container>
  );
};

export default ColdStorageInsightsPage;
