import React, { useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
function Skills() {
    const [valueOne, setValueOne] = useState(0);
    const [ html, setHmtl ] = useState(0)
    const [css, setCss ] = useState(0)




   const [ javascript, setJavascript ] = useState(0)
   const [ react, setReact ] = useState(0)
   const [ github, setGithub] = useState(0)
   const [ mui, setMui ] = useState(0)

    

    useEffect(() => {

        setTimeout(function(){
            //Insert code here. Here is an example using discord.js
            setValueOne([90]);
            setHmtl([95]);
            setCss([85]);
            setJavascript([87])
            setReact([86])
            setGithub([80])
            setMui([97])
       }, 3000)
        
      }, []);


    return ( 
        <Box sx={{p:4}}>
            <Box sx={{}}>
                <Typography sx={{color: "#fff"}}>HTML</Typography>
                <Slider value={html} />
            </Box>
            <Box sx={{}}>
                <Typography sx={{color: "#fff"}}>CSS</Typography>
                <Slider value={css} />
            </Box>
            <Box sx={{}}>
                <Typography sx={{color: "#fff"}}>Javascript</Typography>
                <Slider value={javascript} />
            </Box>
            <Box sx={{}}>
                <Typography sx={{color: "#fff"}}>REACTJS</Typography>
                <Slider value={react} />
            </Box>
            <Box sx={{}}>
                <Typography sx={{color: "#fff"}}>GITHUB</Typography>
                <Slider value={github} />
            </Box>
            <Box sx={{}}>
                <Typography sx={{color: "#fff"}}>MUI</Typography>
                <Slider value={mui} />
            </Box>
        </Box>
     );
}

export default Skills;