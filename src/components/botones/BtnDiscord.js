import React from 'react';

import styled from 'styled-components';
const Btn = styled.button`
    margin-top: 1.5rem;
    background-color: #7289DA;
    border: none;
    width: 24rem;
    height: 4rem;
    border-radius: 3px;
    &:hover{
        background-color: #667fda;
    }
`
const P = styled.p`
    color: #FFFFFF;
    font-weight: 600;
    font-size: 1.7rem;
`
const I = styled.i`
    font-size: 2rem;
`

const BtnDiscord = () => {
    return ( 
        <Btn>
            <P><I className="fab fa-discord"></I> ¡Unite a nuestro Discord!</P>
        </Btn>
    );
}

export default BtnDiscord;