import React from 'react';

import styled from 'styled-components';
const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border: none;
    background-color: #ffffff;
    width: 7rem;
    height: 2.5rem;
    &:hover{
        background-color: #fafafa;
    }
    @media (min-width: 768px) {
        width: 10rem;
        height: 3rem;
    }
`
const P = styled.p`
    color: #000000;
    font-weight: 600;
`

const NavBtn = props => {
    return ( 
        <Btn>
            <P>{props.texto}</P>
        </Btn>
    );
}

export default NavBtn;