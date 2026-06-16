import UnitConverterTool from '../../components/UnitConverterTool'
import { Gauge } from 'lucide-react'

// Base unit: square meter (m²)
const units = [
  { id: 'mm2', label: 'Sq. Millimeter', symbol: 'mm²', toBase: 1e-6 },
  { id: 'cm2', label: 'Sq. Centimeter', symbol: 'cm²', toBase: 1e-4 },
  { id: 'dm2', label: 'Sq. Decimeter',  symbol: 'dm²', toBase: 0.01 },
  { id: 'm2',  label: 'Sq. Meter',      symbol: 'm²',  toBase: 1 },
  { id: 'km2', label: 'Sq. Kilometer',  symbol: 'km²', toBase: 1e6 },
  { id: 'ha',  label: 'Hectare',        symbol: 'ha',  toBase: 10000 },
  { id: 'in2', label: 'Sq. Inch',       symbol: 'in²', toBase: 0.00064516 },
  { id: 'ft2', label: 'Sq. Foot',       symbol: 'ft²', toBase: 0.09290304 },
  { id: 'yd2', label: 'Sq. Yard',       symbol: 'yd²', toBase: 0.83612736 },
  { id: 'ac',  label: 'Acre',           symbol: 'ac',  toBase: 4046.8564224 },
  { id: 'mi2', label: 'Sq. Mile',       symbol: 'mi²', toBase: 2589988.110336 },
]

const faqs = [
  { q: '1 hectare = ? acres', a: '2.47105 ac' },
  { q: '1 acre = ? sq. feet', a: '43,560 ft²' },
  { q: '1 sq. meter = ? sq. feet', a: '10.7639 ft²' },
  { q: '1 sq. mile = ? km²', a: '2.58999 km²' },
  { q: '1 sq. km = ? hectares', a: '100 ha' },
  { q: '1 acre = ? sq. meters', a: '4046.86 m²' },
]

export default function AreaConverter() {
  return (
    <UnitConverterTool
      title="Area Converter"
      description="Convert between square meters, square feet, acres, hectares, and all other area units."
      icon={Gauge}
      iconColor="emerald"
      units={units}
      defaultFrom="m2"
      defaultTo="ft2"
      initialValue="1"
      faqs={faqs}
    />
  )
}
