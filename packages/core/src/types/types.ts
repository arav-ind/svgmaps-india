export type MapPropType = {
    className?: string
    size?: string
    mapColor?: string
    strokeColor?: string
    strokeWidth?: string
    hoverColor?: string
    viewBox?: string
    onClick: (value: string) => void
    drawPath: { [code: string]: string }
    districtCodes: string[]
}
