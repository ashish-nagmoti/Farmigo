import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  TextField,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Alert
} from '@mui/material';

const SimpleQualityAnalysis = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    
    if (selectedFile) {
      setFile(selectedFile);
      
      // Create a preview URL
      const previewUrl = URL.createObjectURL(selectedFile);
      setPreview(previewUrl);
      
      // Reset results and error
      setResults(null);
      setError(null);
    }
  };

  const handleAnalyze = () => {
    if (!file) {
      setError('Please upload an image first.');
      return;
    }
    
    // Simulate ML analysis with a delay
    setAnalyzing(true);
    setError(null);
    
    setTimeout(() => {
      // Mock results - in a real app, this would come from the ML model
      const mockResults = {
        quality: 'Good',
        score: 87,
        freshness: 'Fresh',
        estimatedShelfLife: '5-7 days',
        issues: [],
        recommendations: [
          'Store at 2-4°C for optimal shelf life',
          'Suitable for immediate consumption or cold storage'
        ]
      };
      
      setResults(mockResults);
      setAnalyzing(false);
    }, 2000);
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setResults(null);
    setError(null);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ pt: 3, pb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Food Quality Analysis
        </Typography>
        
        <Paper sx={{ p: 3, mb: 4, bgcolor: '#e8f5e9' }}>
          <Typography variant="h6">
            ML-Powered Quality Detection
          </Typography>
          <Typography variant="body1">
            Upload an image of your produce to analyze its quality, freshness, and get storage recommendations
          </Typography>
        </Paper>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Upload Product Image
              </Typography>
              
              <Box sx={{ my: 2 }}>
                <TextField
                  type="file"
                  fullWidth
                  variant="outlined"
                  inputProps={{
                    accept: 'image/*'
                  }}
                  onChange={handleFileChange}
                />
              </Box>
              
              {error && (
                <Alert severity="error" sx={{ my: 2 }}>
                  {error}
                </Alert>
              )}
              
              <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAnalyze}
                  disabled={!file || analyzing}
                  fullWidth
                >
                  {analyzing ? <CircularProgress size={24} /> : 'Analyze Quality'}
                </Button>
                
                <Button
                  variant="outlined"
                  onClick={handleReset}
                  disabled={analyzing}
                  fullWidth
                >
                  Reset
                </Button>
              </Box>
              
              {preview && (
                <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Image Preview:
                  </Typography>
                  <Card>
                    <CardMedia
                      component="img"
                      height="250"
                      image={preview}
                      alt="Product preview"
                      sx={{ objectFit: 'contain' }}
                    />
                  </Card>
                </Box>
              )}
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Analysis Results
              </Typography>
              
              {analyzing ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 8 }}>
                  <CircularProgress size={60} />
                  <Typography sx={{ mt: 2 }}>
                    Analyzing your product...
                  </Typography>
                </Box>
              ) : results ? (
                <Card sx={{ bgcolor: '#f5f5f5' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h5" sx={{ mr: 2 }}>
                        Quality Score:
                      </Typography>
                      <Typography 
                        variant="h4" 
                        color={results.score > 80 ? 'success.main' : results.score > 60 ? 'warning.main' : 'error.main'}
                        fontWeight="bold"
                      >
                        {results.score}/100
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body1">Overall Quality:</Typography>
                        <Typography variant="body1" fontWeight="bold">{results.quality}</Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body1">Freshness:</Typography>
                        <Typography variant="body1" fontWeight="bold">{results.freshness}</Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1">Estimated Shelf Life:</Typography>
                        <Typography variant="body1" fontWeight="bold">{results.estimatedShelfLife}</Typography>
                      </Box>
                    </Box>
                    
                    <Typography variant="h6" gutterBottom>
                      Recommendations:
                    </Typography>
                    
                    <Box component="ul" sx={{ pl: 2 }}>
                      {results.recommendations.map((rec, index) => (
                        <Typography component="li" key={index} sx={{ mb: 0.5 }}>
                          {rec}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              ) : (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 8 }}>
                  <Typography color="text.secondary">
                    Upload an image and click "Analyze Quality" to see results
                  </Typography>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SimpleQualityAnalysis;
