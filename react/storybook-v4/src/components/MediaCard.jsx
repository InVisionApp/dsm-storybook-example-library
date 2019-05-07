import React from 'react';
import PropTypes from 'prop-types';
import { userCircleIcon } from './icons';

import './_media-card.scss';
import SVGInline from 'react-svg-inline/src';

/**
 * Buttons indicate actions on the page. Each of our button types have specific purposes that are used consistently.
 * */
const MediaCard = ({ size, title, subTitle }) => {
  return <div />;
};

MediaCard.propTypes = {
  /**
   * Changes the visual styling of the Button
   * */
  order: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Changes the size of the Button
   * */
  title: PropTypes.string,
  subTitle: PropTypes.string
};

MediaCard.defaultProps = {
  order: 'primary',
  size: 'regular',
  disabled: false
};

export default MediaCard;
