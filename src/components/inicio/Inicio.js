import React from "react";
import { CardsContainer } from "./CardsContainer";

import BtnDiscord from "../botones/BtnDiscord";
import headerImg from "../../images/HeaderIMG.png";

import styled from "styled-components";

const ContenedorDivImg = styled.div`
	margin-top: 12rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	@media (min-width: 768px) {
		margin-top: 8rem;
		justify-content: space-between;
		flex-direction: row;
	}
	@media (min-width: 991px) {
	}
`;
const Div = styled.div`
	width: 90%;
`;
const H1 = styled.div`
	font-size: 3rem;
`;
const DivP = styled.div`
	width: 70%;
	@media (min-width: 768px) {
		width: 60%;
	}
	@media (min-width: 992px) {
		width: 100%;
	}
`;
const Img = styled.img`
	@media (min-width: 768px) {
		width: 50%;
	}
`;

const Inicio = () => {
	return (
		<main>
			<div>
				<ContenedorDivImg className='container'>
					<Div>
						<H1>¿Estás buscando un lugar especial?</H1>
						<DivP>
							<p>
								¡Aún estamos trabajando para conseguir eso que nos haga{" "}
								<strong>especiales</strong>! Pero somos una comunidad en
								crecimiento, donde te acompañaremos en tu aprendizaje.
							</p>

							<BtnDiscord />
						</DivP>
					</Div>

					<Img src={headerImg} alt='Imagen' />
				</ContenedorDivImg>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
					<path
						fill='#0099ff'
						fillOpacity='1'
						d='M0,64L34.3,69.3C68.6,75,137,85,206,117.3C274.3,149,343,203,411,213.3C480,224,549,192,617,154.7C685.7,117,754,75,823,74.7C891.4,75,960,117,1029,154.7C1097.1,192,1166,224,1234,202.7C1302.9,181,1371,107,1406,69.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
					></path>
				</svg>
			</div>

			<div className='container'>
				<CardsContainer />
			</div>
		</main>
	);
};

export default Inicio;
