import React from 'react';
import PropTypes from 'prop-types';
import { closeIcon } from './icons';
import { toastIcons } from './icons/toast-icons';
import SVGInline from 'react-svg-inline';

import './_toast.scss';

/**
 * Alerts provide feedback for an action the user has taken. They can be placed anyone in a layout to associate the feedback with the action.
 * */
const Toast = ({ text, status }) => {
  return (
    <div key={status} className={`c-toast ${status}`}>
      <SVGInline className={`c-toast__icon ${status}`} svg={toastIcons[status]} />
      <span className="c-toast__text">{text}</span>
      <SVGInline className="c-toast__close-icon" svg={closeIcon} />
    </div>
  );
};

Toast.propTypes = {
  /**
   * Changes the visual display of the alert
   * */
  status: PropTypes.oneOf(['default', 'warning', 'error', 'info', 'success']),
  /**
   * The content of the alert
   * */
  text: PropTypes.string
};

Toast.defaultProps = {
  status: 'default'
};

export default Toast;
