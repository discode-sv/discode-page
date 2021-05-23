import React from 'react';
import { FooterContainer, FooterComponent, FooterBlog, FooterLogo, FooterButton, FooterCopy, FooterOla } from './style-footer';
import discord_contact from '../../assets/img/discord-contact.png';
import logo_tw from "../../assets/img/logo_tw.png";
import img_blog from "../../assets/img/img-blog.jpg";
import ola from "../../assets/img/FooterVector.png"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterOla className="ola"><img src={ola} /></FooterOla>
            <FooterComponent>
                <section>
                    <h3>Discode</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                    <FooterLogo>
                        <a href="/home/" className="logo">
                            <img src={discord_contact} />
                        </a>
                        <a href="/home/" className="logo">
                            <img src={logo_tw} />
                        </a>
                    </FooterLogo>

                    <h3>Contacto</h3>
                    <p>Email: Discode@email.com</p>
                </section>


                <section>
                    <h3>Enlaces</h3>
                    <ul>
                        <li>
                            <a href="/home/">Home</a>
                        </li>
                        <li>
                            <a href="/blog/">Blog</a>
                        </li>
                        <li>
                            <a href="/eventos/">Eventos</a>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3>Ultimas Actualizaciónes</h3>
                    <FooterBlog>
                        <div>
                            <img src="" />
                        </div>
                        <div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p>Abril 15-2021</p>
                        </div>
                    </FooterBlog>
                    <FooterBlog>
                        <div>
                            <img src="" />
                        </div>
                        <div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p>Abril 15-2021</p>
                        </div>
                    </FooterBlog>
                </section>

                <section>
                    <h3>Unete a Discode</h3>
                    <FooterButton>--Discode--</FooterButton>
                </section>


            </FooterComponent>
            <FooterCopy>
                <p>Discode...</p>
                <p className="copy">Copyright ©2021</p>
            </FooterCopy>
        </FooterContainer>
    )
}

export default Footer;
