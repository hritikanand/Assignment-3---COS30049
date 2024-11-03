import React, { forwardRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import useMediaQuery from '@mui/material/useMediaQuery';

const ContactSection = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    subject: '',
    question: '',
  });
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);

  const isFullScreen = useMediaQuery('(min-width: 1200px)');
  const isSmallScreen = useMediaQuery('(max-width: 1200px)');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFormData({ email: '', phone: '', subject: '', question: '' });
    setSnackbarMessage('Form has been cleared');
    setIsSuccess(true);
    setSnackbarOpen(true);
  };

  const validateEmail = (email) => {
    // Simple email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email) {
      setSnackbarMessage('Email is required');
      setIsSuccess(false);
      setSnackbarOpen(true);
      return;
    }
    if (!validateEmail(formData.email)) {
      setSnackbarMessage('Please enter a valid email address');
      setIsSuccess(false);
      setSnackbarOpen(true);
      return;
    }
    if (!formData.question) {
      setSnackbarMessage('Please enter your question');
      setIsSuccess(false);
      setSnackbarOpen(true);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSnackbarMessage('Thank you for reaching out to us! Your question has been submitted. Our team will reach out to you soon.');
      setIsSuccess(true);
      setSnackbarOpen(true);
    }, 3000);
  };

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: isFullScreen ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        padding: '60px 20px',
      }}
    >
      {!isFullScreen && (
        <Typography
          variant="h3"
          sx={{
            marginTop: '20px',
            fontWeight: 700,
            fontFamily: '"Roboto Condensed", sans-serif',
            fontSize: '3.0rem',
            fontStyle: 'italic',
            color: 'black',
            textAlign: 'center',
            marginBottom: '30px',
          }}
        >
          REACH OUT TO US
        </Typography>
      )}

      <Box
        sx={{
          backgroundColor: '#F5F5F5',
          padding: '40px',
          borderRadius: '10px',
          width: isSmallScreen ? '70vw' : '40%',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          marginX: 'auto',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            fontFamily: '"Roboto Condensed", sans-serif',
            fontSize: '2rem',
            color: '#2F4F4F',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Have a Question?
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
          }}
          noValidate
          autoComplete="off"
        >
          {/* Email Field */}
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            sx={{ backgroundColor: 'white' }}
            InputLabelProps={{ style: { fontWeight: 'bold', color: '#A3A7AF' } }}
          />

          {/* Phone and Subject Fields */}
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <TextField
              name="phone"
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
              sx={{ backgroundColor: 'white' }}
              InputLabelProps={{ style: { fontWeight: 'bold', color: '#A3A7AF' } }}
            />
            <TextField
              name="subject"
              label="Subject"
              variant="outlined"
              fullWidth
              value={formData.subject}
              onChange={handleChange}
              sx={{ backgroundColor: 'white' }}
              InputLabelProps={{ style: { fontWeight: 'bold', color: '#A3A7AF' } }}
            />
          </Box>

          {/* Question Field */}
          <TextField
            name="question"
            label="Question*"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={formData.question}
            onChange={handleChange}
            sx={{ backgroundColor: 'white' }}
            InputLabelProps={{ style: { fontWeight: 'bold', color: '#A3A7AF' } }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              onClick={handleClear}
              variant="outlined"
              sx={{
                color: '#2F4F4F',
                borderColor: '#D3D3D3',
                fontWeight: 'bold',
                backgroundColor: '#E0E0E0',
                padding: '12px 24px',
              }}
            >
              Clear Form
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#2F4F4F',
                color: 'white',
                fontWeight: 'bold',
                padding: '12px 45px',
              }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
            </Button>
          </Box>
        </Box>
      </Box>

      {isFullScreen && (
        <Box
          sx={{
            position: 'relative',
            textAlign: 'center',
            width: '45%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: 'calc(60% + 10px)',
              height: '350px',
              backgroundColor: '#F5F5F5',
              borderRadius: '0px 0px 0px 500px',
              zIndex: -1,
              right: '50px',
              transform: 'translateY(-28%)',
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontFamily: '"Roboto Condensed", sans-serif',
              fontSize: '5rem',
              fontStyle: 'italic',
              color: 'black',
              lineHeight: 1.2,
              zIndex: 1,
              paddingLeft: '120px',
              transform: 'translateX(-30%)',
            }}
          >
            REACH OUT
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontFamily: '"Roboto Condensed", sans-serif',
              fontSize: '5rem',
              fontStyle: 'italic',
              color: 'black',
              lineHeight: 1.2,
              zIndex: 1,
              paddingLeft: '150px',
              transform: 'translateX(-50%)'
            }}
          >
            TO US
          </Typography>
        </Box>
      )}

      {/* Snackbar */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
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
        />
      </Snackbar>
    </Box>
  );
});

export default ContactSection;
