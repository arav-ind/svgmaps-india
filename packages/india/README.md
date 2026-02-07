# SVGMaps India (All States)

This package re-exports all state map components as named exports so you can import any state from a single package.

## Installation

```bash
pnpm install svgmap-india
```

## Usage

```jsx
'use client'

import React, { useState } from 'react'
import { TamilnaduMap, KeralaMap } from 'svgmap-india'

const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    return (
        <div>
            <h3>{selectedValue ?? 'None'}</h3>
            <TamilnaduMap onClick={(value: string) => setSelectedValue(value)} />
            <KeralaMap onClick={(value: string) => setSelectedValue(value)} />
        </div>
    )
}

export default App
```
