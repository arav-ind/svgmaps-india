import React from 'react'
import RenderSvg from 'svgmap-core'
import { MapPropType } from '../types/types'
import { districtCodes, drawPath } from '../constants/maharashtra'

const MaharashtraMap = ({
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
            viewBox='1132 -929.7 3105.8 2453'
        />
    )
}
export default MaharashtraMap
