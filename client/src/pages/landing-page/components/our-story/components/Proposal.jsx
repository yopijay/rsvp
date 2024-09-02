// Libraries
import { Avatar, Grid, Stack, Typography } from "@mui/material";

import { date, dot, dotcover, image, imagecover, subtitle } from "../style";
import proposal from "assets/images/engaged.JPG";

const Proposal = () => {
    return (
        <Grid container direction= "row" justifyContent= "center" alignItems= "center">
            <Grid item xs= { 12 } sm= { 7 } md= { 5 } lg= { 4 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= {{ xs: 1 }}>
                    <Typography sx= { subtitle }>Marriage Proposal</Typography>
                    <Typography sx= { date }>April 2024</Typography>
                    <Typography sx= {{ padding: { xs: '20px 0 40px 0', md: '0 20px 0 0' } }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id lectus mollis nisl fringilla lobortis sed quis nulla. 
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
                    <Avatar alt= "proposal" src= { proposal } sx= { image } />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Proposal;