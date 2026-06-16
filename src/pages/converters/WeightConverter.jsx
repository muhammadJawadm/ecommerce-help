import UnitConverterTool from '../../components/UnitConverterTool'
import { Scale } from 'lucide-react'

const units = [
  { id: 'mcg', label: 'Microgram',    symbol: 'μg',  toBase: 1e-9 },
  { id: 'mg',  label: 'Milligram',    symbol: 'mg',  toBase: 1e-6 },
  { id: 'g',   label: 'Gram',         symbol: 'g',   toBase: 0.001 },
  { id: 'kg',  label: 'Kilogram',     symbol: 'kg',  toBase: 1 },
  { id: 't',   label: 'Metric Ton',   symbol: 't',   toBase: 1000 },
  { id: 'oz',  label: 'Ounce',        symbol: 'oz',  toBase: 0.028349523125 },
  { id: 'lb',  label: 'Pound',        symbol: 'lb',  toBase: 0.45359237 },
  { id: 'st',  label: 'Stone',        symbol: 'st',  toBase: 6.35029318 },
  { id: 'ston',label: 'Short Ton (US)',symbol: 'ston',toBase: 907.18474 },
  { id: 'lton',label: 'Long Ton (UK)', symbol: 'lton',toBase: 1016.0469088 },
]

const faqs = [
  { q: '1 kilogram = ? pounds', a: '2.20462 lb' },
  { q: '1 pound = ? kilograms', a: '0.453592 kg' },
  { q: '1 ounce = ? grams', a: '28.3495 g' },
  { q: '1 stone = ? pounds', a: '14 lb' },
  { q: '1 metric ton = ? kg', a: '1000 kg' },
  { q: '1 short ton = ? lbs', a: '2000 lb' },
]

export default function WeightConverter() {
  return (
    <UnitConverterTool
      title="Weight & Mass Converter"
      description="Convert between grams, kilograms, pounds, ounces, tons and all other units of mass."
      icon={Scale}
      iconColor="violet"
      units={units}
      defaultFrom="kg"
      defaultTo="lb"
      initialValue="1"
      faqs={faqs}
    />
  )
}
