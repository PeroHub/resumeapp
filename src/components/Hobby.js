import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


import dance from "../Images/dance.jpg"
import racing from "../Images/racing.jpg"
import piano from "../Images/piano.jpg"

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export function Dancing() {
  return (
    <Card>
      <CardMedia
      component="img"
     
      sx={{height: {xs: "240px", md: "340px"}}}
      image={dance}
      alt="dancing"
    />
    </Card>
  );
}

export function Piano() {
  return (
    <Card>
      <CardMedia
      component="img"
     
      sx={{height: {xs: "240px", md: "340px"}}}
      image={piano}
      alt="piano"
    />
    </Card>
  );
}

export function Racing() {
  return (
    <Card>
      <CardMedia
      component="img"
     
      sx={{height: {xs: "240px", md: "340px"}}}
      image={racing}
      alt="racing"
    />
    </Card>
  );
}



export  function ColorToggleButton({alignment, handleChange}) {
    return (
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        sx={{mt:2}}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="dancing">Dancing</ToggleButton>
        <ToggleButton value="racing">Racing</ToggleButton>
        <ToggleButton value="piano">Piano</ToggleButton>
      </ToggleButtonGroup>
    );
  }


function Hobby() {
    const [alignment, setAlignment] = useState('dancing');
      const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
      };

      let img 
      if(alignment === 'dancing'){
        img = <Dancing />
      }else if(alignment === 'racing'){
        img = <Racing />
      }else if (alignment === 'piano') {
        img = <Piano />
      }
    
    return ( 
        <Box>
            <Typography sx={{borderBottom: "2px solid #757de8", mt:8, fontWeight: "bold", p:{xs: 0, md: 2}}}>MY HOBBY</Typography>
            
            <ColorToggleButton alignment={alignment} handleChange={handleChange}/>
            { img }

        </Box>
     );
}

export default Hobby;