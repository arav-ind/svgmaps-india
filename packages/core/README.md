# RenderSVG

This package is used to generate SVG maps with custom draw paths and district codes.

## Installation

```bash
pnpm install svgmap-core
```

## Usage

To generate an SVG map, provide the `drawPath` and `districtCodes` with the correct values for your specific use case.

### Example:

```js
export const drawPath = {
    KAN: `m 220.2085,92 10.17034,39.19302 z`, // Example path for district KAN
    WAY: `m 727.74019,764.8953 1`, // Example path for district WAY
}

export const districtCodes = [
    'KAN',
    'WAY', // List of district codes in the map
]
```

### React Component Example:

```jsx
import React from 'react';
import RenderSvg from 'svgmap-core';  // Import the map rendering component
import { MapPropType } from '../types/types';  // Import types
import { districtCodes, drawPath } from '../location';  // Load draw paths and district codes

const Map = ({
    className = 'svgmap',
    size,
    mapColor,
    strokeColor,
    strokeWidth,
    hoverColor,
    onClick,
}: MapPropType) => {
    return (
        <RenderSvg
            districtCodes={districtCodes}
            drawPath={drawPath}
            onClick={onClick}
            className={className}
            size={size}
            mapColor={mapColor}
            strokeColor={strokeColor}
            strokeWidth={strokeWidth}
            hoverColor={hoverColor}
            viewBox="0 0 1900 2486" // Define viewBox for the SVG (default size)
        />
    );
}

export default Map;
```

For more example checkout other packages in this repo.

## Contributing

Pull requests are welcome.
