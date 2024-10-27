// src/components/Home/HomeSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Import the hero image
import heroImage from '../../assets/hero1.jpg';

function HomeSection() {
  const navigate = useNavigate();

  // Function to handle navigation when the button is clicked
  const handleGetStartedClick = () => {
    navigate('/predict');
  };

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
            padding: '20px 0',
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
              textAlign: 'center',
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
              flexGrow: 1,
              boxSizing: 'border-box',
              padding: '0 25px 15px 25px', // Adjust padding for height
              marginTop: '10px', // Adjust margin to bring content higher
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              zIndex: 2,
              paddingLeft: '20px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                marginTop: '-70px',
                marginLeft: '-10px',
                marginRight: '20px',
                mb: 2, // Adjusted for more space above button
                fontWeight: 'normal',
                textAlign: 'center',
                fontSize: '1.1rem',
                fontStyle: 'italic',
              }}
            >
              Stay a step ahead in Melbourne’s housing market. Our platform harnesses machine learning to bring you personalized price forecasts for residential properties—empowering you to buy, sell, or invest with clarity and confidence
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleGetStartedClick}
              sx={{
                
                marginTop:'10px',
                marginLeft: '-70px',
                backgroundColor: 'white',
                color: '#2F4F4F',
                fontWeight: 'bold',
                borderRadius: '30px',              
                alignSelf: 'center ',
                width: '250px'
              }}
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
