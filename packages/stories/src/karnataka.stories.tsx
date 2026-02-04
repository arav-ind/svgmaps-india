import React, { useState } from 'react'
import KarnatakaMap, { districtNames } from '../../karnataka/src/index'

export const Default = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3 style={{ position: 'absolute' }}>
                {selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}
            </h3>
            <KarnatakaMap
                onClick={(value: string) => setSelectedValue(value)}
                size='400px'
                mapColor='white'
                strokeColor='black'
                strokeWidth='3'
                hoverColor='rgb(80 80 80)'
            />
        </div>
    )
}

Default.storyName = 'Karnataka'
