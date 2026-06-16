import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'
import { Zap } from 'lucide-react'

const categoryCommissions = { general: 0.05, electronics: 0.08, beauty: 0.05, clothing: 0.05, home: 0.05 }

export default function TikTokShopCalculator() {
  const [salePrice, setSalePrice] = useState(50)
  const [cogs, setCogs] = useState(12)
  const [category, setCategory] = useState('general')
  const [isCreator, setIsCreator] = useState(false)
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const sale = salePrice || 0
  const cost = cogs || 0
  const sellerFee = sale * categoryCommissions[category]
  const paymentFee = sale * 0.035 + 0.3
  const creatorCommission = isCreator ? sale * 0.15 : 0
  const totalFees = sellerFee + paymentFee + creatorCommission
  const profit = sale - cost - totalFees
  const profitMargin = sale ? ((profit / sale) * 100).toFixed(2) : '0.00'
  const isProfit = profit >= 0

  const clearForm = () => { setSalePrice(50); setCogs(12); setCategory('general'); setIsCreator(false) }

  const row = (label, value, red = false) => (
    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 0', borderBottom: '1px solid #f1f5f9' }}>
      <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{label}</span>
      <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: red ? '#ef4444' : '#0f172a' }}>{value}</span>
    </div>
  )

  return (
    <Calculator title="TikTok Shop Calculator" description="Calculate TikTok Shop commission rates, payment fees, and seller profit." icon={Zap} iconColor="violet" onClear={clearForm}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        <div className="calc-panel">
          <h2>Product Details</h2>
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
              <option value="general">General — 5%</option>
              <option value="electronics">Electronics — 8%</option>
              <option value="beauty">Beauty — 5%</option>
              <option value="clothing">Clothing — 5%</option>
              <option value="home">Home & Garden — 5%</option>
            </select>
          </div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', cursor: 'pointer', padding: '0.625rem 0' }}>
            <input type="checkbox" checked={isCreator} onChange={e => setIsCreator(e.target.checked)} style={{ width: 16, height: 16, accentColor: '#7c3aed' }} />
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#374151' }}>Using Creator Content (+15% commission)</span>
          </label>
        </div>

        <div className="calc-panel">
          <h2>Fee Breakdown</h2>
          {row(`Seller Fee (${(categoryCommissions[category] * 100).toFixed(0)}%)`, formatCurrency(sellerFee, currency), true)}
          {row('Payment Processing (3.5% + $0.30)', formatCurrency(paymentFee, currency), true)}
          {isCreator && row('Creator Commission (15%)', formatCurrency(creatorCommission, currency), true)}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem 0', borderBottom: '1.5px solid #e2e8f0', marginBottom: '0.875rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Total Fees</span>
            <span style={{ fontWeight: 800, color: '#ef4444' }}>{formatCurrency(totalFees, currency)}</span>
          </div>
          {row('Cost of Goods', formatCurrency(cost, currency))}
          <div style={{ height: '0.875rem' }} />

          <div style={{ background: isProfit ? '#ecfdf5' : '#fef2f2', border: `1px solid ${isProfit ? '#6ee7b7' : '#fca5a5'}`, borderRadius: 12, padding: '1.125rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 700 }}>Net Profit</span>
              <span style={{ fontSize: '1.375rem', fontWeight: 800, color: isProfit ? '#059669' : '#dc2626' }}>{formatCurrency(profit, currency)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 700 }}>Profit Margin</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: isProfit ? '#059669' : '#dc2626' }}>{profitMargin}%</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: '1.25rem 1.5rem', marginTop: '1.25rem' }}>
        <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>TikTok Shop Tips</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', color: '#475569', fontSize: '0.875rem' }}>
          {['TikTok Shop fees are 5–8% — much lower than Amazon (15%) or eBay (13%).', 'Payment processing is 3.5% + $0.30, competitive vs Shopify and eBay.', 'Creator content drives massive viral sales but costs an extra 15%.', 'TikTok Shop is the fastest growing ecommerce platform in 2025–2026.', 'Combine organic TikTok content + Shop links for maximum zero-ad reach.'].map(t => (
            <li key={t} style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#10b981', flexShrink: 0 }}>✓</span>{t}</li>
          ))}
        </ul>
      </div>
    </Calculator>
  )
}
