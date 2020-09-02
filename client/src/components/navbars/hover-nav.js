import React, { Fragment } from 'react';
import List from './_menu-list';
import List2 from './_menu-list2';
import MobileMenu from './_mobile-menu';

const HoverNav = ({
	setOpenShowcase,
	setPage,
	setNavbar,
	setJumbo,
	setCard,
	setChoice,
	setChoices,
	setOption,
	bodyRef,
}) => {
	return (
		<nav className="navbar-hover-under">
			<div className="title">
				<a href="index.html">
					<i className="fas fa-code fa-2x"></i>
				</a>
				<h1>
					<a href="index.html">My Components</a>
				</h1>
			</div>
			<ul className="main-ul">
				<List
					setChoice={setChoice}
					setChoices={setChoices}
					setNavbar={setNavbar}
					setJumbo={setJumbo}
					setOption={setOption}
					setPage={setPage}
					bodyRef={bodyRef}
				/>
				<List2
					setChoice={setChoice}
					setChoices={setChoices}
					setNavbar={setNavbar}
					setCard={setCard}
					setOption={setOption}
					bodyRef={bodyRef}
				/>
				<MobileMenu
					setOpenShowcase={setOpenShowcase}
					setChoice={setChoice}
					setChoices={setChoices}
					setNavbar={setNavbar}
					setJumbo={setJumbo}
					setOption={setOption}
					setPage={setPage}
					bodyRef={bodyRef}
				/>
			</ul>
		</nav>
	);
};
export default HoverNav;
