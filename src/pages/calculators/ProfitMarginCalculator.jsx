import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'
import { TrendingUp } from 'lucide-react'

export default function ProfitMarginCalculator() {
  const [revenue, setRevenue] = useState(0)
  const [cogs, setCogs] = useState(0)
  const [opEx, setOpEx] = useState(0)
  const [taxes, setTaxes] = useState(0)
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const rev = revenue || 0
  const cost = cogs || 0
  const op = opEx || 0
  const tax = taxes || 0

  const grossProfit = rev - cost
  const grossMargin = rev ? ((grossProfit / rev) * 100).toFixed(2) : '0.00'
  const operatingProfit = grossProfit - op
  const operatingMargin = rev ? ((operatingProfit / rev) * 100).toFixed(2) : '0.00'
  const netProfit = operatingProfit - tax
  const netMargin = rev ? ((netProfit / rev) * 100).toFixed(2) : '0.00'

  const clearForm = () => { setRevenue(0); setCogs(0); setOpEx(0); setTaxes(0) }

  const marginCard = (label, profit, margin, color, bg, border, note, target) => (
    <div style={{ background: bg, border: `1px solid ${border}`, borderLeft: `4px solid ${color}`, borderRadius: 12, padding: '1.125rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
        <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9375rem' }}>{label}</span>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color }}>{formatCurrency(profit, currency)}</div>
          <div style={{ fontSize: '1rem', fontWeight: 700, color }}>{margin}%</div>
        </div>
      </div>
      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{note}</div>
      <div style={{ fontSize: '0.75rem', fontWeight: 600, color, marginTop: '0.25rem' }}>Target: {target}</div>
    </div>
  )

  return (
    <Calculator title="Profit Margin Calculator" description="Calculate gross, operating, and net profit margins with complete breakdown." icon={TrendingUp} iconColor="indigo" onClear={clearForm}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        <div className="calc-panel">
          <h2>Financial Inputs</h2>
          {[
            { label: `Total Revenue (${currency})`, val: revenue, set: setRevenue },
            { label: `COGS — Cost of Goods Sold (${currency})`, val: cogs, set: setCogs },
            { label: `Operating Expenses (${currency})`, val: opEx, set: setOpEx },
            { label: `Taxes & Other Expenses (${currency})`, val: taxes, set: setTaxes },
          ].map(({ label, val, set }) => (
            <div key={label} style={{ marginBottom: '1rem' }}>
              <label className="form-label">{label}</label>
              <input type="number" className="form-input" value={formatInputValue(val, currency)} onChange={e => set(parseCurrencyInput(e.target.value, currency))} min="0" step="0.01" />
            </div>
          ))}
        </div>

        <div className="calc-panel">
          <h2>Margin Analysis</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1.5px solid #e2e8f0', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#64748b' }}>Revenue</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#2563eb' }}>{formatCurrency(rev, currency)}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {marginCard('Gross Profit', grossProfit, grossMargin, '#059669', '#ecfdf5', '#6ee7b7', 'Revenue minus COGS', '50–80% for ecommerce')}
            {marginCard('Operating Profit', operatingProfit, operatingMargin, '#d97706', '#fffbeb', '#fde68a', 'After operating expenses', '10–30% for ecommerce')}
            {marginCard('Net Profit', netProfit, netMargin, '#2563eb', '#eff6ff', '#93c5fd', 'True bottom line after all expenses', '5–20% for ecommerce')}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1.25rem', overflowX: 'auto' }}>
        <div className="calc-panel">
          <h2>Ecommerce Margin Benchmarks (2026)</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1.5px solid #e2e8f0' }}>
                {['Category', 'Gross Margin', 'Net Margin'].map(h => (
                  <th key={h} style={{ padding: '0.625rem 1rem', textAlign: h === 'Category' ? 'left' : 'center', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Apparel & Fashion', '50–60%', '10–15%'],
                ['Electronics', '20–35%', '5–10%'],
                ['Beauty & Personal Care', '65–75%', '15–25%'],
                ['Home & Garden', '40–55%', '8–15%'],
                ['Books & Media', '35–45%', '5–12%'],
              ].map(([cat, gross, net], i) => (
                <tr key={cat} style={{ background: i % 2 === 0 ? 'white' : '#fafafa', borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '0.625rem 1rem', fontWeight: 500, color: '#374151' }}>{cat}</td>
                  <td style={{ padding: '0.625rem 1rem', textAlign: 'center', color: '#059669', fontWeight: 600 }}>{gross}</td>
                  <td style={{ padding: '0.625rem 1rem', textAlign: 'center', color: '#2563eb', fontWeight: 600 }}>{net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Calculator>
  )
}
