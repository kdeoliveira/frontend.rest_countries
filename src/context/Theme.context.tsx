import React, { Provider, ReactElement } from "react";
import { useState } from "react";

type Context = [
    darkMode: boolean,
    toggle: Function
]


const ThemeContext = React.createContext<Context | undefined>(undefined);

function ThemeProvider(props: any) : ReactElement<Provider<Context>> {
    const [darkMode, setState] = useState<boolean>(false)
    const toggle = () => {
        setState(x => !x);
        document.body.ariaChecked = `${!darkMode}`;
    }


    return <ThemeContext.Provider value={[darkMode, toggle]} {...props} />;
}

export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if(context === undefined) throw new Error("useTheme must be called inside a provider");
    return context;
}

export default ThemeProvider;
