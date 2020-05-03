import React, { Fragment, useState, useEffect } from "react";
import { user, Suppliers, Products, Orders } from "../../resources/Data";
import Table from "../tables/table";

const Dashboard = () => {
  const [displayEditUser, toggleEditUser] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentSupplier, setCurrentSupplier] = useState(null);
  const [displayEditProduct, toggleEditProduct] = useState(false);
  const [displayDeleteProduct, toggleDeleteProduct] = useState(false);
  const [displayEditSupplier, toggleEditSupplier] = useState(false);
  const [displayDeleteSupplier, toggleDeleteSupplier] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [orders, setOrders] = useState([]);

  const [formData, setFormData] = useState({
    query: "",
    query2: "",
    query3: "",
  });

  const { query, query2, query3 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    const fetchData = async () => {
      //const user = await axios.get(`/api/users/me`);
      const userr = user;
      //const suppliers = await axios.get(`/api/supplier`);
      const suppliers = Suppliers;
      //const orders = await axios.get(`/api/order`);
      const orders = Orders;
      //const products = await axios.get(`/api/users/products`);
      const products = Products;
      setCurrentUser(userr);
      setProducts(products);
      setSuppliers(suppliers);
      setOrders(orders);
    };
    fetchData();
  }, []);

  const editProduct = async (product) => {
    setCurrentProduct(product);
    toggleEditProduct(!displayEditProduct);
  };

  const editSupplier = async (supplier) => {
    setCurrentSupplier(supplier);
    toggleEditSupplier(!displayEditSupplier);
  };

  const productDeletion = async (product) => {
    setCurrentProduct(product);
    toggleDeleteProduct(!displayDeleteProduct);
  };

  const supplierDeletion = async (supplier) => {
    setCurrentSupplier(supplier);
    toggleDeleteSupplier(!displayDeleteSupplier);
  };

  return (
    <Fragment>
      {user === null ? (
        /**<Spinner />*/ <Fragment></Fragment>
      ) : (
        <Fragment>
          {/** 
          {displayDeleteProduct && (
            <ProductDialog
              toggle={toggleDeleteProduct}
              display={displayDeleteProduct}
              product={currentProduct}
              list={products}
              setList={setProducts}
              cancel={true}
            />
          )}
          {displayEditProduct && (
            <ProductForm
              toggle={toggleEditProduct}
              display={displayEditProduct}
              product={currentProduct}
              list={products}
              setList={setProducts}
              cancel={true}
              action="edit"
            />
          )}
          {displayDeleteSupplier && (
            <SupplierDialog
              toggle={toggleDeleteSupplier}
              display={displayDeleteSupplier}
              supplier={currentSupplier}
              list={suppliers}
              setList={setSuppliers}
              cancel={true}
            />
          )}
          {displayEditSupplier && (
            <SupplierForm
              toggle={toggleEditSupplier}
              display={displayEditSupplier}
              supplier={currentSupplier}
              list={suppliers}
              setList={setSuppliers}
              cancel={true}
            />
          )}
          {displayEditUser && (
            <UserForm
              toggle={toggleEditUser}
              display={displayEditUser}
              user={user}
              setList={setCurrentUser}
              cancel={true}
            />
          )} 
          */}
          <section className="container">
            <h1 className="large text-primary">
              <i className="fas fa-user"></i> Dashboard
            </h1>
            {/**<Alert />*/}
            <div className="details">
              <div className="details-header bg-primary">
                <h1>Account Information</h1>
              </div>
              <div className="details-body-top bg-light">
                <div className="details-body-top-items">
                  <div className="details-body-top-item">
                    <p className="lead">Company Name:</p>{" "}
                    <p className="bottom">{currentUser.companyName}</p>
                  </div>
                  <div className="details-body-top-item">
                    <p className="lead">Contact Name:</p>{" "}
                    <p>{currentUser.contactName}</p>
                  </div>
                  <div className="details-body-top-item">
                    <p className="lead">Email:</p> <p>{currentUser.email}</p>
                  </div>
                  <div className="details-body-top-edit">
                    <button
                      onClick={() => toggleEditUser(!displayEditUser)}
                      className="btn btn-success"
                    >
                      <i className="far fa-edit"></i> Edit Info
                    </button>
                  </div>
                </div>
              </div>
              <div className="details-body bg-white p-1">
                <h2 className="p-1">Orders</h2>
                <div class="products">
                  <Table data="orders" wSearch={true} wOptions={true} list={Orders} />
                </div>
                <div className="line"></div>
                <h2 className="py-1">Products</h2>
                {/**<Alert />*/}
                <Table data="products" wSearch={true} wOptions={true} list={Products} />
                <div className="line"></div>
                <h2 className="p-1">Suppliers</h2>
                {/**<Alert />*/}
                <Table data="suppliers" wSearch={true} wOptions={true} list={Suppliers} />
              </div>
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  //auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  //auth: state.auth,
});

//export default connect(mapStateToProps, null)(withRouter(Dashboard));
export default Dashboard;
