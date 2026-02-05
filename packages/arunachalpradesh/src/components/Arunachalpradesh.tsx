import React from 'react'
import RenderSvg from 'svgmap-core'
import { MapPropType } from '../types/types'
import { districtCodes, drawPath } from '../constants/arunachalpradesh'

const ArunachalpradeshMap = ({
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
            viewBox='9154.65 -2946 586.5 280.91'
        />
    )
}
export default ArunachalpradeshMap
