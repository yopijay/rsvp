// Libraries
import { Stack } from "@mui/material";

// Assets
import CornerLeft from "assets/images/corner-left-bg.png";
import CornerRight from "assets/images/corner-right-bg.png";

// Components
import Banner from "./components/countdown";
import BrideGroom from "./components/bride-groom";
import OurStory from "./components/our-story";
import Entourage from "./components/entourage";

const corners = {
    transition: 'all 0.2s ease-in-out',
    width: {
        xs: '120px',
        sm: '200px',
        md: '250px',
        lg: '300px'
    },
    height: 'auto'
}

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Banner />
            <Stack direction= "column" justifyContent= "fle-start" alignItems= "stretch">
                <Stack direction= "row" justifyContent= "space-between" alignItems= "flex-start" position= "absolute" width= "100vw">
                    <Stack sx= { corners }><img src= { CornerLeft } alt= "corner-left-bg" width= "100%" /></Stack>
                    <Stack sx= { corners }><img src= { CornerRight } alt= "corner-right-bg" width= "100%" /></Stack>
                </Stack>
                <BrideGroom />
                <OurStory />
                <Entourage />
            </Stack>
        </Stack>
    );
}

export default Index;