import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  TextField, 
  Grid, 
  Paper, 
  Avatar, 
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link as RouterLink } from 'react-router-dom';
import Meta from '../components/ui/Meta';

const RegisterPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [userType, setUserType] = useState('');

  const steps = ['Account Type', 'Personal Information', 'Account Details'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Registration functionality will be implemented later
    console.log('Registration submitted');
  };

  return (
    <Container component="main" maxWidth="md">
      <Meta title="Register | Farmigo" />
      <Paper elevation={3} sx={{ p: 4, mt: 8, mb: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create an Account
          </Typography>
        </Box>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          {activeStep === 0 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Select Account Type
              </Typography>
              <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                <InputLabel id="user-type-label">I am a</InputLabel>
                <Select
                  labelId="user-type-label"
                  id="user-type"
                  value={userType}
                  label="I am a"
                  onChange={handleUserTypeChange}
                  required
                >
                  <MenuItem value="farmer">Farmer</MenuItem>
                  <MenuItem value="consumer">Consumer</MenuItem>
                  <MenuItem value="broker">Cold Storage Broker</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Selecting the right account type helps us customize your experience.
              </Typography>
            </Box>
          )}

          {activeStep === 1 && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Personal Information
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                  multiline
                  rows={3}
                />
              </Grid>
            </Grid>
          )}

          {activeStep === 2 && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Account Details
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                />
              </Grid>
              
              {userType === 'farmer' && (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="farmDetails"
                    label="Farm Details (Optional)"
                    id="farmDetails"
                    multiline
                    rows={3}
                    placeholder="Tell us about your farm, crops, and produce"
                  />
                </Grid>
              )}
              
              {userType === 'broker' && (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="storageDetails"
                    label="Cold Storage Details (Optional)"
                    id="storageDetails"
                    multiline
                    rows={3}
                    placeholder="Tell us about your cold storage facilities"
                  />
                </Grid>
              )}
            </Grid>
          )}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Box>
              {activeStep === steps.length - 1 ? (
                <Button
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Link component={RouterLink} to="/login" variant="body2">
            Already have an account? Sign in
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
