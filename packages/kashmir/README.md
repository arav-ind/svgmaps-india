# Interactive Map of Kashmir

This package generates an interactive SVG map of Kashmir. It allows users to highlight districts on hover and retrieve the value of the selected district.

![Preview](https://raw.githubusercontent.com/arav-ind/svgmaps-india/refs/heads/master/gifs/kashmir.gif)

## Installation

Install the package via npm:

```bash
pnpm install svgmap-kashmir
```

## District List

The following are the districts mapped with its ID.

```js
export const districtNames = {
    KUP: 'Kupwara',
    BAN: 'Bandipora',
    BAR: 'Baramulla',
    GAN: 'Ganderbal',
    ANA: 'Anantnag',
    KIS: 'Kishtwar',
    SRI: 'Srinagar',
    BUD: 'Budgam',
    PUL: 'Pulwama',
    PUN: 'Punch',
    SHO: 'Shopiyan',
    KUL: 'Kulgam',
    RAJ: 'Rajouri',
    RAM: 'Ramban',
    REA: 'Reasi',
    DOD: 'Doda',
    JAM: 'Jammu',
    KAT: 'Kathua',
    UDH: 'Udhampur',
    SAM: 'Samba',
    MUZ: 'Muzaffarabad',
    MIR: 'Mirpur',
}
```

## Usage

```jsx
'use client'

import React, { useState } from 'react'
import KashmirMap, { districtNames } from 'svgmap-kashmir'

const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <KashmirMap
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
