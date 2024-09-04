import banner from "assets/images/main-banner.JPG";

export const container = {
    flexGrow: 1,
    height: '100vh',
    background: `url(${banner}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPositionX: 'center',
    backgroundPositionY: '35%'
}

export const cover = {
    width: '100%',
    height: '100%',
    backgroundColor: '#8fa0b0ad',
}

export const saveDate = {
    fontFamily: 'Hello',
    color: '#ebecee',
    textAlign: 'center',
    transition: '0.2s ease-in-out',
    fontSize: {
        xs: '300%',
        sm: '500%',
        lg: '750%'
    }
}

export const digits = {
    transition: 'all 02.s ease-in-out',
    fontFamily: 'Montserrat Black',
    fontSize: {
        xs: '200%',
        sm: '250%',
        md: '300%',
    },
    color: '#d3d9e7'
}

export const label = {
    transition: 'all 02.s ease-in-out',
    fontFamily: 'Hello',
    color: '#d3d9e7',
    fontSize: {
        xs: '120%',
        md: '180%',
        lg: '190%',
    }
}

export const date = {
    transition: 'all 0.2s ease-in-out',
    fontFamily: 'Montserrat Light',
    textAlign: 'center',
    color: '#ebecee',
    fontSize: {
        xs: '110%',
        sm: '140%',
        lg: '150%',
    },
}

export const location = {
    transition: 'all 0.2s ease-in-out',
    fontFamily: 'Montserrat Light',
    textAlign: 'center',
    color: '#ebecee',
    fontSize: {
        xs: '110%',
        sm: '140%',
        lg: '150%',
    },
    fonrtWeight: 'bold',
}