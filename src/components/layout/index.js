import React, { useEffect, useState } from 'react';
import './layout.css';

const useThemeDetection = () => {
    const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches; 
    // accesses matchMedia's .matches which returns a boolean if system color scheme matches media query p-c-s: dark
    const [isDarkTheme, setIsDarkTheme] = useState(getSystemTheme());
    const mediaQueryListener = (e => {
        setIsDarkTheme(e.matches);
    });

    // useEffect(() => {
    //     const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    //     darkThemeMq.addEventListener(mediaQueryListener);
    //     return () => darkThemeMq.removeEventListener(mediaQueryListener);
    // }, []);
    return isDarkTheme;
}

const darkThemeValues = {
    ['--bg-color']: '#1b1b1b',
    ['--grid-clr']: 'hsl(0, 0%, 50%)',
    color: 'white'
}

const lightThemeValues = {
    ['--bg-color']: 'hsl(30, 50%, 94%)',
    ['--grid-clr']: 'grey',
    color: 'black'
}

const changeRootStyleValuesRapidly = (object) => {
    const arrOfArr = Object.entries(object); 
    // that's an array of arrays of key:value pairs as strings
    arrOfArr.forEach(item => {
        const [property, value] = item;
        const rootElementStyle = document.documentElement.style;
        rootElementStyle.setProperty(property, value);
    }); 
};


const Layout = ({children}) => {

    const [theme, setTheme] = useState('light');
    const isDarkTheme = useThemeDetection();

    useEffect(() => {
        if (isDarkTheme) {
            setTheme('dark')
            changeRootStyleValuesRapidly(darkThemeValues)
        };
    }, []);

    const themeToggle = () => {
        console.log("let's get togglin'");
       
        if (theme === 'light') {
            setTheme('dark');
            changeRootStyleValuesRapidly(darkThemeValues)
        }

        if (theme === 'dark') {
            setTheme('light');
            changeRootStyleValuesRapidly(lightThemeValues)
        }
    }

    return (
        <div className="wrapper">
            {children}
            <button className="themeToggle"
                    onClick={themeToggle}
            >toggle mate</button>
        </div>
    )
}

export default Layout