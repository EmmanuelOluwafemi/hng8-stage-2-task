import React from 'react'

import Styled from 'styled-components'

// images
import avatar from '../assets/emaz.jpg'
import logo from '../assets/logo.svg'

const Header = () => {

    const name = "Emmanuel Yusuf";
    console.log(name); 

    return (
        <StyledHeader>
            <div className="contain">
                <a href="https://internship.zuri.team/" className="logo"><img className="logo" src={logo} alt="HNG logo" /></a>
                <img src={avatar} alt="Emmanuel Yusuf" />
            </div>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = Styled.section`
    width: 100%;
    height: 250px;
    background: #faf5f5;
    padding: 0 10%;

    @media (max-width: 768px) {
        padding: 0 6%;
        height: 200px;
    }
    
    .contain {
        height: 100%;
        width: 100%;
        position: relative;

        img {
            width: 198px;
            height: 198px;
            position: absolute;
            left: 0;
            bottom: -75%;
            transform: translateY(-50%);
            border-radius: 50%;

            &.logo {
                bottom: 10%;
            }

            @media (max-width: 768px) {
                bottom: -60%;
                width: 125px;
                height: 125px;
            }
        }
    }
`