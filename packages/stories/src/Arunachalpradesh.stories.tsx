import React, { useState } from 'react'
import ArunachalpradeshMap, { districtNames } from '../../arunachalpradesh/src/index'

export const Default = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <ArunachalpradeshMap
                onClick={(value: string) => setSelectedValue(value)}
                size='600px'
                mapColor='white'
                strokeColor='black'
                strokeWidth='1'
                hoverColor='rgb(80 80 80)'
            />
        </div>
    )
}

Default.storyName = 'Arunachal Pradesh'
