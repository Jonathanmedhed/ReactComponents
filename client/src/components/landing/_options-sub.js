import React, { useState, useEffect, Fragment } from 'react';
import { Carousel } from 'primereact/carousel';

const SubOptions = ({
	choice,
	choices,
	setAlerts,
	setBigCard,
	setButtons,
	setCalendar,
	setCard,
	setCarousel,
	setChart,
	setDialog,
	setFile,
	setInput,
	setIMG,
	setJumbo,
	setLayout,
	setList,
	setLoading,
	setMap,
	setMenu,
	setNavbar,
	setPage,
	setSearchBox,
	setSecurity,
	setTable,
	setVideo,
}) => {
	const [currentOption, setCurrentOption] = useState(null);

	const select = (option) => {
		setCurrentOption(option);
		switch (choice) {
			case 'alerts':
				setAlerts(option);
				break;
			case 'big-cards':
				setBigCard(option);
				break;
			case 'buttons':
				setButtons(option);
				break;
			case 'calendars':
				setCalendar(option);
				break;
			case 'cards':
				setCard(option);
				break;
			case 'carousels':
				setCarousel(option);
				break;
			case 'charts':
				setChart(option);
				break;
			case 'dialogues':
				setDialog(option);
				break;
			case 'files':
				setFile(option);
				break;
			case 'images':
				setIMG(option);
				break;
			case 'inputs':
				setInput(option);
				break;
			case 'jumbos':
				setJumbo(option);
				break;
			case 'layouts':
				setLayout(option);
				break;
			case 'lists':
				setList(option);
				break;
			case 'loading':
				setLoading(option);
				break;
			case 'maps':
				setMap(option);
				break;
			case 'menus':
				setMenu(option);
				break;
			case 'navbars':
				setNavbar(option);
				break;
			case 'pages':
				setPage(option);
				break;
			case 'search-boxes':
				setSearchBox(option);
				break;
			case 'security':
				setSecurity(option);
				break;
			case 'tables':
				setTable(option);
				break;
			case 'videos':
				setVideo(option);
				break;
			default:
		}
	};

	/** Item Template */
	let itemTemplate = (option) => {
		return (
			<li>
				<button
					onClick={() => select(option.value)}
					className={currentOption === option.value ? 'btn btn-dark' : 'btn btn-primary'}
				>
					{option.name}
				</button>
			</li>
		);
	};

	return (
		<Fragment>
			<Fragment>
				{/** Desktop */}
				<div className="hide-sm">
					<Carousel
						circular={false}
						value={choices}
						itemTemplate={itemTemplate}
						numVisible={5}
						numScroll={4}
					></Carousel>
				</div>
				{/** Mobile Portrait */}
				<div className="show-sm-portrait">
					<Carousel
						circular={false}
						value={choices}
						itemTemplate={itemTemplate}
						numVisible={1}
						numScroll={1}
					></Carousel>
				</div>
				{/** Mobile Landscape */}
				<div className="show-sm-landscape">
					<Carousel
						circular={false}
						value={choices}
						itemTemplate={itemTemplate}
						numVisible={3}
						numScroll={3}
					></Carousel>
				</div>
			</Fragment>
		</Fragment>
	);
};
export default SubOptions;
