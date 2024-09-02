import { Grid, Stack, Typography } from "@mui/material";

import { guests, title } from "../../style";

const groomsmen = [ 'Gene Dave Gajudo', 'Gabriel Gajudo', 'Jay Judan', 'Rencel Gardose', 'Louie Javier' ];
const bridesmaid = [ 'Grace Joy Madronio', 'Elleen Madronio', 'Erna Caraga', 'Aira May Judan', 'Tricia Anne Judan' ];

const Index = () => {
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center">
            <Grid item xs= { 10 } md= { 9 } lg= { 6 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" spacing= {{ xs: 8 }}>
                    <Typography sx= { title }>Groomsmen</Typography>
                    <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                        { groomsmen.map((groom, index) => 
                            <Grid item xs= { 6 } key= { index }>
                                <Typography textAlign= "center" sx= { guests }>{ groom }</Typography>
                            </Grid> )}
                    </Grid>
                </Stack>
            </Grid>
            <Grid item xs= { 10 } md= { 9 } lg= { 6 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" spacing= {{ xs: 8 }}>
                    <Typography sx= { title }>Bridesmaid</Typography>
                    <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                        { bridesmaid.map((bmaid, index) => 
                            <Grid item xs= { 6 } key= { index }>
                                <Typography textAlign= "center" sx= { guests }>{ bmaid }</Typography>
                            </Grid> )}
                    </Grid>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Index;