# Interactive Map of Chhattisgarh

This package generates an interactive SVG map of Chhattisgarh. It allows users to highlight districts on hover and retrieve the value of the selected district.

![Preview](https://raw.githubusercontent.com/arav-ind/svgmaps-india/refs/heads/master/gifs/chhattisgarh.gif)

## Installation

Install the package via npm:

```bash
pnpm install svgmap-chhattisgarh
```

## District List

The following are the districts mapped with its ID.

```js
export const districtNames = {
    MAH: 'Mahasamund',
    UBK: 'Uttar Bastar Kanker',
    NAR: 'Narayanpur',
    DBD: 'Dakshin Bastar Dantewada',
    BAS: 'Bastar',
    KON: 'Kondagaon',
    GAR: 'Gariaband',
    RAI: 'Raipur',
    DUR: 'Durg',
    DHA: 'Dhamtari',
    BAL: 'Balod',
    KAB: 'Kabeerdham',
    JCH: 'Janjgir Champa',
    BAM: 'Bametara',
    RAJ: 'Rajnandgaon',
    BBA: 'Baloda Bazar',
    MUN: 'Mungeli',
    BIJ: 'Bijapur',
    RAIG: 'Raigarh',
    BIL: 'Bilaspur',
    SUK: 'Sukma',
    KOR: 'Koriya',
    JAS: 'Jashpur',
    KORB: 'Korba',
    SUR: 'Surajpur',
    SURG: 'Surguja',
    BALR: 'Balrampur',
}
```

## Usage

```jsx
'use client'

import React, { useState } from 'react'
import ChhattisgarhMap, { districtNames } from 'svgmap-chhattisgarh'

const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <ChhattisgarhMap
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
