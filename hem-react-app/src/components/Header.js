import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from './SignInSignUpDialog';
import logo from '../assets/hemlogo.png';

function Header({ contactRef }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleContactClick = () => {
    if (location.pathname === '/') {
      setDrawerOpen(false);
      setActiveTab('/contact'); // Set contact as active
      contactRef?.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab('/contact');
      navigate('/', { state: { scrollToContact: true } });
      setDrawerOpen(false);
    }
  };

  const handleNavigation = (path) => {
    setActiveTab(path);
    navigate(path);
    setDrawerOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ padding: '8px 24px', height: '100px', backgroundColor: 'white' }}>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', md: 'none' }, mr: 1, ml: 0, color: 'black' }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'flex-start' },
            flexGrow: { xs: 1, md: 0 },
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={() => handleNavigation('/')}
            sx={{
              p: 0,
              '&:hover': { backgroundColor: 'transparent' },
              display: 'flex',
              justifyContent: 'center',
            }}
            disableRipple
          >
            <img src={logo} alt="H.EM logo" style={{ width: '40px', height: '40px' }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              ml: 1,
              display: { xs: 'inline', md: 'inline' },
              textAlign: 'center',
              color: 'black',
            }}
          >
            H.EM
          </Typography>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            backgroundColor: '#e4e9ec',
            borderRadius: '50px',
            padding: '0 20px',
            gap: 2,
            flexGrow: 1,
            maxWidth: '700px',
          }}
        >
          <Button
            onClick={() => handleNavigation('/')}
            sx={{
              ...buttonStyles,
              backgroundColor: activeTab === '/' ? '#2F4F4F' : 'transparent',
              color: activeTab === '/' ? 'white' : '#333',
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => handleNavigation('/about')}
            sx={{
              ...buttonStyles,
              backgroundColor: activeTab === '/about' ? '#2F4F4F' : 'transparent',
              color: activeTab === '/about' ? 'white' : '#333',
            }}
          >
            About
          </Button>
          <Button
            onClick={() => handleNavigation('/predict')}
            sx={{
              ...buttonStyles,
              backgroundColor: activeTab === '/predict' ? '#2F4F4F' : 'transparent',
              color: activeTab === '/predict' ? 'white' : '#333',
            }}
          >
            Predict
          </Button>
          <Button
            onClick={handleContactClick}
            sx={{
              ...buttonStyles,
              backgroundColor: activeTab === '/contact' ? '#2F4F4F' : 'transparent',
              color: activeTab === '/contact' ? 'white' : '#333',
            }}
          >
            Contact
          </Button>
        </Box>

        <Button
          variant="outlined"
          color="inherit"
          onClick={handleDialogOpen}
          sx={{ ...signInButtonStyles, display: { xs: 'none', md: 'block' } }}
        >
          Sign in | Sign up
        </Button>
      </Toolbar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ width: 250 }}>
          <ListItem button onClick={() => handleNavigation('/')} sx={drawerItemStyles(activeTab === '/')}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation('/about')} sx={drawerItemStyles(activeTab === '/about')}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation('/predict')} sx={drawerItemStyles(activeTab === '/predict')}>
            <ListItemText primary="Predict" />
          </ListItem>
          <ListItem button onClick={() => { handleContactClick(); setDrawerOpen(false); }} sx={drawerItemStyles(activeTab === '/contact')}>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button onClick={handleDialogOpen}>
            <ListItemText primary="Sign in | Sign up" />
          </ListItem>
        </List>
      </Drawer>

      <Dialog open={dialogOpen} onClose={handleDialogClose} />
    </AppBar>
  );
}

const buttonStyles = {
  fontFamily: '"Roboto Condensed", sans-serif',
  fontWeight: 'bold',
  fontSize: '1.25rem',
  borderRadius: '20px',
  color: '#333',
  textTransform: 'none',
  '&:hover': { backgroundColor: '#d3d3d3' },
  minWidth: '150px',
};

const drawerItemStyles = (isActive) => ({
  color: isActive ? 'green' : 'inherit',
  '&:hover': { color: 'green' },
  fontWeight: isActive ? 'bold' : 'normal',
  textDecoration: 'none',
});

const signInButtonStyles = {
  fontFamily: '"Roboto Condensed", sans-serif',
  fontWeight: 'bold',
  fontSize: '1.25rem',
  borderColor: '#2F4F4F',
  color: '#2F4F4F',
  borderRadius: '50px',
  px: 2,
  backgroundColor: 'transparent',
  borderWidth: 3,
  '&:hover': { borderColor: '#2F4F4F', backgroundColor: '#E0E0E0' },
};

export default Header;
