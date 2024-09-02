// Libraries
import { Grid, Stack, Typography } from "@mui/material";

import { guestcontainer, title, guests as gsts } from "../../style";

const guests = [ 'Abby Valencia', 'Arvin Ranara', 'Bryan Ranara', 'Eloisa Madronio', 'Ernesto Ranara', 'Florentina Ranara', 'Francis Madronio', 'Janice Hernandez', 'Jasmin Hernandez',
                            'Joshua Hernandez', 'Lucas Caraga', 'Maricel Bolakinia', 'Matty Ranara', 'Michaela Madronio', 'Tifany Ranara', 'Tracy Ann Ranara', 'Angela Anonical', 
                            'Clarissa Punto', 'Crisanta Delos Stantos', 'Geraldine Corpuz', 'Imelda Granado', 'Jizelle Tubeo', 'Maria Angela Marvilla', 'Mark Lauren Casais', 'Melvin Dile',
                            'Nicole Rivera', 'Retchel Gabales', 'Anna Corazon Buluran', 'Gabriel Buluran', 'Hazel Nadres', 'Jabez Obera', 'Jacob Obera', 'John Marc Sambat', 'Joy Racelis', 
                            'Julie Estacio', 'Lydia Salaveria', 'Mark Anden', 'Nancy Tan', 'Romelyn Anden', 'Reuel Espiritu', 'Ruth Shield Condino', 'Abigail Borre', 'Angelou Ordeniza', 
                            'Arnold Mahencio', 'Bryan Gading', 'Donabel Mascosa', 'Gerald Kevin Oplado', 'Hazel Onaya', 'Jerome Borre', 'Job Mark Javier', 'Kimberly Atienza',
                            'Marcelo Godes', 'Midelyn Miguel', 'Patrick Onaya', 'Romynisa Corbito', 'Rowell Gading', 'Wendell Cordis', 'Aurelio Judan', 'Darlyn Judan', 'Irenia Judan',
                            'Jaime Balbada', 'Janelle Judan', 'Jaynie Rose Judan', 'Jhielou Sevidal', 'Jonalyn Judan', 'Marilou Sevidal', 'Sererino Blanco', 'Shirley Balbada',
                            'Abigael Arnejo', 'Alexcia Laderas', 'Calvin Sy', 'Danmark De Leon', 'Generose Garcia', 'Glenn Paul Agaton', 'Hyun Beum Lee', 'Jerome Fererras', 'Joshua Fererras',
                            'Joy Cuadra', 'Kim Juaneza', 'Maygan Villanueva', 'Queenie Anne Sarita', 'Railey Christian Tolentino', 'Reymart Garilao', 'Aeroll Pagba', 'Agustin Barena', 
                            'Erol Canita', 'Francis Salud', 'Jazzteen Espiritu', 'Elton James Pena', 'Jennylyn Galve', 'Jhemil Gonzales', 'John Jay Rimorin', 'John Paul Lagroma', 
                            'Johnmark Empinado', 'Jomar Cascabel', 'Jonalyn Delvo', 'Kenneth Moyalde', 'Kim Bryan Sison', 'Marvic Hernaez', 'Marvin Dumlao', 'Noel Cabilles',
                            'Ronald Henguillo', 'Ryan Angelo Madrigal', 'Alyanna Torres', 'Ashana Marie Maynigo', 'Fernand Ramirez', 'Hannah Queen Maurillo', 'Jasselle Cabrera',
                            'Justine Bonganciso', 'Mary Grace Oki', 'Mary Jane Bonganciso', 'Mary Joy Bonganciso', 'Paolo Fernandez', 'Reuben Kurt Bautista', 'Rhainne Carandang',
                            'Rowena Millena', 'Shiena Maynigo', 'Simiran Singh', 'Fausha Zuniega Bayonito' ];

const Index = () => {
    const random = (max, min) => Math.floor(Math.random() * (max - min) + min);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" spacing= {{ xs: 9 }}>
            <Typography sx= { title }>Guests</Typography>
            <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                { guests.map((guest, index) => 
                    <Grid item xs= { random(5, 3) } key= { index }>
                        <Stack sx= { guestcontainer }>
                            <Typography textAlign= "center" sx= { gsts }>{ guest }</Typography>
                        </Stack>
                    </Grid> )}
            </Grid>
        </Stack>
    );
}

export default Index;