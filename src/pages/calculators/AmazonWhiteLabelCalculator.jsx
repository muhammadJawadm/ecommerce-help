import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'
import { Factory } from 'lucide-react'

export default function AmazonWhiteLabelCalculator() {
  const [salePrice, setSalePrice] = useState(0)
  const [cogs, setCogs] = useState(0)
  const [fbaFee, setFbaFee] = useState(0)
  const [prepFee, setPrepFee] = useState(0)
  const [adSpend, setAdSpend] = useState(0)
  const [launchBudget, setLaunchBudget] = useState(0)
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const sale = salePrice || 0
  const cost = cogs || 0
  const fba = fbaFee || 0
  const prep = prepFee || 0
  const ads = adSpend || 0
  const launch = launchBudget || 0
  const referralFee = sale * 0.15

  const totalCosts = cost + fba + prep + ads + launch + referralFee
  const profit = sale - totalCosts
  const profitMargin = sale ? ((profit / sale) * 100).toFixed(2) : '0.00'
  const breakEven = totalCosts
  const roi = cost ? (((profit) / cost) * 100).toFixed(2) : '0.00'
  const isProfit = profit >= 0

  const clearForm = () => { setSalePrice(0); setCogs(0); setFbaFee(0); setPrepFee(0); setAdSpend(0); setLaunchBudget(0) }

  const row = (label, value, red = false) => (
    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 0', borderBottom: '1px solid #f1f5f9' }}>
      <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{label}</span>
      <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: red ? '#ef4444' : '#0f172a' }}>{value}</span>
    </div>
  )

  return (
    <Calculator title="Amazon White Label Calculator" description="Model white label margins, launch spend, referral fees and FBA fulfillment costs." icon={Factory} iconColor="orange" onClear={clearForm}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        <div className="calc-panel">
          <h2>Product Costs</h2>
          {[
            { label: `Sale Price (${currency})`, val: salePrice, set: setSalePrice },
            { label: `COGS / Sourcing Cost (${currency})`, val: cogs, set: setCogs },
            { label: `FBA Fulfillment Fee (${currency})`, val: fbaFee, set: setFbaFee },
            { label: `Prep / Packaging Cost (${currency})`, val: prepFee, set: setPrepFee },
            { label: `Ongoing Ad Spend Per Unit (${currency})`, val: adSpend, set: setAdSpend },
            { label: `Launch Budget Per Unit (${currency})`, val: launchBudget, set: setLaunchBudget },
          ].map(({ label, val, set }) => (
            <div key={label} style={{ marginBottom: '1rem' }}>
              <label className="form-label">{label}</label>
              <input type="number" className="form-input" value={formatInputValue(val, currency)} onChange={e => set(parseCurrencyInput(e.target.value, currency))} min="0" step="0.01" />
            </div>
          ))}
        </div>

        <div className="calc-panel">
          <h2>White Label Profit</h2>
          {row('Referral Fee (15%)', formatCurrency(referralFee, currency), true)}
          {row('FBA Fulfillment Fee', formatCurrency(fba, currency), true)}
          {row('Prep & Packaging', formatCurrency(prep, currency), true)}
          {row('Ad Spend Per Unit', formatCurrency(ads, currency), true)}
          {row('Launch Budget Per Unit', formatCurrency(launch, currency), true)}
          {row('COGS / Sourcing', formatCurrency(cost, currency), true)}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem 0', borderBottom: '1.5px solid #e2e8f0', marginBottom: '0.875rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Total Costs</span>
            <span style={{ fontWeight: 800, color: '#ef4444' }}>{formatCurrency(totalCosts, currency)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Break-even Price</span>
            <span style={{ fontWeight: 700, color: '#d97706' }}>{formatCurrency(breakEven, currency)}</span>
          </div>

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
          <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 10, padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#1d4ed8' }}>
            COGS ROI: <strong>{roi}%</strong> — your sourcing capital return
          </div>
        </div>
      </div>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: '1.25rem 1.5rem', marginTop: '1.25rem' }}>
        <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>White Label Strategy Tips</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', color: '#475569', fontSize: '0.875rem' }}>
          {['Target 30%+ profit margin after all Amazon fees for a sustainable white label business.', 'Allocate 15–20% of sale price for launch budget to build initial reviews.', 'Negotiate lower COGS with suppliers after your first 200+ units prove the product.', 'Avoid heavy categories like electronics — stick to supplements, home goods, beauty.', 'White label offers faster time-to-market than private label but less brand differentiation.'].map(t => (
            <li key={t} style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#10b981', flexShrink: 0 }}>✓</span>{t}</li>
          ))}
        </ul>
      </div>
    </Calculator>
  )
}
