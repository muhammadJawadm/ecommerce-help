import UnitConverterTool from '../../components/UnitConverterTool'
import { Activity } from 'lucide-react'

// Base unit: liter
const units = [
  { id: 'ml',   label: 'Milliliter',         symbol: 'ml',   toBase: 0.001 },
  { id: 'cl',   label: 'Centiliter',         symbol: 'cl',   toBase: 0.01 },
  { id: 'dl',   label: 'Deciliter',          symbol: 'dl',   toBase: 0.1 },
  { id: 'l',    label: 'Liter',              symbol: 'L',    toBase: 1 },
  { id: 'm3',   label: 'Cubic Meter',        symbol: 'm³',   toBase: 1000 },
  { id: 'cm3',  label: 'Cubic Centimeter',   symbol: 'cm³',  toBase: 0.001 },
  { id: 'in3',  label: 'Cubic Inch',         symbol: 'in³',  toBase: 0.016387064 },
  { id: 'ft3',  label: 'Cubic Foot',         symbol: 'ft³',  toBase: 28.316846592 },
  { id: 'tsp',  label: 'Teaspoon (US)',       symbol: 'tsp',  toBase: 0.00492892159375 },
  { id: 'tbsp', label: 'Tablespoon (US)',     symbol: 'tbsp', toBase: 0.01478676478125 },
  { id: 'floz', label: 'Fluid Ounce (US)',   symbol: 'fl oz',toBase: 0.029573529562 },
  { id: 'cup',  label: 'Cup (US)',            symbol: 'cup',  toBase: 0.2365882365 },
  { id: 'pt',   label: 'Pint (US)',          symbol: 'pt',   toBase: 0.473176473 },
  { id: 'qt',   label: 'Quart (US)',         symbol: 'qt',   toBase: 0.946352946 },
  { id: 'gal',  label: 'Gallon (US)',        symbol: 'gal',  toBase: 3.785411784 },
  { id: 'galuk',label: 'Gallon (UK/Imperial)',symbol: 'gal (UK)',toBase: 4.54609 },
]

const faqs = [
  { q: '1 liter = ? cups', a: '4.22675 cups' },
  { q: '1 gallon (US) = ? liters', a: '3.78541 L' },
  { q: '1 pint = ? ml', a: '473.176 ml' },
  { q: '1 fluid ounce = ? ml', a: '29.5735 ml' },
  { q: '1 cup = ? ml', a: '236.588 ml' },
  { q: '1 tablespoon = ? ml', a: '14.7868 ml' },
]

export default function VolumeConverter() {
  return (
    <UnitConverterTool
      title="Volume Converter"
      description="Convert between liters, gallons, cups, fluid ounces, pints, quarts and more volume units."
      icon={Activity}
      iconColor="cyan"
      units={units}
      defaultFrom="l"
      defaultTo="gal"
      initialValue="1"
      faqs={faqs}
    />
  )
}
