// Libraries
import { Grid, Stack, Typography } from "@mui/material";
import { guests, sponsorcontainer, title } from "../../style";

const sponsors = [ 'Linda Gambala', 'Edgar Gambala', 'Leah Laude', 'Jomar Judan', 'Rupert Carandang', 'Gina Molida', 'Rose Molina', 'Robert Baltazar',
                                'Julie Bayonito', 'Mary Ann Bonganciso', 'Ma. Shirley Raneses', 'Edith Mendoza', 'Maida Pulido', 'Angelito Jhayr Obera', 'Moneth Obera',
                                'Dorothy Arnobit', 'Alejandro Arnobit', 'Anna Buluran', 'Maria Elfleda Mendoza', 'Edgar Mendoza', 'Proverbs Manansala' ];

const Index = () => {
    const random = (max, min) => Math.floor(Math.random() * (max - min) + min);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= {{ xs: 8 }}>
            <Typography textAlign= "center" sx= { title }>Principal Sponsors</Typography>
            <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                { sponsors.map((sponsor, index) => 
                    <Grid item xs= { random(5, 3) } key= { index }>
                        <Stack sx= { sponsorcontainer }>
                            <Typography textAlign= "center" sx= { guests }>{ sponsor }</Typography>
                        </Stack>
                    </Grid> )}
            </Grid>
        </Stack>
    );
}

export default Index;