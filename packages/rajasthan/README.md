# Interactive Map of Rajasthan

This package generates an interactive SVG map of Rajasthan. It allows users to highlight districts on hover and retrieve the value of the selected district.

![Preview](https://raw.githubusercontent.com/arav-ind/svgmaps-india/refs/heads/master/gifs/rajasthan.gif)

## Installation

Install the package via npm:

```bash
pnpm install svgmap-rajasthan
```

## District List

The following are the districts mapped with its ID.

```js
export const districtNames = {
    CHU: 'Churu',
    JHU: 'Jhunjhunu',
    JAI: 'Jaisalmer',
    SIK: 'Sikar',
    ALW: 'Alwar',
    JA2: 'Jaipur',
    JOD: 'Jodhpur',
    BHA: 'Bharatpur',
    NAG: 'Nagaur',
    DAU: 'Dausa',
    KAR: 'Karauli',
    DHO: 'Dholpur',
    BAR: 'Barmer',
    SMA: 'Sawai Madhopur',
    TON: 'Tonk',
    PAL: 'Pali',
    BHI: 'Bhilwara',
    JAL: 'Jalore',
    BUN: 'Bundi',
    KOT: 'Kota',
    SIR: 'Sirohi',
    BA2: 'Baran',
    UDA: 'Udaipur',
    JHA: 'Jhalawar',
    DUN: 'Dungarpur',
    BAN: 'Banswara',
    AJM: 'Ajmer',
    RAJ: 'Rajsamand',
    CHI: 'Chittorgarh',
    GAN: 'Ganganagar',
    HAN: 'Hanumangarh',
    BIK: 'Bikaner',
    PRA: 'Pratapgarh',
}
```

## Usage

```jsx
'use client'

import React, { useState } from 'react'
import RajasthanMap, { districtNames } from 'svgmap-rajasthan'

const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <RajasthanMap
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
