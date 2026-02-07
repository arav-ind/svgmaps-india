# Interactive Map of Uttarpradesh

This package generates an interactive SVG map of Uttarpradesh. It allows users to highlight districts on hover and retrieve the value of the selected district.

![Preview](https://raw.githubusercontent.com/arav-ind/svgmaps-india/refs/heads/master/gifs/uttarpradesh.gif)

## Installation

Install the package via npm:

```bash
pnpm install svgmap-uttarpradesh
```

## District List

The following are the districts mapped with its ID.

```js
export const districtNames = {
    AMR: 'Amroha',
    HAP: 'Hapur',
    BAR: 'Bareilly',
    PIL: 'Pilibhit',
    BUL: 'Bulandshahr',
    GBN: 'Gautam Buddha Nagar',
    LKA: 'Lakhimpur Kheri',
    BUD: 'Budaun',
    BAH: 'Bahraich',
    SHA: 'Shahjahanpur',
    ALI: 'Aligarh',
    KAS: 'Kasganj',
    MAT: 'Mathura',
    SHR: 'Shrawasti',
    SIT: 'Sitapur',
    HAT: 'Hathras',
    ETA: 'Etah',
    HAR: 'Hardoi',
    FAR: 'Farrukhabad',
    FIR: 'Firozabad',
    SID: 'Siddharthnagar',
    MAI: 'Mainpuri',
    MAH: 'Maharajganj',
    AGR: 'Agra',
    GON: 'Gonda',
    BA2: 'Barabanki',
    KUS: 'Kushinagar',
    KAN: 'Kannauj',
    LUC: 'Lucknow',
    BAS: 'Basti',
    GOR: 'Gorakhpur',
    SKN: 'Sant Kabir Nagar',
    UNN: 'Unnao',
    ET2: 'Etawah',
    KNA: 'Kanpur Nagar',
    AUR: 'Auraiya',
    AYO: 'Ayodhya',
    KDA: 'Kanpur Dehat',
    DEO: 'Deoria',
    SUL: 'Sultanpur',
    ANM: 'Ambedkar Nagar',
    RBA: 'Rae Bareli',
    JAL: 'Jalaun',
    AZA: 'Azamgarh',
    MAU: 'Mau',
    FAT: 'Fatehpur',
    BAL: 'Ballia',
    JAU: 'Jaunpur',
    JHA: 'Jhansi',
    BAN: 'Banda',
    GHA: 'Ghazipur',
    KAU: 'Kaushambi',
    PRA: 'Prayagraj',
    VAR: 'Varanasi',
    CHI: 'Chitrakoot',
    CHA: 'Chandauli',
    BHA: 'Bhadohi',
    MIR: 'Mirzapur',
    LAL: 'Lalitpur',
    SON: 'Sonbhadra',
    AME: 'Amethi',
    GH2: 'Ghaziabad',
    SAM: 'Sambhal',
    MA2: 'Mahoba',
    SAH: 'Saharanpur',
    BIJ: 'Bijnor',
    MUZ: 'Muzaffarnagar',
    BAG: 'Baghpat',
    MEE: 'Meerut',
    MOR: 'Moradabad',
    RAM: 'Rampur',
    SH2: 'Shamli',
    BA3: 'Balrampur',
    HAM: 'Hamirpur',
    PR2: 'Pratapgarh',
}
```

## Usage

```jsx
'use client'

import React, { useState } from 'react'
import UttarpradeshMap, { districtNames } from 'svgmap-uttarpradesh'

const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ? `${selectedValue}: ${districtNames[selectedValue]}` : 'None'}</h3>
            <UttarpradeshMap
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
