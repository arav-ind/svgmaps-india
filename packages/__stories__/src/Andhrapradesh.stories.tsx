import React, { useState } from 'react'
import AndhrapradeshMap, { districtNames } from '../../andhrapradesh/src/index'

export const Default = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <AndhrapradeshMap
                onClick={(value: string) => setSelectedValue(value)}
                size='400px'
                mapColor='white'
                strokeColor='black'
                strokeWidth='2'
                hoverColor='rgb(80 80 80)'
            />
        </div>
    )
}

Default.storyName = 'Andhra Pradesh'
