# Interactive Map of Karnataka

This package generates an interactive SVG map of Karnataka. It allows users to highlight districts on hover and retrieve the value of the selected district.

![Preview](https://raw.githubusercontent.com/arav-ind/svgmaps-india/refs/heads/master/gifs/karnataka.gif)

## Installation

Install the package via npm:

```bash
pnpm install svgmap-karnataka
```

## District List

The following are the districts mapped with its ID.

```js
export const districtNames = {
    BID: 'Bidar',
    GUL: 'Gulbarga',
    YAD: 'Yadgir',
    BIJ: 'Bijapur',
    BEL: 'Belgavi',
    UTT: 'Uttara Kannada',
    SHI: 'Shimoga',
    UDU: 'Udupi',
    DAK: 'Dakshina Kannada',
    KOD: 'Kodagu',
    MYS: 'Mysuru',
    CHA: 'Chamarajanagar',
    MAN: 'Mandya',
    RAM: 'Ramanagara',
    BUR: 'Bengaluru Urban',
    BRU: 'Bengaluru Rural',
    KOL: 'Kolar',
    CHI: 'Chikkaballapura',
    TUM: 'Tumkuru',
    CHD: 'Chitradurga',
    DAV: 'Davanagere',
    VIJ: 'Vijayanagara',
    BAL: 'Ballari',
    RAI: 'Raichur',
    KOP: 'Koppal',
    GAD: 'Gadag',
    DHR: 'Dharwad',
    BAG: 'Bagalkot',
    HAS: 'Hassan',
    CHK: 'Chikmagalur',
    HAV: 'Haveri',
}
```

## Usage

```jsx

'use client'

import React, { useState } from 'react'
import KarnatakaMap, { districtNames } from 'svgmap-karnataka'

export const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3 style={{ position: 'absolute' }}>
                {
                    selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'
                }
            </h3>
            <KarnatakaMap
                onClick={(value: string) => setSelectedValue(value)}
                size="400px"
                mapColor="white"
                strokeColor="black"
                strokeWidth="3"
                hoverColor="rgb(80 80 80)"
            />
        </div>
    )
}

export default App

```

## Props Available

| Props       | Description                                        | Requirement | Default Value |
| ----------- | -------------------------------------------------- | ----------- | ------------- |
| onClick     | Callback function to get the selected state value. | Required    | NA            |
| className   | Custom classname for the map component.            | Optional    | "svgmap"      |
| size        | Width of the map.                                  | Optional    | "inherit"     |
| mapColor    | Color of the map.                                  | Optional    | "#ffffff"     |
| strokeColor | Border color of each state.                        | Optional    | "#000000"     |
| strokeWidth | Border width of each state.                        | Optional    | "0.5"         |
| hoverColor  | Color of the state while hovering on it.           | Optional    | "#303030"     |

## Contributing

Pull requests are welcome.
