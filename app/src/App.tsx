import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import MapControls from './components/MapControls'
import MapView from './components/MapView'
import { DARK_DEFAULTS, LIGHT_DEFAULTS, MAPS } from './utils/maps'

const App = () => {
    const [darkMode, setDarkMode] = useState(true)
    const [selectedId, setSelectedId] = useState(MAPS[0].id)
    const [size, setSize] = useState(DARK_DEFAULTS.size)
    const [mapColor, setMapColor] = useState(DARK_DEFAULTS.mapColor)
    const [strokeColor, setStrokeColor] = useState(DARK_DEFAULTS.strokeColor)
    const [strokeWidth, setStrokeWidth] = useState(DARK_DEFAULTS.strokeWidth)
    const [hoverColor, setHoverColor] = useState(DARK_DEFAULTS.hoverColor)
    const [clicked, setClicked] = useState<string | null>(null)

    const current = useMemo(() => MAPS.find((map) => map.id === selectedId)!, [selectedId])
    const label = clicked ? `${clicked}: ${current.districtNames[clicked] ?? 'Unknown'}` : 'None'

    useEffect(() => {
        const defaults = darkMode ? DARK_DEFAULTS : LIGHT_DEFAULTS
        setSize(defaults.size)
        setMapColor(defaults.mapColor)
        setStrokeColor(defaults.strokeColor)
        setStrokeWidth(defaults.strokeWidth)
        setHoverColor(defaults.hoverColor)
    }, [darkMode])

    return (
        <div className={darkMode ? 'theme-dark' : 'theme-light'}>
            <Header darkMode={darkMode} onToggleTheme={() => setDarkMode((prev) => !prev)} />

            <main className='main'>
                <MapControls
                    maps={MAPS}
                    selectedId={selectedId}
                    onSelect={(id) => {
                        setSelectedId(id)
                        setClicked(null)
                    }}
                    size={size}
                    mapColor={mapColor}
                    strokeColor={strokeColor}
                    strokeWidth={strokeWidth}
                    hoverColor={hoverColor}
                    onSizeChange={setSize}
                    onMapColorChange={setMapColor}
                    onStrokeColorChange={setStrokeColor}
                    onStrokeWidthChange={setStrokeWidth}
                    onHoverColorChange={setHoverColor}
                />

                <MapView
                    current={current}
                    label={label}
                    onDistrictClick={setClicked}
                    mapProps={{
                        size,
                        mapColor,
                        strokeColor,
                        strokeWidth,
                        hoverColor,
                    }}
                />
            </main>
        </div>
    )
}

export default App
