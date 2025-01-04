# Interactive Map of Tamilnadu

This package generates an interactive SVG map of Tamilnadu. It allows users to highlight districts on hover and retrieve the value of the selected district.

![Preview](https://raw.githubusercontent.com/arav-ind/svgmaps-india/refs/heads/master/gifs/tamilnadu.gif)

## Installation

Install the package via npm:

```bash
pnpm install svgmap-tamilnadu
```

## District List

The following are the districts mapped with its ID.

```js

export const districtNames = {
  ARI: 'Ariyalur',
  CHE: 'Chennai',
  CHN: 'Chengalpattu',
  CBE: 'Coimbatore',
  CUD: 'Cuddalore',
  DHAM: 'Dharmapuri',
  DIN: 'Dindigul',
  ERO: 'Erode',
  KAN: 'Kanchipuram',
  KAL: 'Kallakurichi',
  KKN: 'Kanyakumari',
  KKL: 'Karaikal',
  KAR: 'Karur',
  KRI: 'Krishnagiri',
  MAD: 'Madurai',
  MAY: 'Mayiladuthurai',
  NAG: 'Nagapattinam',
  NAM: 'Namakkal',
  NIL: 'Nilgiris',
  PER: 'Perambalur',
  PUD: 'Pudukkottai',
  RAM: 'Ramanathapuram',
  RAN: 'Ranipet',
  SAL: 'Salem',
  SIV: 'Sivagangai',
  TEN: 'Tenkasi',
  TAN: 'Tanjavur',
  THE: 'Theni',
  THI: 'Thiruvarur',
  TPR: 'Tiruppur',
  THO: 'Thoothukudi',
  TRI: 'Tiruchirappalli',
  TNE: 'Tirunelveli',
  TIR: 'Tirupattur',
  TVL: 'Tiruvallur',
  TVM: 'Tiruvannamalai',
  VEL: 'Vellore',
  VIL: 'Viluppuram',
  VIR: 'Virudhunagar'
}

```

## Usage

```jsx

'use client'

import React, { useState } from 'react'
import TamilnaduMap, { districtNames } from 'svgmap-tamilnadu'

const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3 style={{ position: 'absolute' }}>
                {
                    selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'
                }
            </h3>
            <TamilnaduMap
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

| Props       | Description                                             | Requirement | Default Value |
|-------------|---------------------------------------------------------|-------------|---------------|
| onClick     | Callback function to get the selected state value.      | Required    | NA            |
| className   | Custom classname for the map component.                 | Optional    | "svgmap"      |
| size        | Width of the map.                                       | Optional    | "inherit"     |
| mapColor    | Color of the map.                                       | Optional    | "#ffffff"     |
| strokeColor | Border color of each state.                             | Optional    | "#000000"     |
| strokeWidth | Border width of each state.                             | Optional    | "0.5"         |
| hoverColor  | Color of the state while hovering on it.                | Optional    | "#303030"     |


## Contributing

Pull requests are welcome.
