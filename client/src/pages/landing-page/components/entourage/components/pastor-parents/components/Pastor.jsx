// Libraries
import { Avatar, Stack, Typography } from "@mui/material";

import { imagecontainer, role, subtitle } from "../../../style";
const image = {
    transition: 'all 0.2s ease-in-out',
    width: {
        xs: '200px'
    },
    height: {
        xs: '200px'
    }
}

const Pastor = () => {
    return (
        <Stack direciton= "column" justifyContent= "center" alignItems= "center" flexGrow= { 1 } spacing= { 3 }>
            <Stack sx= { imagecontainer }>
                <Avatar alt= "Dennis Faith G. Racelis" src= "#" sx= { image } />
            </Stack>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "center">
                <Typography sx= { subtitle }>Ptr. Dennis Faith G. Racelis</Typography>
                <Typography variant= "caption" sx= { role }>Officiating Pastor</Typography>
            </Stack>
        </Stack>
    );
}

export default Pastor;