import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'
import { TrendingUp } from 'lucide-react'

export default function EtsyCalculator() {
  const [salePrice, setSalePrice] = useState(0)
  const [cogs, setCogs] = useState(0)
  const [shipping, setShipping] = useState(0)
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const sale = salePrice || 0
  const cost = cogs || 0
  const ship = shipping || 0

  const transactionFee = sale * 0.065
  const paymentFee = sale * 0.04 + 0.2
  const listingFee = 0.2
  const shippingTxFee = ship * 0.065
  const totalFees = transactionFee + paymentFee + listingFee + shippingTxFee
  const profit = sale - cost - ship - totalFees
  const profitMargin = sale ? ((profit / sale) * 100).toFixed(2) : '0.00'
  const breakEven = cost + ship + totalFees
  const isProfit = profit >= 0

  const clearForm = () => { setSalePrice(0); setCogs(0); setShipping(0) }

  const row = (label, value, red = false) => (
    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 0', borderBottom: '1px solid #f1f5f9' }}>
      <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{label}</span>
      <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: red ? '#ef4444' : '#0f172a' }}>{value}</span>
    </div>
  )

  return (
    <Calculator title="Etsy Fee Calculator" description="Calculate Etsy transaction, payment processing and listing fees for your shop." icon={TrendingUp} iconColor="rose" onClear={clearForm}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        <div className="calc-panel">
          <h2>Listing Details</h2>
          {[
            { label: `Sale Price (${currency})`, val: salePrice, set: setSalePrice },
            { label: `Cost / COGS (${currency})`, val: cogs, set: setCogs },
            { label: `Shipping Cost (${currency})`, val: shipping, set: setShipping },
          ].map(({ label, val, set }) => (
            <div key={label} style={{ marginBottom: '1rem' }}>
              <label className="form-label">{label}</label>
              <input type="number" className="form-input" value={formatInputValue(val, currency)} onChange={e => set(parseCurrencyInput(e.target.value, currency))} min="0" step="0.01" />
            </div>
          ))}
        </div>

        <div className="calc-panel">
          <h2>Fee Breakdown</h2>
          {row('Transaction Fee (6.5%)', formatCurrency(transactionFee, currency), true)}
          {row('Payment Processing (4% + $0.20)', formatCurrency(paymentFee, currency), true)}
          {row('Listing Fee', formatCurrency(listingFee, currency), true)}
          {row('Shipping Transaction Fee (6.5%)', formatCurrency(shippingTxFee, currency), true)}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem 0', borderBottom: '1.5px solid #e2e8f0', marginBottom: '0.875rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Total Etsy Fees</span>
            <span style={{ fontWeight: 800, color: '#ef4444' }}>{formatCurrency(totalFees, currency)}</span>
          </div>
          {row('Cost of Goods', formatCurrency(cost, currency))}
          {row('Shipping Cost', formatCurrency(ship, currency))}
          <div style={{ height: '0.75rem' }} />

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
        <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>Etsy Seller Tips</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', color: '#475569', fontSize: '0.875rem' }}>
          {['Each listing costs $0.20 and renews automatically every 4 months.', 'Etsy charges 6.5% on the shipping amount too — factor this in.', 'Use Etsy Plus ($10/mo) for advanced shop customization features.', 'Etsy Ads can boost visibility — set daily budgets carefully.', 'Build your brand — loyal Etsy buyers return and drive repeat revenue.'].map(t => (
            <li key={t} style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#10b981', flexShrink: 0 }}>✓</span>{t}</li>
          ))}
        </ul>
      </div>
    </Calculator>
  )
}
