import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import peter from "../Images/peter.jpg"

function Profile() {
    return ( 
        <Box>
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Box sx={{width: {xs: "150px", sm: "150px", md: "250px"}, height: {xs: "150px", sm: "150px", md: "250px"}, background: "#455a64", border: "3px solid #757de8", p: 1, borderRadius: "50%", objectFit: "contain"}}> 
                    <img style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}} src={peter} alt="profile"/>
                </Box>
          
            </Box>
            <Box sx={{p:4}}>
                <Typography variant='h5' sx={{borderBottom: "2px solid #757de8", color: "#fff"}}>Profile</Typography>
                <Typography sx={{mt:2, color: "#fff"}}>I have extensive frontend experience specializing in React-based web applications.I pride myself on designing intuitive interfaces that are fast, scalable, accessible, and performant REACT APPLICATIONS, which are responsive in all screen sizes</Typography>
            </Box>
        </Box>
     );
}

export default Profile;