# SVGMaps India (All States)

This package re-exports all state map components and their `districtNames` as named exports so you can import any state from a single package.

## Installation

```bash
pnpm install svgmap-india
```

## Usage

```jsx
'use client'

import React, { useState } from 'react'
import { TamilnaduMap, TamilnaduDistrictNames } from 'svgmap-india'

const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>
                {selectedValue
                    ? `${selectedValue}: ${TamilnaduDistrictNames[selectedValue]}`
                    : 'None'}
            </h3>
            <TamilnaduMap onClick={(value: string) => setSelectedValue(value)} />
        </div>
    )
}

export default App
```
