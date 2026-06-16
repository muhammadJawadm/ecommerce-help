import UnitConverterTool from '../../components/UnitConverterTool'
import { Timer } from 'lucide-react'

// Base unit: second
const units = [
  { id: 'ns',  label: 'Nanosecond',  symbol: 'ns',  toBase: 1e-9 },
  { id: 'us',  label: 'Microsecond', symbol: 'μs',  toBase: 1e-6 },
  { id: 'ms',  label: 'Millisecond', symbol: 'ms',  toBase: 0.001 },
  { id: 's',   label: 'Second',      symbol: 's',   toBase: 1 },
  { id: 'min', label: 'Minute',      symbol: 'min', toBase: 60 },
  { id: 'h',   label: 'Hour',        symbol: 'hr',  toBase: 3600 },
  { id: 'd',   label: 'Day',         symbol: 'day', toBase: 86400 },
  { id: 'wk',  label: 'Week',        symbol: 'wk',  toBase: 604800 },
  { id: 'mo',  label: 'Month (avg)', symbol: 'mo',  toBase: 2629746 },
  { id: 'yr',  label: 'Year',        symbol: 'yr',  toBase: 31556952 },
  { id: 'dec', label: 'Decade',      symbol: 'dec', toBase: 315569520 },
  { id: 'cen', label: 'Century',     symbol: 'cent',toBase: 3155695200 },
]

const faqs = [
  { q: '1 hour = ? seconds', a: '3,600 s' },
  { q: '1 day = ? hours', a: '24 hr' },
  { q: '1 week = ? days', a: '7 days' },
  { q: '1 year = ? days', a: '365.2425 days' },
  { q: '1 year = ? seconds', a: '31,556,952 s' },
  { q: '1 decade = ? years', a: '10 yr' },
]

export default function TimeConverter() {
  return (
    <UnitConverterTool
      title="Time Converter"
      description="Convert between nanoseconds, seconds, minutes, hours, days, weeks, months and years."
      icon={Timer}
      iconColor="indigo"
      units={units}
      defaultFrom="h"
      defaultTo="min"
      initialValue="1"
      faqs={faqs}
    />
  )
}
