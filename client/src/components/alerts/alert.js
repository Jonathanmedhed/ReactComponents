import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 && (
    <div key={alerts[0].id} className={`alert alert-${alerts[0].alertType}`}>
      <p>{alerts[0].msg}</p>
    </div>
  );

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps)(Alert);