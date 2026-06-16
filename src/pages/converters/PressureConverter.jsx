import UnitConverterTool from '../../components/UnitConverterTool'
import { Gauge } from 'lucide-react'

// Base unit: Pascal
const units = [
  { id: 'Pa',   label: 'Pascal',                symbol: 'Pa',   toBase: 1 },
  { id: 'hPa',  label: 'Hectopascal',           symbol: 'hPa',  toBase: 100 },
  { id: 'kPa',  label: 'Kilopascal',            symbol: 'kPa',  toBase: 1000 },
  { id: 'MPa',  label: 'Megapascal',            symbol: 'MPa',  toBase: 1e6 },
  { id: 'bar',  label: 'Bar',                   symbol: 'bar',  toBase: 100000 },
  { id: 'mbar', label: 'Millibar',              symbol: 'mbar', toBase: 100 },
  { id: 'atm',  label: 'Atmosphere',            symbol: 'atm',  toBase: 101325 },
  { id: 'psi',  label: 'Pound per Sq. Inch',   symbol: 'psi',  toBase: 6894.757293168 },
  { id: 'mmHg', label: 'Millimeter of Mercury', symbol: 'mmHg', toBase: 133.322387415 },
  { id: 'torr', label: 'Torr',                  symbol: 'Torr', toBase: 133.322387415 },
  { id: 'inHg', label: 'Inch of Mercury',       symbol: 'inHg', toBase: 3386.389 },
]

const faqs = [
  { q: '1 atm = ? psi', a: '14.6959 psi' },
  { q: '1 bar = ? psi', a: '14.5038 psi' },
  { q: '1 psi = ? kPa', a: '6.89476 kPa' },
  { q: '1 atm = ? Pa', a: '101,325 Pa' },
  { q: '1 bar = ? Pa', a: '100,000 Pa' },
  { q: '1 MPa = ? bar', a: '10 bar' },
]

export default function PressureConverter() {
  return (
    <UnitConverterTool
      title="Pressure Converter"
      description="Convert between pascals, bar, psi, atmospheres, mmHg and all other pressure units."
      icon={Gauge}
      iconColor="teal"
      units={units}
      defaultFrom="atm"
      defaultTo="psi"
      initialValue="1"
      faqs={faqs}
    />
  )
}
