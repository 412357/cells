import React from 'react'
import PropTypes from 'prop-types'

export default function Cell({col, row}){
    return (
        <td>
            <input type="string" placeholder={`(${col},${row})`} />
        </td>
    )
}


Cell.propTypes = {
    col: PropTypes.number,
    row: PropTypes.number,
}
