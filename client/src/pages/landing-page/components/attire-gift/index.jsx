// Libraries
import { Container, Grid, Stack, Typography } from "@mui/material";

// Assets
import QRUB from "assets/images/qr-ub.jpg";
import QRBDO from "assets/images/qr-bdo.jpg";
import QRGCASH from "assets/images/qr-gcash.jpg";
import QR from "assets/images/ub.png";
import BDO from "assets/images/bdo.png";
import GCASH from "assets/images/gcash.png";

import { acccountname, accountno, attire, bankcontainer, content, qrimg, qrlogo, title } from "./style";
const colors = [ '#f6f6f6', '#d3d9e7', '#a3acc5', '#8d99ba', '#6b7aa3' ];
const qrs = [
    { logo: QR, qr: QRUB, accountname: 'PAUL JUDAN', accountno: '109655615714' },
    { logo: BDO, qr: QRBDO, accountname: 'HAZEL MADRONIO', accountno: '002890336421' },
    { logo: GCASH, qr: QRGCASH, accountname: 'HAZEL MADRONIO', accountno: '09503726254' },
];

const Index = () => {
    return (
        <Container maxWidth= "xl" sx= {{ padding: { xs: '20px 20px 60px 20px', sm: '40px' } }}>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= {{ xs: 8 }}>
                <Stack direction= "column" justifyContent= "center" alignItems= "center">
                    <Typography sx= { title }>- The Attire -</Typography>
                    <Stack direction= "column" justifyContent= "center" alignItems= "center" spacing= { 3 }>
                        <Typography sx= { content }>We kindly request that our guests wear these colors on our special day</Typography>
                        <Stack direction= "row" justifyContent= "center" alignItems= "center" spacing= { 2 }>
                            { colors.map((color, index) => <Stack sx= { attire(color) } key= { index } /> )}
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction= "column" justifyContent= "center" alignItems= "center" spacing= {{ xs: 5 }}>
                    <Stack direction= "column" justifyContent= "center" alignItems= "center">
                        <Typography sx= { title }>- Gift -</Typography>
                        <Typography sx= { content }>There is no better gift than the honor of your presence.
                                However, if we are blessed with a gift from you, we respectfully request a monetary.</Typography>
                    </Stack>
                    <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                        { qrs.map((qr, index) => 
                            <Grid item xs= { 12 } sm= { 8 } md= { 6 } lg= { 4 } key= { index } sx= {{ padding: '16px' }}>
                                <Stack direction= "column" justifyContent= "center" alignItems= "center" sx= { bankcontainer } spacing= {{ xs: 4 }}>
                                    <Stack sx= { qrlogo(qr.logo) } />
                                    <Stack direction= "column" justifyContent= "center" alignItems= "center">
                                        <Typography sx= { acccountname }>{ qr.accountname }</Typography>
                                        <Typography sx= { accountno }>{ qr.accountno }</Typography>
                                    </Stack>
                                    <Stack sx= { qrimg(qr.qr) } />
                                </Stack>        
                            </Grid> )}
                    </Grid>
                </Stack>
            </Stack>
        </Container>
    );
}

export default Index;