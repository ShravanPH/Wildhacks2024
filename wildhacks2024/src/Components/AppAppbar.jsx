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
import { Axios } from 'axios';
// import ToggleColorMode from './ToggleColorMode';
const logoStyle = {
  width: '50px',
  height: 'auto',
  marginLeft: '10px',
  cursor: 'pointer',
};

function AppAppBar(props) {

  const axios = require('axios').default;
  
    const [formValues, setFormValues] = React.useState({});
    const [swap, setSwap] = React.useState(false);

   
    const handleTextFieldChange1 = (event ) => {
      const { name, value } = event.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };
    const handleTextFieldChange2 = (event ) => {
      const { name, value } = event.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };

    
   async function handleSubmit(event) {
  
      if (swap)
      {
      setFormValues({"From":formValues["To"],"To":formValues["From"]})
      }
     
    // axios.get('https://nominatim.openstreetmap.org/search?format=json&q=3214+S+normal+avenue').then(
    //         function (response) {
    //           // handle success
    //           props.setSearchRes(response.data)
    //         }
    //     )
    props.setSearchRes(formValues)
    console.log(props)    
        

    }







  function handleSwap(){
   
    setSwap(!swap)

  }


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
        <Container maxWidth="xl">
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
              border: '2px solid',
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
             
          
              <Stack
            direction={{ xs: 'row', sm: 'row' }}
            spacing={8}
            useFlexGap

            sx={{ pt: -10, width: { xs: '100%', sm: 'auto' },alignItems:'center' }}
          >
            <Box sx={{ display: { xs: '100%', md: 'auto' } , marginLeft: '15px'}}>

             <img
                src={
                  'https://www.svgrepo.com/show/339033/chicago.svg'
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
        </Box>              
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {/* <MenuItem
                  sx={{ py: '6px', px: '12px' }}
                > */}
                  <Typography variant="h6" color="text.secondary">
                    Crime maps
                  </Typography>
                {/* </MenuItem> */}

              </Box>
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              placeholder="From"
              value = {swap?formValues["To"]:formValues["From"]}
              onChange={handleTextFieldChange1}
              name = "From"
            />
            <Button variant='outlined' onClick={handleSwap} >
            <SwapHorizIcon color='primary'/>
            </Button>

            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              placeholder="To"
              value = {swap?formValues["From"]:formValues["To"]}
              onChange={handleTextFieldChange2}
              name = "To"

            />

            <Button variant="contained" color="primary"  onClick={handleSubmit}>
              <AssistantDirectionIcon/>
            </Button>
    

             </Stack>
          
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}


export default AppAppBar;