// src/components/About/About.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function About() {
  return (
    <Box sx={{ padding: '40px 30px' }}>
      {/* Title Section */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 'bold', marginBottom: '40px', color: '#2F4F4F' }}
      >
        About the Model
      </Typography>

      {/* Information Cards Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '100px', // Adjust this for spacing between boxes and footer
        }}
      >
        {['Dataset Explanation', 'Model Selection', 'Model Explanation'].map((title, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              padding: '30px',
              width: { xs: '100%', md: '25%' }, // Set width for vertical rectangles
              height: { xs: 'auto', md: '350px' }, // Increased height for a vertical look
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F5F5F5',
              borderRadius: '20px',
              textAlign: 'center',
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#2F4F4F' }}>
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Info here
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default About;
