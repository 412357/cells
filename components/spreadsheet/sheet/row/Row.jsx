import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import SheetContext from '../context/index'
import Cell from '../cell/Cell'

export default function Row({ row }) {
    const { x } = useContext(SheetContext)
    const cells = [...Array(x)].map((_el,i)=><Cell key={i} col={i} row={row} />)
    
    return (
        <tr>
            {cells}
        </tr>
    )
}

Row.propTypes = {
    col: PropTypes.number,
    row: PropTypes.number,
}
