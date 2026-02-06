# Interactive Map of Bihar

This package generates an interactive SVG map of Bihar. It allows users to highlight districts on hover and retrieve the value of the selected district.

![Preview](https://raw.githubusercontent.com/arav-ind/svgmaps-india/refs/heads/master/gifs/bihar.gif)

## Installation

Install the package via npm:

```bash
pnpm install svgmap-bihar
```

## District List

The following are the districts mapped with its ID.

```js
export const districtNames = {
    WCH: 'West Champaran',
    ECH: 'East Champaran',
    SIT: 'Sitamarhi',
    SHE: 'Sheohar',
    GOP: 'Gopalganj',
    SAM: 'Samastipur',
    KAT: 'Katihar',
    KHA: 'Khagaria',
    BHO: 'Bhojpur',
    BUX: 'Buxar',
    DAR: 'Darbhanga',
    SAH: 'Saharsa',
    KAI: 'Kaimur',
    ROH: 'Rohtas',
    JAM: 'Jamui',
    BAN: 'Banka',
    NAW: 'Nawada',
    GAY: 'Gaya',
    MUN: 'Munger',
    VAI: 'Vaishali',
    BEG: 'Begusarai',
    BHA: 'Bhagalpur',
    LAK: 'Lakhisarai',
    SHEI: 'Sheikhpura',
    ARW: 'Arwal',
    JEH: 'Jehanabad',
    NAL: 'Nalanda',
    PAT: 'Patna',
    SAR: 'Saran',
    SIW: 'Siwan',
    MUZ: 'Muzaffarpur',
    MAD: 'Madhepura',
    ARA: 'Araria',
    SUP: 'Supaul',
    MADH: 'Madhubani',
    PUR: 'Purnia',
    KIS: 'Kishanganj',
    AUR: 'Aurangabad',
}
```

## Usage

```jsx
'use client'

import React, { useState } from 'react'
import BiharMap, { districtNames } from 'svgmap-bihar'

const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <BiharMap
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
