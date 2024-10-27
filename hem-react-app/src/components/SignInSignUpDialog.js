import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  SnackbarContent,
  CircularProgress,
  IconButton
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import CloseIcon from '@mui/icons-material/Close';

function SignInSignUpDialog({ open, onClose }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign In and Sign Up modes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFormData({ email: '', password: '' });
    setSnackbarMessage('Form has been cleared');
    setIsSuccess(true);
    setSnackbarOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password
    if (!formData.email || !validateEmail(formData.email)) {
      setSnackbarMessage('Please enter a valid email address');
      setIsSuccess(false);
      setSnackbarOpen(true);
      return;
    }
    if (!formData.password) {
      setSnackbarMessage('Password is required');
      setIsSuccess(false);
      setSnackbarOpen(true);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSnackbarMessage(
        `Thank you for ${isSignUp ? 'signing up' : 'signing in'}!`
      );
      setIsSuccess(true);
      setSnackbarOpen(true);
      onClose(); // Close the dialog after submission
    }, 2000); // Simulate submission delay
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>
          {isSignUp ? 'Sign Up' : 'Sign In'}
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#2F4F4F', 
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              backgroundColor: '#F5F5F5',
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <TextField
              name="email"
              label="Email Address*"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              sx={{ backgroundColor: 'white' }}
              InputLabelProps={{
                style: { fontWeight: 'bold', color: '#2F4F4F' },
              }}
            />
            <TextField
              name="password"
              label="Password*"
              type="password"
              variant="outlined"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              sx={{ backgroundColor: 'white' }}
              InputLabelProps={{
                style: { fontWeight: 'bold', color: '#2F4F4F' },
              }}
            />
          </Box>
          <Typography
            sx={{ cursor: 'pointer', color: '#2F4F4F', mt: 2 }}
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? (
              <>
                Already have an account?{' '}
                <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Sign In</span>
              </>
            ) : (
              <>
                New user?{' '}
                <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Sign Up</span>
              </>
            )}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClear} variant="outlined" sx={{ color: '#2F4F4F' }}>
            Clear Form
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="contained"
            sx={{
              backgroundColor: '#2F4F4F',
              color: 'white',
              '&:hover': {
                backgroundColor: '#2F4F4F',
              },
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <SnackbarContent
          style={{
            backgroundColor: isSuccess ? '#FFFFFF' : '#FFFFFF',
            border: `2px solid ${isSuccess ? '#2F4F4F' : '#FF0000'}`,
            color: isSuccess ? '#2F4F4F' : '#FF0000',
            display: 'flex',
            alignItems: 'center',
          }}
          message={
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {isSuccess ? (
                <CheckCircleIcon style={{ marginRight: '8px', color: '#2F4F4F' }} />
              ) : (
                <ErrorIcon style={{ marginRight: '8px', color: '#FF0000' }} />
              )}
              {snackbarMessage}
            </span>
          }
          action={
            <IconButton size="small" color="inherit" onClick={handleCloseSnackbar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </Snackbar>
    </>
  );
}

export default SignInSignUpDialog;
