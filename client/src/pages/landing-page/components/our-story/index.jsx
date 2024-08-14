// Libraries
import { Container, Stack, Typography } from "@mui/material";

import { title } from "./style";

// Components
import FirstMeet from "./components/FirstMeet";
import Crush from "./components/Crush";
import ServeTogether from "./components/ServeTogether";
import Official from "./components/Official";
import Proposal from "./components/Proposal";

const Index = () => {
    return (
        <Container maxWidth= "xl" sx= {{ padding: '150px 0' }}>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 15 }>
                <Typography textAlign= "center" sx= { title }>Our Story</Typography>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 10 }>
                    <FirstMeet />
                    <Crush />
                    <ServeTogether />
                    <Official />
                    <Proposal />
                </Stack>
            </Stack>
        </Container>
    );
}

export default Index;