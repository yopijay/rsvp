// Libraries
import { Container, Stack, Typography } from "@mui/material";
import Countdown from "react-countdown";

import { container, cover, date, digits, label, saveDate } from "./style";

const Index = () => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        return (
            <Stack direction= "row" justifyContent= "center" alignItems= "center" sx= {{ flexGrow: 1, marginTop: { xs: '20px', } }} spacing= {{ xs: 4, sm: 9 }}>
                { completed ? 
                    <Typography sx= { digits }>CONGRATULATIONS!</Typography> :
                    <>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" data-aos= "fade-up" data-aos-delay= "1500" data-aos-easing= "ease-in-out">
                            <Typography sx= { digits }>{ days }</Typography>
                            <Typography sx= { label }>Days</Typography>
                        </Stack>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" data-aos= "fade-up" data-aos-delay= "1700" data-aos-easing= "ease-in-out">
                            <Typography sx= { digits }>{ hours }</Typography>
                            <Typography sx= { label }>Hours</Typography>
                        </Stack>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" data-aos= "fade-up" data-aos-delay= "1900" data-aos-easing= "ease-in-out">
                            <Typography sx= { digits }>{ minutes }</Typography>
                            <Typography sx= { label }>Minutes</Typography>
                        </Stack>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" data-aos= "fade-up" data-aos-delay= "2100" data-aos-easing= "ease-in-out">
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
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" spacing= { 7 }>
                        <Typography textAlign= "center" sx= { saveDate } data-aos= "fade-up" data-aos-delay= "1000">Save The Date</Typography>
                        <Typography textAlign= "center" sx= { date } data-aos= "fade-up" data-aos-delay= "1500">October 31, 2024</Typography>
                        <Countdown date= { new Date(2024, 9, 31) } renderer= { renderer } />
                    </Stack>
                </Container>
            </Stack>
        </Stack>
    );
}

export default Index;