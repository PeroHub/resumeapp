import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function WorkExperience() {
    return ( 
        <Box>
            <Typography sx={{borderBottom: "2px solid #757de8", mt:8, fontWeight: "bold", p:{xs: 0, md: 2}}}>EXPERIENCE</Typography>
            <Box sx={{display: {xs: "block", md: "grid"}, gridTemplateColumns: "1fr 1fr", mt:2}}>
                <Box>
                    <Typography>Frontend Developer @Hotels.ng</Typography>
                    <Typography sx={{color: "#757de8"}}>May 2020 - Dec 2021</Typography>
                </Box>
                <Box>
                    <ul>
                        <li>Used markup languages like HTML to create user-friendly web pages</li>
                        <li>Handled and optimise responsiveness on different device viewport. </li>
                        <li>Got feedback from, and build solution for users and customers.</li>
                        <li>Implemented task effectively.</li>
                    </ul>
                    
                </Box>
            </Box>

            <Box sx={{display: {xs: "block", md: "grid"}, gridTemplateColumns: "1fr 1fr", mt:2}}>
                <Box>
                    <Typography>Front End Developer @Future Pay</Typography>
                    <Typography sx={{color: "#757de8"}}>Jan 2021 - Present</Typography>
                </Box>
                <Box>
                <ul>
                    <li>I worked on implementing reuseable and functioning UI component for better performance.</li>
                    <li>Optimising web design to be responsive on small device. </li>
                    <li>Learning new skills and applying them to daily task, improving efficiency and productivity. </li>
                    <li>Managing and coordinating a team of developers to delivering high performing product</li>
                    <li>Collaborating with back-end developers and designers to implement good user experience. .</li>
                    <li>Creating and assigning task to engineers.</li>
                    <li>Googling effectively to solve any problem.</li>
                    </ul>
                </Box>
            </Box>

            <Box sx={{display: {xs: "block", md: "grid"}, gridTemplateColumns: "1fr 1fr", mt:2}}>
                <Box>
                    <Typography>EddieHub organization</Typography>
                    <Typography sx={{color: "#757de8"}}>Jan 2022 - Open source Project</Typography>
                </Box>
                <Box>
                <ul>
                    <li>Delivered a good UI layout</li>
                    <li>Added profile detail to the codebase</li>
                   
                    </ul>
                </Box>
            </Box>

           
         
           
            
            
        </Box>
     );
}

export default WorkExperience;