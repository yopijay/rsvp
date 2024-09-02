// Libraries
import { Stack, Typography } from "@mui/material";

// Components
import BestMan from "./components/BestMan";
import MaidOfHonor from "./components/MaidOfHonor";

import { title } from "../../style";

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= {{ xs: 9 }}>
            <Typography textAlign= "center" sx= { title }>Honorary</Typography>
            <Stack direction= "row" justifyContent= "space-evenly" alignItems= "center" spacing= { 2 }>
                <BestMan />
                <MaidOfHonor />
            </Stack>
        </Stack>
    );
}

export default Index;;