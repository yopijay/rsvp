// Libraries
import { Stack } from "@mui/material";

// Components
import Pastor from "./components/Pastor";
import GroomsParent from "./components/GroomsParent";
import BridesParent from "./components/BridesParent";

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= {{ xs: 8 }}>
            <Pastor />
            <Stack direction= {{ xs: 'column', sm: 'row' }}  justifyContent= "space-evenly" alignItems= "stretch" spacing= {{ xs: 2, sm: 4 }}>
                <GroomsParent />
                <BridesParent />
            </Stack>
        </Stack>
    );
}

export default Index;