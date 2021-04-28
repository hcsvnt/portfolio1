import React from 'react';
import { Link } from 'gatsby';
import "./cv.css";


const CV = () => {
    return (

        <article className='cvContainer'>
            <section className='cvHeader'>
                <h1>
                    Mateusz Hallala
                </h1>
                <h2>
                    Front-end Web Developer
                </h2>
            </section>
            <section>
                <h2>
                    Summary
                </h2>
                <p>
                    I'm a highly motivated, creative individual with an eye for detail.
                    Only recently I got into web development thanks to the extra free time during the pandemic.
                    Driven by a desire to manage and modify my photography website, and add a blog, I discovered 
                    that I deeply enjoyed coding.
                    With experience in quite a variety of positions, mostly customer-oriented, some technical,
                    I have learned to handle pressure, solve problems and deliver great results.
                </p>
            </section>
            <section>
                <h2>
                    Work Experience
                </h2>
                <p>
                    <h4>Freelance Photographer at Matt Hallala Photography | Apr '18 - Now</h4>
                    Delivering great customer experience through photography services and project consultaions.
                    Actively seeking clients, planning, organising and executing photo shoots.
                    Managing strategy, pricing, finances, studio space and equipment.
                </p>
                <p>
                    <h4>Head Barista at Urban Angel Hanover Street, Edinburgh | May '17 - Now</h4>
                    Preparing various coffee based beverages in a busy high street environment.
                    Creating menus, managing pricing and "food cost", quality control.
                    Defining coffee extraction guidelines, managing stock, workflows, staff training.
                </p>
                <p>
                    <h4>Bartender / Bar Lead at Forum Przestrzenie, Kraków | Jun '14 - Feb '17</h4>
                    Working in a fast-paced high-capacity bar environment. 
                    Designing and planning of menus, managing stock, staff training, organisation of the bar.
                </p>
                <p>
                    <h4>Head Shaper at Parkowa Dolina, EU  | Shaper at Schneestern, Germany | '11 - '13</h4>
                    Design, planning, building, maintenance and management of snowparks and professional competition courses 
                    for freestyle snowboarding and skiing. Managing teams of Shapers, equipment and stock.
                </p>
            </section>
            <section>
                <h2>
                    Education
                </h2>
                <p>
                    <em>The Frontend Developer Career Path</em> at Scrimba.com | Nov '20 – Mar '21
                </p>
                <p>
                    <em>Responsive Web Design Certification, 
                    JavaScript Alghoritms and Data Structures Certification and 
                    Front End Development Libraries Certification</em> at FreeCodeCamp.org | Mar '20 - Jan '21
                </p>
                <p>
                    <em>Comparative Cultural Studies</em> at Jagiellonian University | 09' - 12'
                    Not graduated, passed 4 semesters
                </p>

            </section>
            <section>
                <h2>
                    Languages
                </h2>
                <ul>
                    <li>
                        Polish: native language
                    </li>
                    <li>
                        English: fluent / near native
                    </li>
                    <li>
                        Spanish: basic knowledge (A2)
                    </li>
                </ul>    
            </section>
            <section>
                <h2>
                    Skills
                </h2>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Gatsby
                    </li>
                    <li>
                        Next.js
                    </li>
                    <li>
                        GraphQL
                    </li>
                    <li>
                        Contentful
                    </li>
                    <li>
                        Git
                    </li>
                </ul>
            </section>
            <section className='contactSection'>
                <h2>
                    Contact
                </h2>
                <ul>
                    <li>
                        mateuszhallala@icloud.com
                    </li>
                    <li>
                         <Link to="/">
                            www.hallala.xyz
                        </Link>
                    </li>
                    <li>
                        <a href="https://github.com/hcsvnt">
                            Github: hcsvnt
                        </a>
                    </li>
                    <li>
                        Bielsko-Biała, Poland / <br />
                        Edinburgh, Scotland
                    </li>

                </ul>
            </section>



        </article>
        
    )
}

export default CV