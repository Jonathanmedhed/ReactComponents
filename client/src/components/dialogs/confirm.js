import React, { Fragment, useState } from "react";

const DialogConfirm = ({
  setAlert,
  order_id,
  product,
  toggle,
  display,
  products,
  items,
  setProducts,
  setItems,
}) => {
  /** 
  const onSubmit = async (e) => {
    setAlert(alertMessage, alertType);
    if (action === "remove") {
      await axios.post(`/api/order/nofav/${id}`);
      const order = await axios.get(`/api/order/${id}`);
      list.splice(list.indexOf(order), 1);
      setList(list);
      toggle(!display);
    }
    if (action === "continue") {
      toggle(!display);
    }
    if (action === "editEmail") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let emailToSend = email;
      const body = JSON.stringify({ emailToSend });

      const result = await axios.post(
        `/api/order/${id}/${item._id}`,
        body,
        config
      );

      // Update suppliers list and current supplier
      list.splice(list.indexOf(item), 1);
      item.emailToSend = emailToSend;
      list.unshift(item);
      setList(list);
      setItem(item);
      toggle(!display);
    }
  };
  */

  return (
    <Fragment>
      <div className="form-sm-container">
        <form /**onSubmit={(e) => onSubmit(e)}**/ className="form-sm form-bg-red">
          <div className="form-sm-header">
            <p >header</p>
            <i
              onClick={() => toggle(!display)}
              className="fas fa-times-circle dialog"
            ></i>
          </div>
          <div className="form-sm-body">
            <p className="p-1">message</p>
          </div>
          <div className="form-sm-footer">
            {/** 
           {action === "redirect" ? (
            <Link to="/dashboard">
              <button
                onClick={() => toggle(!display)}
                className="btn btn-success"
              >
                ok
              </button>
            </Link>
          ) : (
            <input type="submit" value="ok" className="btn btn-success"></input>
          )}

          {cancel && (
            <button onClick={() => toggle(!display)} className="btn btn-danger">
              Cancel
            </button>
          )}confrm
          */}

            <button
              onClick={() => toggle(!display)}
              className="btn btn-success"
            >
              ok
            </button>
            <button onClick={() => toggle(!display)} className="btn btn-danger">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default DialogConfirm;
