import React from 'react';
import propTypes from 'prop-types';

function Button({ name }) {
  return (
    <div>
      <button type="button">{name}</button>
    </div>
  );
}

Button.propTypes = {
  name: propTypes.string.isRequired,
};

export default Button;
