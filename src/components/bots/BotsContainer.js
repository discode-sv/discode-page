import React from "react";
import BtnDiscord from "../botones/BtnDiscord";
import CardsBots from "./CardsBots";

import styled from "styled-components";

const Div = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;
const Div2 = styled.div`
	width: 100%;

	@media (min-width: 768px) {
		width: 50%;
	}
`;
const H1 = styled.h1`
	margin-top: 10rem;
	font-size: 250%;
	font-weight: 600;
	color: #222;
	margin-bottom: 1rem;

	@media (min-width: 768px) {
		margin-top: 15rem;
		margin-bottom: 0;
	}
`;

const Img = styled.img`
	height: 40rem;
	width: 40rem;
`;

const BotsContainer = () => {
	return (
		<div className='container'>
			<H1>Nuestros bots 🤖</H1>
			<Div>
				<Div2>
					<CardsBots
						name='Arcane'
						description='Arcane bot permite crear un sistema de nivelación en el servidor de Discord, logrando que subas de nivel a medida que vayas mandando mensajes.'
						link='https://arcanebot.xyz/'
						command='asettings - ahelp - ainvite - alevel - aleaderboard - acolor - auserinfo - aroleinfo - ainvite'
						avatarName='Arcane'
						avatarSrc='https://arcanebot.xyz/img/arcane-static.abe00020.png'
					/>
					<CardsBots
						name='Carl-bot'
						description='Carl bot es uno de los más completos y sencillos que encontraras en esta comunidad, lleno de utilidades  (comandos, autoroles, mensajes destacados, logs, auto moderación, sugerencias, roles de reacción), robusto y fácil de usar, ya que cuenta con un dashboard intuitivo, cómodo y estéticamente muy cuidado.'
						link='https://carl.gg/'
						command='!cat - !dog - !aww - !catbomb - !dogbomb - !awwbomb - !level - !music - !twitch'
						avatarName='Carl-bot'
						avatarSrc='https://docs.carl.gg/images/googleturtle.svg'
					/>
					<CardsBots
						name='Groovy'
						description='Groovy es la forma más rápida de convertir tu servidor Discord en un gran escenario. Ya sea que sea un artista emergente, una súper estrella o un DJ aficionado: compartir música a través de Discord nunca ha sido tan fácil.'
						link='https://groovy.bot/'
						command='/play - /queue - /skip - /back - /clear - /jump - /loop track - /loop queue - /loop off - /lyrics - /pause - /unpause - /remove - /disconnect - /shuffle - /song - /stop'
						avatarName='Groovy'
						avatarSrc='https://groovy.bot/_nuxt/img/b9d83b5.svg'
					/>
					<CardsBots
						name='Nvu'
						description='Romper la barrera del lenguaje a miles de usuarios de Discord a través de poderosos comandos de traducción, traducciones automáticas para usuarios y canales, personalizable y con un sistema de fácil manejo. Soporta más de 100 idiomas y 10 lenguas locales.'
						command="-t help / -translate / -translate help / -translate list /     -translate español Hola mundo / -translate español,francés,italiano Hola mundo / -translate alemán:español Wie geht's?"
						link='https://nvu.io/es/'
						avatarName='Nvu'
						avatarSrc='https://nvu.io/static/img/thumbnails/nvu.png?1604985701909'
					/>
					<CardsBots
						name='Simple Poll'
						description='Un bot de Discord que te permite crear fácilmente encuestas impulsadas por emoji. Sus miembros pueden votar fácilmente por cada opción agregando reacción.'
						link='https://simplepoll.rho.sh/'
						command="/poll What's Your Favorite Color?' 'Blue' 'Red' 'Yellow' - /poll 'Do you like Simple Poll?'"
						avatarName='Simple Poll'
						avatarSrc='https://images.discordapp.net/avatars/324631108731928587/7dbf4eec7a6c1f7f2d3969a5c7008bb9.png?size=128'
					/>
				</Div2>

				<Img
					src='https://image.freepik.com/vector-gratis/ilustracion-concepto-telefono-movil_114360-6388.jpg'
					alt='Ilustración'
				/>
			</Div>

			<BtnDiscord />
		</div>
	);
};

export default BotsContainer;
