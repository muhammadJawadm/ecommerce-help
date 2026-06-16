import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'
import { Package } from 'lucide-react'

export default function AmazonFBACalculator() {
  const [salePrice, setSalePrice] = useState(50)
  const [cogs, setCogs] = useState(12)
  const [weight, setWeight] = useState(1)
  const [adSpend, setAdSpend] = useState(12)
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const sale = salePrice || 0
  const productCost = cogs || 0
  const parcelWeight = weight || 0
  const ads = adSpend || 0

  const referralFee = sale * 0.15
  const fulfillmentFee = parcelWeight > 1 ? 3.22 + (parcelWeight - 1) * 0.39 : 3.22
  const storageFee = parcelWeight * 0.78 / 100
  const totalFees = referralFee + fulfillmentFee + storageFee
  const profit = sale - productCost - totalFees - ads
  const profitMargin = sale ? ((profit / sale) * 100).toFixed(2) : '0.00'
  const breakEvenROAS = sale ? ((productCost + totalFees) / sale).toFixed(2) : '0.00'
  const isProfit = profit >= 0

  const clearForm = () => { setSalePrice(50); setCogs(12); setWeight(1); setAdSpend(12) }

  const rowStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 0', borderBottom: '1px solid #f1f5f9' }
  const labelStyle = { fontSize: '0.9rem', color: '#64748b' }
  const valStyle = { fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a' }

  return (
    <Calculator title="Amazon FBA Calculator" description="Calculate FBA fees, storage costs, and net profit with complete breakdown." icon={Package} iconColor="orange" onClear={clearForm}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        {/* Inputs */}
        <div className="calc-panel">
          <h2>Product Details</h2>
          {[
            { label: `Sale Price (${currency})`, val: salePrice, set: setSalePrice, currency: true },
            { label: `Unit Cost / COGS (${currency})`, val: cogs, set: setCogs, currency: true },
            { label: 'Package Weight (lbs)', val: weight, set: setWeight, currency: false },
            { label: `Ad Spend Per Sale (${currency})`, val: adSpend, set: setAdSpend, currency: true },
          ].map(({ label, val, set, currency: isCurr }) => (
            <div key={label} style={{ marginBottom: '1rem' }}>
              <label className="form-label">{label}</label>
              <input type="number" className="form-input"
                value={isCurr ? formatInputValue(val, currency) : (val ?? '')}
                onChange={e => set(isCurr ? parseCurrencyInput(e.target.value, currency) : (e.target.value === '' ? null : parseFloat(e.target.value)))}
                min="0" step="0.01"
              />
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="calc-panel">
          <h2>Fee Breakdown</h2>
          <div style={rowStyle}><span style={labelStyle}>Referral Fee (15%)</span><span style={{ ...valStyle, color: '#ef4444' }}>{formatCurrency(referralFee, currency)}</span></div>
          <div style={rowStyle}><span style={labelStyle}>Fulfillment Fee</span><span style={{ ...valStyle, color: '#ef4444' }}>{formatCurrency(fulfillmentFee, currency)}</span></div>
          <div style={rowStyle}><span style={labelStyle}>Storage Fee</span><span style={{ ...valStyle, color: '#ef4444' }}>{formatCurrency(storageFee, currency)}</span></div>
          <div style={{ ...rowStyle, marginBottom: '1rem' }}><span style={{ ...labelStyle, fontWeight: 700 }}>Total FBA Fees</span><span style={{ ...valStyle, color: '#ef4444', fontSize: '1rem' }}>{formatCurrency(totalFees, currency)}</span></div>

          <div style={{ ...rowStyle, borderTop: '1.5px solid #e2e8f0', paddingTop: '0.875rem', marginTop: '0.25rem' }}>
            <span style={labelStyle}>Cost of Goods</span><span style={valStyle}>{formatCurrency(productCost, currency)}</span>
          </div>
          <div style={rowStyle}><span style={labelStyle}>Ad Spend</span><span style={valStyle}>{formatCurrency(ads, currency)}</span></div>
          <div style={{ ...rowStyle, marginBottom: '1.25rem' }}><span style={{ ...labelStyle, fontWeight: 700 }}>Total Costs</span><span style={valStyle}>{formatCurrency(productCost + totalFees + ads, currency)}</span></div>

          <div style={{
            background: isProfit ? '#ecfdf5' : '#fef2f2',
            border: `1px solid ${isProfit ? '#6ee7b7' : '#fca5a5'}`,
            borderRadius: 12, padding: '1.125rem', marginBottom: '0.75rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 700, color: '#0f172a' }}>Net Profit</span>
              <span style={{ fontSize: '1.375rem', fontWeight: 800, color: isProfit ? '#059669' : '#dc2626' }}>{formatCurrency(profit, currency)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 700, color: '#0f172a' }}>Profit Margin</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: isProfit ? '#059669' : '#dc2626' }}>{profitMargin}%</span>
            </div>
          </div>

          <div style={{ background: '#eff6ff', borderRadius: 10, padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#1d4ed8' }}>
            Break-Even ROAS: <strong>{breakEvenROAS}x</strong>
          </div>
        </div>
      </div>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: '1.25rem 1.5rem', marginTop: '1.25rem' }}>
        <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>Tips for Amazon FBA Success</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', color: '#475569', fontSize: '0.875rem' }}>
          {['Monitor seasonal storage fees — September rates are typically higher.', 'Products under 12 oz qualify for lower fulfillment fees.', 'Account for returns (8–15% depending on category).', 'Optimize package dimensions to minimize dimensional weight fees.', 'Consider long-term storage fees for slow-moving inventory.'].map(t => (
            <li key={t} style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#10b981', flexShrink: 0 }}>✓</span>{t}</li>
          ))}
        </ul>
      </div>
    </Calculator>
  )
}
