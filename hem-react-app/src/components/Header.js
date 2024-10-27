// src/components/Header.js
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Dialog from './SignInSignUpDialog';
import logo from '../assets/hemlogo.png';

function Header({ contactRef }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleContactClick = () => {
    if (location.pathname === '/') {
      // Directly scroll to the contact section if on Home page
      contactRef?.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to Home and set scrollToContact flag
      navigate('/', { state: { scrollToContact: true } });
    }
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ padding: '8px 24px', height: '100px' }}>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {/* Logo and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 'auto' }}>
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ p: 0 }}>
            <img src={logo} alt="H.EM logo" style={{ width: '40px', height: '40px' }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', ml: 1 }}>
            H.EM
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#E0E0E0',
            borderRadius: '20px',
            padding: '4px 8px',
            gap: 2,
          }}
        >
          <Button
            component={Link}
            to="/"
            sx={{
              fontWeight: 'bold',
              borderRadius: '20px',
              backgroundColor: location.pathname === '/' ? '#2F4F4F' : 'transparent',
              color: location.pathname === '/' ? 'white' : '#333',
              '&:hover': {
                backgroundColor: location.pathname === '/' ? '#2F4F4F' : 'transparent',
              },
              minWidth: '100px',
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{
              fontWeight: 'bold',
              borderRadius: '20px',
              backgroundColor: location.pathname === '/about' ? '#2F4F4F' : 'transparent',
              color: location.pathname === '/about' ? 'white' : '#333',
              '&:hover': {
                backgroundColor: location.pathname === '/about' ? '#2F4F4F' : 'transparent',
              },
              minWidth: '100px',
            }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/predict"
            sx={{
              fontWeight: 'bold',
              borderRadius: '20px',
              backgroundColor: location.pathname === '/predict' ? '#2F4F4F' : 'transparent',
              color: location.pathname === '/predict' ? 'white' : '#333',
              '&:hover': {
                backgroundColor: location.pathname === '/predict' ? '#2F4F4F' : 'transparent',
              },
              minWidth: '100px',
            }}
          >
            Predict
          </Button>
          <Button
            onClick={handleContactClick}
            sx={{
              fontWeight: 'bold',
              borderRadius: '20px',
              backgroundColor: location.pathname === '/' && location.state?.scrollToContact ? '#2F4F4F' : 'transparent',
              color: location.pathname === '/' && location.state?.scrollToContact ? 'white' : '#333',
              '&:hover': {
                backgroundColor: location.pathname === '/' && location.state?.scrollToContact ? '#2F4F4F' : 'transparent',
              },
              minWidth: '100px',
            }}
          >
            Contact
          </Button>
        </Box>

        {/* Sign In/Sign Up Button */}
        <Button
          variant="outlined"
          color="inherit"
          onClick={handleDialogOpen}
          sx={{
            borderColor: '#2F4F4F',
            color: '#2F4F4F',
            borderRadius: '20px',
            px: 2,
            backgroundColor: 'transparent',
            '&:hover': {
              borderColor: '#2F4F4F',
              backgroundColor: '#E0E0E0',
            },
            ml: 'auto',
          }}
        >
          Sign in | Sign up
        </Button>
      </Toolbar>

      {/* Sign In/Sign Up Dialog */}
      <Dialog open={dialogOpen} onClose={handleDialogClose} />
    </AppBar>
  );
}

export default Header;
