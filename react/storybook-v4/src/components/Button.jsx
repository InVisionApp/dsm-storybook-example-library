import React from 'react';
import PropTypes from 'prop-types';
import { chevronRightIcon } from './icons';
import SVGInline from 'react-svg-inline';

import './_button.scss';

/**
 * Buttons indicate actions on the page. Each of our button types have specific purposes that are used consistently.
 * */
const Button = ({ icon, disabled, children }) => {
  return (
    <div className={`c-button ${icon && 'c-button__with-icon'} ${disabled && 'c-button__disabled'}`}>
      <div className="c-button__content">{children}</div>
      {icon && (
        <div className="c-button__icon">
          <SVGInline svg={chevronRightIcon} />
        </div>
      )}
    </div>
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
  disabled: PropTypes.bool
};

Button.defaultProps = {
  disabled: false
};

export default Button;
