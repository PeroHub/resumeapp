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
                <Typography sx={{mt:2, color: "#fff"}}>Hello! I'm Peter Ime, a Frontend Developer for Web and Mobile, I love creating beautiful and intuitive interfaces for users. I have an eye for design with a User-Driven Approach to Development. In my spare time, I work on CSS Animations. I am currently building with React</Typography>
            </Box>
        </Box>
     );
}

export default Profile;