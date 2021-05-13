import React from 'react';

const MagicScriptTag = () => {
    const codeToRunOnClient = `
    (function setThemeBeforeBody() {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

        const darkThemeValues = {
            '--bg-color': '#1b1b1b',
            '--grid-clr': 'hsl(0, 0%, 50%)',
            '--aqua': 'hsl(290, 70%, 70%)',
            '--p-pink': 'hsl(290, 70%, 70%)',
            color: '#ececec',
            '--invert': 'invert(100%)',
            '--img-filter': 'hue-rotate(225deg) brightness(0.75)'
        };
        
        const lightThemeValues = {
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

        function setLight() {
            changeRootStyleValuesRapidly(lightThemeValues);
        };

        function setDark() {
            changeRootStyleValuesRapidly(darkThemeValues);
        };

        systemTheme ? setDark() : setLight();
    })();
    `;
    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
  };
  export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(<MagicScriptTag />);
  };