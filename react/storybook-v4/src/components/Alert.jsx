import React from 'react';
import PropTypes from 'prop-types';
import { closeIcon } from './icons';
import { alertIcons } from './icons/alert-icons';
import SVGInline from 'react-svg-inline';

import './_alert.scss';

/**
 * Alerts provide feedback for an action the user has taken. They can be placed anyone in a layout to associate the feedback with the action.
 * */
const Alert = ({ value, status }) => {
  return (
    <div key={status} className={`c-alert ${status}`}>
      <SVGInline className={`c-alert__icon ${status}`} svg={alertIcons[status]} />
      <span className="c-alert__message">{value}</span>
      <SVGInline className="c-alert__icon close" svg={closeIcon} />
    </div>
  );
};

Alert.propTypes = {
  /**
   * Changes the visual display of the alert
   * */
  value: PropTypes.oneOf(['default', 'warning', 'info', 'success']),
  /**
   * The content of the alert
   * */
  message: PropTypes.string
};

Alert.defaultProps = {
  status: 'default'
};

export default Alert;
