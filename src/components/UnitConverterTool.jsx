import { useState, useCallback, useEffect } from 'react'
import { ArrowLeftRight, ArrowLeft, Copy, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

function formatNumber(n) {
  if (n === '' || n === null || n === undefined || isNaN(n)) return ''
  const abs = Math.abs(n)
  if (abs === 0) return '0'
  if (abs >= 1e15) return n.toExponential(6)
  if (abs < 1e-10 && abs > 0) return n.toExponential(6)
  if (abs >= 1000 || (abs < 0.001 && abs > 0)) {
    const str = n.toPrecision(10).replace(/\.?0+$/, '')
    const num = parseFloat(str)
    if (abs >= 1000) return num.toLocaleString('en-US', { maximumFractionDigits: 6 })
    return str
  }
  return parseFloat(n.toPrecision(10)).toString()
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }
  return (
    <button onClick={handleCopy} title="Copy value" style={{
      padding: '0.2rem 0.4rem', borderRadius: 5, border: '1px solid #e2e8f0',
      background: 'white', cursor: 'pointer', color: copied ? '#10b981' : '#94a3b8',
      transition: 'all 0.15s', display: 'flex', alignItems: 'center'
    }}>
      {copied ? <Check size={13} /> : <Copy size={13} />}
    </button>
  )
}

