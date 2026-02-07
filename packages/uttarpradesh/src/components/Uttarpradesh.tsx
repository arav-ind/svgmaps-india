import React from 'react'
import RenderSvg from 'svgmap-core'
import { MapPropType } from '../types/types'
import { districtCodes, drawPath } from '../constants/uttarpradesh'

const UttarpradeshMap = ({
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
            viewBox='0 0 1000.00 865.85'
        />
    )
}
export default UttarpradeshMap
