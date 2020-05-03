import React, { Fragment } from "react";
const ButtonsVertical = () => {
  return (
    <Fragment>
      <div className="vertical-buttons">
        <button
          //onClick={() => generateOrder(currentOrder)}
          className="btn btn-primary"
        >
          <div className="hide-sm">Generate Order</div>
          <div className="show-sm">
            <i class="fas fa-arrow-circle-right"></i>
          </div>
        </button>
        <button
          //onClick={() => window.scrollTo(0, productsRef.current.offsetTop)}
          className="btn btn-success"
        >
          <div className="hide-sm">Continue Adding</div>
          <div className="show-sm">
            <i className="fas fa-shopping-cart"></i>
          </div>
        </button>
        <button
          //onClick={() => toggleContinueLater(!displayContinueLater)}
          className="btn btn-caution"
        >
          <div className="hide-sm">Continue Later</div>
          <div className="show-sm">
            <i class="fas fa-save"></i>
          </div>
        </button>
        <button
          //onClick={() => toggleCancelOrder(!displayCancelOrder)}
          className="btn btn-danger"
        >
          <div className="hide-sm">Cancel Order</div>
          <div className="show-sm">
            <i class="fas fa-times-circle"></i>
          </div>
        </button>
      </div>
      <div className="my-1 show-sm">Also fixed to bottom of screen</div>

      <div className="buttons-mobile show-sm">
        <button
          //onClick={() => generateOrder(currentOrder)}
          className="btn btn-primary"
        >
          <i class="fas fa-arrow-circle-right"></i>
        </button>
        <button
          //onClick={() => scroll("items")}
          className="btn btn-success"
        >
          <i className="fas fa-shopping-cart"></i>
        </button>
        <button
          //onClick={() => toggleContinueLater(!displayContinueLater)}
          className="btn btn-caution"
        >
          <i class="fas fa-save"></i>
        </button>
        <button
          //onClick={() => toggleCancelOrder(!displayCancelOrder)}
          className="btn btn-danger"
        >
          <i class="fas fa-times-circle"></i>
        </button>
      </div>
    </Fragment>
  );
};
export default ButtonsVertical;
