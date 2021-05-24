import React, { useEffect, useState } from 'react';
import moon from '../../svg/moon.svg';
import './layout.css';

const MoonSvg = () => {
    return (
        <img src={moon} name="switch themes" alt="moon icon for toggling themes" className='moonSvg' />
    )
}

const useIsSsr = () => {
    const [isSsr, setIsSsr] = useState(true);

    useEffect(() => {
        setIsSsr(false);
    }, []);
    return isSsr;
}

const useThemeDetection = () => {
    const isSsr = useIsSsr();
    const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches; //this can't run on a server
    const [isDarkOsTheme, setIsDarkOsTheme] = useState(false); // setting default light mode initially
    const mediaQueryListener = (e => {
        setIsDarkOsTheme(e.matches);  
        }
    );

    useEffect(() => {
        if (!isSsr) setIsDarkOsTheme(getSystemTheme())
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addEventListener('change', mediaQueryListener);
        return () => darkThemeMq.removeEventListener('change', mediaQueryListener);
    }, [isDarkOsTheme, isSsr]);
    return isDarkOsTheme;
}


const darkThemeValues = {
    'color-scheme': 'dark',
    '--bg-color': '#1b1b1b',
    '--grid-clr': 'hsl(0, 0%, 70%)',
    '--aqua': 'hsl(310, 60%, 70%)',
    '--p-pink': 'hsl(310, 50%, 70%)',
    color: '#ececec',
    '--invert': 'invert(90%)',
    '--img-filter': 'hue-rotate(225deg) brightness(0.75)'
};

const lightThemeValues = {
    'color-scheme': 'light',
    '--bg-color': 'hsl(30, 50%, 94%)',
    '--grid-clr': 'grey',
    '--aqua': '#7fffd4',
    '--p-pink': '#ffc0cb',
    color: 'black',
    '--invert': 'invert(0%)',
    '--img-filter': 'hue-rotate(0deg) brightness(1)'
};

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

    const isSsr = useIsSsr();

    const isDarkOsTheme = useThemeDetection();
   
    useEffect(() => {
        isDarkOsTheme ? setDark() : setLight();

    }, [isDarkOsTheme]);

    function setLight() {
        setTheme('light');
        changeRootStyleValuesRapidly(lightThemeValues);
    };

    function setDark() {
        setTheme('dark');
        changeRootStyleValuesRapidly(darkThemeValues);
    };
    
    const manualThemeToggle = () => {
        if (theme === 'light') {
            setDark();
        };
        if (theme === 'dark') {
            setLight();
        };
    };

    return (
        <div className="wrapper">
            {children}
            <button className="themeToggle"
                    onClick={manualThemeToggle}
            ><MoonSvg /></button>
            
        </div>
    )
};

export default Layout