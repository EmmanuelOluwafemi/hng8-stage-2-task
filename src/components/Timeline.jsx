import React from 'react'

import Styled from 'styled-components'

const Timeline = () => {
    return (
        <StyledTimeline>
            <h1>Employment History</h1>
            <ul>
                <li>Frontend Developer</li>
                <li className="last"><a href="/">PERXELS DESIGN SCHOOL</a></li>
            </ul>
            <ul>
                <li className="date">April 2021 - Present</li>
                <li className="location">Remote</li>
            </ul>
            <ul>
                <ul className="w-100">
                    <li className="location">Converted Figma UI designs into pixel-perfect web implementation.</li>
                    <li className="location">Worked closely with designers to deliver pixel-perfect UIs with responsive web design principles.</li>
                    <li className="location">Made use of tools like Trello for task management and feedback.</li>
                </ul>
            </ul>
            <br /><br />
            <ul>
                <li>Frontend Developer</li>
                <li className="last"><a href="/">STUDIONE DIGITAL AGENCY</a></li>
            </ul>
            <ul>
                <li className="date">May 2020 - July 2020</li>
                <li className="location">Benin, Nigeria</li>
            </ul>
            <ul>
                <ul className="w-100">
                    <li className="location">I worked with a team of a backend developers to create usable web pages for startups</li>
                    <li className="location">Working with backend developers by consuming restful API's</li>
                    <li className="location">Worked closely with designers to deliver pixel-perfect UIs with responsive web design principles.</li>
                </ul>
            </ul>

            {/* Projects */}
            <h1>Recent Projects</h1>
            <a href="https://google-docs-clone-sandy.vercel.app/">Google Docs Clone</a>
            <p>Created a Clone of Google docs for learning purpose using Nextjs, TailwindCss, Firebase and Next-auth</p>
            <br />
            <a href="https://cheks.ng/">CheksNg</a>
            <p>Online Market place using react, styled-components, context-api</p>
            <br />
            <a href="https://www.sophisticateddev.com/">SophisticatedDev Portfolio</a>
            <p>Portfolio Implementation for Sophisticated dev using React, Styled-components, Gsap and framer-motion</p>
            <br />
            <a href="https://www.dashouts.com/">Dashouts</a>
            <p>Multi-tasking errand solution app landing page React, Gatsby, GraphQl, Gsap and Styled-components</p>

            {/* Education */}
            <br /><br /><br />
            <h1>Education</h1>
            <ul>
                <li>B.eng Computer Engineering</li>
                <li className="last"><a href="/">Federal University Oye-Ekiti</a></li>
            </ul>
            <ul>
                <li className="date">2016 - Present</li>
            </ul>
        </StyledTimeline>
    )
}

export default Timeline

const StyledTimeline = Styled.section`
    width: 100%;
    padding: 0 10%;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        padding: 0 6%;
    }

    h1 {
        font-size: 2rem;
        font-weight: 700;
        color: #000;
        padding-bottom: .75rem;
        border-bottom: 1px solid #E5E5E5;
        margin-bottom: 2rem;
        margin-top: 1.5rem;
    }

    a {
        text-decoration: none;
        color: #161927;
        font-size: 1.3rem;
        font-weight: 600;
    }

    ul {
        list-style-type: square;
        margin-left: 1rem;
        display: flex;
        align-items: center;

        &.w-100 {
            flex-direction: column;
            align-items: flex-start;

            @media (max-width: 768px) {
                margin-left: -3rem;
            }
        }

        li {
            font-size: 1rem;
            font-weight: 400;
            color: #000;
            margin-bottom: 1rem;
            font-weight: 700;

            &.last {
                margin-left: 3.5rem;
                color: #505254;
                font-weight: 500;
                list-style-type: disc;

                a {
                    color: #505254;
                }
            }

            &.date {
                list-style: none;
                font-weight: 400;
            }

            &.location {
                margin-left: 3.5rem;
                color: #7D7D7D;
                font-weight: 400;
                list-style-type: disc;
            }
        }
    }
`