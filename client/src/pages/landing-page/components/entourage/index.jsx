// Libraries
import { Container, Stack, Typography } from "@mui/material";

// Components
import PastorParents from "./components/pastor-parents";
import Honorary from "./components/honorary";
import PrincipalSponsors from "./components/principal-sponsors";
import SecondarySponsors from "./components/secondary-sponsors";
import Bearers from "./components/bearer";
import GroomsmenBridesmaid from "./components/groomsmen-bridesmaid";
import Guests from "./components/guests";

const title = {
    transition: 'all 0.2s ease-in-out',
    fontFamily: 'Hello',
    fontSize: {
        xs: '260%',
        sm: '480%'
    },
    color: '#6b7aa3'
}

const Index = () => {
    return (
        <Container maxWidth= "xl" sx= {{ padding: { xs: '60px 20px', sm: '120px' } }}>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= {{ xs: 4 }}>
                <Typography textAlign= "center" sx= { title }>-Entourage-</Typography>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 15 }>
                    <PastorParents />
                    <Honorary />
                    <PrincipalSponsors />
                    <SecondarySponsors />
                    <Bearers />
                    <GroomsmenBridesmaid />
                    <Guests />
                </Stack>
            </Stack>
        </Container>
    );
}

export default Index;