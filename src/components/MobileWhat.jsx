import React from 'react'

import Styled from 'styled-components'

const MobileWhat = () => {
    return (
        <StyledWhat>
            <div className="grid head">
                <h1>What I can do</h1>
            </div>
            <div className="grid">
                <ul>
                    <li><b>Web Technology: </b>HTML5, CSS3, SASS, JavaScript</li>
                    <li><b>Framework:</b> Bootstrap, Foundation, Reactjs, Redux, Styled-components</li>
                    <li><b>Design Software:</b> Figma, Lunacy, Invision Studio, CorelDraw, Photoshop</li>
                    <li><b>Version Control:</b> Git, GitHub</li>
                </ul>
            </div>

            <div className="grid head top">
                <h1>Links</h1>
            </div>

            <div className="grid">
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/emaz4me//">LinkedIn</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/emaz4me">Twitter</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/EmmanuelOluwafemi">Github</a></li>
                </ul>
            </div>
        </StyledWhat>
    )
}

export default MobileWhat

const StyledWhat = Styled.section`
    width: 100%;
    padding: 3rem 6%;

    @media (min-width: 768px) {
        display: none;
    }
    
    .grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);

        &.head {
            border-bottom: 1px solid #E5E5E5;
            margin-bottom: 2rem;
        }

        &.top {
            margin-top: 2rem;
        }

        h1 {
            font-size: 1.5rem;
            font-weight: 500;
            color: #161927;
            padding-bottom: .75rem;
        }

        ul {
        list-style-type: square;
        margin-left: 1rem;

            li {
                font-size: 1rem;
                font-weight: 400;
                color: #000;
                margin-bottom: 1rem;

                a {
                    text-decoration-line: underline;
                    color: #7D7D7D
                }
            }
        }
    }
`