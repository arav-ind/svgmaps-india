import type { MapItem } from '../utils/maps'

type MapControlsProps = {
    maps: MapItem[]
    selectedId: string
    onSelect: (id: string) => void
    size: string
    mapColor: string
    strokeColor: string
    strokeWidth: string
    hoverColor: string
    onSizeChange: (value: string) => void
    onMapColorChange: (value: string) => void
    onStrokeColorChange: (value: string) => void
    onStrokeWidthChange: (value: string) => void
    onHoverColorChange: (value: string) => void
}

const MapControls = ({
    maps,
    selectedId,
    onSelect,
    size,
    mapColor,
    strokeColor,
    strokeWidth,
    hoverColor,
    onSizeChange,
    onMapColorChange,
    onStrokeColorChange,
    onStrokeWidthChange,
    onHoverColorChange,
}: MapControlsProps) => (
    <section className='panel'>
        <h2>Map Controls</h2>
        <div className='field'>
            <label htmlFor='state'>State</label>
            <select
                id='state'
                value={selectedId}
                onChange={(e) => onSelect(e.target.value)}
            >
                {maps.map((map) => (
                    <option key={map.id} value={map.id}>
                        {map.label}
                    </option>
                ))}
            </select>
        </div>
        <div className='field'>
            <label htmlFor='size'>Size</label>
            <input id='size' value={size} onChange={(e) => onSizeChange(e.target.value)} />
        </div>
        <div className='field'>
            <label htmlFor='mapColor'>Map Color</label>
            <input
                id='mapColor'
                value={mapColor}
                onChange={(e) => onMapColorChange(e.target.value)}
            />
        </div>
        <div className='field'>
            <label htmlFor='strokeColor'>Stroke Color</label>
            <input
                id='strokeColor'
                value={strokeColor}
                onChange={(e) => onStrokeColorChange(e.target.value)}
            />
        </div>
        <div className='field'>
            <label htmlFor='strokeWidth'>Stroke Width</label>
            <input
                id='strokeWidth'
                value={strokeWidth}
                onChange={(e) => onStrokeWidthChange(e.target.value)}
            />
        </div>
        <div className='field'>
            <label htmlFor='hoverColor'>Hover Color</label>
            <input
                id='hoverColor'
                value={hoverColor}
                onChange={(e) => onHoverColorChange(e.target.value)}
            />
        </div>
        <div className='helper'>Click a district to see its ID and name.</div>
    </section>
)

export default MapControls
