// Assets
import profilebg from "assets/images/profile-bg.png";

export const imagecontainer = {
    transition: 'all 0.2s ease-in-out',
    padding: {
        xs: '32px',
        sm: '35px',
        md: '40px'
    },
    // backgroundColor: '#ffffff',
    backgroundImage: `url(${profilebg})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '200px',
    width: {
        xs: '200px',
        sm: '230px',
        md: '250px'
    },
    height: {
        xs: '200px',
        sm: '230px',
        md: '250px'
    }
}

export const image = {
    zIndex: -1,
    transition: 'all 0.2s ease-in-out',
    width: {
        xs: '137px',
        sm: '160px',
        md: '170px'
    },
    height: {
        xs: '137px',
        sm: '160px',
        md: '170px'
    }
}

export const title = {
    transition: 'all 0.2s ease-in-out',
    fontFamily: 'Hello',
    color: '#6b7aa3',
    fontSize: {
        xs: '260%',
        md: '380%'
    }
}

export const subtitle = {
    transition: 'all 0.2s ease-in-out',
    fontFamily: 'Montserrat SemiBold',
    color: '#5f6063',
    fontSize: {
        xs: '105%'
    },
}

export const primarycontainer = {
    border: 'dashed 2px #6b7aa3',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px'
}

export const secondarycontainer = {
    padding: {
        xs: '25px',
        sm: '30px',
        md: '30px 20px',
        lg: '40px'
    }, 
    borderRadius: '16px',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 6.1px 3.9px rgba(28,31,86,.06)',
    overflow: 'hidden'
}

export const bearercontainer = {
    backgroundColor: '#ffffff',
    boxShadow: '0 0 6.1px 3.9px rgba(28,31,86,.06)',
    width: '100%',
    borderRadius: '12px',
    zIndex: -1,
    padding: '50px 0 30px 0'
}

export const guestcontainer = {
    border: 'dashed 2px #6b7aa3',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px'
}

export const guests = {
    transition: 'all 0.2s ease-in-out',
    color: '#5f6063',
    fontSize: {
        xs: '95%'
    },
}

export const role = {
    transition: 'all 0.2s ease-in-out',
    fontFamily: 'Hello',
    color: '#a3acc5',
    fontSize: {
        xs: '155%'
    }, 
}