import React, { useState } from 'react'
import MeghalayaMap, { districtNames } from '../../meghalaya/src/index'

export const Default = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <MeghalayaMap
                onClick={(value: string) => setSelectedValue(value)}
                size='400px'
                mapColor='white'
                strokeColor='black'
                strokeWidth='1'
                hoverColor='rgb(80 80 80)'
            />
        </div>
    )
}

Default.storyName = 'Meghalaya'
