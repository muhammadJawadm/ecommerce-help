import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'
import { Package } from 'lucide-react'

const shippingRates = {
  usps:  { name: 'USPS',  rates: { 1: 5.45, 2: 5.95, 3: 6.45, 5: 7.95, 10: 12.45 }, delivery: '5–7 business days', color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
  ups:   { name: 'UPS',   rates: { 1: 8.50, 2: 9.75, 3: 11.00, 5: 14.00, 10: 22.00 }, delivery: '2–3 business days', color: '#854d0e', bg: '#fef9c3', border: '#fde68a' },
  fedex: { name: 'FedEx', rates: { 1: 9.00, 2: 10.50, 3: 12.00, 5: 15.50, 10: 25.00 }, delivery: '2–3 business days', color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe' },
  dhl:   { name: 'DHL',   rates: { 1: 7.50, 2: 8.75, 3: 10.00, 5: 13.50, 10: 21.50 }, delivery: '3–5 business days', color: '#c2410c', bg: '#fff7ed', border: '#fed7aa' },
}

function getRate(carrier, w) {
  const { rates } = shippingRates[carrier]
  if (w <= 1) return rates[1]
  if (w <= 2) return rates[2]
  if (w <= 3) return rates[3]
  if (w <= 5) return rates[5]
  return rates[10] + (Math.max(0, w - 10) * 0.5)
}

export default function ShippingCalculator() {
  const [weight, setWeight] = useState(2)
  const [carrier, setCarrier] = useState('usps')
  const { currency, formatCurrency } = useCurrency()

  const rate = getRate(carrier, weight || 0)
  const allRates = Object.entries(shippingRates).map(([key, c]) => ({ key, ...c, rate: getRate(key, weight || 0) }))
  const cheapest = allRates.reduce((a, b) => a.rate < b.rate ? a : b)

  const clearForm = () => { setWeight(2); setCarrier('usps') }

  return (
    <Calculator title="Shipping Cost Calculator" description="Compare shipping rates across USPS, UPS, FedEx, and DHL carriers." icon={Package} iconColor="teal" onClear={clearForm}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        <div className="calc-panel">
          <h2>Package Details</h2>
          <div style={{ marginBottom: '1rem' }}>
            <label className="form-label">Package Weight (lbs)</label>
            <input type="number" className="form-input" value={weight ?? ''} onChange={e => setWeight(e.target.value === '' ? null : parseFloat(e.target.value))} min="0.1" step="0.1" />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label className="form-label">Preferred Carrier</label>
            <select className="form-input" value={carrier} onChange={e => setCarrier(e.target.value)} style={{ cursor: 'pointer' }}>
              {Object.entries(shippingRates).map(([key, c]) => (
                <option key={key} value={key}>{c.name}</option>
              ))}
            </select>
          </div>

          <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 12, padding: '1rem', marginTop: '1.5rem' }}>
            <div style={{ fontSize: '0.8125rem', color: '#065f46', marginBottom: '0.25rem', fontWeight: 600 }}>Cheapest Option</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#059669' }}>{cheapest.name} — {formatCurrency(cheapest.rate, currency)}</div>
            <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>{cheapest.delivery}</div>
          </div>
        </div>

        <div className="calc-panel">
          <h2>Selected Rate — {shippingRates[carrier].name}</h2>
          <div style={{ background: shippingRates[carrier].bg, border: `1px solid ${shippingRates[carrier].border}`, borderRadius: 14, padding: '1.5rem', textAlign: 'center', marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 600, marginBottom: '0.25rem' }}>Estimated Cost</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: shippingRates[carrier].color }}>{formatCurrency(rate, currency)}</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.375rem' }}>📦 {weight} lbs · {shippingRates[carrier].delivery}</div>
          </div>

          <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>All Carrier Rates ({weight} lbs)</h3>
          {allRates.map(({ key, name, rate: r, delivery, color }) => (
            <div key={key} onClick={() => setCarrier(key)} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '0.75rem', borderRadius: 10, marginBottom: '0.5rem',
              border: `1.5px solid ${carrier === key ? color : '#e2e8f0'}`,
              background: carrier === key ? shippingRates[key].bg : 'white',
              cursor: 'pointer', transition: 'all 0.15s'
            }}>
              <div>
                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9rem' }}>{name}</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{delivery}</div>
              </div>
              <div style={{ fontWeight: 800, color, fontSize: '1.0625rem' }}>{formatCurrency(r, currency)}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: '1.25rem 1.5rem', marginTop: '1.25rem' }}>
        <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>Shipping Tips</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', color: '#475569', fontSize: '0.875rem' }}>
          {['USPS Priority Mail is cheapest for packages under 3 lbs.', 'Negotiate bulk rates with carriers if shipping 100+ packages/month.', 'Factor shipping into product price when offering "free shipping".', 'Use Pirate Ship or ShipStation for discounted commercial USPS rates.', 'DHL excels for international shipping with competitive global rates.'].map(t => (
            <li key={t} style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#10b981', flexShrink: 0 }}>✓</span>{t}</li>
          ))}
        </ul>
      </div>
    </Calculator>
  )
}
