import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, color, wide }) {
    return (
        <button type="button" className={wide ? "wide" : "normal"} style={{ backgroundColor: color }}>{name}</button>
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
