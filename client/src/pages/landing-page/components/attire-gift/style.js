export const title = {
    transition: 'all 0.2s ease-in-out',
    fontFamily: 'Hello',
    fontSize: {
        xs: '260%',
        sm: '480%'
    },
    color: '#6b7aa3'
}

export const content = {
    transition: 'all 0.2s ease-in-out',
    fontFamily: 'Amsterdam',
    textAlign: 'center',
    color: '#5f6063',
    padding: {
        xs: '0 30px',
        md: '0 12%'
    },
    fontSize: {
        xs: '115%',
        md: '140%'
    },
}

export const attire = color => ({
    backgroundColor: color,
    boxShadow: '0 0 6.1px 3.9px rgba(28,31,86,.06)',
    width: {
        xs: '45px',
        md: '90px',
    },
    height: {
        xs: '45px',
        md: '90px',
    },
    borderRadius: '200px',
});

export const bankcontainer = {
    boxShadow: '0 0 6.1px 3.9px rgba(28,31,86,.06)',
    padding: '80px 0',
    transition: 'all 0.3s ease-in-out',
    backgroundColor: "#FFFFFF",
    borderRadius: {
        xs: '16px'
    }
}

export const qrlogo = (logo) => ({
    backgroundImage: `url('${logo}')`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    width: '150px',
    height: '40px',
});

export const qrimg = (qr) => ({
    backgroundImage: `url('${qr}')`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    width: {
        xs: '200px',
    },
    height: {
        xs: '200px'
    }
});

export const acccountname = {
    fontFamily: 'Montserrat SemiBold',
    color: '#212121',
    fontSize: {
        xs: '120%'
    }
}

export const accountno = {
    fontFamily: 'Montserrat Light',
    color: '#5f6063',
    fontSize: {
        xs: '110%'
    }
}