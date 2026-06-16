import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'
import { DollarSign } from 'lucide-react'

const categoryFees = { general: 0.1325, books: 0.09, clothing: 0.1325, electronics: 0.1325, collectibles: 0.10 }

export default function EBayCalculator() {
  const [salePrice, setSalePrice] = useState(50)
  const [cogs, setCogs] = useState(12)
  const [category, setCategory] = useState('general')
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const sale = salePrice || 0
  const cost = cogs || 0
  const finalValueFee = sale * categoryFees[category]
  const paymentFee = sale * 0.029 + 0.3
  const totalFees = finalValueFee + paymentFee
  const profit = sale - cost - totalFees
  const profitMargin = sale ? ((profit / sale) * 100).toFixed(2) : '0.00'
  const breakEven = cost + totalFees
  const isProfit = profit >= 0

  const clearForm = () => { setSalePrice(50); setCogs(12); setCategory('general') }

  const row = (label, value, red = false) => (
    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 0', borderBottom: '1px solid #f1f5f9' }}>
      <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{label}</span>
      <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: red ? '#ef4444' : '#0f172a' }}>{value}</span>
    </div>
  )

  return (
    <Calculator title="eBay Fee Calculator" description="Calculate final value fees, payment processing and net profit for eBay sellers." icon={DollarSign} iconColor="blue" onClear={clearForm}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        <div className="calc-panel">
          <h2>Listing Details</h2>
          {[
            { label: `Sale Price (${currency})`, val: salePrice, set: setSalePrice },
            { label: `Cost / COGS (${currency})`, val: cogs, set: setCogs },
          ].map(({ label, val, set }) => (
            <div key={label} style={{ marginBottom: '1rem' }}>
              <label className="form-label">{label}</label>
              <input type="number" className="form-input" value={formatInputValue(val, currency)} onChange={e => set(parseCurrencyInput(e.target.value, currency))} min="0" step="0.01" />
            </div>
          ))}
          <div style={{ marginBottom: '1rem' }}>
            <label className="form-label">Product Category</label>
            <select className="form-input" value={category} onChange={e => setCategory(e.target.value)} style={{ cursor: 'pointer' }}>
              <option value="general">General — 13.25%</option>
              <option value="books">Books & Magazines — 9%</option>
              <option value="clothing">Clothing & Accessories — 13.25%</option>
              <option value="electronics">Consumer Electronics — 13.25%</option>
              <option value="collectibles">Collectibles & Art — 10%</option>
            </select>
          </div>
        </div>

        <div className="calc-panel">
          <h2>Fee Breakdown</h2>
          {row(`Final Value Fee (${(categoryFees[category] * 100).toFixed(2)}%)`, formatCurrency(finalValueFee, currency), true)}
          {row('Payment Processing (2.9% + $0.30)', formatCurrency(paymentFee, currency), true)}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem 0', borderBottom: '1.5px solid #e2e8f0', marginBottom: '0.875rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Total eBay Fees</span>
            <span style={{ fontWeight: 800, color: '#ef4444' }}>{formatCurrency(totalFees, currency)}</span>
          </div>
          {row('Cost of Goods', formatCurrency(cost, currency))}
          <div style={{ height: '1rem' }} />

          <div style={{ background: isProfit ? '#ecfdf5' : '#fef2f2', border: `1px solid ${isProfit ? '#6ee7b7' : '#fca5a5'}`, borderRadius: 12, padding: '1.125rem', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 700 }}>Net Profit</span>
              <span style={{ fontSize: '1.375rem', fontWeight: 800, color: isProfit ? '#059669' : '#dc2626' }}>{formatCurrency(profit, currency)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 700 }}>Profit Margin</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: isProfit ? '#059669' : '#dc2626' }}>{profitMargin}%</span>
            </div>
          </div>
          <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 10, padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#92400e' }}>
            Break-even price: <strong>{formatCurrency(breakEven, currency)}</strong>
          </div>
        </div>
      </div>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: '1.25rem 1.5rem', marginTop: '1.25rem' }}>
        <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>eBay Fee Tips</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', color: '#475569', fontSize: '0.875rem' }}>
          {['Final Value Fees vary by category — books (9%) are the most profitable to resell.', 'Most categories have a $750 cap on final value fees.', 'Use eBay Managed Payments — it consolidates all fees.', 'Factor in shipping — it impacts buyer conversions and margins.', 'Free listings are limited — factor in listing fees at scale.'].map(t => (
            <li key={t} style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#10b981', flexShrink: 0 }}>✓</span>{t}</li>
          ))}
        </ul>
      </div>
    </Calculator>
  )
}
