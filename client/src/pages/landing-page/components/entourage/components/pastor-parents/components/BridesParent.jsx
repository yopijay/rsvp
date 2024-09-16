// Libraries
import { Avatar, Stack, Typography } from "@mui/material";

import { image, imagecontainer, role, subtitle } from "../../../style";
import Parents from "assets/images/arleen-ermar.jpg";

const BridesParent = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" spacing= {{ xs: 3 }}>
            <Stack direction= {{ xs: 'column', sm: 'row' }} justifyContent= "center" alignItems= "center" spacing= { 2 }>
                <Stack sx= { imagecontainer }><Avatar alt= "Ermar & Arleen Madronio" src= { Parents } sx= { image } /></Stack>
            </Stack>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "center">
                <Typography sx= { subtitle }>Ermar & Arleen Madronio</Typography>
                <Typography variant= "caption" sx= { role }>Parents of the Bride</Typography>
            </Stack>
        </Stack>
    );
}

export default BridesParent;