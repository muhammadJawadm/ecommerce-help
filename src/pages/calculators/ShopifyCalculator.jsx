import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'
import { ShoppingCart } from 'lucide-react'

const planCosts = { basic: 29, shopify: 299, advanced: 2299 }

export default function ShopifyCalculator() {
  const [revenue, setRevenue] = useState(5000)
  const [cogs, setCogs] = useState(1500)
  const [shopifyPlan, setShopifyPlan] = useState('basic')
  const [appsMonthly, setAppsMonthly] = useState(150)
  const [adSpend, setAdSpend] = useState(1000)
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const rev = revenue || 0
  const cost = cogs || 0
  const apps = appsMonthly || 0
  const ads = adSpend || 0
  const planFee = planCosts[shopifyPlan]
  const paymentFee = rev * 0.029 + 0.3
  const totalCosts = cost + planFee + apps + ads + paymentFee
  const profit = rev - totalCosts
  const profitMargin = rev ? ((profit / rev) * 100).toFixed(2) : '0.00'
  const isProfit = profit >= 0

  const clearForm = () => { setRevenue(5000); setCogs(1500); setShopifyPlan('basic'); setAppsMonthly(150); setAdSpend(1000) }

  const row = (label, value, red = false) => (
    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 0', borderBottom: '1px solid #f1f5f9' }}>
      <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{label}</span>
      <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: red ? '#ef4444' : '#0f172a' }}>{value}</span>
    </div>
  )

  return (
    <Calculator title="Shopify Profit Calculator" description="Calculate monthly store profitability including platform, payment, and ad costs." icon={ShoppingCart} iconColor="emerald" onClear={clearForm}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        <div className="calc-panel">
          <h2>Store Details</h2>
          {[
            { label: `Monthly Revenue (${currency})`, val: revenue, set: setRevenue },
            { label: `COGS (${currency})`, val: cogs, set: setCogs },
            { label: `Monthly App Subscriptions (${currency})`, val: appsMonthly, set: setAppsMonthly },
            { label: `Monthly Ad Spend (${currency})`, val: adSpend, set: setAdSpend },
          ].map(({ label, val, set }) => (
            <div key={label} style={{ marginBottom: '1rem' }}>
              <label className="form-label">{label}</label>
              <input type="number" className="form-input" value={formatInputValue(val, currency)} onChange={e => set(parseCurrencyInput(e.target.value, currency))} min="0" step="0.01" />
            </div>
          ))}
          <div style={{ marginBottom: '1rem' }}>
            <label className="form-label">Shopify Plan</label>
            <select className="form-input" value={shopifyPlan} onChange={e => setShopifyPlan(e.target.value)} style={{ cursor: 'pointer' }}>
              <option value="basic">Basic — $29/month</option>
              <option value="shopify">Shopify — $299/month</option>
              <option value="advanced">Advanced — $2,299/month</option>
            </select>
          </div>
        </div>

        <div className="calc-panel">
          <h2>Profit Analysis</h2>
          {row(`Revenue`, formatCurrency(rev, currency))}
          {row(`COGS`, formatCurrency(cost, currency), true)}
          {row(`Shopify Plan`, formatCurrency(planFee, currency), true)}
          {row(`Payment Processing (2.9% + $0.30)`, formatCurrency(paymentFee, currency), true)}
          {row(`Apps & Subscriptions`, formatCurrency(apps, currency), true)}
          {row(`Ad Spend`, formatCurrency(ads, currency), true)}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem 0', borderBottom: '1.5px solid #e2e8f0', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#64748b' }}>Total Expenses</span>
            <span style={{ fontWeight: 800, color: '#ef4444' }}>{formatCurrency(totalCosts, currency)}</span>
          </div>

          <div style={{
            background: isProfit ? '#ecfdf5' : '#fef2f2',
            border: `1px solid ${isProfit ? '#6ee7b7' : '#fca5a5'}`,
            borderRadius: 12, padding: '1.125rem', marginBottom: '0.75rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 700 }}>Net Profit</span>
              <span style={{ fontSize: '1.375rem', fontWeight: 800, color: isProfit ? '#059669' : '#dc2626' }}>{formatCurrency(profit, currency)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 700 }}>Profit Margin</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: isProfit ? '#059669' : '#dc2626' }}>{profitMargin}%</span>
            </div>
          </div>
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#065f46' }}>
            A healthy ecommerce margin is typically 20–40% depending on niche.
          </div>
        </div>
      </div>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: '1.25rem 1.5rem', marginTop: '1.25rem' }}>
        <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>Shopify Profitability Tips</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', color: '#475569', fontSize: '0.875rem' }}>
          {['Use Shopify Payments to avoid third-party gateway fees.', 'Higher plans offer lower transaction rates — worth it above ~$10K/month.', 'Audit app subscriptions quarterly — they add up fast.', 'Target a 3:1 ROAS (earn $3 for every $1 in ads).', 'Factor in email marketing, packaging, and customer service costs.'].map(t => (
            <li key={t} style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#10b981', flexShrink: 0 }}>✓</span>{t}</li>
          ))}
        </ul>
      </div>
    </Calculator>
  )
}
