// Libraries
import { Container, Stack, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// Core
import { FormPrvdr } from "core/context/Form";

// Components
import Explore from "./explore";

const Index = () => {
    return (
        <Container maxWidth= "xs">
            <Stack direction= "column" justifyContent= "space-between" alignItems= "stretch" sx= {{ height: '100vh', padding: '10px 0' }}>
                <Stack direction= "column" justifyContent= "center" alignItems= "stretch" spacing= { 2 } sx= {{ flexGrow: 1 }}>
                    <Routes>
                        <Route exact path= "/" element= { <FormPrvdr><Explore /></FormPrvdr> } />
                        <Route exact path= "/create-event" element= { <FormPrvdr>CREATE EVENT</FormPrvdr> } />
                        <Route exact path= "/event/:reference_no" element= { <FormPrvdr>EVENT CREATED</FormPrvdr> } />
                    </Routes>
                </Stack>
                <Typography variant= "caption" textAlign= "center" color= "#557F9F" fontWeight="bold">Developed by Paul John Judan</Typography>
            </Stack>
        </Container>
    );
}

export default Index;