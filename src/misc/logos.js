import React from 'react';
import htmlLogo from "../svg/html5-brands.svg";
import cssLogo from "../svg/css3-alt-brands.svg";
import jsLogo from "../svg/js-brands.svg";
import reactLogo from "../svg/react-brands.svg";
import gatsbyLogo from "../svg/Gatsby-Monogram.svg";
import ctfLogo from "../svg/ctf2.svg";
import graphQlLogo from '../svg/GraphQL.svg'
import nextJSLogo from '../svg/Nextjs.svg'
import * as logoStyles from "./logos.module.css"


let tester = true

function simkaSwitch(name) {
    switch (name) {
        case 'htmlLogo':
            return htmlLogo;
            // break; because gatsby spat out "no unreachable code", well to each their own or smth
        case 'cssLogo':
            return cssLogo;
            // break;
        case 'jsLogo':
            return jsLogo;
            // break;
        case 'reactLogo':
            return reactLogo;
            // break;
        case 'gatsbyLogo':
            return gatsbyLogo;
            // break;
        case 'ctfLogo':
            return ctfLogo;
            // break;
        case 'graphQlLogo':
            return graphQlLogo;
            // break;
        case 'nextLogo':
            return nextJSLogo;
            // break;
        default:
            return "x";
    }
}

const Logo = (props) => {
    const {name} = props;

    function monoSvgClassNames() {
        const nonMonoSvgs = ['gatsbyLogo', 'ctfLogo']
        if (!nonMonoSvgs.includes(name)) {
            return `${logoStyles.logo} ${logoStyles[name]} monoSvg`
        }  else {
            return `${logoStyles.logo} ${logoStyles[name]}`
        }
    }



    return (
            <img key={name} className={monoSvgClassNames()} src={simkaSwitch(name)} alt={`a ${name} logo`} />
    )
}

export default Logo 