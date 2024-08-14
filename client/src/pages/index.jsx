// Libraries
import { Stack } from "@mui/material";
import { Routes, Route } from "react-router-dom";

// Layouts
import LandingPage from "./landing-page";

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Routes>
                <Route exact path= "/" element= { <LandingPage /> }></Route>
            </Routes>
        </Stack>
    );
}

export default Index;