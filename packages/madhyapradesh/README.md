# Interactive Map of Madhya Pradesh

This package generates an interactive SVG map of Madhya Pradesh. It allows users to highlight districts on hover and retrieve the value of the selected district.

![Preview](https://raw.githubusercontent.com/arav-ind/svgmaps-india/refs/heads/master/gifs/madhyapradesh.gif)

## Installation

Install the package via npm:

```bash
pnpm install svgmap-madhyapradesh
```

## District List

The following are the districts mapped with its ID.

```js
export const districtNames = {
    BUR: 'Burhanpur',
    SEO: 'Seoni',
    ALI: 'Alirajpur',
    CHH: 'Chhindwara',
    HAR: 'Harda',
    KHA: 'Khargone',
    KHAN: 'Khandwa',
    BAL: 'Balaghat',
    BAR: 'Barwani',
    BET: 'Betul',
    MOR: 'Morena',
    BHI: 'Bhind',
    GWA: 'Gwalior',
    SHE: 'Sheopur',
    SHI: 'Shivpuri',
    TIK: 'Tikamgarh',
    NEE: 'Neemuch',
    REW: 'Rewa',
    SAT: 'Satna',
    GUN: 'Guna',
    ASH: 'Ashoknagar',
    MAN: 'Mandsaur',
    SIN: 'Singrauli',
    SID: 'Sidhi',
    SAG: 'Sagar',
    DAM: 'Damoh',
    SHA: 'Shajapur',
    VID: 'Vidisha',
    RAJ: 'Rajgarh',
    SHAH: 'Shahdol',
    KAT: 'Katni',
    UMA: 'Umaria',
    RAT: 'Ratlam',
    BHO: 'Bhopal',
    UJJ: 'Ujjain',
    RAI: 'Raisen',
    SEH: 'Sehore',
    JAB: 'Jabalpur',
    DEW: 'Dewas',
    ANU: 'Anuppur',
    JHA: 'Jhabua',
    DIN: 'Dindori',
    NAR: 'Narsinghpur',
    DHA: 'Dhar',
    IND: 'Indore',
    MAND: 'Mandla',
    HOS: 'Hoshangabad',
    AMA: 'Agar Malwa',
    DAT: 'Datia',
    CHHA: 'Chhatarpur',
    PAN: 'Panna',
    NIW: 'Niwari',
}
```

## Usage

```jsx
'use client'

import React, { useState } from 'react'
import MadhyapradeshMap, { districtNames } from 'svgmap-madhyapradesh'

const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <MadhyapradeshMap
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
