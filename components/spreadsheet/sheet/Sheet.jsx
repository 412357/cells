import React, { useContext } from 'react'

import Row from './row/Row'
import SheetContext from './context'

export default function Sheet(){
    // map rows, set y
    const { y } = useContext(SheetContext)
    const rows = [...Array(y)].map((_el, i)=><Row key={i} row={i}/>)
    return (
        <table>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}
