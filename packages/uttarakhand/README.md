# Interactive Map of Uttarakhand

This package generates an interactive SVG map of Uttarakhand. It allows users to highlight districts on hover and retrieve the value of the selected district.

![Preview](https://raw.githubusercontent.com/arav-ind/svgmaps-india/refs/heads/master/gifs/uttarakhand.gif)

## Installation

Install the package via npm:

```bash
pnpm install svgmap-uttarakhand
```

## District List

The following are the districts mapped with its ID.

```js
export const districtNames = {
    UTT: 'Uttarkashi',
    CHA: 'Chamoli',
    DEH: 'Dehradun',
    TGE: 'Tehri Garhwal',
    RUD: 'Rudraprayag',
    PIT: 'Pithoragarh',
    BAG: 'Bageshwar',
    HAR: 'Haridwar',
    PGA: 'Pauri Garhwal',
    ALM: 'Almora',
    NAI: 'Nainital',
    CH2: 'Champawat',
    USN: 'Udham Singh Nagar',
}
```

## Usage

```jsx
'use client'

import React, { useState } from 'react'
import UttarakhandMap, { districtNames } from 'svgmap-uttarakhand'

const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <UttarakhandMap
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
