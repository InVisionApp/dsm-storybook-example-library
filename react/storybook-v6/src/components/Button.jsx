import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRightIcon } from './icons';

import './_button.scss';

/**
 * Buttons indicate actions on the page that will occur when a user touches them. This button is responsive to screen sizes.
 * We support a very minimal level of variation for the primary button. Custom styling or class names should not be applied to the primary button.
 * It requires text in all cases, but allows for icons as an optional addition.
 * The primary button can also exist as an element within larger molecules and organisms.
 * */
const Button = ({ onClick, icon, disabled, children }) => {
  return (
    <button
      onClick={!disabled && onClick}
      className={`c-button ${icon && 'c-button__with-icon'} ${disabled && 'c-button__disabled'}`}
    >
      <div className="c-button__content">{children}</div>
      {icon && (
        <div className="c-button__icon">
          <ChevronRightIcon />
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  /**
   * Adds an icon to the button
   */
  icon: PropTypes.oneOf(['chevron-right']),
  /**
   * The content of the Button
   * */
  children: PropTypes.node,
  /**
   * Disable state of the button
   * */
  disabled: PropTypes.bool,
  /**
   * The function to be called when the button is clicked
   */
  onClick: PropTypes.func
};

Button.defaultProps = {
  disabled: false
};

export default Button;
