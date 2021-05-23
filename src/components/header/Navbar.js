import React, {useEffect} from 'react';
import logo from '../../images/logo.png'
import NavBtn from '../botones/NavBtn'

import styled from 'styled-components';
const Nav = styled.nav`
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #005DCA;
    padding: 1.3rem 1.6rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
`
const DivBtn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;

    @media (min-width: 768px) {
        width: 30%;
    }
    @media (min-width: 992px) {
        width: 20%;
    }
`
const Img = styled.img`
    width: 4rem;
    border-radius: 50%;
    @media (min-width: 768px) {
        width: 5rem;
    }
`

const Navbar = () => {

    // Cambiar el fondo del nav cuando se hace scroll
    useEffect(() => {
        let nav = document.getElementById("nav");

        document.addEventListener("scroll", () => {
        if (window.scrollY <= 0){
            nav.setAttribute("style","background-color: #005DCA");
        } else {
            nav.setAttribute("style","background-color: rgba(0, 94, 202, 0.185)");
        }
        });
    }, [])

    return ( 
        <Nav id="nav">
            <Img src={logo} alt="Logo Discode"/>

            <DivBtn>
                <NavBtn 
                    texto="Blog"
                />

                <NavBtn 
                    texto="Bots"
                />
            </DivBtn>
        </Nav>
    );
}

export default Navbar;