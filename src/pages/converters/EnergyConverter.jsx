import UnitConverterTool from '../../components/UnitConverterTool'
import { Flame } from 'lucide-react'

// Base unit: Joule
const units = [
  { id: 'J',    label: 'Joule',                symbol: 'J',    toBase: 1 },
  { id: 'kJ',   label: 'Kilojoule',            symbol: 'kJ',   toBase: 1000 },
  { id: 'MJ',   label: 'Megajoule',            symbol: 'MJ',   toBase: 1e6 },
  { id: 'cal',  label: 'Calorie (small)',       symbol: 'cal',  toBase: 4.184 },
  { id: 'kcal', label: 'Kilocalorie (food Cal)',symbol: 'kcal', toBase: 4184 },
  { id: 'Wh',   label: 'Watt-hour',            symbol: 'Wh',   toBase: 3600 },
  { id: 'kWh',  label: 'Kilowatt-hour',        symbol: 'kWh',  toBase: 3600000 },
  { id: 'MWh',  label: 'Megawatt-hour',        symbol: 'MWh',  toBase: 3.6e9 },
  { id: 'BTU',  label: 'British Thermal Unit', symbol: 'BTU',  toBase: 1055.05585262 },
  { id: 'eV',   label: 'Electron Volt',        symbol: 'eV',   toBase: 1.602176634e-19 },
  { id: 'erg',  label: 'Erg',                  symbol: 'erg',  toBase: 1e-7 },
]

const faqs = [
  { q: '1 kWh = ? kJ', a: '3,600 kJ' },
  { q: '1 BTU = ? J', a: '1055.06 J' },
  { q: '1 kcal = ? kJ', a: '4.184 kJ' },
  { q: '1 kJ = ? kcal', a: '0.239006 kcal' },
  { q: '1 MJ = ? kWh', a: '0.277778 kWh' },
  { q: '1 Wh = ? J', a: '3,600 J' },
]

export default function EnergyConverter() {
  return (
    <UnitConverterTool
      title="Energy Converter"
      description="Convert between joules, kilocalories, watt-hours, BTU and all other energy units."
      icon={Flame}
      iconColor="amber"
      units={units}
      defaultFrom="kWh"
      defaultTo="kJ"
      initialValue="1"
      faqs={faqs}
    />
  )
}