export default function UnitConverterTool({
  title,
  description,
  icon: Icon,
  iconColor = 'blue',
  backTo = '/converters',
  units,
  defaultFrom,
  defaultTo,
  initialValue = '1',
  isTemperature = false,
  isNumber = false,
  faqs = []
}) {
  const [fromUnit, setFromUnit] = useState(defaultFrom || units[0]?.id)
  const [toUnit, setToUnit] = useState(defaultTo || units[1]?.id)
  const [fromValue, setFromValue] = useState(String(initialValue))
  const [toValue, setToValue] = useState('')
  const [copiedRow, setCopiedRow] = useState(null)

  const toBase = useCallback((val, unit) => {
    const def = units.find(u => u.id === unit)
    if (!def) return NaN
    if (typeof def.toBase === 'function') return def.toBase(val)
    return val * def.toBase
  }, [units])

  const fromBase = useCallback((base, unit) => {
    const def = units.find(u => u.id === unit)
    if (!def) return NaN
    if (typeof def.fromBase === 'function') return def.fromBase(base)
    return base / def.toBase
  }, [units])

  const convert = useCallback((val, from, to) => {
    if (val === '' || val === null || val === undefined) return ''
    if (isNumber) {
      const fromDef = units.find(u => u.id === from)
      const toDef = units.find(u => u.id === to)
      if (!fromDef || !toDef) return ''
      try {
        const decVal = parseInt(String(val).trim(), fromDef.base)
        if (isNaN(decVal)) return 'Invalid'
        return decVal.toString(toDef.base).toUpperCase()
      } catch { return 'Invalid' }
    }
    const numVal = parseFloat(String(val))
    if (isNaN(numVal)) return ''
    const base = toBase(numVal, from)
    if (isNaN(base)) return ''
    const result = fromBase(base, to)
    if (isNaN(result)) return ''
    return formatNumber(result)
  }, [units, toBase, fromBase, isNumber])

  useEffect(() => {
    setToValue(convert(fromValue, fromUnit, toUnit))
  }, [fromValue, fromUnit, toUnit, convert])

  const handleFromChange = (val) => {
    setFromValue(val)
  }

  const handleToChange = (val) => {
    setToValue(val)
    setFromValue(convert(val, toUnit, fromUnit))
  }

  const handleSwap = () => {
    setFromUnit(toUnit)
    setToUnit(fromUnit)
    setFromValue(toValue)
    setToValue(fromValue)
  }

  const tableRows = units.map(unit => {
    let result
    if (isNumber) {
      result = convert(fromValue, fromUnit, unit.id)
    } else {
      const numVal = parseFloat(fromValue)
      if (!isNaN(numVal)) {
        const base = toBase(numVal, fromUnit)
        if (!isNaN(base)) {
          const res = fromBase(base, unit.id)
          result = isNaN(res) ? '' : formatNumber(res)
        } else result = ''
      } else result = ''
    }
    return { unit, result }
  })

  const inputStyle = {
    padding: '0.75rem 1rem', border: '1.5px solid #e2e8f0', borderRadius: 10,
    fontSize: '1.0625rem', fontFamily: 'var(--font-sans)', background: 'white',
    color: '#0f172a', transition: 'border-color 0.15s, box-shadow 0.15s',
    outline: 'none', width: '100%', fontWeight: 500
  }

  const selectStyle = {
    padding: '0.75rem 1rem', border: '1.5px solid #e2e8f0', borderRadius: 10,
    fontSize: '0.9375rem', fontFamily: 'var(--font-sans)', background: 'white',
    color: '#0f172a', cursor: 'pointer', outline: 'none', width: '100%',
    fontWeight: 500, transition: 'border-color 0.15s'
  }

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #7c3aed 100%)',
        padding: '2rem 1.5rem', color: 'white'
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Link to={backTo} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
            color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
            fontSize: '0.875rem', fontWeight: 500, marginBottom: '1rem', transition: 'color 0.15s'
          }}>
            <ArrowLeft size={15} /> Back to Converters
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {Icon && (
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                <Icon size={26} color="white" />
              </div>
            )}
            <div>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 800, marginBottom: '0.25rem' }}>{title}</h1>
              <p style={{ opacity: 0.85, fontSize: '0.9375rem' }}>{description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1.5rem' }}>
        {/* Converter Widget */}
        <div style={{
          background: 'white', border: '1px solid #e2e8f0',
          borderRadius: 20, padding: '2rem', boxShadow: 'var(--shadow-sm)',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowLeftRight size={16} color="#2563eb" /> Convert
          </h2>

          {/* From row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }} className="converter-row">
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.375rem' }}>From</label>
              <input
                type={isNumber ? 'text' : 'number'}
                value={fromValue}
                onChange={e => handleFromChange(e.target.value)}
                onFocus={e => { e.target.style.borderColor = '#2563eb'; e.target.style.boxShadow = '0 0 0 3px rgb(37 99 235/0.12)' }}
                onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none' }}
                style={inputStyle}
                placeholder="Enter value"
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.375rem' }}>&nbsp;</label>
              <select value={fromUnit} onChange={e => setFromUnit(e.target.value)}
                onFocus={e => e.target.style.borderColor = '#2563eb'}
                onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                style={selectStyle}>
                {units.map(u => <option key={u.id} value={u.id}>{u.label}</option>)}
              </select>
            </div>
          </div>

          {/* Swap Button */}
          <div style={{ display: 'flex', justifyContent: 'center', margin: '0.375rem 0' }}>
            <button onClick={handleSwap} title="Swap units" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 38, height: 38, borderRadius: '50%',
              border: '1.5px solid #e2e8f0', background: 'white',
              cursor: 'pointer', color: '#2563eb', transition: 'all 0.15s',
              boxShadow: 'var(--shadow-sm)'
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#eff6ff'; e.currentTarget.style.borderColor = '#2563eb' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = '#e2e8f0' }}
            >
              <ArrowLeftRight size={16} />
            </button>
          </div>

          {/* To row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }} className="converter-row">
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.375rem' }}>To</label>
              <input
                type={isNumber ? 'text' : 'number'}
                value={toValue}
                onChange={e => handleToChange(e.target.value)}
                onFocus={e => { e.target.style.borderColor = '#7c3aed'; e.target.style.boxShadow = '0 0 0 3px rgb(124 58 237/0.12)' }}
                onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none' }}
                style={{ ...inputStyle, borderColor: '#e2e8f0' }}
                placeholder="Result"
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.375rem' }}>&nbsp;</label>
              <select value={toUnit} onChange={e => setToUnit(e.target.value)}
                onFocus={e => e.target.style.borderColor = '#7c3aed'}
                onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                style={selectStyle}>
                {units.map(u => <option key={u.id} value={u.id}>{u.label}</option>)}
              </select>
            </div>
          </div>

          {/* Formula */}
          {fromValue && toValue && !isNumber && (
            <div style={{
              background: '#f8fafc', borderRadius: 10, padding: '0.75rem 1rem',
              fontSize: '0.875rem', color: '#475569', marginTop: '0.75rem',
              border: '1px solid #f1f5f9'
            }}>
              <strong style={{ color: '#0f172a' }}>
                {fromValue} {units.find(u => u.id === fromUnit)?.symbol || fromUnit}
              </strong>
              {' = '}
              <strong style={{ color: '#2563eb' }}>
                {toValue} {units.find(u => u.id === toUnit)?.symbol || toUnit}
              </strong>
            </div>
          )}
        </div>

        {/* Results Table */}
        <div style={{
          background: 'white', border: '1px solid #e2e8f0',
          borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #f1f5f9' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
              All {title} — {fromValue || '0'} {units.find(u => u.id === fromUnit)?.symbol || fromUnit}
            </h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
              <thead>
                <tr>
                  <th style={{ padding: '0.75rem 1.25rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>Unit</th>
                  <th style={{ padding: '0.75rem 1.25rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>Symbol</th>
                  <th style={{ padding: '0.75rem 1.25rem', textAlign: 'right', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>Value</th>
                  <th style={{ padding: '0.75rem 0.75rem', textAlign: 'center', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}></th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map(({ unit, result }, i) => {
                  const isActive = unit.id === fromUnit
                  return (
                    <tr key={unit.id} style={{
                      background: isActive ? '#eff6ff' : i % 2 === 0 ? 'white' : '#fafafa',
                      transition: 'background 0.1s'
                    }}
                      onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = '#f8fafc' }}
                      onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = i % 2 === 0 ? 'white' : '#fafafa' }}
                    >
                      <td style={{ padding: '0.75rem 1.25rem', color: '#374151', fontWeight: isActive ? 700 : 400, borderBottom: '1px solid #f1f5f9' }}>
                        {unit.label}
                      </td>
                      <td style={{ padding: '0.75rem 1.25rem', color: isActive ? '#2563eb' : '#64748b', fontWeight: 600, fontFamily: 'monospace', borderBottom: '1px solid #f1f5f9' }}>
                        {unit.symbol}
                      </td>
                      <td style={{ padding: '0.75rem 1.25rem', textAlign: 'right', fontWeight: isActive ? 700 : 500, color: isActive ? '#2563eb' : '#0f172a', fontFamily: 'monospace', fontSize: '0.9375rem', borderBottom: '1px solid #f1f5f9' }}>
                        {result || '—'}
                      </td>
                      <td style={{ padding: '0.75rem 0.75rem', textAlign: 'center', borderBottom: '1px solid #f1f5f9' }}>
                        {result && <CopyButton text={result} />}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        {faqs.length > 0 && (
          <div style={{ marginTop: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Common Conversions</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  background: 'white', border: '1px solid #e2e8f0',
                  borderRadius: 12, padding: '1rem 1.25rem'
                }}>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b', marginBottom: '0.25rem' }}>{faq.q}</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#2563eb' }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .converter-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
