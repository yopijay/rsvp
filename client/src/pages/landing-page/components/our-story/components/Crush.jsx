// Libraries
import { Avatar, Grid, Stack, Typography } from "@mui/material";

import { date, dot, dotcover, image, imagecover, subtitle } from "../style";
import crush from "assets/images/crush.JPG";

const Crush = () => {
    return (
        <Grid container direction= {{ xs: 'row', sm: 'row-reverse' }}  justifyContent= "center" alignItems= "center" data-aos= "fade-left" data-aos-delay= "4000">
            <Grid item xs= { 12 } sm= { 7 } md= { 5 } lg= { 4 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= {{ xs: 1 }}>
                    <Typography sx= { subtitle } textAlign= {{ xs: 'left', sm: 'right' }}>Crush</Typography>
                    <Typography sx= { date } textAlign= {{ xs: 'left', sm: 'right' }}>March 2018</Typography>
                    <Typography sx= {{ padding: { xs: '20px 0 40px 0', md: '0 0 0 20px' }, textAlign: { xs: 'left', sm: 'right' } }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id lectus mollis nisl fringilla lobortis sed quis nulla. 
                        Cras sodales eget velit vitae vehicula. Curabitur dignissim gravida dolor ut accumsan.</Typography>
                </Stack>
            </Grid>
            <Grid item md= { 1 } sx= {{ display: { xs: 'none', md: 'block' }} }>
                <Stack sx= { dotcover }>
                    <Stack sx= { dot } />
                </Stack>
            </Grid>
            <Grid item xs= { 12 } sm= { 5 } md= { 5 } lg= { 4 }>
                <Stack sx= { imagecover }>
                    <Avatar alt= "crush" src= { crush } sx= { image } />
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Crush;