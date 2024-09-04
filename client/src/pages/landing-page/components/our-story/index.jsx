// Libraries
import { Container, Grid, Stack, Typography } from "@mui/material";

import { date, image, imagecover, storycontainer, subtitle, title } from "./style";
import firstmeet from "assets/images/first-meet.JPG";
import crush from "assets/images/crush.JPG";
import servetogether from "assets/images/serve-together.JPG";
import official from "assets/images/official.JPG";
import proposal from "assets/images/engaged.JPG";

const story = [
    { title: 'First Meet', year: 'March 2016', picture: firstmeet  },
    { title: 'Crush', year: 'March 2018', picture: crush  },
    { title: 'Serve Together', year: '2019', picture: servetogether  },
    { title: 'Official BF/GF', year: 'Feb 2021', picture: official  },
    { title: 'Marriage Proposal', year: 'April 2024', picture: proposal  },
];

const Index = () => {
    return (
        <Container maxWidth= "xl" sx= {{ padding: { xs: '40px 20px', sm: '40px' } }}>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= {{ xs: 4 }}>
                <Typography textAlign= "center" sx= { title }>Our Story</Typography>
                <Grid container direciton= "row" justifyContent= "center" alignItems= "center">
                    { story.map((info, index) => 
                        <Grid item xs= { 12 } sm= { 6 } md= { 4 } key= { index } padding= "10px">
                            <Stack direction= "column" justifyContent= "center" alignItems= "center" sx= { storycontainer } spacing= { 2 }>
                                <Stack sx= { imagecover }><img src= { info.picture } alt= { info.title } style= { image } /></Stack>
                                <Stack direction= "column" justifyContent= "center" alignItems= "center">
                                    <Typography sx= { subtitle }>{ info.title }</Typography>
                                    <Typography sx= { date }>{ info.year }</Typography>
                                </Stack>
                            </Stack>
                        </Grid> ) }
                </Grid>
            </Stack>
        </Container>
    );
}

export default Index;