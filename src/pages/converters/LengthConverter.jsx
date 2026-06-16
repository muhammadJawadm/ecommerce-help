import UnitConverterTool from '../../components/UnitConverterTool'
import { Ruler } from 'lucide-react'

const units = [
  { id: 'nm',  label: 'Nanometer',      symbol: 'nm',  toBase: 1e-9 },
  { id: 'um',  label: 'Micrometer',     symbol: 'μm',  toBase: 1e-6 },
  { id: 'mm',  label: 'Millimeter',     symbol: 'mm',  toBase: 0.001 },
  { id: 'cm',  label: 'Centimeter',     symbol: 'cm',  toBase: 0.01 },
  { id: 'dm',  label: 'Decimeter',      symbol: 'dm',  toBase: 0.1 },
  { id: 'm',   label: 'Meter',          symbol: 'm',   toBase: 1 },
  { id: 'km',  label: 'Kilometer',      symbol: 'km',  toBase: 1000 },
  { id: 'in',  label: 'Inch',           symbol: 'in',  toBase: 0.0254 },
  { id: 'ft',  label: 'Foot',           symbol: 'ft',  toBase: 0.3048 },
  { id: 'yd',  label: 'Yard',           symbol: 'yd',  toBase: 0.9144 },
  { id: 'mi',  label: 'Mile',           symbol: 'mi',  toBase: 1609.344 },
  { id: 'nmi', label: 'Nautical Mile',  symbol: 'nmi', toBase: 1852 },
]

const faqs = [
  { q: '1 inch = ? centimeters', a: '2.54 cm' },
  { q: '1 foot = ? meters', a: '0.3048 m' },
  { q: '1 mile = ? kilometers', a: '1.60934 km' },
  { q: '1 meter = ? feet', a: '3.28084 ft' },
  { q: '1 yard = ? meters', a: '0.9144 m' },
  { q: '1 km = ? miles', a: '0.621371 mi' },
]

export default function LengthConverter() {
  return (
    <UnitConverterTool
      title="Length Converter"
      description="Convert between metric and imperial units of length and distance instantly."
      icon={Ruler}
      iconColor="blue"
      units={units}
      defaultFrom="m"
      defaultTo="ft"
      initialValue="1"
      faqs={faqs}
    />
  )
}
