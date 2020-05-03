import React, { Fragment, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <section class="jumbo-login">
        <div class="dark-overlay-login">
          <div class="inner">
            <div className="container-login">
              <h1 className="large text-light">Login</h1>
              <div className="subtitle text-light">
                <i className="fas fa-user" /> Sign Into Your Account
              </div>
              <form className="form" onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    minLength="6"
                  />
                </div>

                {/**<Alert />*/}
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
              </form>

              <div className="my-1 text-light bold">
                Don't have an account?{" "}
                <Link to="/register">
                  <button className="btn btn-dark">Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
{
  /** 
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);

*/
}

export default Login;
