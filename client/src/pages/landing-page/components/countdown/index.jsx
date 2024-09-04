// Libraries
import { Container, Stack, Typography } from "@mui/material";
import Countdown from "react-countdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { container, cover, date, digits, label, location, saveDate } from "./style";

const Index = () => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        return (
            <Stack direction= "row" justifyContent= "center" alignItems= "center" sx= {{ marginTop: { xs: '20px', } }} spacing= {{ xs: 4, sm: 9 }}>
                { completed ? 
                    <Typography sx= { digits }>CONGRATULATIONS!</Typography> :
                    <>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "center">
                            <Typography sx= { digits }>{ days }</Typography>
                            <Typography sx= { label }>Days</Typography>
                        </Stack>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "center">
                            <Typography sx= { digits }>{ hours }</Typography>
                            <Typography sx= { label }>Hours</Typography>
                        </Stack>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "center">
                            <Typography sx= { digits }>{ minutes }</Typography>
                            <Typography sx= { label }>Minutes</Typography>
                        </Stack>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "center">
                            <Typography sx= { digits }>{ seconds }</Typography>
                            <Typography sx= { label }>Seconds</Typography>
                        </Stack>
                    </>
                }
            </Stack>
        )
    }

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { container }>
            <Stack direction= "column" justifyContent= "center" alignItems= "stretch" sx= { cover }>
                <Container maxWidth= "lg">
                    <Stack direction= "column" justifyContent= "center" alignitems= "center" spacing= {{ xs: 1, }}>
                        <Typography sx= { saveDate }>-Save The Date-</Typography>
                        <Stack direction= "column" justifyContent= "center" alignItems= "center">
                            <Typography sx= { date }>October 31, 2024 | 4PM</Typography>
                            <Typography sx= { location }><FontAwesomeIcon icon= { faLocationDot } style= {{ marginRight: '8px' }} />Cora's Garden, Balagtas Novaliches Quezon City</Typography>
                        </Stack>
                        <Countdown date= { new Date(2024, 9, 31) } renderer= { renderer } />
                    </Stack>
                </Container>
            </Stack>
        </Stack>
    );
}

export default Index;