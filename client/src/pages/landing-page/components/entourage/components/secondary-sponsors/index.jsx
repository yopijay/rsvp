// Libraries
import { Grid, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan, faLink, faShirt } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

import { role, secondarycontainer, subtitle, title } from "../../style";
const icon = {
    fontSize: {
        xs: '180%'
    },
    color: '#8d99ba'
}

const sponsors = [
    { icon: faFan, sponsor: 'Kanami Oki & Loujhielle Sevidal', role: 'Flower Girls' },
    { icon: faShirt, sponsor: 'Chrisdyn & Fernando Lambino', role: 'To Clothe us as one' },
    { icon: faLightbulb, sponsor: 'Roland France & Elleen Madronio', role: 'To Light our Path' },
    { icon: faLink, sponsor: 'Grace Joy Madronio & King Penamora', role: 'To Bind us Together' }
]

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= {{ xs: 4 }}>
            <Typography textAlign= "center" sx= { title }>Secondary Sponsors</Typography>
            <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                { sponsors.map((info, index) =>
                    <Grid item xs= { 12 } md= { 6 } key= { index } padding= {{ xs: '10px', }}>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { secondarycontainer } spacing= { 2 }>
                            <Typography sx= { icon }><FontAwesomeIcon icon= { info.icon } /></Typography>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Typography sx= { subtitle }>{ info.sponsor }</Typography>
                                <Typography sx= { role }>{ info.role }</Typography>
                            </Stack>
                        </Stack>
                    </Grid> )}
            </Grid>
        </Stack>
    );
}

export default Index;