# Interactive Map of Andhra Pradesh

This package generates an interactive SVG map of Andhra Pradesh. It allows users to highlight districts on hover and retrieve the value of the selected district.

![Preview](https://raw.githubusercontent.com/arav-ind/svgmaps-india/refs/heads/master/gifs/andhrapradesh.gif)

## Installation

Install the package via npm:

```bash
pnpm install svgmap-andhrapradesh
```

## District List

The following are the districts mapped with its ID.

```js
export const districtNames = {
    SRI: 'Srikakulam',
    VIZ: 'Vizianagaram',
    VIS: 'Visakhapatnam',
    EGA: 'East Godavari',
    WGE: 'West Godavari',
    KRI: 'Krishna',
    GUN: 'Guntur',
    KUR: 'Kurnool',
    PRA: 'Prakasam',
    YSR: 'YSR',
    SPS: 'Sri Potti Sriramulu Nellore',
    ANA: 'Anantapuramu',
    CHI: 'Chittoor',
    TIR: 'Tirupati',
    ANN: 'Annamayya',
    SSS: 'Sri Sathya Sai',
    BAP: 'Bapatla',
    PMA: 'Parvathipuram Manyam',
    ELU: 'Eluru',
    ASR: 'Alluri Sitharama Raju',
    KON: 'Konaseema',
    KAK: 'Kakinada',
    ANK: 'Anakapalli',
    NAN: 'Nandyal',
    NTR: 'NTR',
    PAL: 'Palnadu',
}
```

## Usage

```jsx
'use client'

import React, { useState } from 'react'
import AndhrapradeshMap, { districtNames } from 'svgmap-andhrapradesh'

const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : "None"}</h3>
            <AndhrapradeshMap
                onClick={(value: string) => setSelectedValue(value)}
                size="400px"
                mapColor="white"
                strokeColor="black"
                strokeWidth="2"
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
