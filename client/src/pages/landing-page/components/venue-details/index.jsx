// Libraries
import { Container, Grid, Stack, Typography } from "@mui/material";

import { details, subtitle, title, venuecontainer } from "./style";

const Index = () => {
    return (
        <Container maxWidth= "xl" sx= {{ padding: '150px 0' }}>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 13 }>
                <Typography textAlign= "center" sx= { title }>When & Where</Typography>
                <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                    <Grid item xs= { 12 } md= { 5 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" spacing= { 2 } sx= { venuecontainer }>
                            <Typography sx= { subtitle }>The Reception & Ceremony</Typography>
                            <Typography sx= { details }>Thursday, 31 Oct, 2024 4:00 PM - 7:00 PM</Typography>
                            <Typography sx= { details }>Cora's Garden, Balagtas, Novaliches Quezon City</Typography>
                            <Typography sx= { details }>Contact no.: <span>09503726254</span> or <span>09502099508</span></Typography>
                            <Typography>See Location</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    );
}

export default Index;