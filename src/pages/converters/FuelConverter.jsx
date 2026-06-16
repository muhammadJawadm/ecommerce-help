import UnitConverterTool from '../../components/UnitConverterTool'
import { Activity } from 'lucide-react'

// Base unit: km/L
// Note: L/100km is a reciprocal relationship, handled with custom functions
const units = [
  { id: 'kml',  label: 'Kilometer per Liter', symbol: 'km/L',    toBase: 1 },
  { id: 'mpgus',label: 'MPG (US)',             symbol: 'mpg (US)',toBase: 0.425143707 },
  { id: 'mpguk',label: 'MPG (UK/Imperial)',    symbol: 'mpg (UK)',toBase: 0.354006180 },
  {
    id: 'l100km',
    label: 'Liters per 100km',
    symbol: 'L/100km',
    toBase:   (v) => v === 0 ? Infinity : 100 / v,
    fromBase: (b) => b === 0 ? Infinity : 100 / b,
  },
]

const faqs = [
  { q: '30 mpg (US) = ? km/L', a: '12.7543 km/L' },
  { q: '10 L/100km = ? km/L', a: '10 km/L' },
  { q: '1 mpg (US) = ? L/100km', a: '235.215 L/100km' },
  { q: '15 km/L = ? mpg (US)', a: '35.2821 mpg' },
  { q: '1 mpg (UK) = ? mpg (US)', a: '0.832674 mpg (US)' },
  { q: '7 L/100km = ? mpg (US)', a: '33.6021 mpg' },
]

export default function FuelConverter() {
  return (
    <UnitConverterTool
      title="Fuel Economy Converter"
      description="Convert between miles per gallon (US/UK), liters per 100km and km per liter."
      icon={Activity}
      iconColor="green"
      units={units}
      defaultFrom="mpgus"
      defaultTo="l100km"
      initialValue="30"
      faqs={faqs}
    />
  )
}
