import React from 'react';
import PropTypes from 'prop-types';
import { chevronRightIcon } from './icons';
import SVGInline from 'react-svg-inline';

import './_button.scss';

/**
 * Buttons indicate actions on the page. Each of our button types have specific purposes that are used consistently.
 * */
const Button = ({ size, disabled, children }) => {
  return (
    <div className={`c-button ${size} ${disabled && 'disabled'}`}>
      <div>{children}</div>
      {/*<div>*/}
      {/*  <SVGInline svg={chevronRightIcon} />*/}
      {/*</div>*/}
    </div>
  );
};

Button.propTypes = {
  /**
   * Changes the size of the Button
   * */
  size: PropTypes.oneOf(['regular', 'smaller']),
  /**
   * The content of the Button
   * */
  children: PropTypes.node,
  /**
   * if true the button will be disabled
   * */
  disabled: PropTypes.bool
};

Button.defaultProps = {
  size: 'regular',
  disabled: false
};

export default Button;
