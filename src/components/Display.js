import React from 'react';
import propTypes from 'prop-types';

function Display({ result }) {
  return (
    <div>
      <h4>{result}</h4>
    </div>
  );
}

Display.propTypes = {
  result: propTypes.string,
};
Display.defaultProps = {
  result: '0',
};

export default Display;
