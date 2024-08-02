import { createTheme } from "@mui/material"; // Libraries

export const mode = onoff => createTheme({
    typography: {
        fontFamily: [ '-apple-system', 'Gilroy Light' ],
        fontSize: 13
    },
    components: {
        MuiInput: {
            styleOverrides: {
                root: {
                    '&:before': { borderBottom: 'none' },
                    '&:after': { borderBottom: 'none' },
                    '&.Mui-disabled:before': { borderBottom: 'none' },
                    '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' }
                },
                input: { fontFamily: 'Montserrat' }
            }
        }
    }
});

export const Components = custom => createTheme({
    components: {
        ...custom
    }
});