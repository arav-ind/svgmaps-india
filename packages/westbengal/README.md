# Interactive Map of Westbengal

This package generates an interactive SVG map of Westbengal. It allows users to highlight districts on hover and retrieve the value of the selected district.

![Preview](https://raw.githubusercontent.com/arav-ind/svgmaps-india/refs/heads/master/gifs/westbengal.gif)

## Installation

Install the package via npm:

```bash
pnpm install svgmap-westbengal
```

## District List

The following are the districts mapped with its ID.

```js
export const districtNames = {
    SPO: 'South 24 Parganas',
    PMA: 'Paschim Medinipur',
    PMU: 'Purba Medinipur',
    JHA: 'Jhargram',
    DAR: 'Darjeeling',
    JAL: 'Jalpaiguri',
    DDA: 'Dakshin Dinajpur',
    MAL: 'Malda',
    MUR: 'Murshidabad',
    BIR: 'Birbhum',
    NAD: 'Nadia',
    PBU: 'Purba Bardhaman',
    PUR: 'Purulia',
    BAN: 'Bankura',
    NPO: 'North 24 Parganas',
    HOO: 'Hooghly',
    HOW: 'Howrah',
    KOL: 'Kolkata',
    ALI: 'Alipurduar',
    PBA: 'Paschim Bardhaman',
    KAL: 'Kalimpong',
    CBO: 'Cooch Behar',
    UDT: 'Uttar Dinajpur',
}
```

## Usage

```jsx
'use client'

import React, { useState } from 'react'
import WestbengalMap, { districtNames } from 'svgmap-westbengal'

const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <WestbengalMap
                onClick={(value: string) => setSelectedValue(value)}
                size="300px"
                mapColor="white"
                strokeColor="black"
                strokeWidth="1"
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
