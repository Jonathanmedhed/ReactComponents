import React from 'react';
import List from './_menu-list';
import List2 from './_menu-list2';
import MobileMenu from './_mobile-menu';

const Navbar = ({
	setOpenShowcase,
	setAlerts,
	setPage,
	setNavbar,
	setCard,
	setJumbo,
	setOption,
	setChoice,
	setChoices,
	bodyRef,
}) => {
	return (
		<nav className="navbar-hover-under">
			<div className="title">
				<a>
					<i className="fas fa-code fa-2x"></i>
				</a>
				<h1>
					<a>My Components</a>
				</h1>
			</div>
			<ul className="main-ul">
				<List
					setChoice={setChoice}
					setChoices={setChoices}
					setNavbar={setNavbar}
					setJumbo={setJumbo}
					setPage={setPage}
					setOption={setOption}
					bodyRef={bodyRef}
				/>
				<List2
					setOpenShowcase={setOpenShowcase}
					setAlerts={setAlerts}
					setChoice={setChoice}
					setChoices={setChoices}
					setNavbar={setNavbar}
					setCard={setCard}
					setOption={setOption}
					bodyRef={bodyRef}
				/>
			</ul>
			<MobileMenu
				setOpenShowcase={setOpenShowcase}
				setChoice={setChoice}
				setChoices={setChoices}
				setNavbar={setNavbar}
				setJumbo={setJumbo}
				setOption={setOption}
				bodyRef={bodyRef}
			/>
		</nav>
	);
};
export default Navbar;
