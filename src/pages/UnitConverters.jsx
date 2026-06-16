import { Link } from 'react-router-dom'
import { Ruler, Scale, Thermometer, Gauge, Activity, Wind, Timer, Database, Flame, Hash } from 'lucide-react'

const converters = [
  { to: '/converter/length', icon: Ruler, label: 'Length Converter', desc: 'Convert between millimeters, centimeters, meters, kilometers, inches, feet, yards, miles and more.', color: 'blue', units: 'mm · cm · m · km · in · ft · yd · mi' },
  { to: '/converter/weight', icon: Scale, label: 'Weight & Mass Converter', desc: 'Convert between grams, kilograms, ounces, pounds, tonnes, stone and more units of mass.', color: 'violet', units: 'mg · g · kg · ton · oz · lb · st' },
  { to: '/converter/temperature', icon: Thermometer, label: 'Temperature Converter', desc: 'Convert between Celsius, Fahrenheit, Kelvin and Rankine instantly with full conversion table.', color: 'rose', units: '°C · °F · K · °R' },
  { to: '/converter/area', icon: Gauge, label: 'Area Converter', desc: 'Convert between square meters, square feet, acres, hectares, square miles and more area units.', color: 'emerald', units: 'sq m · sq ft · acre · ha · sq mi' },
  { to: '/converter/volume', icon: Activity, label: 'Volume Converter', desc: 'Convert between milliliters, liters, gallons, cups, fluid ounces, pints, quarts and cubic units.', color: 'cyan', units: 'ml · L · gal · cup · fl oz · pt' },
  { to: '/converter/speed', icon: Wind, label: 'Speed Converter', desc: 'Convert between meters per second, km/h, mph, knots, feet per second and more.', color: 'orange', units: 'm/s · km/h · mph · knots · ft/s' },
  { to: '/converter/time', icon: Timer, label: 'Time Converter', desc: 'Convert between nanoseconds, seconds, minutes, hours, days, weeks, months and years.', color: 'indigo', units: 'ms · s · min · hr · day · week · year' },
  { to: '/converter/data', icon: Database, label: 'Data Storage Converter', desc: 'Convert between bits, bytes, kilobytes, megabytes, gigabytes, terabytes and petabytes.', color: 'sky', units: 'bit · B · KB · MB · GB · TB · PB' },
  { to: '/converter/pressure', icon: Gauge, label: 'Pressure Converter', desc: 'Convert between pascals, kilopascals, bar, PSI, atmospheres, mmHg and torr.', color: 'teal', units: 'Pa · kPa · bar · psi · atm · mmHg' },
  { to: '/converter/energy', icon: Flame, label: 'Energy Converter', desc: 'Convert between joules, kilojoules, calories, kilocalories, watt-hours, kWh and BTU.', color: 'amber', units: 'J · kJ · cal · kcal · Wh · kWh · BTU' },
  { to: '/converter/fuel', icon: Activity, label: 'Fuel Economy Converter', desc: 'Convert between miles per gallon (US/UK), liters per 100km and kilometers per liter.', color: 'green', units: 'mpg · L/100km · km/L' },
  { to: '/converter/number', icon: Hash, label: 'Number System Converter', desc: 'Convert between decimal, binary, octal and hexadecimal number systems instantly.', color: 'pink', units: 'Decimal · Binary · Octal · Hex' },
]

export default function UnitConverters() {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #7c3aed 100%)',
        padding: '3rem 1.5rem', color: 'white'
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Ruler size={22} color="white" />
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Unit Converters</h1>
          </div>
          <p style={{ opacity: 0.85, fontSize: '1rem', maxWidth: 620 }}>
            Convert any unit instantly. Enter a value and see all conversions at once — just like RapidTables, but built into one comprehensive tool suite.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
            {[['12', 'Converter Types'], ['100+', 'Units Supported'], ['Instant', 'Real-time Results']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: '1.375rem', fontWeight: 800 }}>{n}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.75 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {converters.map(({ to, icon: Icon, label, desc, color, units }) => (
            <Link key={to} to={to} className="tool-card" style={{ textDecoration: 'none' }}>
              <span className={`icon-container ${color}`}><Icon size={22} /></span>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.375rem' }}>{label}</h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.6, marginBottom: '0.75rem' }}>{desc}</p>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'monospace' }}>{units}</div>
              <div style={{ marginTop: '0.875rem', fontSize: '0.8125rem', fontWeight: 600, color: '#7c3aed' }}>
                Open Converter →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
