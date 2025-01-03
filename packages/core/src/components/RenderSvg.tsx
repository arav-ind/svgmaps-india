import React from 'react'
import { constants } from '../constants/constants'
import { MapPropType } from '../types/types'

const RenderSvg = ({
    districtCodes,
    drawPath,
    viewBox = '150 42 800 793',
    className = 'svgmap',
    size,
    mapColor,
    strokeColor,
    strokeWidth,
    hoverColor,
    onClick,
}: MapPropType
) => {
    const mapStyle = {
        width: size || constants.WIDTH,
        fill: mapColor || constants.MAPCOLOR,
        stroke: strokeColor || constants.STROKE_COLOR,
        strokeWidth: strokeWidth || constants.STROKE_WIDTH,
    }

    const handleMouseEnter = (hoverStateId: string) => {
        const path: HTMLElement | null = document.getElementById(hoverStateId)
        if (path) {
            path.style.fill = hoverColor || constants.HOVERCOLOR
        }
    }

    const handleMouseLeave = (hoverStateId: string) => {
        const path: HTMLElement | null = document.getElementById(hoverStateId)
        if (path) {
            path.style.fill = mapColor || constants.MAPCOLOR
        }
    }

    return (
        <div className={className} style={mapStyle}>
            <svg
                version='1.1'
                id='svg2'
                x='0px'
                y='0px'
                viewBox={viewBox}
            >
                {districtCodes.map((districtCode: string) => (
                    <path
                        key={districtCode}
                        onClick={() => onClick(districtCode)}
                        onMouseEnter={() => handleMouseEnter(districtCode)}
                        onMouseLeave={() => handleMouseLeave(districtCode)}
                        id={districtCode}
                        d={drawPath[districtCode]}
                    />
                ))}
            </svg>
        </div>
    )
}
export default RenderSvg
