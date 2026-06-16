import UnitConverterTool from '../../components/UnitConverterTool'
import { Thermometer } from 'lucide-react'

// Base unit: Celsius
const units = [
  {
    id: 'c',  label: 'Celsius',   symbol: '°C',
    toBase:   (v) => v,
    fromBase: (b) => b,
  },
  {
    id: 'f',  label: 'Fahrenheit', symbol: '°F',
    toBase:   (v) => (v - 32) * 5 / 9,
    fromBase: (b) => b * 9 / 5 + 32,
  },
  {
    id: 'k',  label: 'Kelvin',     symbol: 'K',
    toBase:   (v) => v - 273.15,
    fromBase: (b) => b + 273.15,
  },
  {
    id: 'r',  label: 'Rankine',    symbol: '°R',
    toBase:   (v) => (v - 491.67) * 5 / 9,
    fromBase: (b) => (b + 273.15) * 9 / 5,
  },
]

const faqs = [
  { q: '0°C = ? °F', a: '32 °F' },
  { q: '100°C = ? °F', a: '212 °F' },
  { q: '37°C = ? °F (body temp)', a: '98.6 °F' },
  { q: '0°C = ? Kelvin', a: '273.15 K' },
  { q: '-40°C = ? °F', a: '-40 °F' },
  { q: '20°C = ? °F (room temp)', a: '68 °F' },
]

export default function TemperatureConverter() {
  return (
    <UnitConverterTool
      title="Temperature Converter"
      description="Convert between Celsius, Fahrenheit, Kelvin and Rankine with instant results."
      icon={Thermometer}
      iconColor="rose"
      units={units}
      defaultFrom="c"
      defaultTo="f"
      initialValue="100"
      faqs={faqs}
    />
  )
}
