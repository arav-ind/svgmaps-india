import React, { useState } from 'react'
import TamilnaduMap, { districtNames } from '../../tamilnadu/src/index'

export const Default = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3 style={{ position: 'absolute' }}>
                {selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}
            </h3>
            <TamilnaduMap
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

Default.storyName = 'Tamilnadu'
