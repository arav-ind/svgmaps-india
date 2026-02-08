import type { MapItem, MapProps } from '../utils/maps'

type MapViewProps = {
    current: MapItem
    label: string
    onDistrictClick: (value: string) => void
    mapProps: MapProps
}

const MapView = ({ current, label, onDistrictClick, mapProps }: MapViewProps) => (
    <section className='map-area'>
        <div className='map-card'>
            <div className='map-meta'>
                <strong>{current.label}</strong>
                <span className='badge'>{label}</span>
            </div>
            <div className='map-wrap'>
                <current.Map onClick={onDistrictClick} {...mapProps} />
            </div>
        </div>
    </section>
)

export default MapView
