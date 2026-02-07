# Interactive Map of Punjab

This package generates an interactive SVG map of Punjab. It allows users to highlight districts on hover and retrieve the value of the selected district.

![Preview](https://raw.githubusercontent.com/arav-ind/svgmaps-india/refs/heads/master/gifs/punjab.gif)

## Installation

Install the package via npm:

```bash
pnpm install svgmap-punjab
```

## District List

The following are the districts mapped with its ID.

```js
export const districtNames = {
    GUR: 'Gurdaspur',
    HOS: 'Hoshiarpur',
    AMR: 'Amritsar',
    JAL: 'Jalandhar',
    TTA: 'Tarn Taran',
    RUP: 'Rupnagar',
    SBS: 'Shahid Bhagat Singh Nagar',
    FAZ: 'Fazilka',
    MOG: 'Moga',
    LUD: 'Ludhiana',
    SAS: 'S.A.S. Nagar',
    FAR: 'Faridkot',
    FSA: 'Fatehgarh Sahib',
    SMS: 'Sri Muktsar Sahib',
    SAN: 'Sangrur',
    BAR: 'Barnala',
    BAT: 'Bathinda',
    PAT: 'Patiala',
    MAN: 'Mansa',
    FER: 'Ferozepur',
    PA2: 'Pathankot',
    KAP: 'Kapurthala',
}
```

## Usage

```jsx
'use client'

import React, { useState } from 'react'
import PunjabMap, { districtNames } from 'svgmap-punjab'

const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <PunjabMap
                onClick={(value: string) => setSelectedValue(value)}
                size="400px"
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
