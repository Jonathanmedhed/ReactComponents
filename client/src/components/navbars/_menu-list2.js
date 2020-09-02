import React, { Fragment } from 'react';
import NavbarList from './_navbar_list';
import { alertOptions } from '../landing/data';

const List2 = ({ setNavbar, setOpenShowcase, setCard, type, setChoice, setChoices, setOption, bodyRef }) => {
	const select = async (option, options) => {
		setOpenShowcase(true);
		setChoice(option);
		setChoices(options);
		window.scrollTo(0, bodyRef.current.offsetTop);
	};

	return (
		<Fragment>
			<div className="hide-sm">
				<NavbarList setNavbar={setNavbar} type={type} />
			</div>
			<div className="hide-sm">
				<li className="hov">
					<ul className="dropdown-ul">
						<li>
							<a>
								<div onClick={() => select('alerts', alertOptions)}>Others</div>
							</a>
							{type === 'simple' ? <Fragment></Fragment> : <div className="underline"></div>}
						</li>
					</ul>
				</li>
			</div>
		</Fragment>
	);
};
export default List2;
