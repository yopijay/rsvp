// Libraries
import { useContext } from "react";
import { Autocomplete, Box, Stack, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";

// Core
import { FormCntxt } from "core/context/Form";

// Constants
import { btntxt, select } from "./style";

const Index = () => {
    const { control } = useContext(FormCntxt);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 5 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">

            </Stack>
            <form autoComplete= "off">
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                        <Typography variant= "body2" gutterBottom>Search reference no.</Typography>
                        <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
                            <Box sx= { select } flexGrow= { 1 }>
                                <Controller control= { control } name= "reference_no"
                                    render= { ({ field: { value } }) => (
                                        <Autocomplete options= { [].sort((a, b) => a.id - b.id) } disableClearable
                                            getOptionLabel= { option => option.name || option.id } noOptionsText= "No results..."
                                            getOptionDisabled= { option => option.id === 0 || option.id === '' }
                                            isOptionEqualToValue= { (option, value) => option.name === value.name || option.id ===  value.id }
                                            onChange= { (e, item) => {
                                                console.log(item);
                                            } }
                                            renderInput= { params => <TextField { ...params } variant= "standard"  size= "small" fullWidth /> } 
                                            value= {{ id: 0, name: '-- SEARCH REFEREANCE NO. BELOW ---' }} />
                                    ) } />
                            </Box>
                            <Typography component= { Link } to= "/create-event" sx= { btntxt }>New Event</Typography>
                        </Stack>
                    </Stack>
                    <Typography component= { Link } to= "/event/testing" sx= { btntxt }>Proceed</Typography>
                </Stack>
            </form>
        </Stack>
    );
}

export default Index;