// src/components/Footer.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// Importing the original logo
import logoinv from '../assets/hemlogo inverted.png';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#2F4F4F', 
        color: 'white',
        padding: '30px 60px',
        display: 'flex',
        justifyContent: 'flex-end', 
        alignItems: 'center',
      }}
    >
      {/* Logo and Name */}
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
        <img
          src={logoinv}
          alt="H.EM logo"
          style={{
            width: '85px',
            height: '85px',
            marginLeft: '350px',
          }}
        />
        <Typography variant="h5" component="div" sx={{ 
          fontWeight: 'bolder',
          fontSize: '3.8rem',
          marginLeft: '10px',
          transform: 'translateY(5%)',
          }}>
          H.EM
        </Typography>
      </Box>

      {/* Information Section */}
      <Box sx={{ textAlign: 'left', flex: 1, ml: 40 }}>
        <Typography variant="subtitle1" sx={{ 
          fontWeight: 'bold', 
          fontSize: '1.2rem',
          mb: 1 
          }}>
          Information
        </Typography>
        <Typography variant="body2" sx={{fontSize:'1.1rem'}}>COS30049</Typography>
        <Typography variant="body2" sx={{fontSize:'1.1rem'}}>Housing Market Project</Typography>
        <Typography variant="body2" sx={{fontSize:'1.1rem'}}>Swinburne University</Typography>
      </Box>

      {/* Credits Section */}
      <Box sx={{ textAlign: 'left', flex: 1, ml: -18}}>
        <Typography variant="subtitle1" sx={{ 
          fontWeight: 'bold',  
          fontSize:'1.2rem',
          mb: 1 
          }}>
          Credits
        </Typography>
        <Typography variant="body2" sx={{fontSize:'1.1rem'}}>
          Hritik{' '}
          <Link
            href="mailto:104185477@student.swin.edu.au"
            sx={{ textDecoration: 'none', fontSize:'1.1rem', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}
          >
            104185477
          </Link>
        </Typography>
        <Typography variant="body2" sx={{fontSize:'1.1rem'}}>
          Michelle{' '}
          <Link
            href="mailto:103074668@student.swin.edu.au"
            sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}
          >
            103074668
          </Link>
        </Typography>
        <Typography variant="body2" sx={{fontSize:'1.1rem'}}>
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
