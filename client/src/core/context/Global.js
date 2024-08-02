// Libraries
import { createContext, useState } from "react";

export const GlobalCntxt = createContext();
export const GlobalPrvdr = props => {
    const { children, window } = props;
    const [ open, setOpen ] = useState({ left: false });
    const [ active, setActive ] = useState(localStorage.getItem('nav'));

    const drawerToggle = open => event => {
        if(event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) { return; }
        setOpen({ left: open });
    }

    const container = window !== undefined ? () => window().document.body : undefined;

    return <GlobalCntxt.Provider value= {{ container, open, setOpen, active, setActive, drawerToggle }}>{ children }</GlobalCntxt.Provider>;
}