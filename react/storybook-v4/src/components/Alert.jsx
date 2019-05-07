import React from 'react';
import PropTypes from 'prop-types';
import { closeIcon } from './icons';
import { alertIcons } from './icons/alert-icons';
import SVGInline from 'react-svg-inline';

import './_alert.scss';

/**
 * Alerts provide feedback for an action the user has taken. They can be placed anyone in a layout to associate the feedback with the action.
 * */
const Alert = ({ text, status }) => {
  return (
    <div key={status} className={`c-alert ${status}`}>
      <SVGInline className={`c-alert__icon ${status}`} svg={alertIcons[status]} />
      <span className="c-alert__text">{text}</span>
      <SVGInline className="c-alert__icon close" svg={closeIcon} />
    </div>
  );
};

Alert.propTypes = {
  /**
   * Changes the visual display of the alert
   * */
  status: PropTypes.oneOf(['default', 'warning', 'info', 'success']),
  /**
   * The content of the alert
   * */
  text: PropTypes.string
};

Alert.defaultProps = {
  status: 'default'
};

export default Alert;
