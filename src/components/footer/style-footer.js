import styled from 'styled-components';
import logoDiscodeRemove from '../../images/logo_discode-removebg.png';

export const FooterContainer = styled.footer`
    position: relative;
    background-color: #373737;
    color: #FFFFFF;
    margin-top: 200px;
    // Logo de Discode en el background
    &:before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.4;
        background-image: url(${logoDiscodeRemove});
        background-repeat: no-repeat;
        background-position: 120% -30%;
        background-size: 600px;
    }
    @media (max-width: 960px) {
        &:before {
            background-position: 140% 185%;
        }
    }
    @media (max-width: 660px) {
        &:before {
            background-position: 120% 150%;
        }
    }
`;

export const FooterComponent = styled.section`

    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 50px 30px 0 30px;

    section{
        max-width: 300px;
        min-width: 150px;
        @media (max-width: 1030px) {
            width: 300px;
        }
    }
    h3{
        font-size: 1.4em;
        font-weight: 800;
    }
    .texto{
        margin-top: 20px;
        margin-bottom: 25px;
    }
    p{
        font-size: 0.9em;
        font-weight: 500;
    }
    ul{
        li{
            margin-top: 3px;
        }
    }
    @media (max-width: 1030px) {
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: flex-start;
    }
`;

export const FooterContact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;
    width: 100%;
    .logo{
        width: 35px;
        img{
            cursor: pointer;
            width: 100%;
            filter: grayscale(100%);
            &:hover {
                filter: grayscale(0%);
            }
        }
    }
`;

export const FooterBlog = styled.article`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    div{
        width: 75px;
        img{
            height: 90px;
            width: 75px;
            background-color: #C4C4C4;
        }
    }
    .textBlog{
        width:auto;
        p{
            margin: 0 0 10px 10px;
        }
        p:nth-child(2) {
            font-size: 0.9em;
            margin-left: 20px;
            color: rgb(255,255,255, 0.5);
        }
    }
`;

export const FooterButton = styled.button`
    padding: 5px;
    border: 1px solid #7289DA;
    border-radius: 5px;
    background-color: #7289DA;
    color: #FFFFFF;
    font-weight: bold;
    &:hover{
        background-color: #667fda;
    }
`;

export const FooterCopy = styled.section`
    position: relative;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
    "a b c";

    width: 100%;
    font-size: 0.8em;
    padding: 0 15px;

    .copy1{
        grid-area: a;
    }
    .copy2{
        grid-area: b;
        text-align: center;
        font-weight: bold;
    }
`;

export const FooterOla = styled.div`
    width:100%;
    background-color: #fff;
    overflow: hidden;
    img{
        position: relative;
        left: 0;
        @media (min-width: 1200px) {
            width: 100%;
        }
        @media (max-width: 700px) {
            width: none;
            max-width: none;
        }
    }
`;