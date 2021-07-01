import React from "react";

import styled from "styled-components";
const Div = styled.div`
	width: 100%;
	border: 1px solid #000000;
	border-radius: 7px;
	padding: 10px;
	&:hover {
		transition: 0.1s;
		background-color: #005dca;
		color: #fafafa;
		border: none;
	}
`;

const CardsInicio = (props) => {
	return (
		<Div>
			<h2>{props.titulo}</h2>
			<p>{props.texto}</p>
		</Div>
	);
};

export default CardsInicio;
