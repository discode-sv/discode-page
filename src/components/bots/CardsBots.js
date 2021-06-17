import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Avatar,
	Flex
} from "@chakra-ui/react";
import styled from "styled-components";

const Div = styled.div`
	width: 100%;
	margin-right: 0.5rem;
`;
const H2 = styled.h2`
	font-size: 2rem;
`;
const UL = styled.ul`
	padding-left: 2rem;
`;
const LI = styled.li`
	list-style-type: "⏩";
	padding-bottom: 1rem;
`;
const A = styled.a`
	&:hover {
		text-decoration: underline;
	}
`;

const CardsBots = (props) => {
	return (
		<Div>
			<Accordion allowToggle>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box flex='1' textAlign='left'>
								<Flex align='center'>
									<Avatar
										mr={3}
										size='lg'
										name={props.avatarName}
										src={props.avatarSrc}
									/>
									<H2>{props.name}</H2>
								</Flex>
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel py={4}>
						<UL>
							<LI>
								<p>
									<strong>Descripción</strong>: {props.description}
								</p>
							</LI>
							<LI>
								<p>
									<strong>Link</strong>:{" "}
									<A href={props.link} target='_blank'>
										{props.link}
									</A>
								</p>
							</LI>
							<LI>
								<p>
									<strong>Comandos</strong>: {props.command}
								</p>
							</LI>
						</UL>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Div>
	);
};

export default CardsBots;
