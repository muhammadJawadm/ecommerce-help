import UnitConverterTool from '../../components/UnitConverterTool'
import { Hash } from 'lucide-react'

const units = [
  { id: 'dec', label: 'Decimal (Base 10)',     symbol: 'DEC', base: 10 },
  { id: 'bin', label: 'Binary (Base 2)',       symbol: 'BIN', base: 2 },
  { id: 'oct', label: 'Octal (Base 8)',        symbol: 'OCT', base: 8 },
  { id: 'hex', label: 'Hexadecimal (Base 16)', symbol: 'HEX', base: 16 },
]

const faqs = [
  { q: '255 (decimal) = ? binary', a: '11111111' },
  { q: '255 (decimal) = ? hex', a: 'FF' },
  { q: 'FF (hex) = ? decimal', a: '255' },
  { q: '1010 (binary) = ? decimal', a: '10' },
  { q: '256 (decimal) = ? hex', a: '100' },
  { q: '777 (octal) = ? decimal', a: '511' },
]

export default function NumberConverter() {
  return (
    <UnitConverterTool
      title="Number System Converter"
      description="Convert between decimal, binary, octal and hexadecimal number systems instantly."
      icon={Hash}
      iconColor="pink"
      units={units}
      defaultFrom="dec"
      defaultTo="bin"
      initialValue="255"
      isNumber={true}
      faqs={faqs}
    />
  )
}
