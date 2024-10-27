// src/components/Home/HomeSection.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Import the hero image
import heroImage from '../../assets/hero1.jpg';

function HomeSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        padding: '0',
        gap: '20px',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Title Section */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '100px', md: '125px' },
          left: { xs: '20px', md: '10px' },
          zIndex: 3,
          transform: 'translateY(-100%)',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 500,
            color: 'black',
            lineHeight: 1,
          }}
        >
          DISCOVER THE FUTURE
        </Typography>
      </Box>

      {/* Content Wrapper to shift down */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'stretch',
          width: '100%',
          gap: '20px',
          paddingTop: '130px',
        }}
      >
        {/* Grey Background Box */}
        <Box
          sx={{
            backgroundColor: '#D3D3D3',
            borderRadius: '0 25px 25px 0',
            width: { xs: '100%', md: '30%' },
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 0', // Reduced padding on sides to avoid extra space
            paddingTop: 0,
            boxSizing: 'border-box',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Inside Grey Box: "HOME FOR YOU" Heading */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 500,
              color: 'black',
              margin: 0,
              padding: 0,
              paddingTop: '10px',
              lineHeight: 1,
              textAlign: 'center', // Centering text within the grey box
            }}
          >
            HOME FOR YOU
          </Typography>

          {/* Green Box inside the Grey Box */}
          <Box
            sx={{
              backgroundColor: '#2F4F4F',
              color: 'white',
              borderRadius: '0 350px 350px 0',
              width: '100%',
              flexGrow: 1, // Allows the green box to take up remaining space
              boxSizing: 'border-box',
              padding: '25px',
              marginTop: '20px', // Reduced top margin to lift the box
              paddingTop: '-20px', // Adding negative padding to lift the content
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', // Center content vertically
              zIndex: 2,
            }}
          >
            <Typography variant="body1" sx={{ mb: 3, fontWeight: 'normal' }}>
              Placeholder for text relating to what this website is about and what it can do, and add a call to action for the user to click the button below.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ backgroundColor: 'white', color: '#2F4F4F', fontWeight: 'bold',borderRadius: '30px 30px 30px 30px' }}
              endIcon={<span>&rarr;</span>}
            >
              Get Started
            </Button>
          </Box>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 3,
          }}
        >
          <img
            src={heroImage}
            alt="Person with laptop"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '100%',
              objectFit: 'cover',
              borderRadius: '25px 0 0 25px',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default HomeSection;
