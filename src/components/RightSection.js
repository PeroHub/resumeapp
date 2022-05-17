import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Hobby from './Hobby';

function RightSection() {
    return ( 
        <Box sx={{ overflow: "scroll", height: "100vh"}}>
            <Box sx={{p:4}}>
                <Typography variant='h2'>Peter <span style={{co2lor: "#757de8"}}>Ime</span></Typography>
                <Typography>Frontend Developer</Typography>

                <WorkExperience />
                <Education />
                <Hobby />
            </Box>
        </Box>
     );
}

export default RightSection;