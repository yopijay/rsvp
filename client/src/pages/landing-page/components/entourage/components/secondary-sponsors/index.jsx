// Libraries
import { Grid, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan, faLink, faShirt } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

import { icon, role, subtitle, title } from "../../style";

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= {{ xs: 9 }}>
            <Typography textAlign= "center" sx= { title }>Secondary Sponsors</Typography>
            <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                <Grid item xs= { 12 } md= { 6 } lg= { 5 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" sx= {{ padding: '20px' }} spacing= { 3 }>
                        <Typography sx= { icon }><FontAwesomeIcon icon= { faFan } /></Typography>
                        <Stack direction= "column" justifyContent= "center" alignItems= "center">
                            <Typography sx= { subtitle }>Kanami Oki & Loujhielle Sevidal</Typography>
                            <Typography sx= { role }>Flower Girls</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs= { 12 } md= { 6 } lg= { 5 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" sx= {{ padding: '20px' }} spacing= { 3 }>
                        <Typography sx= { icon }><FontAwesomeIcon icon= { faShirt } /></Typography>
                        <Stack direction= "column" justifyContent= "center" alignItems= "center">
                            <Typography sx= { subtitle }>Chrisdyn & Fernando Lambino</Typography>
                            <Typography sx= { role }>To Clothe us as one</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs= { 12 } md= { 6 } lg= { 5 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" sx= {{ padding: '20px' }} spacing= { 3 }>
                        <Typography sx= { icon }><FontAwesomeIcon icon= { faLightbulb } /></Typography>
                        <Stack direction= "column" justifyContent= "center" alignItems= "center">
                            <Typography sx= { subtitle }>Roland France & Elleen Madronio</Typography>
                            <Typography sx= { role }>To Light our Path</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs= { 12 } md= { 6 } lg= { 5 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" sx= {{ padding: '20px' }} spacing= { 3 }>
                        <Typography sx= { icon }><FontAwesomeIcon icon= { faLink } /></Typography>
                        <Stack direction= "column" justifyContent= "center" alignItems= "center">
                            <Typography sx= { subtitle }>Grace Joy Madronio & King Penamora</Typography>
                            <Typography sx= { role }>To Bind us Together</Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    );
}

export default Index;