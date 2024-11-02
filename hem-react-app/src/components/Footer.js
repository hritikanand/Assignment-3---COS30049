import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import logoinv from '../assets/hemlogo inverted.png';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#2F4F4F',
        color: 'white',
        padding: { xs: '20px', md: '30px 60px' },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: { xs: '10px', md: '0' },
        marginTop: 'auto',  // Ensures footer sticks to bottom
      }}
    >
      {/* Logo and Name */}
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
        <img
          src={logoinv}
          alt="H.EM logo"
          style={{
            width: '70px',
            height: '70px',
          }}
        />
        <Typography variant="h5" component="div" sx={{ 
          fontWeight: 'bolder',
          fontSize: { xs: '2rem', md: '3.8rem' },
          marginLeft: '10px',
        }}>
          H.EM
        </Typography>
      </Box>

      {/* Information Section */}
      <Box sx={{ textAlign: 'left', minWidth: '200px' }}>
        <Typography variant="subtitle1" sx={{ 
          fontWeight: 'bold', 
          fontSize: { xs: '1rem', md: '1.2rem' },
          mb: 1 
          }}>
          Information
        </Typography>
        <Typography variant="body2" sx={{fontSize: { xs: '0.9rem', md: '1.1rem' }}}>COS30049</Typography>
        <Typography variant="body2" sx={{fontSize: { xs: '0.9rem', md: '1.1rem' }}}>Housing Market Project</Typography>
        <Typography variant="body2" sx={{fontSize: { xs: '0.9rem', md: '1.1rem' }}}>Swinburne University</Typography>
      </Box>

      {/* Credits Section */}
      <Box sx={{ textAlign: 'left', minWidth: '200px' }}>
        <Typography variant="subtitle1" sx={{ 
          fontWeight: 'bold',  
          fontSize: { xs: '1rem', md: '1.2rem' },
          mb: 1 
          }}>
          Credits
        </Typography>
        <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
          Hritik{' '}
          <Link
            href="mailto:104185477@student.swin.edu.au"
            sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}
          >
            104185477
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
          Michelle{' '}
          <Link
            href="mailto:103074668@student.swin.edu.au"
            sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}
          >
            103074668
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
          Eshita{' '}
          <Link
            href="mailto:104748964@student.swin.edu.au"
            sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}
          >
            104748964
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
