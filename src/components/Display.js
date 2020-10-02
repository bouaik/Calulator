import React from 'react';
import propTypes from 'prop-types';

function Display({ result }) {
  return (
    <div>
      <div className="display">
        <h4 className="result">
          {result}
        </h4>
      </div>
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
