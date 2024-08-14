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
    fontSize: '450%'
}

export const digits = {
    fontFamily: 'Montserrat Bold',
    fontSize: '400%',
    color: '#d3d9e7'
}

export const label = {
    fontFamily: 'Montserrat ExtraBold',
    color: '#d3d9e7',
    fontSize: '150%',
    marginTop: '-12px'
}

export const date = {
    fontFamily: 'Gilroy Light',
    color: '#f6f6f6',
    textTransform: 'uppercase',
    fontSize: '200%',
    marginTop: '80px',
}