import React, { Fragment, useState } from "react";
const DialogQty = ({
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
  const [formData, setFormData] = useState({
    qty: 0,
    email: "empty",
  });

  const { qty, email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  /**
  const onSubmit = async (e) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ qty, email });

    await axios.post(
      `/api/order/product/${order_id}/${product._id}`,
      body,
      config
    );
    products.splice(products.indexOf(product), 1);
    product.qty = qty;
    items.unshift(product);
    setItems(items);
    setProducts(products);
    setAlert("Product Added", "success");
    toggle(!display);
  };
  */

  return (
    <Fragment>
      <div className="tables">
        <table className="form-sm bg-light">
          <thead class="bg-primary">
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>
                <i
                  onClick={() => toggle(!display)}
                  className="fas fa-times-circle"
                ></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>product</td>
              <td>
                <input
                  onChange={(e) => onChange(e)}
                  type="number"
                  name="qty"
                  value={qty < 0 ? 0 : qty}
                ></input>
                <span> kg</span>
                <div className="buttons-qty">
                  <button
                    onClick={() => setFormData({ qty: qty - 1 })}
                    className="btn btn-danger"
                  >
                    <i class="fas fa-minus"></i>
                  </button>
                  <button
                    onClick={() => setFormData({ qty: qty + 1 })}
                    className="btn btn-success"
                  >
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </td>
              <td>
                <button
                  /**onClick={() => onSubmit()}*/ className="btn btn-primary"
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
export default DialogQty;
