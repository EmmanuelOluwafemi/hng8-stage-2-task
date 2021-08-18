import React from 'react'

import Styled from 'styled-components'

const Truth = () => {
    return (
        <StyledTruth>
            <h1>Two truths and two lies. 😄</h1>
            <ul>
                <li>I am a pro diver</li>
                <li>I have tutored and mentored over 8,000 entry level and Junior designers across 20 countries over the past 3 years.</li>
                <li>I almost became a professional footballer.</li>
                <li>I am very good singer</li>
            </ul>
        </StyledTruth>
    )
}

export default Truth

const StyledTruth = Styled.section`
    width: 100%;
    padding: 0 10%;
    margin-top: 4rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        padding: 0 6%;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 500;
        color: #161927;
        padding-bottom: .75rem;
        border-bottom: 1px solid #E5E5E5;
        margin-bottom: 2rem;
    }

    ul {
        list-style-type: square;
        margin-left: 1rem;

        li {
            font-size: 1rem;
            font-weight: 400;
            color: #000;
            margin-bottom: 1rem;
        }
    }
`