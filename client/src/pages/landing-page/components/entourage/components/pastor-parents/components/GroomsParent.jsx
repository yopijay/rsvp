// Libraries
import { Avatar, Stack, Typography } from "@mui/material";

import { image, imagecontainer, role, subtitle } from "../../../style";

const GroomsParent = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" spacing= {{ xs: 3 }}>
            <Stack direction= {{ xs: 'column', sm: 'row' }} justifyContent= "center" alignItems= "center" spacing= {{ xs: 2 }}>
                <Stack sx= { imagecontainer }><Avatar alt= "Ronilo Judan" src= "#" sx= { image } /></Stack>
                <Stack sx= { imagecontainer }><Avatar alt= "Rosadel Judan" src= "#" sx= { image } /></Stack>
            </Stack>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "center">
                <Typography sx= { subtitle }>Ronilo & Rosadel Judan</Typography>
                <Typography variant= "caption" sx= { role }>Parents of the Groom</Typography>
            </Stack>
        </Stack>
    );
}

export default GroomsParent;