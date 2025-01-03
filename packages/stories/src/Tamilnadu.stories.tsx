import React, { useState } from 'react'
import Tamilnadu from '../../tamilnadu/src/components/Tamilnadu'

export const TamilnaduMap = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue || 'None'}</h3>
            <Tamilnadu
                onClick={(value: string) => setSelectedValue(value)}
                size="500px"
                mapColor="black"
                strokeColor="white"
                strokeWidth="2"
                hoverColor="#48d8f5"
            />
        </div>
    )
}

TamilnaduMap.storyName = 'Tamilnadu'
