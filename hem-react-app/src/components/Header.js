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
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ p: 0, '&:hover': { backgroundColor: 'transparent' } }}
            onClick={() => navigate('/')}
            disableRipple
            >
            <img src={logo} alt="H.EM logo" style={{ 
              width: '40px', 
              height: '40px',
              marginLeft: '20px',
               
              }} />
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
            backgroundColor: '#e4e9ec',
            borderRadius: '50px',
            ml: 10, //adjust navigation to the middle, bc of the sign up button it looks off center with just default justify
          }}
        >
          <Button
            component={Link}
            to="/"
            sx={{
              fontFamily: '"Roboto Condensed", sans-serif',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              borderRadius: '50px',
              backgroundColor: location.pathname === '/' ? '#2F4F4F' : 'transparent',
              color: location.pathname === '/' ? 'white' : '#333',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: location.pathname === '/' ? '#2F4F4F' : 'transparent',
              },
              minWidth: '150px',
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{
              fontFamily: '"Roboto Condensed", sans-serif',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              borderRadius: '20px',
              backgroundColor: location.pathname === '/about' ? '#2F4F4F' : 'transparent',
              color: location.pathname === '/about' ? 'white' : '#333',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: location.pathname === '/about' ? '#2F4F4F' : 'transparent',
              },
              minWidth: '150px',
            }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/predict"
            sx={{
              fontFamily: '"Roboto Condensed", sans-serif',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              borderRadius: '20px',
              backgroundColor: location.pathname === '/predict' ? '#2F4F4F' : 'transparent',
              color: location.pathname === '/predict' ? 'white' : '#333',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: location.pathname === '/predict' ? '#2F4F4F' : 'transparent',
              },
              minWidth: '150px',
            }}
          >
            Predict
          </Button>
          <Button
            onClick={handleContactClick}
            sx={{
              fontFamily: '"Roboto Condensed", sans-serif',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              borderRadius: '20px',
              backgroundColor: location.pathname === '/' && location.state?.scrollToContact ? '#2F4F4F' : 'transparent',
              color: location.pathname === '/' && location.state?.scrollToContact ? 'white' : '#333',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: location.pathname === '/' && location.state?.scrollToContact ? '#2F4F4F' : 'transparent',
              },
              minWidth: '150px',
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
            fontFamily: '"Roboto Condensed", sans-serif',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            borderColor: '#2F4F4F',
            color: '#2F4F4F',
            borderRadius: '50px',
            px: 2,
            backgroundColor: 'transparent',
            borderWidth: 3,
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
