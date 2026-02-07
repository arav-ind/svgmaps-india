import React, { useState } from 'react'
import TripuraMap, { districtNames } from '../../tripura/src/index'

export const Default = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <TripuraMap
                onClick={(value: string) => setSelectedValue(value)}
                size='300px'
                mapColor='white'
                strokeColor='black'
                strokeWidth='1'
                hoverColor='rgb(80 80 80)'
            />
        </div>
    )
}

Default.storyName = 'Tripura'
