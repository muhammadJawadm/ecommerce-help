import UnitConverterTool from '../../components/UnitConverterTool'
import { Database } from 'lucide-react'

// Base unit: bit
const units = [
  { id: 'bit', label: 'Bit',       symbol: 'bit', toBase: 1 },
  { id: 'B',   label: 'Byte',      symbol: 'B',   toBase: 8 },
  { id: 'KB',  label: 'Kilobyte',  symbol: 'KB',  toBase: 8000 },
  { id: 'MB',  label: 'Megabyte',  symbol: 'MB',  toBase: 8e6 },
  { id: 'GB',  label: 'Gigabyte',  symbol: 'GB',  toBase: 8e9 },
  { id: 'TB',  label: 'Terabyte',  symbol: 'TB',  toBase: 8e12 },
  { id: 'PB',  label: 'Petabyte',  symbol: 'PB',  toBase: 8e15 },
  { id: 'Kib', label: 'Kibibyte',  symbol: 'KiB', toBase: 8192 },
  { id: 'Mib', label: 'Mebibyte',  symbol: 'MiB', toBase: 8388608 },
  { id: 'Gib', label: 'Gibibyte',  symbol: 'GiB', toBase: 8589934592 },
  { id: 'Tib', label: 'Tebibyte',  symbol: 'TiB', toBase: 8796093022208 },
]

const faqs = [
  { q: '1 GB = ? MB', a: '1,000 MB' },
  { q: '1 GiB = ? GB', a: '1.07374 GB' },
  { q: '1 TB = ? GB', a: '1,000 GB' },
  { q: '1 MB = ? KB', a: '1,000 KB' },
  { q: '1 byte = ? bits', a: '8 bits' },
  { q: '1 GB = ? bytes', a: '1,000,000,000 bytes' },
]

export default function DataConverter() {
  return (
    <UnitConverterTool
      title="Data Storage Converter"
      description="Convert between bits, bytes, kilobytes, megabytes, gigabytes, terabytes and petabytes."
      icon={Database}
      iconColor="sky"
      units={units}
      defaultFrom="GB"
      defaultTo="MB"
      initialValue="1"
      faqs={faqs}
    />
  )
}
