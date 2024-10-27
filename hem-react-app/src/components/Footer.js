// src/components/Footer.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// Importing the original logo
import logo from '../assets/hemlogo.png';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#2F4F4F', 
        color: 'white',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'flex-end', 
        alignItems: 'center',
      }}
    >
      {/* Logo and Name */}
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 8 }}>
        <img
          src={logo}
          alt="H.EM logo"
          style={{
            width: '50px',
            height: '50px',
            filter: 'invert(100%) brightness(200%)', 
            marginRight: '10px',
          }}
        />
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bolder' }}>
          H.EM
        </Typography>
      </Box>

      {/* Information Section */}
      <Box sx={{ textAlign: 'center', flex: 1, ml: 10 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Information
        </Typography>
        <Typography variant="body2">COS30049</Typography>
        <Typography variant="body2">Housing Market Project</Typography>
        <Typography variant="body2">Swinburne University</Typography>
      </Box>

      {/* Credits Section */}
      <Box sx={{ textAlign: 'center', flex: 1 , mr: 8}}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Credits
        </Typography>
        <Typography variant="body2">
          Hritik{' '}
          <Link
            href="mailto:104185477@student.swin.edu.au"
            sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}
          >
            104185477
          </Link>
        </Typography>
        <Typography variant="body2">
          Michelle{' '}
          <Link
            href="mailto:103074668@student.swin.edu.au"
            sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}
          >
            103074668
          </Link>
        </Typography>
        <Typography variant="body2">
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
