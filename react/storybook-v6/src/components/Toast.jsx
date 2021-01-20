import React from 'react';
import PropTypes from 'prop-types';
import { CloseIcon } from './icons';
import { toastIcons } from './icons/toast-icons';

import './_toast.scss';

/**
 * Toasts provide dismissable feedback\information for the user.
 * */
const Toast = ({ text, status }) => {
  const ToastIcon = toastIcons[status];

  return (
    <div key={status} className={`c-toast ${status}`}>
      <ToastIcon className={`c-toast__icon ${status}`} />
      <span className="c-toast__text">{text}</span>
      <CloseIcon className="c-toast__close-icon" />
    </div>
  );
};

Toast.propTypes = {
  /**
   * Changes the visual display of the toast
   * */
  status: PropTypes.oneOf(['default', 'warning', 'error', 'info', 'success']),
  /**
   * The content of the toast
   * */
  text: PropTypes.string
};

Toast.defaultProps = {
  status: 'default'
};

export default Toast;
