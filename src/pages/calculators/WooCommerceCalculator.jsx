import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'
import { Store } from 'lucide-react'

export default function WooCommerceCalculator() {
  const [revenue, setRevenue] = useState(0)
  const [cogs, setCogs] = useState(0)
  const [hosting, setHosting] = useState(0)
  const [pluginCosts, setPluginCosts] = useState(0)
  const [adSpend, setAdSpend] = useState(0)
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const rev = revenue || 0
  const cost = cogs || 0
  const host = hosting || 0
  const plugins = pluginCosts || 0
  const ads = adSpend || 0
  const paymentFee = rev * 0.029 + 0.3
  const totalCosts = cost + host + plugins + ads + paymentFee
  const profit = rev - totalCosts
  const profitMargin = rev ? ((profit / rev) * 100).toFixed(2) : '0.00'
  const isProfit = profit >= 0

  const clearForm = () => { setRevenue(0); setCogs(0); setHosting(0); setPluginCosts(0); setAdSpend(0) }

  const row = (label, value, red = false) => (
    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 0', borderBottom: '1px solid #f1f5f9' }}>
      <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{label}</span>
      <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: red ? '#ef4444' : '#0f172a' }}>{value}</span>
    </div>
  )

  return (
    <Calculator title="WooCommerce Profit Calculator" description="Calculate WooCommerce store profitability including hosting, plugins, and payment costs." icon={Store} iconColor="violet" onClear={clearForm}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        <div className="calc-panel">
          <h2>Store Details</h2>
          {[
            { label: `Monthly Revenue (${currency})`, val: revenue, set: setRevenue },
            { label: `COGS — Cost of Goods (${currency})`, val: cogs, set: setCogs },
            { label: `Hosting & Maintenance (${currency})`, val: hosting, set: setHosting },
            { label: `Plugin / App Costs (${currency})`, val: pluginCosts, set: setPluginCosts },
            { label: `Monthly Ad Spend (${currency})`, val: adSpend, set: setAdSpend },
          ].map(({ label, val, set }) => (
            <div key={label} style={{ marginBottom: '1rem' }}>
              <label className="form-label">{label}</label>
              <input type="number" className="form-input" value={formatInputValue(val, currency)} onChange={e => set(parseCurrencyInput(e.target.value, currency))} min="0" step="0.01" />
            </div>
          ))}
        </div>

        <div className="calc-panel">
          <h2>Profit Breakdown</h2>
          {row('Revenue', formatCurrency(rev, currency))}
          {row('Cost of Goods', formatCurrency(cost, currency), true)}
          {row('Hosting & Maintenance', formatCurrency(host, currency), true)}
          {row('Plugin Costs', formatCurrency(plugins, currency), true)}
          {row('Payment Processing (2.9% + $0.30)', formatCurrency(paymentFee, currency), true)}
          {row('Ad Spend', formatCurrency(ads, currency), true)}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem 0', borderBottom: '1.5px solid #e2e8f0', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Total Expenses</span>
            <span style={{ fontWeight: 800, color: '#ef4444' }}>{formatCurrency(totalCosts, currency)}</span>
          </div>

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
        <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>WooCommerce Tips</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', color: '#475569', fontSize: '0.875rem' }}>
          {['WooCommerce itself is free — but hosting, themes, and plugins add up fast.', 'Use Stripe or PayPal — both charge ~2.9% + $0.30 per transaction.', 'Managed WooCommerce hosting (Kinsta, WP Engine) ranges $30–$100/month.', 'Audit plugin subscriptions quarterly — many stores pay for unused plugins.', 'Consider WooCommerce Payments for an integrated payment solution.'].map(t => (
            <li key={t} style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#10b981', flexShrink: 0 }}>✓</span>{t}</li>
          ))}
        </ul>
      </div>
    </Calculator>
  )
}
