import { Printer, RotateCcw, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCurrency } from '../context/CurrencyContext'

export default function Calculator({ title, description, icon: Icon, iconColor = 'blue', backTo = '/calculators', children, onClear }) {
  const { currency } = useCurrency()

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Page Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #7c3aed 100%)',
        padding: '2rem 1.5rem',
        color: 'white'
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Link to={backTo} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
            color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
            fontSize: '0.875rem', fontWeight: 500, marginBottom: '1rem',
            transition: 'color 0.15s'
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
          >
            <ArrowLeft size={15} /> Back to Calculators
          </Link>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {Icon && (
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backdropFilter: 'blur(8px)', flexShrink: 0
                }}>
                  <Icon size={26} color="white" />
                </div>
              )}
              <div>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 800, marginBottom: '0.25rem' }}>{title}</h1>
                <p style={{ opacity: 0.85, fontSize: '0.9375rem' }}>{description}</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.625rem' }} className="calculator-actions">
              {onClear && (
                <button onClick={onClear} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                  padding: '0.5rem 1rem', borderRadius: 8,
                  background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)',
                  color: 'white', fontSize: '0.875rem', fontWeight: 600,
                  cursor: 'pointer', fontFamily: 'var(--font-sans)', transition: 'background 0.15s'
                }}>
                  <RotateCcw size={14} /> Clear
                </button>
              )}
              <button onClick={() => window.print()} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                padding: '0.5rem 1rem', borderRadius: 8,
                background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)',
                color: 'white', fontSize: '0.875rem', fontWeight: 600,
                cursor: 'pointer', fontFamily: 'var(--font-sans)', transition: 'background 0.15s'
              }}>
                <Printer size={14} /> Export PDF
              </button>
            </div>
          </div>
          <div style={{ marginTop: '0.625rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
              background: 'rgba(255,255,255,0.12)', borderRadius: 999,
              padding: '0.25rem 0.75rem', fontSize: '0.8125rem', fontWeight: 600
            }}>
              Currency: {currency}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1.5rem' }}>
        {children}
      </div>
    </div>
  )
}
