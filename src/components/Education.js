import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Education() {
    return ( 
        <Box>
            <Typography sx={{borderBottom: "2px solid #757de8", mt:8, fontWeight: "bold", p:{xs: 0, md: 2}}}>EDUCATION</Typography>
            <Box sx={{display: {xs: "block", md: "grid"}, gridTemplateColumns: "1fr 1fr", mt:2}}>
                <Box>
                    <Typography>Jobberman Soft Skills Training Certification</Typography>
                </Box>
                <Box>
                    <Typography>2021</Typography>
                </Box>
            </Box>

            <Box sx={{display: {xs: "block", md: "grid"}, gridTemplateColumns: "1fr 1fr", mt:2}}>
                <Box>
                    <Typography>Zuri Academy</Typography>
                </Box>
                <Box>
                    <Typography>March 2021 - June 2021</Typography>
                </Box>
            </Box>

        </Box>
     );
}

export default Education;