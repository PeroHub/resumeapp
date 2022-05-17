import Box from '@mui/material/Box';
import Profile from './Profile';
import GetInTouch from './GetInTouch';
import Skills from './Skills';
function LeftSection() {
    return ( 
        <Box sx={{background: "#455a64", position: "sticky", height: "100vh", overflow: "scroll"}}>
            <Profile />
            <Skills />
            <GetInTouch />
            
        </Box>
     );
}

export

default LeftSection;