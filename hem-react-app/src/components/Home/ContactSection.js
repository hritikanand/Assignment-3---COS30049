// src/components/Home/ContactForm.js
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ContactForm() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        padding: '60px 20px',
      }}
    >
      {/* Form Section */}
      <Box
        sx={{
          backgroundColor: '#F5F5F5', // Light grey background for enclosing box
          padding: '30px',
          borderRadius: '10px',
          width: { xs: '100%', md: '45%' },
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', color: '#2F4F4F', marginBottom: '20px' }}
        >
          Reach Out to Us
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Email Address*"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: 'white' }} // White background for fields
            InputLabelProps={{
              style: { fontWeight: 'bold', color: '#2F4F4F' },
            }}
          />
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              sx={{ backgroundColor: 'white' }} // White background
              InputLabelProps={{
                style: { fontWeight: 'bold', color: '#2F4F4F' },
              }}
            />
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              sx={{ backgroundColor: 'white' }} // White background
              InputLabelProps={{
                style: { fontWeight: 'bold', color: '#2F4F4F' },
              }}
            />
          </Box>
          <TextField
            label="Question"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{ backgroundColor: 'white' }} // White background
            InputLabelProps={{
              style: { fontWeight: 'bold', color: '#2F4F4F' },
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="outlined"
              sx={{
                color: '#2F4F4F',
                borderColor: '#D3D3D3',
                fontWeight: 'bold',
                backgroundColor: '#E0E0E0',
              }}
            >
              Clear Form
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#2F4F4F',
                color: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#2F4F4F',
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Text Section */}
      <Box
        sx={{
          textAlign: 'center',
          width: { xs: '100%', md: '45%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontWeight: 'bold',
          fontSize: '48px',
          color: '#2F4F4F',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
          REACH OUT
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
          TO US
        </Typography>
      </Box>
    </Box>
  );
}

export default ContactForm;
