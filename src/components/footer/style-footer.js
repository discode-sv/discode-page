import styled from 'styled-components';
import logoDiscodeRemove from '../../assets/img/logo_discode-removebg.png';

export const FooterContainer = styled.footer`
    position: relative;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    height: 320px;
    background-color: #373737;
    color: #FFFFFF;
    padding: 50px 30px;

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
`;

export const FooterComponent = styled.section`
    position: relative;
    grid-area: 1 / 1 / 2 / 5;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    section{
        max-width: 270px;
    }
    h3{
        font-size: 1.5em;
        font-weight: bold;
    }
    ul{
        li{
            margin-top: 10px;
        }
    }
`;

export const FooterBlog = styled.article`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    img{
        height: 90px;
        width: 75px;
        background-color: #C4C4C4;
    }
    div{
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

export const FooterLogo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    .logo{
        width: 40px;
        img{
            cursor: pointer;
            width: 100%;
            filter: grayscale(100%);
            &:hover {
                filter: grayscale(0%);
            }
        }
    }
    .logo:nth-child(2) {
        padding-top: 5px;
    }
`;

export const FooterButton = styled.button`
    padding: 5px;
    background-color: #496BE3;
    border: 1px solid #496BE3;
    border-radius: 5px;
    color: #FFFFFF;
    font-weight: bold;
`;

export const FooterCopy = styled.section`
    grid-area: 2 / 1 / 3 / 5;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;

    position: relative;

    .copy{
        font-weight: bold;
    }
`;

export const FooterOla = styled.div`
    position: absolute;
    width:100%;
    top: -49px;
    img{
        width:100%;
    }
`;