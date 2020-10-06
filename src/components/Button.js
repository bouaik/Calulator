import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, color, wide, clickHandler }) {
  return (
    <button type="button" className={wide ? 'wide' : 'normal'} onClick={() => clickHandler(name)} style={{ backgroundColor: color }}>{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
