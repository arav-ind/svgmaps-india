import React from 'react'
import RenderSvg from 'svgmap-core'
import { MapPropType } from '../types/types'
import { districtCodes, drawPath } from '../constants/tamilnadu'

const TamilnaduMap = ({
    className = 'svgmap',
    size,
    mapColor,
    strokeColor,
    strokeWidth,
    hoverColor,
    onClick,
}: MapPropType) => {
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
            viewBox='7623.34 -1356.27 411.3 548.63'
        />
    )
}
export default TamilnaduMap
