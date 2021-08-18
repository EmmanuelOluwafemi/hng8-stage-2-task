import React from 'react'

import Styled from 'styled-components'

const About = () => {
    return (
        <StyledAbout>
            <h1>Emmanuel Yusuf</h1>
            <p>
                A creative Frontend developer and UI Designer with 2+-- years of experience. Skilled in HTML, CSS and JavaScript technology with a proficient knowledge in React and Redux. I develop responsive websites with good User Experience and accessibility, which help websites convert better.
            </p>
        </StyledAbout>
    )
}

export default About

const StyledAbout = Styled.section`
    width: 100%;
    padding: 0 10%;
    margin-top: 8rem;

    @media (max-width: 768px) {
        padding: 0 6%;
        margin-top: 6rem;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 900;
        color: #161927;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        color: #161927;
        line-height: 1.6;
        max-width: 950px;
        margin-bottom: 1.5rem;

        @media (max-width: 768px) {
            line-height: 1.85;
        }
    }
`