// Libraries
import { Avatar, Stack, Typography } from "@mui/material";

import { image, imagecontainer, role, subtitle } from "../../../style";

const BridesParent = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" spacing= {{ xs: 3 }}>
            <Stack direction= "row" justifyContent= "center" alignItems= "center" spacing= { 2 }>
                <Stack sx= { imagecontainer }><Avatar alt= "Ermar Madronio" src= "#" sx= { image } /></Stack>
                <Stack sx= { imagecontainer }><Avatar alt= "Arleen Madronio" src= "#" sx= { image } /></Stack>
            </Stack>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "center">
                <Typography sx= { subtitle }>Ermar & Arleen Madronio</Typography>
                <Typography variant= "caption" sx= { role }>Parents of the Bride</Typography>
            </Stack>
        </Stack>
    );
}

export default BridesParent;