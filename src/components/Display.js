import React from 'react'
import PropTypes from "prop-types";

function Display({ result }) {
    return (
        <div>
            <h4>{result}</h4>
        </div>
    )
}

Display.PropTypes = {
    result: PropTypes.string,
};
Display.defaultProps = {
    result: '0',
};

export default Display
