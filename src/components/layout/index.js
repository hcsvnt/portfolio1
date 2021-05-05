import React, { useEffect, useState } from 'react';
import './layout.css';

const useThemeDetection = () => {
    const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches; 
    // accesses matchMedia's .matches which returns a boolean if system color scheme matches media query p-c-s: dark
    const [isDarkTheme, setIsDarkTheme] = useState(getSystemTheme());
    const mediaQueryListener = (e => {
        setIsDarkTheme(e.matches);
    });

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addEventListener(mediaQueryListener);
        return () => darkThemeMq.removeEventListener(mediaQueryListener);
    }, []);
}






const Layout = ({children}) => {
    const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log(getSystemTheme())


    const changeRootStyleValuesRapidly = (object) => {
        const arrOfArr = Object.entries(object); 
        // that's an array of arrays of key:value pairs as strings
        arrOfArr.forEach(item => {
            const [property, value] = item;
            const rootElementStyle = document.documentElement.style;
            rootElementStyle.setProperty(property, value);
        }); 
    };

    const darkThemeValues = {
        ['--bg-color']: '#1b1b1b',
        ['--grid-clr']: 'hsl(0, 0%, 50%)',
        color: 'white'
    }

    changeRootStyleValuesRapidly(darkThemeValues);

    return (
        <div className="wrapper">
            {children}
            <button className="themeToggle">toggle mate</button>
        </div>
    )
}

export default Layout