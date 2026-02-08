import { FiCheck, FiCopy } from 'react-icons/fi'
import type { MapItem, MapProps } from '../utils/maps'

type MapViewProps = {
    current: MapItem
    label: string
    copyLabel: string
    onCopy: () => void
    copied: boolean
    onDistrictClick: (value: string) => void
    mapProps: MapProps
}

const MapView = ({
    current,
    label,
    copyLabel,
    onCopy,
    copied,
    onDistrictClick,
    mapProps,
}: MapViewProps) => (
    <section className='map-area'>
        <div className='map-card'>
            <div className='map-meta'>
                <strong>{current.label}</strong>
                <div className='map-actions'>
                    <span className='badge'>{label}</span>
                    <button
                        type='button'
                        className='icon-button'
                        onClick={onCopy}
                        aria-label='Copy component snippet'
                        title={copyLabel}
                    >
                        {copied ? <FiCheck aria-hidden='true' /> : <FiCopy aria-hidden='true' />}
                    </button>
                </div>
            </div>
            <div className='map-wrap'>
                <current.Map onClick={onDistrictClick} {...mapProps} />
            </div>
        </div>
    </section>
)

export default MapView
