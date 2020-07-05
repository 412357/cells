import React, { useState } from 'react'

import Controls from './controls/Controls'
import Sheet from './sheet/Sheet'
import SheetContext, { SheetContextProvider } from './sheet/context'

export default function Spreadsheet() {
    const [sheetData, setSheetData] = useState({x:1,y:1,})
    return (
        <>
            <SheetContextProvider value={sheetData}>
                <Controls setSheetData={setSheetData}/>
                <Sheet />
            </SheetContextProvider>
        
        </>
    )
}
