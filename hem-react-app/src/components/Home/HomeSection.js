// src/components/Home/HomeSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import heroImage from '../../assets/hero1.PNG';
import useScreenSize from '../../components/Home/useScreenSize';

function HomeSection() {
  const navigate = useNavigate();
  const isFullScreen = useScreenSize();

  const handleGetStartedClick = () => {
    navigate('/predict');
  };

  return (
    <>
      {isFullScreen ? (
        // Full-Screen Layout
        <Box
          sx={{
            marginTop: '-10px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
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
              top: '135px',
              left: '60px',
              zIndex: 3,
              transform: 'translateY(-100%)',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Roboto Condensed", sans-serif',
                fontWeight: 430,
                fontSize: '4.5rem',
                color: 'black',
              }}
            >
              DISCOVER THE FUTURE
            </Typography>
          </Box>

          {/* Content Wrapper */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'stretch',
              width: '100%',
              gap: '20px',
              paddingTop: '130px',
            }}
          >
            {/* Grey Background Box */}
            <Box
              sx={{
                backgroundColor: '#d2d5db',
                borderRadius: '0 25px 25px 0',
                width: '33%',
                display: 'flex',
                flexDirection: 'column',
                padding: '20px 0',
                paddingTop: 0,
                position: 'relative',
                overflow: 'hidden', // Ensure it extends to the bottom
              }}
            >
              {/* Inside Grey Box: "HOME FOR YOU" Heading */}
              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"Roboto Condensed", sans-serif',
                  fontWeight: 430,
                  fontSize: '4.4rem',
                  color: 'black',
                  paddingTop: '10px',
                  paddingLeft: '60px',
                  textAlign: 'left',
                }}
              >
                HOME FOR YOU
              </Typography>

              {/* Green Box */}
              <Box
                sx={{
                  backgroundColor: '#2F4F4F',
                  color: 'white',
                  width: '100%',
                  boxSizing: 'border-box',
                  borderRadius: '0 330px 0 0',
                  padding: '0 50px 25px 20px',
                  marginTop: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  zIndex: 2,
                  transform: 'translateY(20px)',
                  flexGrow: 1, // Allows the green box to stretch downwards
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: '-10px',
                    marginLeft: '45px',
                    marginRight: '20px',
                    fontFamily: '"Roboto Condensed", sans-serif',
                    textAlign: 'left',
                    fontSize: '1.35rem',
                    fontStyle: 'italic',
                  }}
                >
                  Stay a step ahead in Melbourne’s housing market. Our platform harnesses machine learning to bring you personalized price forecasts for residential properties—empowering you to buy, sell, or invest with clarity and confidence.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleGetStartedClick}
                  sx={{
                    marginTop: '10px',
                    marginLeft: '45px',
                    backgroundColor: 'white',
                    color: 'black',
                    fontFamily: '"Roboto Condensed", sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    borderRadius: '30px',
                    width: '200px'
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
                justifyContent: 'right',
                alignItems: 'center',
                zIndex: 3,
              }}
            >
              <Box
                component="img"
                src={heroImage}
                alt="Person with laptop"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '680px',
                  objectFit: 'cover',
                  borderRadius: '25px 0 0 25px',
                }}
              />
            </Box>
          </Box>
        </Box>
      ) : (
        // Small-Screen Layout
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0',
            gap: '10px', // Reduced gap for smaller screen layout
            overflow: 'hidden',
            width: '100%',
          }}
        >
          {/* Text Section */}
          <Box
            sx={{
              width: '80%', // Make the box 80% of the screen width
              padding: '20px',
              textAlign: 'center',
              marginRight: '140px',
              marginLeft: '100px'
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '3rem' },
                fontWeight: 700 , // Set bold for small screens
                fontFamily: '"Roboto Condensed", sans-serif',
                textAlign: 'center',
                marginLeft:'30px' 
              }}
            >
              DISCOVER THE FUTURE
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2.5rem' },
                fontWeight: '500', // Set bold for small screens
                marginTop: '20px',
                fontFamily: '"Roboto Condensed", sans-serif', 
                textAlign: 'center',
                marginLeft:'30px', 

              }}
            >
              HOME FOR YOU
            </Typography>
            <Box
              sx={{
                backgroundColor: '#2F4F4F',
                padding: '20px',
                borderRadius: '10px',
                marginTop: '20px',
                width: '100%',
              }}
            >
              <Typography variant="body1" sx={{ fontSize: '1rem', color: 'white' }}>
                Stay a step ahead in Melbourne’s housing market. Our platform harnesses machine learning to bring you personalized price forecasts for residential properties—empowering you to buy, sell, or invest with clarity and confidence.
              </Typography>
              <Button
                variant="contained"
                onClick={handleGetStartedClick}
                sx={{
                  marginTop: '20px',
                  padding: '10px 20px',
                  fontSize: '1rem',
                  backgroundColor: 'white',
                  color: 'black',
                  fontWeight: 'bold',
                  borderRadius: '30px',
                }}
              >
                Get Started →
              </Button>
            </Box>
          </Box>

          {/* Image Section */}
          <Box
            sx={{
              width: '80%', // Ensure the image section matches the green box width
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '-180px',
              marginRight: '-180px',
              marginTop: '-10px', // Reduced gap for smaller screen layout
            }}
          >
            <Box
              component="img"
              src={heroImage}
              alt="Person with laptop"
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </Box>
        </Box>
      )}
    </>
  );
}

export default HomeSection;
