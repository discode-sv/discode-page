import React from 'react';
import { FooterContainer, FooterComponent, FooterBlog, FooterContact, FooterButton, FooterCopy, FooterOla } from './style-footer';
import discord_contact from '../../images/logo-discord.png';
import logo_tw from "../../images/logo_tw.png";
import ola from "../../images/FooterVector.png"


const BlogPost = props => {
    return (
        <div className="texto">
            <FooterBlog>
                <div>
                    <img src={props.img} alt='Blog' />
                </div>
                <div className="textBlog">
                    <p>{props.texto}</p>
                    <p>{props.fecha}</p>
                </div>
            </FooterBlog>
        </div>
    );
}


const Footer = () => {
    return (
        <FooterContainer>
            <FooterOla><img src={ola} alt='Wave' /></FooterOla>
            <FooterComponent>
                <section>
                    <h3>Discode</h3>
                    <div className="texto">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>

                        <FooterContact>
                            <a href="/home/" className="logo">
                                <img src={discord_contact}  alt='Discord' />
                            </a>
                            <a href="/home/" className="logo">
                                <img src={logo_tw} alt='Twitter' />
                            </a>
                        </FooterContact>
                    </div>

                    <h3>Contacto</h3>
                    <div className="texto">
                        <p>Email: Discode@email.com</p>
                    </div>
                </section>


                <section>
                    <h3>Enlaces</h3>
                    <div className="texto">
                        <ul>
                            <li>
                                <a href="https://discode-sv.vercel.app/">Home</a>
                            </li>
                            <li>
                                <a href="https://discode-sv.vercel.app/">Blog</a>
                            </li>
                            <li>
                                <a href="https://discode-sv.vercel.app/">Eventos</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h3>Ultimas Actualizaciónes</h3>
                    <BlogPost
                        img="#"
                        texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        fecha="Abril 15-2021"
                    />
                    <BlogPost
                        img="#"
                        texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        fecha="Abril 15-2021"
                    />
                </section>

                <section>
                    <h3>Únete a Discode</h3>
                    <div className="texto">
                        <FooterButton>--Discode--</FooterButton>
                    </div>
                </section>

            </FooterComponent>

            <FooterCopy>
                <div className="copy1">
                    <p>\:Discode...</p>
                </div>
                <div className="copy2">
                    <p>Copyright ©2021</p>
                </div>
            </FooterCopy>
        </FooterContainer>
    )
}

export default Footer;
