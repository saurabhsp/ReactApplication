import React from 'react';
import PropTypes from "prop-types";

export default function Alert(props) {
  const capitalize=(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alert &&
    <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.msg)}</strong> : {capitalize(props.alert.type)}
      </div>
    </div>
  );
}

Alert.propTypes = {
  alert: PropTypes.shape({
    msg: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })
};
