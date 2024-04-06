import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import FormGroup from '@mui/material/FormGroup';




import { Margin, Padding } from '@mui/icons-material';
// import ToggleColorMode from './ToggleColorMode';

const logoStyle = {
  width: '50px',
  height: 'auto',
  marginLeft: '10px',
  cursor: 'pointer',
};

function AppAppBar({ mode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  
    const [formValues, setFormValues] = React.useState({});
    const handleTextFieldChange = (event ) => {
      const { name, value } = event.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };

    
    function handleSubmit(event) {
        console.log(event)
        event.preventDefault()
    const specs =  event.get("specs");
    alert(`You searched for '${specs}'`);
    
}


  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };


  return (
    <div>
      <AppBar
        position="relative"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src={
                  'https://www.svgrepo.com/show/339033/chicago.svg'
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  onClick={() => scrollToSection('features')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Crime maps
                  </Typography>
                </MenuItem>

              </Box>
              <Stack
            direction={{ xs: 'row', sm: 'row' }}
            spacing={3}
            useFlexGap
            sx={{ pt: -10, width: { xs: '80%', sm: 'auto' } }}
          >
            <form >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              onChange={handleTextFieldChange}

            />
            <Button variant='outlined'>
            <SwapHorizIcon color='primary'/>
            </Button>

            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email addressa"
            />

            <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
              <AssistantDirectionIcon/>
            </Button>
            </form>


            {/* <form action={handleSubmit} >

                        <TextField name="specs" variant="outlined" placeholder="Specs..." />
                        <TextField name="specs2" variant="outlined" placeholder="Specs..." />                     
                        <Button type="submit" variant="outlined" >Submit</Button>
                       

            </form> */}

        <form >
            <input name="specs" />
            <button type="submit" onSubmit={handleSubmit}>Search</button>
            </form>



          </Stack>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}


export default AppAppBar;