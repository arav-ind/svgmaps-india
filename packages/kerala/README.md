# Interactive Map of Kerala

This package generates an interactive SVG map of Kerala. It allows users to highlight districts on hover and retrieve the value of the selected district.

![Preview](https://raw.githubusercontent.com/arav-ind/svgmaps-india/refs/heads/master/gifs/kerala.gif)

## Installation

Install the package via npm:

```bash
pnpm install svgmap-kerala
```

## District List

The following are the districts mapped with its ID.

```js

export const districtNames = {
    THI: 'Thiruvananthapuram',
    KOL: 'Kollam',
    PAT: 'Pathanamthitta',
    ALA: 'Alappuzha',
    KOT: 'Kottayam',
    IDU: 'Idukki',
    ERN: 'Ernakulam',
    THR: 'Thrissur',
    PAL: 'Palakkad',
    MAL: 'Malappuram',
    KOZ: 'Kozhikode',
    WAY: 'Wayanad',
    KAN: 'Kannur',
    KAS: 'Kasargod'
}

```

## Usage

```jsx
'use client'

import React, { useState } from 'react'
import KeralaMap, { districtNames } from 'svgmap-kerala'

export const Default = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <KeralaMap
                onClick={(value: string) => setSelectedValue(value)}
                size="400px"
                mapColor="white"
                strokeColor="black"
                strokeWidth="4"
                hoverColor="rgb(80 80 80)"
            />
        </div>
    )
}

```

## Props Available

| Props       | Description                                             | Requirement | Default Value |
|-------------|---------------------------------------------------------|-------------|---------------|
| onClick     | Callback function to get the selected state value.      | Required    | NA            |
| className   | Custom classname for the map component.                 | Optional    | "svgmap"      |
| size        | Width of the map.                                       | Optional    | "inherit"     |
| mapColor    | Color of the map.                                       | Optional    | "#ffffff"     |
| strokeColor | Border color of each state.                             | Optional    | "#000000"     |
| strokeWidth | Border width of each state.                             | Optional    | "0.5"         |
| hoverColor  | Color of the state while hovering on it.                | Optional    | "#303030"     |


## Contributing

Pull requests are welcome.
