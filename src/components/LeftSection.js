import Box from '@mui/material/Box';
import Profile from './Profile';
import GetInTouch from './GetInTouch';
import Skills from './Skills';
function LeftSection() {
    return ( 
        <Box sx={{border: "1px solid red", background: "#455a64", position: "sticky"}}>
            <Profile />
            <Skills />
            <GetInTouch />
            
        </Box>
     );
}

export

default LeftSection;