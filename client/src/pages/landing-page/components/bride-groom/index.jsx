// LIbraries
import { Avatar, Container, Grid, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

// Assets
import Bridegroom from "assets/images/bridegroom.JPG";
import PJ from "assets/images/PJ.JPG";
import Hazel from "assets/images/Hazel.JPG";

import { container, desc, icon, name, profile } from "./style";

const Index = () => {
    return (
        <Container maxWidth= "xl" sx= { container }>
            <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                <Grid item xs= { 12 } lg= { 4 }>
                    <Stack direction= "column" justifyContent= "center" alignItems= "flex-end" spacing= { 2 } sx= {{ padding: '0 60px' }}>
                        <Stack sx= { profile }>
                            <Avatar alt= "PJ" src= { PJ } sx= {{ width: 100, height: 100 }} />
                        </Stack>
                        <Typography sx= { name }>Paul John Judan</Typography>
                        <Typography sx= { desc } textAlign= "right">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                        <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                            <Typography sx= { icon }><FontAwesomeIcon icon= { faFacebook } /></Typography>
                            <Typography sx= { icon }><FontAwesomeIcon icon= { faInstagram } /></Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs= { 12 } lg= { 3 }>
                    <Stack sx= {{ overflow: 'hidden', width: '100%', height: 'auto', borderRadius: '190px' }}>
                        <img src= { Bridegroom } alt= "bridegroom" width= "100%" height= "auto" />
                    </Stack>
                </Grid>
                <Grid item xs= { 12 } lg= { 4 }>
                    <Stack direction= "column" justifyContent= "center" alignItems= "flex-start" spacing= { 2 } sx= {{ padding: '0 60px' }}>
                        <Stack sx= { profile }>
                            <Avatar alt= "Hazel" src= { Hazel } sx= {{ width: 100, height: 100 }} />
                        </Stack>
                        <Typography sx= { name }>Hazel Madronio</Typography>
                        <Typography sx= { desc } textAlign= "left">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                        <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 }>
                            <Typography sx= { icon }><FontAwesomeIcon icon= { faInstagram } /></Typography>
                            <Typography sx= { icon }><FontAwesomeIcon icon= { faFacebook } /></Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Index;