import { Grid, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import { guests, title } from "../../style";

const groomsmen = [ 'Gene Dave Gajudo', 'Gabriel Gajudo', 'Jay Judan', 'Rencel Gardose', 'Louie Javier' ];
const bridesmaid = [ 'Grace Joy Madronio', 'Elleen Madronio', 'Erna Caraga', 'Aira May Judan', 'Tricia Anne Judan' ];

const Index = () => {
    return (
        <Grid container direction= "row" justifyContent= "center" alignItems= "center">
            <Grid item xs= { 12 } md= { 10 } lg= { 6 } padding= {{ xs: '20px 0px' }}>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" spacing= {{ xs: 4 }}>
                    <Typography sx= { title }>Groomsmen</Typography>
                    <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                        { groomsmen.map((groom, index) => 
                            <Grid item xs= { 12 } md= { 6 } key= { index } padding= "8px">
                                <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 } sx= {{ backgroundColor: '#ffffff', borderRadius: '100px', padding: '12px 30px' }}>
                                    <Typography color= "#6b7aa3"><FontAwesomeIcon icon= { faCircle} /></Typography>
                                    <Typography textAlign= "center" sx= { guests }>{ groom }</Typography>
                                </Stack>
                            </Grid> )}
                    </Grid>
                </Stack>
            </Grid>
            <Grid item xs= { 12 } md= { 10 } lg= { 6 } padding= {{ xs: '20px 0px' }}>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" spacing= {{ xs: 4 }}>
                    <Typography sx= { title }>Bridesmaid</Typography>
                    <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                        { bridesmaid.map((bmaid, index) => 
                            <Grid item xs= { 12 } md= { 6 } key= { index } padding= "8px">
                                <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 } sx= {{ backgroundColor: '#ffffff', borderRadius: '100px', padding: '12px 30px' }}>
                                    <Typography color= "#6b7aa3"><FontAwesomeIcon icon= { faCircle} /></Typography>
                                    <Typography textAlign= "center" sx= { guests }>{ bmaid }</Typography>
                                </Stack>
                            </Grid> )}
                    </Grid>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Index;