// Libraries
import { Avatar, Grid, Stack, Typography } from "@mui/material";

import { date, image, imagecover, subtitle } from "../style";
import Servetogether from "assets/images/serve-together.JPG";

const ServeTogether = () => {
    return (
        <Grid container direction= "row" justifyContent= "center" alignItems= "center">
            <Grid item xs= { 12 } md= { 5 } lg= { 4 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                    <Typography sx= { subtitle }>Serve Together</Typography>
                    <Typography sx= { date }>2019</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id lectus mollis nisl fringilla lobortis sed quis nulla. 
                        Cras sodales eget velit vitae vehicula. Curabitur dignissim gravida dolor ut accumsan.</Typography>
                </Stack>
            </Grid>
            <Grid item md= { 1 } sx= {{ display: { xs: 'none', md: 'block' }} }>
                <Stack sx= {{ width: '26px', padding: '4px', border: 'solid 1px #8d99ba', borderRadius: '50px', margin: '0 auto' }}>
                    <Stack sx= {{ width: '16px', height: '16px', backgroundColor: '#6b7aa3', borderRadius: '50px' }} />
                </Stack>
            </Grid>
            <Grid item xs= { 12 } md= { 5 } lg= { 4 }>
                <Stack sx= { imagecover }>
                    <Avatar alt= "serve-together" src= { Servetogether } sx= { image } />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default ServeTogether;