import React from 'react';

import headerImg from '../../images/HeaderIMG.png'
import ola1 from '../../images/ola1.png'
import ola2 from '../../images/ola2.png'

import Navbar from './Navbar'
import BtnDiscord from '../botones/BtnDiscord'

import styled from 'styled-components';
const ContenedorDivImg = styled.div`
    margin-top: 10rem;
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    @media (min-width: 991px) {
        margin-top: 5rem;
    }
`
const Div = styled.div`
    width: 90%;
`
const DivP = styled.div`
    width: 70%;
    @media (min-width: 768px) {
        width: 60%;
    }
    @media (min-width: 992px) {
        width: 100%;
    }
`
const Img = styled.img`
    @media (min-width: 768px) {
        width: 50%;
    }
`
const ImgOla = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -4rem;
    width: 100%;

    @media (min-width: 768px) {
        margin-top: -2rem;
    }
    @media (min-width: 991px) {
        margin-top: -7rem;
    }
`
const Ola1 = styled.img`
    width: 100%;
`
const Ola2 = styled(Ola1)`
    margin-top: -0.1rem;
`

const Header = () => {
    return(
        <header>
            <Navbar />
            
            <div>
                <ContenedorDivImg className="container">
                    <Div>
                        <h1>¿Estás buscando un lugar especial?</h1>
                        <DivP>
                            <p>¡Aún estamos trabajando para conseguir eso que nos haga <strong>especiales</strong>! Pero somos una comunidad en crecimiento, donde te acompañaremos en tu aprendizaje.</p>

                            <BtnDiscord />
                        </DivP>
                    </Div>

                    <Img src={headerImg} alt="Imagen"/>
                </ContenedorDivImg>

                <ImgOla>
                    <Ola1 src={ola1} alt="Efecto wave"/>
                    <Ola2 src={ola2} alt="Efecto wave"/>
                </ImgOla>
            </div>
        </header>
    )
}

export default Header;