# Interactive Map of Maharashtra

This package generates an interactive SVG map of Maharashtra. It allows users to highlight districts on hover and retrieve the value of the selected district.

![Preview](https://raw.githubusercontent.com/arav-ind/svgmaps-india/refs/heads/master/gifs/maharashtra.gif)

## Installation

Install the package via npm:

```bash
pnpm install svgmap-maharashtra
```

## District List

The following are the districts mapped with its ID.

```js
export const districtNames = {
    GAD: 'Gadchiroli',
    GON: 'Gondia',
    CHA: 'Chandrapur',
    BHA: 'Bhandara',
    NAG: 'Nagpur',
    WAR: 'Wardha',
    YAV: 'Yavatmal',
    AMA: 'Amaravati',
    AKO: 'Akola',
    WAS: 'Washim',
    NAN: 'Nanded',
    HIN: 'Hingoli',
    PAR: 'Parbhani',
    BUL: 'Buldhana',
    JAL: 'Jalgaon',
    DHU: 'Dhule',
    NDB: 'Nandurbar',
    NAS: 'Nashik',
    AHM: 'Ahmadnagar',
    JLN: 'Jalna',
    AUR: 'Aurangabad',
    LAT: 'Latur',
    USM: 'Usmanabad',
    BEE: 'Beed',
    SOL: 'Solapur',
    SAN: 'Sangli',
    KOL: 'Kolhapur',
    SAT: 'Satara',
    PUN: 'Pune',
    PAL: 'Palaghar',
    THA: 'Thane',
    MUM: 'Mumbai',
    RAI: 'Raigad',
    RAT: 'Ratnagiri',
    SIN: 'Sindhudurg',
}
```

## Usage

```jsx

'use client'

import React, { useState } from 'react'
import MaharashtraMap, { districtNames } from 'svgmap-maharashtra'

const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3 style={{ position: 'absolute' }}>
                {
                    selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'
                }
            </h3>
            <MaharashtraMap
                onClick={(value: string) => setSelectedValue(value)}
                size='600px'
                mapColor='white'
                strokeColor='black'
                strokeWidth='3'
                hoverColor='rgb(80 80 80)'
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
