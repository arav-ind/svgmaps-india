import React from 'react'
import { MapPropType } from '../types/types'
import RenderSvg from '../../../core/src/index'
import { districtCodes, drawPath } from '../constants/tamilnadu'

const Tamilnadu = ({
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
            viewBox='150 42 800 793'
        />
    )
}
export default Tamilnadu
