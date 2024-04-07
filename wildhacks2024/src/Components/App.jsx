import '../Styles/App.css';
import * as React from 'react';
import {Button} from '@mui/material'
import Paper from '@mui/material/Paper';
import {Box} from '@mui/material'
import {MapContainer} from 'react-leaflet/MapContainer'
import { Marker, Popup, TileLayer } from 'react-leaflet';
import { Rectangle } from 'react-leaflet';
import RoutingMachine from './RoutingMachine';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


function App(props) {
  const position =  [41.7729,-87.5764]
  const [path,setPath] = React.useState(props.searchRes)
  const rectangle = [
      [41.8357515, 41.8358197],  
      [-87.6393317, -87.6390329]
  ]
  // 6611fca0c14eb594693449zjn59158e api

  const blackOptions = { color: 'black' }
  const axios = require('axios').default;
  console.log(props.path)  

  // React.useState((


  // ),[props.searchRes])



  return (
    <div className="App">
 <Grid
  container
  spacing={12}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '100vh' }}
>
  <Grid item xs={3}>
  <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '150vh',
            height: '70vh',
            borderRadius:2
          },
        }}
      >
        
      <MapContainer 
      className="full-height-map"
      center={position} 
      zoom={13}
      scrollWheelZoom={true}
      >
      <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* <RoutingMachine path={props.searchRes?props.searchRes:null}/> */}
      <Marker position={position}>
      <Popup>
        CRIMEEEE
      </Popup>
    </Marker>
    
    {/* <Rectangle bounds={rectangle} pathOptions={blackOptions} /> */}



    </MapContainer>
        {/* </Paper> */}
      </Box>
  </Grid>
</Grid>

    
    </div>
  );
}

export default App;
