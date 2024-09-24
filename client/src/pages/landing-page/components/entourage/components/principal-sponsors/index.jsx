// Libraries
import { Grid, Stack, Typography } from "@mui/material";
import { guests, primarycontainer, title } from "../../style";

const sponsors = [ 'Linda Gambala', 'Edgar Gambala', 'Leah Laude', 'Jay Jomar M. Judan', 'Rupert Carandang', 'Gina Molina', 'Rose Molina', 'Robert Baltazar',
                                'Julie Bayonito', 'Mary Ann Bonganciso', 'Ma. Shirley Raneses', 'Edith Mendoza', 'Maida Pulido', 'Angelito Jhayr Obera', 'Moneth Obera',
                                'Dorothy Arnobit', 'Alejandro Arnobit', 'Anna Buluran', 'Maria Elfleda Mendoza', 'Edgar Mendoza', 'Proverbs Manansala' ];

const Index = () => {

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= {{ xs: 4 }}>
            <Typography textAlign= "center" sx= { title }>Principal Sponsors</Typography>
            <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                { (sponsors.sort()).map((sponsor, index) => 
                    <Grid item xs= { 11 } sm= { 6 } lg= { 4 } key= { index }>
                        <Stack sx= { primarycontainer }>
                            <Typography textAlign= "center" sx= { guests }>{ sponsor }</Typography>
                        </Stack>
                    </Grid> )}
            </Grid>
        </Stack>
    );
}

export default Index;