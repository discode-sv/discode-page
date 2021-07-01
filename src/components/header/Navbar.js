import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../images/logo.png";
import NavBtn from "../botones/NavBtn";

const Nav = styled.nav`
	z-index: 999;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #005dca;
	padding: 1.3rem 1.6rem;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
`;
const Div = styled.div`
	justify-content: flex-end;
`;
const Img = styled.img`
	width: 4rem;
	border-radius: 50%;
	@media (min-width: 768px) {
		width: 5rem;
	}
`;

const Navbar = () => {
	// Cambiar el fondo del nav cuando se hace scroll
	useEffect(() => {
		let nav = document.getElementById("nav");

		document.addEventListener("scroll", () => {
			if (window.scrollY <= 0) {
				nav.setAttribute("style", "background-color: #005DCA");
			} else {
				nav.setAttribute("style", "background-color: rgba(0, 94, 202, 0.185)");
			}
		});
	}, []);

	return (
		<Router>
			<Nav id='nav' className='navbar navbar-expand-lg navbar-light'>
				<div className='container-fluid'>
					<Link to={"/"} className='navbar-brand'>
						<Img src={logo} alt='Logo Discode' />
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<Div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<Link to={"/"} className='nav-link' aria-current='page'>
									<NavBtn texto='Inicio' />
								</Link>
							</li>
							<li className='nav-item'>
								<Link to={"/blog"} className='nav-link'>
									<NavBtn texto='Blog' />
								</Link>
							</li>
							<li className='nav-item'>
								<Link to={"/bots"} className='nav-link'>
									<NavBtn texto='Bots' />
								</Link>
							</li>
						</ul>
					</Div>
				</div>
			</Nav>
		</Router>
	);
};

export default Navbar;
