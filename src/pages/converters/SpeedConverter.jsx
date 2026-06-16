import UnitConverterTool from '../../components/UnitConverterTool'
import { Wind } from 'lucide-react'

// Base unit: m/s
const units = [
  { id: 'ms',   label: 'Meter per Second',      symbol: 'm/s',   toBase: 1 },
  { id: 'kmh',  label: 'Kilometer per Hour',    symbol: 'km/h',  toBase: 1 / 3.6 },
  { id: 'mph',  label: 'Mile per Hour',         symbol: 'mph',   toBase: 0.44704 },
  { id: 'knot', label: 'Knot',                  symbol: 'kn',    toBase: 0.514444 },
  { id: 'fts',  label: 'Foot per Second',       symbol: 'ft/s',  toBase: 0.3048 },
  { id: 'ftmin',label: 'Foot per Minute',       symbol: 'ft/min',toBase: 0.00508 },
  { id: 'mach', label: 'Mach (at sea level)',   symbol: 'M',     toBase: 340.29 },
]

const faqs = [
  { q: '1 m/s = ? km/h', a: '3.6 km/h' },
  { q: '100 km/h = ? mph', a: '62.1371 mph' },
  { q: '1 knot = ? km/h', a: '1.852 km/h' },
  { q: '1 mph = ? km/h', a: '1.60934 km/h' },
  { q: 'Speed of sound = ? m/s', a: '340.29 m/s' },
  { q: '60 mph = ? m/s', a: '26.8224 m/s' },
]

export default function SpeedConverter() {
  return (
    <UnitConverterTool
      title="Speed Converter"
      description="Convert between meters per second, km/h, mph, knots, Mach and more speed units."
      icon={Wind}
      iconColor="orange"
      units={units}
      defaultFrom="kmh"
      defaultTo="mph"
      initialValue="100"
      faqs={faqs}
    />
  )
}
