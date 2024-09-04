// Assets
import CoupleBG from "assets/images/couple-bg.png";

export const container = {
    transition: 'all 0.2s ease-in-out',
    padding: {
        xs: '110px 0'
    }
}

export const profile = {
    padding: '10px', 
    borderRadius: '100px', 
    boxShadow: '0 0 6.1px 3.9px rgba(28,31,86,.06)'
}

export const name = {
    fontFamily: 'Montserrat Bold',
    fontSize: '140%',
    textAlign: 'right',
    color: '#5f6063'
}

export const desc = {
    fontSize: '110%',
    color: '#5f6063'
}

export const icon = {
    fontSize: '140%',
    color: '#a3acc5'
}

export const couple = {
    backgroundImage: `url('${CoupleBG}')`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    margin: {
        xs: '0 auto'
    },
    width: {
        xs: '90%',
        sm: '60%',
        md: '100%',
    },
    padding: {
        xs: '45px',
        sm: '60px',
        md: '40px',
        lg: '60px',
    }
}