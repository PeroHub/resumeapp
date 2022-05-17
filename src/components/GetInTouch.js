import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function GetInTouch() {
    return ( 
        <Box sx={{p:4}}>
            
            <Typography variant='h5' sx={{borderBottom: "2px solid #757de8", color: "#fff"}}>Get In Touch</Typography>
            <Typography sx={{ mt: 2, color: "#fff", fontSize: "20px"}}>Phone</Typography>
            <Typography sx={{ color: "#fff", fontSize: "16px"}}>+2347034825560</Typography>
            <Typography sx={{ mt: 2, color: "#fff", fontSize: "20px"}}>Mail</Typography>
            <Typography sx={{ color: "#fff", fontSize: "16px"}}>peterime600@gmail.com</Typography>
            <Typography sx={{ mt: 2, color: "#fff", fontSize: "20px"}}>Web</Typography>
            <Typography sx={{ color: "#fff", fontSize: "16px"}}>https://peter-ime.netlify.app/</Typography>
            <Typography sx={{ mt: 2, color: "#fff", fontSize: "20px"}}>Address</Typography>
            <Typography sx={{ color: "#fff", fontSize: "16px"}}>Akwa Ibom, Nigeria</Typography>
        
        </Box>
     );
}

export default GetInTouch;