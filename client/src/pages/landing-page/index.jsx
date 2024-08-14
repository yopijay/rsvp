// Libraries
import { Stack } from "@mui/material";

// Components
import Banner from "./components/countdown";
import BrideGroom from "./components/bride-groom";
import OurStory from "./components/our-story";

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Banner />
            <BrideGroom />
            <OurStory />
        </Stack>
    );
}

export default Index;