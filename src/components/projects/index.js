import React from 'react';
import SectionHeader from '../sectionHeader';
import Project from '../project';
import * as projectsStyles from "./projects.module.css";


const Projects = () => {
    return (
        <section>
            <SectionHeader>
                Projects
            </SectionHeader>
            <div className={projectsStyles.grid}>
                <Project
                    id="1"
                    title="Patrycja Zych Paintings"
                    description="A simple yet elegant website showcasing the works of one Patrycja Zych.
                                Beneath the minimalistic design it features a very modern tech stack providing top notch performance thanks
                                to SSG and super convenient content management via Contentful.
                    "
                    src="https://elastic-shannon-808c92.netlify.app/"
                    stack={[
                        "html",
                        "css",
                        "js",
                        "react",
                        "gatsby",
                        "graphQl",
                        "ctf"
                    ]}
                />
                <Project
                    id="2"
                    title="Veni Vidi Techno"
                    description="
                                A website for the Cracow-based collective of DJs, producers and promotors of electronic music.
                                The main page displays a large clock which counts time down to the next planned event.
                                Among the usual subpages like Contact and About there's also an Archive which serves as a blog 
                                documenting the crew's activities with past events, photos, music etc. 
                    "
                    src="https://wonderful-pare-89f0a9.netlify.app/index.html"
                    stack={[
                        "html",
                        "css",
                        "js",
                    ]}
                />
                <Project
                    id="3" 
                    title="Brew Dog Beer App"
                    description="
                                The ultimate web app to help you pick the right Brew Dog bottle!
                                Originally (AFAIK) a Scrimba JS API course project—with a twist.
                                I migrated the project from vanilla JS to React Next JS and changed the CSS up to utilise CSS Modules.
                                I also completely redesigned the app with some elements of the recently trendy neo-skeumorphism.
                    "
                    src="https://confident-jang-0c7ef7.netlify.app/"
                    stack={[
                        "html",
                        "css",
                        "js",
                        "react",
                        "next"
                    ]}
                />

                <Project
                    id="4" 
                    title="Snake Game"
                    description="
                                A Nokia 3210-style Snake game built with plain JavaScript.
                                Use keyboard arrows to control the Snake on your computer, on touch devices use Nokia's
                                default 2 - 4 - 6 - 8 layout.
                                To start and restart the game use the big button, a game menu is being built.t
                    "
                    src="https://fervent-poitras-f0db05.netlify.app"
                    stack={[
                        "html",
                        "css",
                        "js",
                        ]}
                    />



                {/* <div className={projectsStyles.widerIframe}>
                    <Project
                        id="4" 
                        title="Tkaniny Żywiec"
                        description="
                                    A website for a local textile shop run by my mom. Her old website has long needed a proper refresh so
                                    I built one as a little token of gratitude for warm home and the nice family dinners during the covid winter
                                    and after my ACL surgery when I couldn't walk for quite a while. 
                    "
                        src="https://eager-noether-70d50e.netlify.app"
                        stack={[
                            "html",
                            "css",
                            "js",
                            ]}
                    />
                </div> */}
                {/* <Project
                    id="5"
                    title="Photo Journal"
                    description="A photo blog for my photography lorem20"
                    src="https://practical-leavitt-c687b5.netlify.app/"
                    stack={[
                        "html",
                        "css",
                        "js",
                        "react",
                        "gatsby",
                        "graphQl",
                        "ctf"
                        ]}
                /> */}
            
            </div>
        </section>
    )
}

export default Projects
