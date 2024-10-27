// src/components/Home/TeamSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';
import person3 from '../../assets/person3.jpg';

function TeamSection() {
  const teamMembers = [
    {
      name: 'Hritik Anand',
      id: '104185477',
      role: 'Project Manager and Model Developer',
      src: person1,
    },
    {
      name: 'Michelle Abrigo',
      id: '103074668',
      role: 'UI/UX Designer, Evaluator, and Implementor',
      src: person2,
    },
    {
      name: 'Eshita Mahajan',
      id: '104748964',
      role: 'Data Analyst and UI/UX Technical Implementor',
      src: person3,
    },
  ];

  return (
    <Box sx={{ paddingTop: '60px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          padding: '80px 20px',
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
              fontWeight: 525,
              fontSize: '1.1rem',
              textAlign: 'justify'
            }}
          >
            Unlock insights into Melbourne's housing market with our predictive model. By analyzing critical factors such as school proximity, room-to-bath ratios, and CBD distance, our platform highlights patterns that shape property prices. Leveraging machine learning techniques like Gradient Boosting and Random Forest, it delivers clear, data-driven insights unique to Melbourne’s housing trends.
            <br />
            <Box component="span" sx={{ display: 'block', marginTop: '10px',textAlign: 'justify'}}>
              Curious to see how these predictions work? Dive in to explore the model behind the numbers.
            </Box>
          </Typography>
          <Link to="/about" style={{ textDecoration: 'none' }}>
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
          </Link>
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

          {/* Team Members Cards */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '40px',
              flexWrap: 'wrap',
            }}
          >
            {teamMembers.map((member, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '250px',
                  padding: '20px',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '20px',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                <Avatar
                  alt={member.name}
                  src={member.src}
                  sx={{
                    width: 80,
                    height: 80,
                    marginBottom: '10px',
                    position: 'absolute',
                    top: '-40px',
                    border: '3px solid #F5F5F5',
                  }}
                />
                <Box sx={{ marginTop: '40px' }}>
                  <Typography variant="h6" sx={{ color: '#2F4F4F', fontWeight: 'bold', marginBottom: '8px' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#2F4F4F', fontWeight: 'bold' }}>
                    {member.id}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#2F4F4F', marginTop: '8px', fontWeight: 500 }}>
                    {member.role}
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
