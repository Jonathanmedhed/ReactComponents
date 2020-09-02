import React, { useState, Fragment } from 'react';
import { Sidebar } from 'primereact/sidebar';
import {
	options,
	alertOptions,
	bigCardsOptions,
	buttonOptions,
	calendarOptions,
	cardOptions,
	carouselOptions,
	chartOptions,
	dialogOptions,
	fileOptions,
	imgOptions,
	inputOptions,
	jumboOptions,
	layoutOptions,
	listOptions,
	loadingOptions,
	mapOptions,
	menuOptions,
	navbarOptions,
	pageOptions,
	searchBoxOptions,
	securityOptions,
	tableOptions,
	videoOptions,
} from '../landing/data';

const MobileMenu = ({ setChoice, setChoices, setOpenShowcase, bodyRef }) => {
	const [show, setShow] = useState(false);

	/** Select an item */
	const select = (option) => {
		/** Dont Open Component Showcase if navbar or jumbo */
		if (option === 'navbars' || option === 'jumbos') {
			setOpenShowcase(false);
		} else {
			setOpenShowcase(true);
		}
		window.scrollTo(0, bodyRef.current.offsetTop);
		/** Set current option and choice */
		setChoice(option);
		switch (option) {
			case 'alerts':
				setChoices(alertOptions);
				break;
			case 'big-cards':
				setChoices(bigCardsOptions);
				break;
			case 'buttons':
				setChoices(buttonOptions);
				break;
			case 'calendars':
				setChoices(calendarOptions);
				break;
			case 'cards':
				setChoices(cardOptions);
				break;
			case 'carousels':
				setChoices(carouselOptions);
				break;
			case 'charts':
				setChoices(chartOptions);
				break;
			case 'dialogues':
				setChoices(dialogOptions);
				break;
			case 'files':
				setChoices(fileOptions);
				break;
			case 'images':
				setChoices(imgOptions);
				break;
			case 'inputs':
				setChoices(inputOptions);
				break;
			case 'jumbos':
				setChoices(jumboOptions);
				break;
			case 'layouts':
				setChoices(layoutOptions);
				break;
			case 'lists':
				setChoices(listOptions);
				break;
			case 'loading':
				setChoices(loadingOptions);
				break;
			case 'maps':
				setChoices(mapOptions);
				break;
			case 'menus':
				setChoices(menuOptions);
				break;
			case 'navbars':
				setChoices(navbarOptions);
				break;
			case 'pages':
				setChoices(pageOptions);
				break;
			case 'search-boxes':
				setChoices(searchBoxOptions);
				break;
			case 'security':
				setChoices(securityOptions);
				break;
			case 'tables':
				setChoices(tableOptions);
				break;
			case 'videos':
				setChoices(videoOptions);
				break;
			default:
		}
		// Close Sidebar
		setShow(false);
	};

	return (
		<div className="show-sm">
			<i onClick={() => setShow(true)} className="fas fa-bars fa-2x"></i>
			<Sidebar visible={show} position="right" baseZIndex={1000000} onHide={(e) => setShow(false)}>
				<ul>
					{options.map((option) => (
						<li onClick={() => select(option.value)} className="item">
							{option.name}
						</li>
					))}
				</ul>
			</Sidebar>
		</div>
	);
};
export default MobileMenu;
