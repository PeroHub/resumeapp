import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

function CoverLater() {
    return ( 
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16, mb:4 }} color="text.secondary" gutterBottom>
        As a frontend developer, I'm proud to have developed a proficient working knowledge of HTML, CSS, Javascript, and React. I'm passionate about coding and constantly honing my skill. 
        I've used my skills to help several peers create and manage websites for their startup businesses including an online hotel booking agency and a peer-to-peer currency conversion platform.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            Why You Should Give me This Role: 
        </Typography>

        <ul style={{marginLeft: "20px"}}>
            <li style={{color: "#00000099"}}>I have successfully led a team of developers from diverse African countries during an internship training to complete an E-learning project.</li>
            <li style={{color: "#00000099"}}>Oversee a fintech product from just an idea to developing all through deployment. In this position, I brainstorm with other developers and managers on implementing a new feature and improving existing features. I also create and assign tasks to fellow developers to implement.</li>
        </ul>

        <Typography  sx={{ fontSize: 16, mt:4 }} color="text.secondary">I will be a perfect team player for your team.</Typography>
   

        
      </CardContent>
     
    </Card>
     );
}

export default CoverLater;