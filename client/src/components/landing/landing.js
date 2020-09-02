import React, { Fragment, useState, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/** Actions */
import { setAlert } from '../../actions/alerts';
/** Options */
import Options from './_options';
import SubOptions from './_options-sub';
/** Alert */
import AlertTest from '../alerts/alert-test';
import GrowlComp from '../alerts/growl';
import PrimeMessage from '../alerts/prime-message';
/** Buttons */
import ButtonsComp from '../buttons/buttons';
import ButtonsHorizontal from '../buttons/horizontal';
import ButtonSplit from '../buttons/split';
import ButtonsVertical from '../buttons/vertical';
import RadioButtonComp from '../buttons/radio';
import RatingComp from '../buttons/rating';
import SelectButtons from '../buttons/select';
import ToggleBtnComp from '../buttons/toggle';
/** Calendar */
import CalendarBasic from '../calendars/basic';
import CalendarBtnBar from '../calendars/button-bar';
import CalendarDisabled from '../calendars/disabled';
import CalendarIcon from '../calendars/icon';
import CalendarInline from '../calendars/inline';
import CalendarMinMax from '../calendars/min-max';
import CalendarMonthYear from '../calendars/month-year';
import CalendarMultiple from '../calendars/multiple';
import CalendarNavigator from '../calendars/navigator';
import CalendarRange from '../calendars/range';
import CalendarSpanish from '../calendars/spanish';
import CalendarTemplate from '../calendars/template';
import CalendarTime from '../calendars/time';
import CalendarTimeOnly from '../calendars/time-only';
/**Cards Small */
import CardBio from '../cards/card-bio';
import CardIcon from '../cards/card-icon';
import CardIconMd from '../cards/card-icon-md';
import CardIconSm from '../cards/card-icon-sm';
import CardIconSq from '../cards/card-icon-sq';
import CardIMG from '../cards/card-img';
import CardIMGhor from '../cards/card-img-text-hor';
import CardIMGsm from '../cards/card-img-sm';
import CardIMGtext from '../cards/card-img-text';
import CardImgTextXs from '../cards/card-img-text-xs';
import CardMenuItem from '../cards/card-menu-item';
import CardPrime from '../cards/card-prime';
import CardProdHor from '../cards/card-product-hor';
import CardProduct from '../cards/card-product';
import CardReview from '../cards/card-review';
import CardTextBig from '../cards/card-text-big';
import CardTextSm from '../cards/card-text-sm';
/**Cards Big */
import BCardCollage from '../big-cards/card-collage';
import BCardCollageText from '../big-cards/card-collage-text';
import BCardForm from '../big-cards/card-form';
import BCardFormBig from '../big-cards/card-form-big';
import BCardIMGTextBig from '../big-cards/card-img-text-big';
import BCardIMGTextBigRev from '../big-cards/card-img-text-big-rev';
import BCardIMGnoBgTextBigRev from '../big-cards/card-imgnobg-text-big-rev';
import BCardIMGnoBgTextBig from '../big-cards/card-imgnobg-text-big';
import BCardIMGx2TextBig from '../big-cards/card-imgx2-text-big';
import BCardIMGx2TextBigRev from '../big-cards/card-imgx2-text-big-rev';
import BCardJumbo from '../big-cards/card-jumbo';
import BCardJumboRev from '../big-cards/card-jumbo-rev';
import BCardMap from '../big-cards/card-map';
import BCardMapRev from '../big-cards/card-map-rev';
import BCardReview from '../big-cards/card-review';
import BCardReviewHor from '../big-cards/card-review-hor';
import BCardTextIMG from '../big-cards/card-text-img';
import BCardTextIMGHor from '../big-cards/card-text-img-hor';
import BCardText from '../big-cards/card-text';
import BCardTextUl from '../big-cards/card-text-ul';
import BCardVideo from '../big-cards/card-video';
/** Carrousels */
import CardCarousel from '../carrousels/cards';
import CardCarouselVertical from '../carrousels/card-vertical';
import CarrouselGallery from '../carrousels/carrousel-gallery';
import CarrouselJumbo from '../carrousels/carrousel-jumbo';
import CarrouselMid from '../carrousels/carrousel-mid';
import CarrouselSmLong from '../carrousels/carrousel-sm-long';
/** Charts */
import Chart from '../charts/chart';
import ChartArea from '../charts/area';
import ChartBars from '../charts/bars';
import ChartBarsTri from '../charts/triangle';
import ChartOrganization from '../charts/organization';
import ChartStraight from '../charts/straight';
import PrimeBarChart from '../charts/prime-bars';
import LineChart from '../charts/lines';
import NutChart from '../charts/doughnut';
import PieChart from '../charts/pie';
import PolarAreaChart from '../charts/polar';
import RadarChart from '../charts/radar';
/** Dialogs */
import DialogConfirm from '../dialogs/confirm';
import DialogForm from '../dialogs/form';
import DialogPrime from '../dialogs/prime';
import DialogQty from '../dialogs/quantity';
/** Files */
import UploadComp from '../files/upload';
/** Forms */
import InputAutoComp from '../forms/autocomplete';
import InputChips from '../forms/chips';
import InputColor from '../forms/color';
import InputDropdownComp from '../forms/dropdown';
import InputEdit from '../forms/edit';
import InputGroup from '../forms/input-group';
import InputMaskComp from '../forms/input-mask';
import InputNumberButtons from '../forms/input-number-buttons';
import InputNumberCurrency from '../forms/input-number-currency';
import InputNumberNumerals from '../forms/input-number-numerals';
import InputNumberPreSufix from '../forms/input-number-presufix';
import InputSpinnerComp from '../forms/spinner';
import InputSwitchComp from '../forms/input-switch';
import InputTextAreaComp from '../forms/input-textarea';
import InputTextComp from '../forms/input-text';
import PasswordComp from '../forms/password';
import SliderComp from '../forms/slider';
import ToolTip from '../forms/tool-tip';
import TriCheckbox from '../forms/tri-state-checkbox';
/** IMGs */
import GalleryGrid from '../images/gallery-grid';
import GalleryGridsm from '../images/gallery-grid-sm';
import IMGbg from '../images/img-bg';
import IMGbgRev from '../images/img-bg-rev';
import IMGjumbo from '../images/img-jumbo';
import IMGx2over from '../images/imgx2-over';
import IMGx2overRev from '../images/imgx2-over-rev';
import RowEscalate from '../images/row-escalate';
/** Jumbos */
import JumboBigDeg from '../jumbos/jumbo-big-deg';
import JumboIMG from '../jumbos/jumbo-img';
import JumboIMGnoBG from '../jumbos/jumbo-img-nobg';
import JumboLogin from '../jumbos/jumbo-login';
import JumboSimple from '../jumbos/jumbo-simple';
/** Layout */
import BreadCrumbComp from '../layout/bread-crumb';
import CaptchaComp from '../layout/captcha';
import DeferredComp from '../layout/deferred-content';
import FieldSetComp from '../layout/field-set';
import FlexGridComp from '../layout/flex-grid';
import InplaceComp from '../layout/inplace';
import PaginatorComp from '../layout/paginator';
import PanelComp from '../layout/panel';
import SideBarComp from '../layout/side-bar';
import Tabs from '../layout/tabs';
/** Lists */
import AccordionComp from '../lists/accordion';
import DataScrollerComp from '../lists/data-scroller';
import ListBoxIMG from '../lists/list-box-img';
import ListBoxSimple from '../lists/list-box';
import ListOrdering from '../lists/list-order';
import ListPicker from '../lists/list-picker';
import ListTree from '../lists/tree';
import MultiSelectComp from '../lists/multy-select';
import TreeTableComp from '../lists/tree-table';
/** Maps */
import GoogleMap from '../maps/gmap';
/** Menus */
import BarMenuComp from '../menus/bar';
import MegaMenuComp from '../menus/mega';
import MenuComp from '../menus/menu';
import PanelMenuComp from '../menus/panel';
import SlideComp from '../menus/slide';
import StepsComp from '../menus/steps';
import TabMenuComp from '../menus/tabs';
import TieredMenuComp from '../menus/tiered';
/** Navbars */
import CenterNav from '../navbars/center-nav';
import HoverNav from '../navbars/hover-nav';
import Navbar from '../navbars/simple-nav';
/** Pages */
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import DataViewComp from '../pages/data-view';
import Register from '../pages/register';
/** SearchBoxes */

/** Spinner */
import Spinner from '../spinners/spinner';
import PrimeSpinner from '../spinners/prime-spinner';
import ProgressBarComp from '../spinners/progress-bar';
/** Tables */
import Table from '../tables/table';
/** Videos */
import Video from '../videos/video';
/** Data */
import { Products } from '../../resources/Data';

const Landing = ({ showVideo, setAlert }) => {
	/** Navbar and body References */
	let navbarRef = createRef();
	let bodyRef = createRef();

	/** Component Choices States */
	const [alert, setAlerts] = useState('simple');
	const [bigCard, setBigCard] = useState('collage-text');
	const [buttons, setButtons] = useState('vertical');
	const [calendar, setCalendar] = useState('basic');
	const [card, setCard] = useState('bio');
	const [carousel, setCarousel] = useState('mid');
	const [chart, setChart] = useState('simple');
	const [dialog, setDialog] = useState('quantity');
	const [file, setFile] = useState('upload');
	const [IMG, setIMG] = useState('jumbo');
	const [input, setInput] = useState('small');
	const [jumbo, setJumbo] = useState('simple');
	const [layout, setLayout] = useState('paginator');
	const [list, setList] = useState('box');
	const [loading, setLoading] = useState('spinner');
	const [map, setMap] = useState('gmap');
	const [menu, setMenu] = useState('simple');
	const [navbar, setNavbar] = useState('simple');
	const [page, setPage] = useState('login');
	const [searchBox, setSearchBox] = useState('simple');
	const [security, setSecurity] = useState('captcha');
	const [table, setTable] = useState('table-buttons');
	const [video, setVideo] = useState('card');

	/** Selected Option State */
	const [option, setOption] = useState('');

	/** Component Showcase State */
	const [openShowcase, setOpenShowcase] = useState(false);

	/** Current Choice(s) */
	const [choice, setChoice] = useState(null);
	const [choices, setChoices] = useState([]);

	return (
		<Fragment>
			<div ref={navbarRef}>
				{/************************************************************
				 * Top Showcase Top Showcase Top Showcase Top Showcase Top Showcase
				 *************************************************************/}

				{/**
				 * Jumbo Showcase
				 */}
				{jumbo === 'big-deg' && <JumboBigDeg navbar={navbar} />}
				{jumbo === 'img' && <JumboIMG navbar={navbar} />}
				{jumbo === 'img-nobg' && <JumboIMGnoBG navbar={navbar} />}
				{jumbo === 'login' && <JumboLogin navbar={navbar} />}
				{jumbo === 'simple' && <JumboSimple navbar={navbar} />}

				{/**
				 * Navbar Showcase
				 */}
				{navbar === 'centered' && (
					<CenterNav
						setOpenShowcase={setOpenShowcase}
						setChoice={setChoice}
						setChoices={setChoices}
						setNavbar={setNavbar}
						setJumbo={setJumbo}
						setOption={setOption}
						setPage={setPage}
						bodyRef={bodyRef}
					/>
				)}
				{navbar === 'hover' && (
					<HoverNav
						setOpenShowcase={setOpenShowcase}
						setChoice={setChoice}
						setChoices={setChoices}
						setNavbar={setNavbar}
						setJumbo={setJumbo}
						setOption={setOption}
						setPage={setPage}
						bodyRef={bodyRef}
					/>
				)}
				{navbar === 'simple' && (
					<Navbar
						setOpenShowcase={setOpenShowcase}
						setChoice={setChoice}
						setChoices={setChoices}
						setNavbar={setNavbar}
						setJumbo={setJumbo}
						setOption={setOption}
						setPage={setPage}
						bodyRef={bodyRef}
					/>
				)}
			</div>
			<div>
				{!openShowcase ? (
					<h1 ref={bodyRef} className="land-title">
						Components
					</h1>
				) : (
					<h1 ref={bodyRef} className="land-title">
						{choice}
					</h1>
				)}
				<div className="landing">
					<div>
						<div className={openShowcase ? 'component-showcase-active' : 'component-showcase'}>
							{/*******************************************************************************
							 * Showcases Showcases Showcases Showcases Showcases Showcases Showcases Showcases
							 *******************************************************************************/}

							{/**Alert Showcase */}
							{choice === 'alerts' && (
								<Fragment>
									{alert === 'growl' && <GrowlComp />}
									{alert === 'message' && <PrimeMessage />}
									{alert === 'simple' && <AlertTest setAlert={setAlert} />}
								</Fragment>
							)}

							{/**Buttons Showcase */}
							{choice === 'buttons' && (
								<Fragment>
									{buttons === 'buttons' && <ButtonsComp />}
									{buttons === 'horizontal' && <ButtonsHorizontal />}
									{buttons === 'rating' && <RatingComp />}
									{buttons === 'radio' && <RadioButtonComp />}
									{buttons === 'select' && <SelectButtons />}
									{buttons === 'split' && <ButtonSplit />}
									{buttons === 'toggle' && <ToggleBtnComp />}
									{buttons === 'vertical' && <ButtonsVertical />}
								</Fragment>
							)}

							{/**Calendar Showcase */}
							{choice === 'calendars' && (
								<Fragment>
									{calendar === 'basic' && <CalendarBasic />}
									{calendar === 'button-bar' && <CalendarBtnBar />}
									{calendar === 'disabled' && <CalendarDisabled />}
									{calendar === 'icon' && <CalendarIcon />}
									{calendar === 'inline' && <CalendarInline />}
									{calendar === 'min-max' && <CalendarMinMax />}
									{calendar === 'month-year' && <CalendarMonthYear />}
									{calendar === 'multiple' && <CalendarMultiple />}
									{calendar === 'navigator' && <CalendarNavigator />}
									{calendar === 'range' && <CalendarRange />}
									{calendar === 'spanish' && <CalendarSpanish />}
									{calendar === 'template' && <CalendarTemplate />}
									{calendar === 'time' && <CalendarTime />}
									{calendar === 'time-only' && <CalendarTimeOnly />}
								</Fragment>
							)}

							{/**Card Showcase */}
							{choice !== 'cards' ? (
								<Fragment></Fragment>
							) : (
								<Fragment>
									{card === 'bio' && <CardBio />}
									{card === 'icon' && <CardIcon />}
									{card === 'icon-md' && <CardIconMd />}
									{card === 'icon-sm' && <CardIconSm />}
									{card === 'icon-sq' && <CardIconSq />}
									{card === 'img' && <CardIMG />}
									{card === 'img-sm' && <CardIMGsm />}
									{card === 'img-text' && <CardIMGtext />}
									{card === 'img-text-hor' && <CardIMGhor />}
									{card === 'img-text-xs' && <CardImgTextXs />}
									{card === 'menu-item' && <CardMenuItem />}
									{card === 'prime' && <CardPrime />}
									{card === 'product' && <CardProduct />}
									{card === 'product-hor' && <CardProdHor />}
									{card === 'review' && <CardReview />}
									{card === 'text-big' && <CardTextBig />}
									{card === 'text-sm' && <CardTextSm />}
								</Fragment>
							)}

							{/*Cards Big Showcase*/}
							{choice === 'big-cards' && (
								<Fragment>
									{bigCard === 'collage' && <BCardCollage />}
									{bigCard === 'collage-text' && <BCardCollageText />}
									{bigCard === 'form' && <BCardForm />}
									{bigCard === 'form-big' && <BCardFormBig />}
									{bigCard === 'img-text-big' && <BCardIMGTextBig />}
									{bigCard === 'img-text-big-rev' && <BCardIMGTextBigRev />}
									{bigCard === 'imgnobg-text-big' && <BCardIMGnoBgTextBig />}
									{bigCard === 'imgnobg-text-big-rev' && <BCardIMGnoBgTextBigRev />}
									{bigCard === 'imgx2-text-big' && <BCardIMGx2TextBig />}
									{bigCard === 'imgx2-text-big-rev' && <BCardIMGx2TextBigRev />}
									{bigCard === 'jumbo' && <BCardJumbo />}
									{bigCard === 'jumbo-rev' && <BCardJumboRev />}
									{bigCard === 'map' && <BCardMap />}
									{bigCard === 'map-rev' && <BCardMapRev />}
									{bigCard === 'review' && <BCardReview />}
									{bigCard === 'review-hor' && <BCardReviewHor />}
									{bigCard === 'text' && <BCardText />}
									{bigCard === 'text-img' && <BCardTextIMG />}
									{bigCard === 'text-img-hor' && <BCardTextIMGHor />}
									{bigCard === 'text-ul' && <BCardTextUl />}
									{bigCard === 'video' && <BCardVideo showVideo={showVideo} />}
								</Fragment>
							)}

							{/**Carousel Showcase */}
							{choice === 'carousels' && (
								<Fragment>
									{carousel === 'cards' && <CardCarousel />}
									{carousel === 'card-vertical' && <CardCarouselVertical />}
									{carousel === 'gallery' && (
										<CarrouselGallery autoPlay={true} swipeable={true} stopOnHover={true} />
									)}
									{carousel === 'jumbo' && (
										<CarrouselJumbo autoPlay={true} swipeable={true} stopOnHover={true} />
									)}
									{carousel === 'mid' && (
										<CarrouselMid autoPlay={true} swipeable={true} stopOnHover={true} />
									)}
									{carousel === 'sm-long' && (
										<CarrouselSmLong autoPlay={true} swipeable={true} stopOnHover={true} />
									)}
								</Fragment>
							)}

							{/**Chart Showcase */}
							{choice === 'charts' && (
								<Fragment>
									{chart === 'area' && <ChartArea />}
									{chart === 'bars' && <ChartBars />}
									{chart === 'lines' && <LineChart />}
									{chart === 'nut' && <NutChart />}
									{chart === 'organization' && <ChartOrganization />}
									{chart === 'pie' && <PieChart />}
									{chart == 'polar' && <PolarAreaChart />}
									{chart === 'prime-bars' && <PrimeBarChart />}
									{chart === 'radar' && <RadarChart />}
									{chart === 'simple' && <Chart />}
									{chart === 'straight' && <ChartStraight />}
									{chart === 'triangle' && <ChartBarsTri />}
								</Fragment>
							)}

							{/**Dialog Showcase */}
							{choice === 'dialogues' && (
								<Fragment>
									{dialog === 'confirm' && <DialogConfirm />}
									{dialog === 'form' && <DialogForm />}
									{dialog === 'prime' && <DialogPrime />}
									{dialog === 'quantity' && <DialogQty />}
								</Fragment>
							)}

							{/** File Showcase */}
							{choice === 'files' && <Fragment>{file === 'upload' && <UploadComp />}</Fragment>}

							{/**IMG Showcase */}
							{choice === 'images' && (
								<Fragment>
									{IMG === 'collage' && <BCardCollage />}
									{IMG === 'gallery-grid' && <GalleryGrid />}
									{IMG === 'gallery-grid-sm' && <GalleryGridsm />}
									{IMG === 'img-bg' && <IMGbg />}
									{IMG === 'img-bg-rev' && <IMGbgRev />}
									{IMG === 'imgx2-over' && <IMGx2over />}
									{IMG === 'imgx2-over-rev' && <IMGx2overRev />}
									{IMG === 'jumbo' && <IMGjumbo />}
									{IMG === 'row-escalate' && <RowEscalate />}
								</Fragment>
							)}

							{/**Input Showcase */}
							{choice === 'inputs' && (
								<Fragment>
									{input === 'auto-complete' && <InputAutoComp />}
									{input === 'big' && <BCardFormBig />}
									{input === 'chips' && <InputChips />}
									{input === 'color' && <InputColor />}
									{input === 'dropdown' && <InputDropdownComp />}
									{input === 'editor' && <InputEdit />}
									{input === 'group' && <InputGroup />}
									{input === 'input-switch' && <InputSwitchComp />}
									{input === 'input-text' && <InputTextComp />}
									{input === 'mask' && <InputMaskComp />}
									{input === 'number-buttons' && <InputNumberButtons />}
									{input === 'number-currency' && <InputNumberCurrency />}
									{input === 'number-numerals' && <InputNumberNumerals />}
									{input === 'number-presufix' && <InputNumberPreSufix />}
									{input === 'password' && <PasswordComp />}
									{input === 'slider' && <SliderComp />}
									{input === 'small' && <BCardForm />}
									{input === 'spinner' && <InputSpinnerComp />}
									{input === 'text-area' && <InputTextAreaComp />}
									{input === 'tool-tip' && <ToolTip />}
									{input === 'tri-state' && <TriCheckbox />}
								</Fragment>
							)}
							{/** Layout */}
							{choice === 'layouts' && (
								<Fragment>
									{layout === 'bread-crumbs' && <BreadCrumbComp />}
									{layout === 'deferred' && <DeferredComp />}
									{layout === 'field-set' && <FieldSetComp />}
									{layout === 'flex-grid' && <FlexGridComp />}
									{layout === 'inplace' && <InplaceComp />}
									{layout === 'paginator' && <PaginatorComp />}
									{layout === 'panel' && <PanelComp />}
									{layout === 'side-bar' && <SideBarComp />}
									{layout === 'tabs' && <Tabs />}
								</Fragment>
							)}

							{/**List Showcase */}
							{choice === 'lists' && (
								<Fragment>
									{list === 'accordion' && <AccordionComp />}
									{list === 'box' && <ListBoxSimple />}
									{list === 'box-img' && <ListBoxIMG />}
									{list === 'data-scroller' && <DataScrollerComp />}
									{list === 'list-picker' && <ListPicker />}
									{list === 'list-ordering' && <ListOrdering />}
									{list === 'multi' && <MultiSelectComp />}
									{list === 'tree' && <ListTree />}
									{list === 'tree-table' && <TreeTableComp />}
								</Fragment>
							)}

							{/**Loading Showcase */}
							{choice === 'loading' && (
								<Fragment>
									{loading === 'bar' && <ProgressBarComp />}
									{loading === 'prime-spinner' && <PrimeSpinner />}
									{loading === 'spinner' && <Spinner />}
								</Fragment>
							)}

							{/**Map Showcase */}
							{choice === 'maps' && (
								<Fragment>
									{map === 'gmap' && <GoogleMap />}
									{map === 'map' && <BCardMap />}
									{map === 'map-rev' && <BCardMapRev />}
								</Fragment>
							)}

							{/**Menu Showcase */}
							{choice === 'menus' && (
								<Fragment>
									{menu === 'bar' && <BarMenuComp />}
									{menu === 'panel' && <PanelMenuComp />}
									{menu === 'mega' && <MegaMenuComp />}
									{menu === 'simple' && <MenuComp />}
									{menu === 'slide' && <SlideComp />}
									{menu === 'steps' && <StepsComp />}
									{menu === 'tabs' && <TabMenuComp />}
									{menu === 'tiered' && <TieredMenuComp />}
								</Fragment>
							)}

							{/**Pages Showcase */}
							{choice === 'pages' && (
								<Fragment>
									{page === 'dashboard' && <Dashboard />}
									{page === 'data-view' && <DataViewComp />}
									{page === 'login' && <Login />}
									{page === 'register' && <Register />}
								</Fragment>
							)}

							{/**SearchBox Showcase */}
							{choice === 'search-boxes' && (
								<Fragment>
									{searchBox === 'simple' && <Table data="products" wSearch={true} list={Products} />}
								</Fragment>
							)}

							{/**Security Showcase */}
							{choice === 'security' && <Fragment>{security === 'captcha' && <CaptchaComp />}</Fragment>}

							{/**Table Showcase */}
							{choice === 'tables' && (
								<Fragment>
									{table === 'simple' && <Table data="products" list={Products} />}
									{table === 'table-buttons' && (
										<Table data="products" wOptions={true} list={Products} />
									)}
									{table === 'table-search' && (
										<Table data="products" wSearch={true} list={Products} />
									)}
								</Fragment>
							)}

							{/**Video Showcase */}
							{choice === 'videos' && (
								<Fragment>
									{video === 'card' && <BCardVideo showVideo={showVideo} />}
									{video === 'video' && <Video />}
								</Fragment>
							)}
						</div>

						{/*******************************************************************************
						 * Choices Choices Choices Choices Choices Choices Choices Choices Choices Choices
						 *******************************************************************************/}

						{/** SUB CHOICES */}
						{choice && (
							<SubOptions
								choices={choices}
								choice={choice}
								setChoices={setChoices}
								setChoice={setChoice}
								setAlerts={setAlerts}
								setBigCard={setBigCard}
								setButtons={setButtons}
								setCalendar={setCalendar}
								setCard={setCard}
								setCarousel={setCarousel}
								setChart={setChart}
								setDialog={setDialog}
								setFile={setFile}
								setInput={setInput}
								setIMG={setIMG}
								setJumbo={setJumbo}
								setLayout={setLayout}
								setList={setList}
								setLoading={setLoading}
								setMap={setMap}
								setMenu={setMenu}
								setNavbar={setNavbar}
								setOption={setOption}
								setPage={setPage}
								setSearchBox={setSearchBox}
								setSecurity={setSecurity}
								setTable={setTable}
								setVideo={setVideo}
							/>
						)}
						{/*GENERAL CHOICES*/}
						<Options
							choices={choices}
							choice={choice}
							setChoices={setChoices}
							setChoice={setChoice}
							setOpenShowcase={setOpenShowcase}
							bodyRef={bodyRef}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

Landing.propTypes = {
	setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Landing);
