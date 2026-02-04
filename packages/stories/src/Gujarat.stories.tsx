import React, { useState } from 'react'
import GujaratMap, { districtNames } from '../../gujarat/src/index'

export const Default = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <GujaratMap
                onClick={(value: string) => setSelectedValue(value)}
                size='600px'
                mapColor='white'
                strokeColor='black'
                strokeWidth='2'
                hoverColor='rgb(80 80 80)'
            />
        </div>
    )
}

Default.storyName = 'Gujarat'
