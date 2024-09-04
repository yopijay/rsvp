// Libraries
import { Container, Stack, Typography } from "@mui/material";

import { attire, content, title } from "./style";
const colors = [ '#f6f6f6', '#d3d9e7', '#a3acc5', '#8d99ba', '#6b7aa3' ];

const Index = () => {
    return (
        <Container maxWidth= "xl" sx= {{ padding: { xs: '20px 20px 60px 20px', sm: '40px' } }}>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= {{ xs: 8 }}>
                <Stack direction= "column" justifyContent= "center" alignItems= "center">
                    <Typography sx= { title }>- The Attire -</Typography>
                    <Stack direction= "column" justifyContent= "center" alignItems= "center" spacing= { 3 }>
                        <Typography sx= { content }>We kindly request that our guests wear these colors on our special day</Typography>
                        <Stack direction= "row" justifyContent= "center" alignItems= "center" spacing= { 2 }>
                            { colors.map((color, index) => <Stack sx= { attire(color) } key= { index } /> )}
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction= "column" justifyContent= "center" alignItems= "center">
                    <Typography sx= { title }>- Gift -</Typography>
                    <Typography sx= { content }>There is no better gift than the honor of your presence.
                            However, if we are blessed with a gift from you, we respectfully request a monetary.</Typography>
                </Stack>
            </Stack>
        </Container>
    );
}

export default Index;