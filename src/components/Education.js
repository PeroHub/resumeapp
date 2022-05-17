import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Education() {
    return ( 
        <Box>
            <Typography sx={{borderBottom: "2px solid #757de8", mt:8, fontWeight: "bold", p:{xs: 0, md: 2}}}>EXPERIENCE</Typography>
            <Box sx={{display: {xs: "block", md: "grid"}, gridTemplateColumns: "1fr 1fr", mt:2}}>
                <Box>
                    <Typography>SENIOR WEV DEVELOPER</Typography>
                    <Typography sx={{color: "#757de8"}}>Jan 2020 - Dec 2022</Typography>
                </Box>
                <Box>
                    <Typography>Works in Hotels.ng - Nigeria</Typography>
                    <Typography>I worked on implementing reuseable and functioning UI component for better performance. Optimising web design to be responsive on small device</Typography>
                </Box>
            </Box>

            <Box sx={{display: {xs: "block", md: "grid"}, gridTemplateColumns: "1fr 1fr", mt:2}}>
                <Box>
                    <Typography>SENIOR WEV DEVELOPER</Typography>
                    <Typography sx={{color: "#757de8"}}>Jan 2020 - Dec 2022</Typography>
                </Box>
                <Box>
                    <Typography>Works in Hotels.ng - Nigeria</Typography>
                    <Typography>I worked on implementing reuseable and functioning UI component for better performance. Optimising web design to be responsive on small device</Typography>
                </Box>
            </Box>

        </Box>
     );
}

export default Education;