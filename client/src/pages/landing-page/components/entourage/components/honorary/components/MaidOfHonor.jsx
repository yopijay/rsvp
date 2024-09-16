// Libraries
import { Avatar, Stack, Typography } from "@mui/material";

import { image, imagecontainer, role, subtitle } from "../../../style";
import PatriciaKyle from "assets/images/honorary-patricia.jpeg";

const MaidOfHonor = () => {
    return (
        <Stack direction= "column" justifyContent= "center" alignItems= "center" spacing= { 3 }>
            <Stack sx= { imagecontainer }><Avatar alt= "Patricia Kyle R. Madronio" src= { PatriciaKyle } sx= { image } /></Stack>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "center">
                <Typography sx= { subtitle }>Patricia Kyle R. Madronio</Typography>
                <Typography variant= "caption" sx= { role }>Maid Of Honor</Typography>
            </Stack>
        </Stack>
    );
}

export default MaidOfHonor