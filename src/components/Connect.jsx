import React from 'react'

import Styled from 'styled-components'

const Connect = () => {
    return (
        <StyledConnect>
            <h1>Connnect <span>(I reply mails promptly)</span></h1>

            <div className="newGrid">
                <p>Want to see my works? <a target="_blank" rel="noopener noreferrer" href="mailto:Emaz4me@gmail.com">Request Portfolio</a></p>
                <p>Have an interesting Idea? <a target="_blank" rel="noopener noreferrer" href="mailto:Emaz4me@gmail.com">Let’s Talk</a></p>
            </div>
        </StyledConnect>
    )
}

export default Connect

const StyledConnect = Styled.section`
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

        span {
            font-size: .85rem;
            color: #7D7D7D;
        }
    }

    .newGrid {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        p {
            font-size: 1rem;
            font-weight: 400;
            color: #161927;
            line-height: 1.5;
            margin-bottom: 1rem;

            a {
                color: #000;
                font-weight: 500;
            }
        }
    }
`