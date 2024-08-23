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
    fontFamily: 'Amsterdam',
    color: '#f6f6f6',
    transition: '0.2s ease-in-out',
    fontSize: {
        xs: '200%',
        sm: '300%',
        lg: '450%'
    }
}

export const digits = {
    transition: 'all 02.s ease-in-out',
    fontFamily: 'Montserrat Bold',
    fontSize: {
        xs: '195%',
        sm: '250%',
        md: '300%',
    },
    color: '#d3d9e7'
}

export const label = {
    transition: 'all 02.s ease-in-out',
    fontFamily: 'Montserrat ExtraBold',
    color: '#d3d9e7',
    fontSize: {
        xs: '80%',
        lg: '120%',
    }
}

export const date = {
    transition: 'all 0.2s ease-in-out',
    fontFamily: 'Gilroy Light',
    color: '#f6f6f6',
    textTransform: 'uppercase',
    fontSize: {
        xs: '140%',
        sm: '170%',
        lg: '180%',
    },
    marginTop: {
        xs: '20px',
        sm: '28px',
        lg: '44px',
    },
}