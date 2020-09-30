import React from 'react'

function ButtonPanel({ name }) {
    return (
        <div>
            <button type='button'>{name}</button>
        </div>
    )
}

Button.PropTypes = {
    name: PropTypes.string
}

export default ButtonPanel
