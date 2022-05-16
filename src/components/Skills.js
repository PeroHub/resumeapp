import React, { useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
function Skills() {
    const [valueOne, setValueOne] = useState(0);
    

    useEffect(() => {

        setTimeout(function(){
            //Insert code here. Here is an example using discord.js
            setValueOne([90]);
       }, 3000)
        
      }, []);


    return ( 
        <Box sx={{p:4}}>
            <Box sx={{}}>
                <Typography sx={{color: "#fff"}}>HTML</Typography>
                <Slider value={valueOne} />
            </Box>
            <Box sx={{}}>
                <Typography sx={{color: "#fff"}}>CSS</Typography>
                <Slider />
            </Box>
        </Box>
     );
}

export default Skills;