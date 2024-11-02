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
    <Box sx={{ paddingTop: '100px'}}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          padding: '80px 75px',
          gap: '30px',
        }}
      >
        {/* Left Section - Predict Housing Market Trends */}
        <Box
          sx={{
            width: { xs: '100%', md: '60%' },
            textAlign: 'left',
            padding: '100px 35px',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Roboto Condensed", sans-serif',
              fontWeight: 600,
              fontSize: '3rem',
              color: 'black',
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
              fontWeight: 400,
              fontFamily: '"Roboto Condensed", sans-serif',
              fontSize: '1.3rem',
              textAlign: 'justify'
            }}
          >
            Unlock insights into Melbourne's housing market with our predictive model. By analysing critical factors such as school proximity, room-to-bath ratios, and CBD distance, our platform highlights patterns that shape property prices. Leveraging machine learning techniques like Gradient Boosting and Random Forest, it delivers clear, data-driven insights unique to Melbourne’s housing trends.
            <br />
            <Box component="span" sx={{ display: 'block', marginTop: '15px',textAlign: 'justify'}}>
              Curious to see how these predictions work? Dive in to explore the model behind the numbers.
            </Box>
          </Typography>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#2F4F4F',
                color: 'white',
                padding: '20px 50px',
                fontFamily: '"Roboto Condensed", sans-serif',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                borderRadius: '50px',
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
            width: { xs: '100%', md: '90%' },
            textAlign: 'center',
          }}
        >
          <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            color: '#2F4F4F',
            marginBottom: '90px', //gap from 'the team' and member boxes
            fontStyle: 'italic',
            
            fontSize: '2.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span
            style={{
              flexGrow: 0,
              width: '19%',
              height: '1px',
              borderTop: '3px dotted #2F4F4F', //dotted line
            }}
          ></span>
          The Team
          <span
            style={{
              flexGrow: 0,
              width: '19%',
              height: '1px', 
              borderTop: '3px dotted #2F4F4F', // dotted line
            }}
          ></span>
          </Typography>

          {/* Team Members Cards */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '30px',
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
                  height: '300px',
                  padding: '20px',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '40px',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                <Avatar
                  alt={member.name}
                  src={member.src}
                  sx={{
                    width: 150,
                    height: 150,
                    marginBottom: '10px',
                    position: 'absolute',
                    top: '-60px',
                    border: '3px solid #F5F5F5',
                  }}
                />
                <Box sx={{ 
                  marginTop: '90px', 
                  }}>
                  <Typography variant="h6" 
                  sx={{ 
                    fontFamily: '"Roboto Condensed", sans-serif',
                    fontSize: '1.5rem',
                    color: '#2F4F4F', 
                    fontWeight: 'bold', 
                    marginBottom: '1px' 
                    }}>
                    {member.name}
                  </Typography>

                  <Typography variant="body2" 
                  sx={{ 
                    color: '#black', 
                    fontSize: '1rem',
                    fontWeight: 'bold', 
                    marginBottom: '20px' 
                    }}>
                    {member.id}
                  </Typography>
                  
                  <Typography variant="body2" 
                  sx={{ 
                    color: '#black', 
                    marginTop: '8px', 
                    fontSize: '1.1rem',
                    fontWeight: 500, 
                    padding: '2px'
                    }}>
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
