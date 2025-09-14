import React, { useState, useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stepper,
  Step,
  StepLabel,
  Alert,
  Chip,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  CloudUpload as UploadIcon,
  InsertPhoto as PhotoIcon,
  Camera as CameraIcon,
  BarChart as ChartIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  Info as InfoIcon,
  AccessTime as TimeIcon,
  Thermostat as TempIcon,
  WaterDrop as HumidityIcon,
  Help as HelpIcon
} from '@mui/icons-material';

const EnhancedQualityAnalysis = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCrop, setSelectedCrop] = useState('');
  
  const fileInputRef = useRef(null);

  // List of available crops for analysis
  const cropOptions = [
    'Apples', 'Tomatoes', 'Potatoes', 'Onions', 'Mangoes', 
    'Grapes', 'Strawberries', 'Bananas', 'Carrots', 'Cucumbers'
  ];

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    
    if (selectedFile) {
      if (!selectedFile.type.includes('image/')) {
        setError('Please upload an image file (JPG, PNG, etc.)');
        return;
      }
      
      setFile(selectedFile);
      
      // Create a preview URL
      const previewUrl = URL.createObjectURL(selectedFile);
      setPreview(previewUrl);
      
      // Reset results and error
      setResults(null);
      setError(null);
      
      // Move to next step
      setActiveStep(1);
    }
  };

  const handleCameraCapture = () => {
    // In a real app, this would trigger the device camera
    // For demo purposes, we'll just open the file selector
    fileInputRef.current.click();
  };

  const handleCropSelect = (crop) => {
    setSelectedCrop(crop);
    // Move to next step
    setActiveStep(2);
  };

  const handleAnalyze = () => {
    if (!file) {
      setError('Please upload an image first.');
      return;
    }
    
    if (!selectedCrop) {
      setError('Please select a crop type.');
      return;
    }
    
    // Simulate ML analysis with a delay
    setAnalyzing(true);
    setError(null);
    
    setTimeout(() => {
      // Mock results - in a real app, this would come from the ML model
      const mockResults = {
        overallQuality: 'Good',
        score: 87,
        freshness: 'Fresh',
        estimatedShelfLife: '5-7 days',
        ripeness: 'Optimal',
        detectedIssues: [
          {
            issue: 'Minor bruising detected',
            severity: 'Low',
            impact: 'Minimal impact on quality and shelf life'
          }
        ],
        recommendations: [
          'Store at 2-4°C for optimal shelf life',
          'Suitable for immediate consumption or cold storage',
          'Best consumed within 5 days for peak quality'
        ],
        nutritionalEstimate: {
          quality: 'High',
          nutrientRetention: '95%',
          ripeness: 'Optimal'
        },
        storageRecommendations: {
          temperature: '2-4°C',
          humidity: '85-90%',
          packaging: 'Ventilated containers',
          maxDuration: '7 days'
        }
      };
      
      setResults(mockResults);
      setAnalyzing(false);
      setActiveStep(3);
    }, 2500);
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setResults(null);
    setError(null);
    setSelectedCrop('');
    setActiveStep(0);
  };

  // Render the appropriate step content
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ textAlign: 'center', py: 3 }}>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              ref={fileInputRef}
            />
            
            <Typography variant="h6" gutterBottom>
              Upload or Capture an Image
            </Typography>
            
            <Typography variant="body2" color="text.secondary" paragraph>
              Provide a clear image of your produce for the most accurate analysis
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' }, 
              justifyContent: 'center',
              gap: 2,
              mt: 3
            }}>
              <Button
                variant="contained"
                startIcon={<UploadIcon />}
                onClick={() => fileInputRef.current.click()}
                size="large"
              >
                Upload Image
              </Button>
              
              <Button
                variant="outlined"
                startIcon={<CameraIcon />}
                onClick={handleCameraCapture}
                size="large"
              >
                Take Photo
              </Button>
            </Box>
            
            <Box sx={{ mt: 4, mb: 2 }}>
              <Divider>
                <Chip label="Supported Crops" />
              </Divider>
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
              {cropOptions.map((crop) => (
                <Chip key={crop} label={crop} variant="outlined" />
              ))}
            </Box>
          </Box>
        );
        
      case 1:
        return (
          <Box sx={{ py: 3 }}>
            <Typography variant="h6" gutterBottom>
              Select Crop Type
            </Typography>
            
            <Typography variant="body2" color="text.secondary" paragraph>
              Select the type of crop in your image for more accurate analysis
            </Typography>
            
            {preview && (
              <Box sx={{ mb: 3, textAlign: 'center' }}>
                <Card sx={{ maxWidth: 400, mx: 'auto' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={preview}
                    alt="Product preview"
                    sx={{ objectFit: 'contain' }}
                  />
                </Card>
              </Box>
            )}
            
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {cropOptions.map((crop) => (
                <Grid item xs={6} sm={4} md={3} key={crop}>
                  <Button
                    fullWidth
                    variant={selectedCrop === crop ? "contained" : "outlined"}
                    onClick={() => handleCropSelect(crop)}
                    sx={{ py: 1.5 }}
                  >
                    {crop}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
        
      case 2:
        return (
          <Box sx={{ py: 3 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Confirm and Analyze
                </Typography>
                
                <Typography variant="body2" paragraph>
                  Review your selections and click "Analyze Quality" to start the AI analysis
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Card sx={{ mb: 3 }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={preview}
                      alt="Product preview"
                      sx={{ objectFit: 'contain' }}
                    />
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="subtitle1">
                          Selected Crop:
                        </Typography>
                        <Chip label={selectedCrop} color="primary" />
                      </Box>
                    </CardContent>
                  </Card>
                  
                  {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                      {error}
                    </Alert>
                  )}
                  
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={handleAnalyze}
                      disabled={analyzing}
                      fullWidth
                    >
                      {analyzing ? <CircularProgress size={24} sx={{ mr: 1 }} /> : <ChartIcon sx={{ mr: 1 }} />}
                      {analyzing ? 'Analyzing...' : 'Analyze Quality'}
                    </Button>
                    
                    <Button
                      variant="outlined"
                      onClick={handleReset}
                      disabled={analyzing}
                    >
                      Reset
                    </Button>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3, bgcolor: '#f8f9fa' }}>
                  <Typography variant="h6" gutterBottom>
                    How It Works
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Our AI analyzes your produce for:
                    </Typography>
                    
                    <List dense>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                        <ListItemText primary="Freshness & Quality" secondary="Visual indicators of freshness and overall quality" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                        <ListItemText primary="Ripeness Assessment" secondary="Determining optimal ripeness stage" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                        <ListItemText primary="Defect Detection" secondary="Identifying bruises, spots, or other issues" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                        <ListItemText primary="Storage Recommendations" secondary="Optimal storage conditions for maximum shelf life" />
                      </ListItem>
                    </List>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary">
                    Our machine learning models have been trained on thousands of images of various 
                    agricultural products to provide accurate and reliable quality assessments.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        );
        
      case 3:
        return (
          <Box sx={{ py: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quality Analysis Results
            </Typography>
            
            {results && (
              <Grid container spacing={4}>
                <Grid item xs={12} md={5}>
                  <Card sx={{ mb: 3 }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={preview}
                      alt="Analyzed product"
                      sx={{ objectFit: 'contain' }}
                    />
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="subtitle1">
                          {selectedCrop}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CircularProgress 
                            variant="determinate" 
                            value={results.score} 
                            size={60} 
                            thickness={5}
                            sx={{ 
                              color: 
                                results.score > 80 ? 'success.main' : 
                                results.score > 60 ? 'warning.main' : 
                                'error.main' 
                            }}
                          />
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              position: 'absolute', 
                              ml: '30px', 
                              color: 
                                results.score > 80 ? 'success.main' : 
                                results.score > 60 ? 'warning.main' : 
                                'error.main'
                            }}
                          >
                            {results.score}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ mt: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2">Quality:</Typography>
                          <Typography variant="body2" fontWeight="bold" color={
                            results.overallQuality === 'Good' ? 'success.main' : 
                            results.overallQuality === 'Average' ? 'warning.main' : 
                            'error.main'
                          }>
                            {results.overallQuality}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2">Freshness:</Typography>
                          <Typography variant="body2" fontWeight="bold">
                            {results.freshness}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2">Ripeness:</Typography>
                          <Typography variant="body2" fontWeight="bold">
                            {results.ripeness}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Shelf Life:</Typography>
                          <Typography variant="body2" fontWeight="bold">
                            {results.estimatedShelfLife}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                  
                  <Box sx={{ textAlign: 'center', mt: 3 }}>
                    <Button 
                      variant="contained" 
                      color="primary"
                      onClick={handleReset}
                    >
                      Analyze Another Product
                    </Button>
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={7}>
                  <Paper sx={{ p: 3, mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h6">
                        Storage Recommendations
                      </Typography>
                      <Tooltip title="These recommendations help maximize shelf life and maintain quality">
                        <IconButton size="small">
                          <InfoIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <TempIcon color="primary" sx={{ mr: 1 }} />
                          <Box>
                            <Typography variant="body2" color="text.secondary">Temperature</Typography>
                            <Typography variant="body1" fontWeight="medium">
                              {results.storageRecommendations.temperature}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <HumidityIcon color="primary" sx={{ mr: 1 }} />
                          <Box>
                            <Typography variant="body2" color="text.secondary">Humidity</Typography>
                            <Typography variant="body1" fontWeight="medium">
                              {results.storageRecommendations.humidity}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <InfoIcon color="primary" sx={{ mr: 1 }} />
                          <Box>
                            <Typography variant="body2" color="text.secondary">Packaging</Typography>
                            <Typography variant="body1" fontWeight="medium">
                              {results.storageRecommendations.packaging}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <TimeIcon color="primary" sx={{ mr: 1 }} />
                          <Box>
                            <Typography variant="body2" color="text.secondary">Maximum Storage</Typography>
                            <Typography variant="body1" fontWeight="medium">
                              {results.storageRecommendations.maxDuration}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                  
                  {results.detectedIssues && results.detectedIssues.length > 0 && (
                    <Paper sx={{ p: 3, mb: 3, bgcolor: '#fff8e1' }}>
                      <Typography variant="h6" gutterBottom>
                        Detected Issues
                      </Typography>
                      
                      {results.detectedIssues.map((issue, index) => (
                        <Box key={index} sx={{ mb: index < results.detectedIssues.length - 1 ? 2 : 0 }}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <InfoIcon sx={{ mt: 0.5, mr: 1, color: 
                              issue.severity === 'High' ? 'error.main' : 
                              issue.severity === 'Medium' ? 'warning.main' : 
                              'info.main'
                            }} />
                            <Box>
                              <Typography variant="body1" fontWeight="medium">
                                {issue.issue}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Severity: {issue.severity} • {issue.impact}
                              </Typography>
                            </Box>
                          </Box>
                          {index < results.detectedIssues.length - 1 && <Divider sx={{ my: 1.5 }} />}
                        </Box>
                      ))}
                    </Paper>
                  )}
                  
                  <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Recommendations
                    </Typography>
                    
                    <List>
                      {results.recommendations.map((rec, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <CheckIcon color="success" />
                          </ListItemIcon>
                          <ListItemText primary={rec} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            )}
          </Box>
        );
        
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ pt: 3, pb: 6 }}>
        <Typography variant="h4" gutterBottom>
          AI-Powered Quality Analysis
        </Typography>
        
        <Paper sx={{ p: 3, mb: 4, bgcolor: '#e8f5e9' }}>
          <Typography variant="h6">
            Instant Food Quality Assessment
          </Typography>
          <Typography variant="body1">
            Our machine learning technology analyzes your produce to determine quality, freshness, 
            and provides storage recommendations to maximize shelf life.
          </Typography>
        </Paper>
        
        <Paper sx={{ p: 3, mb: 4 }}>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
            <Step>
              <StepLabel>Upload Image</StepLabel>
            </Step>
            <Step>
              <StepLabel>Select Crop</StepLabel>
            </Step>
            <Step>
              <StepLabel>Analyze</StepLabel>
            </Step>
            <Step>
              <StepLabel>View Results</StepLabel>
            </Step>
          </Stepper>
          
          {getStepContent(activeStep)}
        </Paper>
      </Box>
    </Container>
  );
};

export default EnhancedQualityAnalysis;
