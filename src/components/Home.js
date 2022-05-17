import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import RightSection from "./RightSection"
import LeftSection from "./LeftSection"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


import CoverLater from './CoverLater';


export function ColorToggleButton({alignment, handleChange}) {
    
  
    return (
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        sx={{mb:1}}
        onChange={handleChange}
      >
        <ToggleButton value="normal">Normal Mode</ToggleButton>
        <ToggleButton value="cover">Cover Later</ToggleButton>
      </ToggleButtonGroup>
    );
  }

function Home() {
    const [alignment, setAlignment] = useState('normal');
  
    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    let content
    if(alignment === 'normal'){
        content = <Container fixed sx={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",display: {xs: "block", sm: "block", md: "grid", minHeight: "100vh"}, gridTemplateColumns: "1fr 2fr", p: 0}}>
                
        <LeftSection />
        <RightSection />
        </Container>
    }else if (alignment === 'cover'){
        content = <CoverLater />
    }

    return ( 
        <React.Fragment>
            <Box sx={{m:{xs: 0, md: 4, p:4}}}>
                <Box sx={{textAlign: "center"}}>
                    <ColorToggleButton alignment={alignment} handleChange={handleChange} />
                </Box>
            
                { content }
            </Box>
        </React.Fragment>
     );
}

export default Home;