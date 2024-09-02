// Libraries
import { Grid, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBible, faCoins, faRing } from "@fortawesome/free-solid-svg-icons";

import { icon, role, subtitle, title } from "../../style";

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= {{ xs: 9 }}>
            <Typography textAlign= "center" sx= { title }>Bearers</Typography>
            <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                <Grid item xs= { 12 } md= { 6 } sx= {{ padding: '20px' }}>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" spacing= { 3 }>
                        <Typography sx= { icon }><FontAwesomeIcon icon= { faCoins } /></Typography>
                        <Stack direction= "column" justifyContent= "center" alignItems= "center">
                            <Typography sx= { subtitle }>Timothy James Caraga</Typography>
                            <Typography sx= { role }>Coin</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs= { 12 } md= { 6 } sx= {{ padding: '20px' }}>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" spacing= { 3 }>
                        <Typography sx= { icon }><FontAwesomeIcon icon= { faRing } /></Typography>
                        <Stack direction= "column" justifyContent= "center" alignItems= "center">
                            <Typography sx= { subtitle }>Lucas Lambino</Typography>
                            <Typography sx= { role }>Ring</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs= { 12 } md= { 6 } sx= {{ padding: '20px' }}>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" spacing= { 3 }>
                        <Typography sx= { icon }><FontAwesomeIcon icon= { faBookBible } /></Typography>
                        <Stack direction= "column" justifyContent= "center" alignItems= "center">
                            <Typography sx= { subtitle }>Matthew Lambino</Typography>
                            <Typography sx= { role }>Bible</Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    );
}

export default Index;