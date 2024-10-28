// src/components/Home/ContactSection.js
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

// Using forwardRef to expose the section for scrolling
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email) {
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
    if (!validateEmail(formData.email)) {
      setSnackbarMessage('Please enter a valid email address');
      setIsSuccess(false);
      setSnackbarOpen(true);
      return;
    }
    if (formData.phone && !validatePhone(formData.phone)) {
      setSnackbarMessage('Please enter a valid phone number');
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
    }, 10000);
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        padding: '60px 65px',
      }}
    >
      {/* Form Section */}
      <Box
        sx={{
          backgroundColor: '#F5F5F5',
          padding: '40px',
          borderRadius: '10px',
          width: { xs: '100%', md: '40%' },
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          marginLeft: '50px',
        }}
      >
        <Typography
          variant="h5"
          sx={{ 
            fontWeight: 'bold', 
            fontFamily: '"Roboto Condensed", sans-serif',
            fontSize: '2.8rem',
            color: '#2F4F4F', 
            marginBottom: '30px' 
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
        <TextField
          name="phone"
          label="Phone Number"
          variant="outlined"
          fullWidth
          value={formData.phone}
          onChange={handleChange}
          sx={{ 
            backgroundColor: 'white',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderWidth: '3px', // thickness of the outline
                borderColor: '#CED1D6'
              },
              '&:hover fieldset': {
                borderWidth: '3px', //thickness on hover
                borderColor: '#2F4F4F', //color when hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#2F4F4F', //color when focused
                borderWidth: '3px', // thickness when focused
              },
            },
          }}
          InputLabelProps={{
            style: { fontWeight: 'bold', color: '#A3A7AF' },
          }}
        />
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <TextField
              name="phone"
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
              sx={{ 
                backgroundColor: 'white',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderWidth: '3px', // thickness of the outline
                    borderColor: '#CED1D6'                
                  },
                  '&:hover fieldset': {
                    borderWidth: '3px', //thickness on hover
                    borderColor: '#2F4F4F', //color when hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#2F4F4F', //color when focused
                    borderWidth: '3px', // thickness when focused
                  },
                },
              }}
              InputLabelProps={{
                style: { fontWeight: 'bold', color: '#A3A7AF' },
              }}
            />
            <TextField
              name="subject"
              label="Subject"
              variant="outlined"
              fullWidth
              value={formData.subject}
              onChange={handleChange}
              sx={{ 
                backgroundColor: 'white',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderWidth: '3px', // thickness of the outline
                    borderColor: '#CED1D6'
                  },
                  '&:hover fieldset': {
                    borderWidth: '3px', //thickness on hover
                    borderColor: '#2F4F4F', //color when hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#2F4F4F', //color when focused
                    borderWidth: '3px', // thickness when focused
                  },
                },
              }}
              InputLabelProps={{
                style: { fontWeight: 'bold', color: '#A3A7AF' },
              }}
            />
          </Box>
          <TextField
            name="question"
            label="Question*"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={formData.question}
            onChange={handleChange}
            sx={{ 
              backgroundColor: 'white',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderWidth: '3px', // thickness of the outline
                  borderColor: '#CED1D6'
                },
                '&:hover fieldset': {
                  borderWidth: '3px', //thickness on hover
                  borderColor: '#2F4F4F', //color when hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#2F4F4F', //color when focused
                  borderWidth: '3px', // thickness when focused
                },
              },
            }}
            InputLabelProps={{
              style: { fontWeight: 'bold', color: '#A3A7AF' },
            }}
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
                '&:hover': {
                  backgroundColor: '#2F4F4F',
                },
              }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Additional Content Section */}
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
          width: { xs: '100%', md: '45%' },
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

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
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
        />
      </Snackbar>
    </Box>
  );
});

export default ContactSection;
