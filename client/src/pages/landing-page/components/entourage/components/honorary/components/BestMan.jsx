// Libraries
import { Avatar, Stack, Typography } from "@mui/material";

import { image, imagecontainer, role, subtitle } from "../../../style";
import Denver from "assets/images/honorary-denver.jpg";

const BestMan = () => {
    return (
        <Stack direction= "column" justifyContent= "center" alignItems= "center" spacing= { 3 }>
            <Stack sx= { imagecontainer }><Avatar alt= "Mark Denver P. Gajudo" src= { Denver } sx= { image } /></Stack>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "center">
                <Typography sx= { subtitle }>Mark Denver P. Gajudo</Typography>
                <Typography variant= "caption" sx= { role }>Best Man</Typography>
            </Stack>
        </Stack>
    );
}

export default BestMan;