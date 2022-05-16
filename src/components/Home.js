import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import React from "react"
import RightSection from "./RightSection"
import LeftSection from "./LeftSection"
function Home() {
    return ( 
        <React.Fragment>
            <Container fixed sx={{border: "1px solid red",  display: {xs: "block", sm: "grid", md: "grid"}, gridTemplateColumns: "1fr 2fr", p: 0}}>
                <LeftSection />
                <RightSection />

            </Container>
        </React.Fragment>
     );
}

export default Home;