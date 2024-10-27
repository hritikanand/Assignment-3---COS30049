// src/components/Home/TeamSection.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';
import person3 from '../../assets/person3.jpg';

function TeamSection() {
  return (
    <Box sx={{ paddingTop: '60px' }}> {/* Adjust top padding here as needed */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          padding: '80px 20px', // Adds padding between sections
          gap: '40px',
        }}
      >
        {/* Left Section - Predict Housing Market Trends */}
        <Box
          sx={{
            width: { xs: '100%', md: '30%' },
            textAlign: 'left',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: '#2F4F4F',
              marginBottom: '20px',
            }}
          >
            Predict Housing Market Trends
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#2F4F4F',
              marginBottom: '20px',
            }}
          >
            Explanation on how the model predicts housing market trends through machine learning.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#2F4F4F',
              color: 'white',
              padding: '10px 20px',
              fontWeight: 'bold',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#2F4F4F',
              },
            }}
          >
            Learn More
          </Button>
        </Box>

        {/* Right Section - Team Members */}
        <Box
          sx={{
            width: { xs: '100%', md: '70%' },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              color: '#2F4F4F',
              marginBottom: '40px',
              fontStyle: 'italic',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span style={{ flexGrow: 1, height: '1px', backgroundColor: '#D3D3D3' }}></span>
            The Team
            <span style={{ flexGrow: 1, height: '1px', backgroundColor: '#D3D3D3' }}></span>
          </Typography>

          {/* Team Members in a single row */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '40px', // Space between cards
              flexWrap: 'wrap', // Wrap on smaller screens
            }}
          >
            {[{ name: 'Hritik Anand', src: person1 }, { name: 'Michelle Abrigo', src: person2 }, { name: 'Eshita Mahajan', src: person3 }].map((member, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '150px',
                  padding: '20px',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '20px',
                  position: 'relative',
                }}
              >
                {/* Avatar with overlap styling */}
                <Avatar
                  alt={member.name}
                  src={member.src}
                  sx={{
                    width: 80,
                    height: 80,
                    marginBottom: '10px',
                    position: 'absolute',
                    top: '-40px',
                    border: '3px solid #F5F5F5', // To give a bordered effect if needed
                  }}
                />
                <Box sx={{ marginTop: '40px' }}>
                  <Typography variant="h6" sx={{ color: '#2F4F4F', marginBottom: '8px' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#2F4F4F' }}>
                    Team Introduction
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TeamSection;
