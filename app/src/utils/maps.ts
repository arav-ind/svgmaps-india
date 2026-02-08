import type React from 'react'
import {
    AndhrapradeshMap,
    ArunachalpradeshMap,
    AssamMap,
    BiharMap,
    ChhattisgarhMap,
    GoaMap,
    GujaratMap,
    HaryanaMap,
    HimachalpradeshMap,
    JharkhandMap,
    KarnatakaMap,
    KashmirMap,
    KeralaMap,
    LadakhMap,
    MadhyapradeshMap,
    MaharashtraMap,
    ManipurMap,
    MeghalayaMap,
    MizoramMap,
    NagalandMap,
    OdishaMap,
    PunjabMap,
    RajasthanMap,
    SikkimMap,
    TamilnaduMap,
    TelanganaMap,
    TripuraMap,
    UttarakhandMap,
    UttarpradeshMap,
    WestbengalMap,
    AndhrapradeshDistrictNames,
    ArunachalpradeshDistrictNames,
    AssamDistrictNames,
    BiharDistrictNames,
    ChhattisgarhDistrictNames,
    GoaDistrictNames,
    GujaratDistrictNames,
    HaryanaDistrictNames,
    HimachalpradeshDistrictNames,
    JharkhandDistrictNames,
    KarnatakaDistrictNames,
    KashmirDistrictNames,
    KeralaDistrictNames,
    LadakhDistrictNames,
    MadhyapradeshDistrictNames,
    MaharashtraDistrictNames,
    ManipurDistrictNames,
    MeghalayaDistrictNames,
    MizoramDistrictNames,
    NagalandDistrictNames,
    OdishaDistrictNames,
    PunjabDistrictNames,
    RajasthanDistrictNames,
    SikkimDistrictNames,
    TamilnaduDistrictNames,
    TelanganaDistrictNames,
    TripuraDistrictNames,
    UttarakhandDistrictNames,
    UttarpradeshDistrictNames,
    WestbengalDistrictNames,
} from 'svgmap-india'

export type MapProps = {
    className?: string
    size?: string
    mapColor?: string
    strokeColor?: string
    strokeWidth?: string
    hoverColor?: string
}

export type MapItem = {
    id: string
    label: string
    Map: React.ComponentType<{ onClick: (value: string) => void } & MapProps>
    districtNames: Record<string, string>
}

export const MAPS: MapItem[] = [
    {
        id: 'andhrapradesh',
        label: 'Andhrapradesh',
        Map: AndhrapradeshMap,
        districtNames: AndhrapradeshDistrictNames,
    },
    {
        id: 'arunachalpradesh',
        label: 'Arunachalpradesh',
        Map: ArunachalpradeshMap,
        districtNames: ArunachalpradeshDistrictNames,
    },
    { id: 'assam', label: 'Assam', Map: AssamMap, districtNames: AssamDistrictNames },
    { id: 'bihar', label: 'Bihar', Map: BiharMap, districtNames: BiharDistrictNames },
    {
        id: 'chhattisgarh',
        label: 'Chhattisgarh',
        Map: ChhattisgarhMap,
        districtNames: ChhattisgarhDistrictNames,
    },
    { id: 'goa', label: 'Goa', Map: GoaMap, districtNames: GoaDistrictNames },
    { id: 'gujarat', label: 'Gujarat', Map: GujaratMap, districtNames: GujaratDistrictNames },
    { id: 'haryana', label: 'Haryana', Map: HaryanaMap, districtNames: HaryanaDistrictNames },
    {
        id: 'himachalpradesh',
        label: 'Himachalpradesh',
        Map: HimachalpradeshMap,
        districtNames: HimachalpradeshDistrictNames,
    },
    {
        id: 'jharkhand',
        label: 'Jharkhand',
        Map: JharkhandMap,
        districtNames: JharkhandDistrictNames,
    },
    {
        id: 'karnataka',
        label: 'Karnataka',
        Map: KarnatakaMap,
        districtNames: KarnatakaDistrictNames,
    },
    { id: 'kashmir', label: 'Kashmir', Map: KashmirMap, districtNames: KashmirDistrictNames },
    { id: 'kerala', label: 'Kerala', Map: KeralaMap, districtNames: KeralaDistrictNames },
    { id: 'ladakh', label: 'Ladakh', Map: LadakhMap, districtNames: LadakhDistrictNames },
    {
        id: 'madhyapradesh',
        label: 'Madhyapradesh',
        Map: MadhyapradeshMap,
        districtNames: MadhyapradeshDistrictNames,
    },
    {
        id: 'maharashtra',
        label: 'Maharashtra',
        Map: MaharashtraMap,
        districtNames: MaharashtraDistrictNames,
    },
    { id: 'manipur', label: 'Manipur', Map: ManipurMap, districtNames: ManipurDistrictNames },
    {
        id: 'meghalaya',
        label: 'Meghalaya',
        Map: MeghalayaMap,
        districtNames: MeghalayaDistrictNames,
    },
    { id: 'mizoram', label: 'Mizoram', Map: MizoramMap, districtNames: MizoramDistrictNames },
    { id: 'nagaland', label: 'Nagaland', Map: NagalandMap, districtNames: NagalandDistrictNames },
    { id: 'odisha', label: 'Odisha', Map: OdishaMap, districtNames: OdishaDistrictNames },
    { id: 'punjab', label: 'Punjab', Map: PunjabMap, districtNames: PunjabDistrictNames },
    {
        id: 'rajasthan',
        label: 'Rajasthan',
        Map: RajasthanMap,
        districtNames: RajasthanDistrictNames,
    },
    { id: 'sikkim', label: 'Sikkim', Map: SikkimMap, districtNames: SikkimDistrictNames },
    {
        id: 'tamilnadu',
        label: 'Tamilnadu',
        Map: TamilnaduMap,
        districtNames: TamilnaduDistrictNames,
    },
    {
        id: 'telangana',
        label: 'Telangana',
        Map: TelanganaMap,
        districtNames: TelanganaDistrictNames,
    },
    { id: 'tripura', label: 'Tripura', Map: TripuraMap, districtNames: TripuraDistrictNames },
    {
        id: 'uttarakhand',
        label: 'Uttarakhand',
        Map: UttarakhandMap,
        districtNames: UttarakhandDistrictNames,
    },
    {
        id: 'uttarpradesh',
        label: 'Uttarpradesh',
        Map: UttarpradeshMap,
        districtNames: UttarpradeshDistrictNames,
    },
    {
        id: 'westbengal',
        label: 'Westbengal',
        Map: WestbengalMap,
        districtNames: WestbengalDistrictNames,
    },
]

export const DARK_DEFAULTS = {
    size: '500px',
    mapColor: '#1f2530',
    strokeColor: '#e9edf3',
    strokeWidth: '1',
    hoverColor: '#e6eaef',
}

export const LIGHT_DEFAULTS = {
    size: '500px',
    mapColor: '#ffffff',
    strokeColor: '#111111',
    strokeWidth: '1',
    hoverColor: '#3b3f46',
}
