# Interactive Map of Himachal Pradesh

This package generates an interactive SVG map of Himachal Pradesh. It allows users to highlight districts on hover and retrieve the value of the selected district.

![Preview](https://raw.githubusercontent.com/arav-ind/svgmaps-india/refs/heads/master/gifs/himachalpradesh.gif)

## Installation

Install the package via npm:

```bash
pnpm install svgmap-himachalpradesh
```

## District List

The following are the districts mapped with its ID.

```js
export const districtNames = {
    LAS: 'Lahaul and Spiti',
    CHA: 'Chamba',
    KAN: 'Kangra',
    KUL: 'Kullu',
    MAN: 'Mandi',
    KIN: 'Kinnaur',
    UNA: 'Una',
    SHI: 'Shimla',
    SOL: 'Solan',
    SIR: 'Sirmaur',
    HAM: 'Hamirpur',
    BIL: 'Bilaspur',
}
```

## Usage

```jsx
'use client'

import React, { useState } from 'react'
import HimachalpradeshMap, { districtNames } from 'svgmap-himachalpradesh'

const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <HimachalpradeshMap
                onClick={(value: string) => setSelectedValue(value)}
                size="600px"
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
