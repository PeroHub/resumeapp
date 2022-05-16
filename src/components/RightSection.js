import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function RightSection() {
    return ( 
        <Box sx={{border: "1px solid red"}}>
            <Box sx={{p:4}}>
                <Typography variant='h2'>Peter <span style={{color: "#757de8"}}>Ime</span></Typography>
                <Typography>Frontend Developer</Typography>
            </Box>
        </Box>
     );
}

export default RightSection;