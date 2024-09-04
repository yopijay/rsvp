// Libraries
import { Grid, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBible, faCoins, faRing } from "@fortawesome/free-solid-svg-icons";

import { bearercontainer, role, subtitle, title } from "../../style";
const icon = {
    backgroundColor: '#ffffff',
    padding: {
        xs: '20px',
        md: '30px'
    },
    marginBottom: {
        xs: '-35px',
        md: '-45px'
    },
    borderRadius: '200px',
    fontSize: {
        xs: '180%',
        md: '200%'
    },
    color: '#8d99ba'
}

const bearers = [
    { icon: faCoins, bearer: 'Timothy James Caraga', role: 'Coin Bearer' },
    { icon: faRing, bearer: 'Lucas Lambino', role: 'Ring Bearer' },
    { icon: faBookBible, bearer: 'Matthew Lambino', role: 'Bible Bearer' }
]

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= {{ xs: 4 }}>
            <Typography textAlign= "center" sx= { title }>Bearers</Typography>
            <Grid container direciton= "row" justifyContent= "center" alignItems= "center">
                { bearers.map((info, index) => 
                    <Grid item xs= { 12 } md= { 6 } lg= { 4 } key= { index } padding= {{ xs: '10px' }}>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "center">
                            <Stack sx= { icon }><FontAwesomeIcon icon= { info.icon } /></Stack>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" sx= { bearercontainer }>
                                <Typography sx= { subtitle }>{ info.bearer }</Typography>
                                <Typography sx= { role }>{ info.role }</Typography>
                            </Stack>
                        </Stack>
                    </Grid> )}
            </Grid>
        </Stack>
    );
}

export default Index;