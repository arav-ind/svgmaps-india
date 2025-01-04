import React from 'react'
import RenderSvg from 'svgmap-core'
import { MapPropType } from '../types/types'
import { districtCodes, drawPath } from '../constants/kerala'

const Kerala = ({
    className = 'svgmap',
    size,
    mapColor,
    strokeColor,
    strokeWidth,
    hoverColor,
    onClick,
}: MapPropType
) => {
    return (
        <RenderSvg
            districtCodes={districtCodes}
            drawPath={drawPath}
            onClick={onClick}
            className={className}
            size={size}
            mapColor={mapColor}
            strokeColor={strokeColor}
            strokeWidth={strokeWidth}
            hoverColor={hoverColor}
            viewBox="0 0 1900 2486"
        />
    )
}
export default Kerala
