import React, { useContext } from 'react'
import SheetContext from '../sheet/context'

export default function Controls({setSheetData}) {
    
    const baseId = 'controls'
    const sheetData = useContext(SheetContext)

    function setSheetDimensions({x, y}) {
        const xVal = x && parseInt(x)
        const yVal = y && parseInt(y)
        const newDimensions = {}

        if(typeof xVal === 'number' && xVal >= 0 ) {
            newDimensions.x = xVal
        }

        if(typeof yVal === 'number' && yVal >= 0 ) {
            newDimensions.y = yVal
        }

        setSheetData(Object.assign({},sheetData, newDimensions))
    }

    function handleChangeX(e){
        setSheetDimensions({x:e.target.value})
    }
    function handleChangeY(e){
        setSheetDimensions({y:e.target.value})
    }

    return (
        <form>
            {/* Create sub-components for controls */}
            <label>
                Columns
                <input
                    id={`${baseId}_cols`}
                    type="number"
                    value={sheetData.x}
                    onChange={handleChangeX}
                    placeholder="0"
                />
            </label>
            <label>
                Rows
                <input
                    id={`${baseId}_rows`}
                    type="number"
                    value={sheetData.y}
                    onChange={handleChangeY}
                    placeholder="0"
                />
            </label>
        </form>
    )
}
