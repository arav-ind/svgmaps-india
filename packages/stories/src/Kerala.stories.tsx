import React, { useState } from 'react'
import Kerala from '../../kerala/src/components/Kerala'

export const Default = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue || 'None'}</h3>
            <Kerala
                onClick={(value: string) => setSelectedValue(value)}
                size="400px"
                mapColor="white"
                strokeColor="black"
                strokeWidth="4"
                hoverColor="rgb(80 80 80)"
            />
        </div>
    )
}

Default.storyName = 'Kerala'
