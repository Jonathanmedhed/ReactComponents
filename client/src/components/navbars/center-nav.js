import React from 'react';
import MobileMenu from './_mobile-menu';
import { alertOptions } from '../landing/data';

const CenterNav = ({ setNavbar, setJumbo, setOption, setChoice, setChoices, setOpenShowcase, bodyRef }) => {
	const select = async (option, options) => {
		setOpenShowcase(true);
		setChoice(option);
		setChoices(options);
		window.scrollTo(0, bodyRef.current.offsetTop);
	};
	return (
		<nav class="navbar-centered">
			<div class="layout">
				<div class="left">
					<div className="items">
						<div class="item">
							<ul class="dropdown-ul">
								<li class="hide-sm">
									<p class="hide-sm">
										<div class="hide-sm">
											Navbars <i class="fas fa-sort-down"></i>
										</div>
									</p>
									<div class="underline"></div>
								</li>
								<div class="down">
									<li class="hide-sm">
										<p class="hide-sm">
											<div class="hide-sm">
												Navbars <i class="fas fa-sort-down"></i>
											</div>
										</p>
										<div class="underline"></div>
									</li>
									<li>
										<p onClick={() => setNavbar('simple')}>Simple</p>
										<div class="underline"></div>
									</li>
									<li>
										<p onClick={() => setNavbar('hover')}>Hover</p>
										<div class="underline"></div>
									</li>
									<li>
										<p onClick={() => setNavbar('centered')}>Centered</p>
										<div class="underline"></div>
									</li>
								</div>
							</ul>
						</div>
						<div class="item">
							<ul class="dropdown-ul">
								<li class="hide-sm">
									<p class="hide-sm">
										<div class="hide-sm">
											Jumbos <i class="fas fa-sort-down"></i>
										</div>
									</p>
									<div class="underline"></div>
								</li>
								<div class="down">
									<li class="hide-sm">
										<p class="hide-sm">
											<div class="hide-sm">
												Jumbos <i class="fas fa-sort-down"></i>
											</div>
										</p>
										<div class="underline"></div>
									</li>
									<li>
										<p onClick={() => setJumbo('simple')}>Simple</p>
										<div class="underline"></div>
									</li>
									<li>
										<p onClick={() => setJumbo('big-deg')}>Big Degraded</p>
										<div class="underline"></div>
									</li>
									<li>
										<p onClick={() => setJumbo('img-nobg')}>IMG no bg</p>
										<div class="underline"></div>
									</li>
									<li>
										<p onClick={() => setJumbo('img')}>IMG</p>
										<div class="underline"></div>
									</li>
									<li>
										<p onClick={() => setJumbo('login')}>Login</p>
										<div class="underline"></div>
									</li>
								</div>
							</ul>
						</div>
					</div>
				</div>
				<div class="center">
					<i class="fas fa-code fa-2x hide-sm"></i>
					<h1 class="hide-sm">My Components</h1>
				</div>
				<div class="right">
					<ul>
						<li class="hov">
							<ul class="dropdown-ul">
								<li class="hide-sm">
									<p>
										<div onClick={() => select('alerts', alertOptions)} class="hide-sm">
											Others
										</div>
									</p>
									<div class="underline"></div>
								</li>
							</ul>
						</li>
					</ul>
					<ul>
						<li class="hov">
							<ul class="dropdown-ul">
								<li class="hide-sm">
									<p>
										<div onClick={() => select('alerts', alertOptions)} class="hide-sm">
											Others
										</div>
									</p>
									<div class="underline"></div>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div class="show-sm">
				<div class="layout-mob">
					<div class="center">
						<i class="fas fa-code fa-2x"></i>
						<h1>Website</h1>
						<p>Since 1987</p>
					</div>
					<ul className="main-ul">
						<MobileMenu
							setOpenShowcase={setOpenShowcase}
							setChoice={setChoice}
							setChoices={setChoices}
							setOption={setOption}
							setNavbar={setNavbar}
							setJumbo={setJumbo}
							bodyRef={bodyRef}
						/>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default CenterNav;
