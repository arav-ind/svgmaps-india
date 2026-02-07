# Interactive Map of Odisha

This package generates an interactive SVG map of Odisha. It allows users to highlight districts on hover and retrieve the value of the selected district.

![Preview](https://raw.githubusercontent.com/arav-ind/svgmaps-india/refs/heads/master/gifs/odisha.gif)

## Installation

Install the package via npm:

```bash
pnpm install svgmap-odisha
```

## District List

The following are the districts mapped with its ID.

```js
export const districtNames = {
    BHA: 'Bhadrak',
    DHE: 'Dhenkanal',
    JAJ: 'Jajpur',
    SUB: 'Subarnapur',
    NUA: 'Nuapada',
    BAL: 'Balangir',
    BOU: 'Boudh',
    CUT: 'Cuttack',
    KAN: 'Kandhamal',
    NAY: 'Nayagarh',
    KHO: 'Khordha',
    KAL: 'Kalahandi',
    JAG: 'Jagatsinghpur',
    PUR: 'Puri',
    NAB: 'Nabarangapur',
    RAY: 'Rayagada',
    KOR: 'Koraput',
    MAL: 'Malkangiri',
    ANG: 'Angul',
    KEN: 'Kendrapara',
    GAN: 'Ganjam',
    GAJ: 'Gajapati',
    MAY: 'Mayurbhanj',
    SUN: 'Sundargarh',
    KE2: 'Kendujhar',
    BA2: 'Balasore',
    JHA: 'Jharsuguda',
    BAR: 'Bargarh',
    DEO: 'Deogarh',
    SAM: 'Sambalpur',
}
```

## Usage

```jsx
'use client'

import React, { useState } from 'react'
import OdishaMap, { districtNames } from 'svgmap-odisha'

const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <OdishaMap
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
