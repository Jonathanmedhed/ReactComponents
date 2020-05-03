import React, { useState, Fragment } from "react";
import { Carousel } from "primereact/carousel";
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
} from "./data";

const Options = ({ setOpenShowcase, setChoice, setChoices }) => {
  const [currentOption, setCurrentOption] = useState(null);

  /** Select an item */
  const select = (option) => {
    /** Dont Open Component Showcase if navbar or jumbo */
    if (option === "navbars" || option === "jumbos") {
      setOpenShowcase(false);
    } else {
      setOpenShowcase(true);
    }
    /** Set current option and choice */
    setCurrentOption(option);
    setChoice(option);
    switch (option) {
      case "alerts":
        setChoices(alertOptions);
        break;
      case "big-cards":
        setChoices(bigCardsOptions);
        break;
      case "buttons":
        setChoices(buttonOptions);
        break;
      case "calendars":
        setChoices(calendarOptions);
        break;
      case "cards":
        setChoices(cardOptions);
        break;
      case "carousels":
        setChoices(carouselOptions);
        break;
      case "charts":
        setChoices(chartOptions);
        break;
      case "dialogs":
        setChoices(dialogOptions);
        break;
      case "files":
        setChoices(fileOptions);
        break;
      case "images":
        setChoices(imgOptions);
        break;
      case "inputs":
        setChoices(inputOptions);
        break;
      case "jumbos":
        setChoices(jumboOptions);
        break;
      case "layouts":
        setChoices(layoutOptions);
        break;
      case "lists":
        setChoices(listOptions);
        break;
      case "loading":
        setChoices(loadingOptions);
        break;
      case "maps":
        setChoices(mapOptions);
        break;
      case "menus":
        setChoices(menuOptions);
        break;
      case "navbars":
        setChoices(navbarOptions);
        break;
      case "pages":
        setChoices(pageOptions);
        break;
      case "search-boxes":
        setChoices(searchBoxOptions);
        break;
      case "security":
        setChoices(securityOptions);
        break;
      case "tables":
        setChoices(tableOptions);
        break;
      case "videos":
        setChoices(videoOptions);
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
          className={
            currentOption === option.value ? "btn btn-dark" : "btn btn-primary"
          }
        >
          {option.name}
        </button>
      </li>
    );
  };

  return (
    <Fragment>
      {/** Desktop */}
      <div className="hide-sm">
        <Carousel
          circular={false}
          value={options}
          itemTemplate={itemTemplate}
          numVisible={5}
          numScroll={4}
        ></Carousel>
      </div>
      {/** Mobile */}
      <div className="show-sm">
        <Carousel
          circular={false}
          value={options}
          itemTemplate={itemTemplate}
          numVisible={2}
          numScroll={2}
        ></Carousel>
      </div>
    </Fragment>
  );
};
export default Options;
