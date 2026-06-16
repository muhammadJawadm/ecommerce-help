import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'
import { BarChart3 } from 'lucide-react'

export default function MarketingROICalculator() {
  const [adSpend, setAdSpend] = useState(1000)
  const [revenue, setRevenue] = useState(5000)
  const [cogs, setCogs] = useState(1500)
  const [opCosts, setOpCosts] = useState(800)
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const ads = adSpend || 0
  const rev = revenue || 0
  const cost = cogs || 0
  const op = opCosts || 0

  const profit = rev - cost - op - ads
  const roi = ads ? ((profit / ads) * 100).toFixed(2) : '0.00'
  const roas = ads ? (rev / ads).toFixed(2) : '0.00'
  const profitMargin = rev ? ((profit / rev) * 100).toFixed(2) : '0.00'
  const isProfit = profit >= 0

  const clearForm = () => { setAdSpend(1000); setRevenue(5000); setCogs(1500); setOpCosts(800) }

  const metricCard = (label, value, desc, color, bg, border) => (
    <div key={label} style={{ background: bg, border: `1px solid ${border}`, borderRadius: 12, padding: '1.125rem', marginBottom: '0.75rem' }}>
      <div style={{ fontSize: '0.8125rem', color: '#64748b', marginBottom: '0.25rem', fontWeight: 600 }}>{label}</div>
      <div style={{ fontSize: '1.875rem', fontWeight: 900, color, marginBottom: '0.25rem' }}>{value}</div>
      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{desc}</div>
    </div>
  )

  return (
    <Calculator title="Marketing ROI Calculator" description="Calculate ROAS, ROI, and net profit for your marketing campaigns." icon={BarChart3} iconColor="violet" onClear={clearForm}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        <div className="calc-panel">
          <h2>Campaign Details</h2>
          {[
            { label: `Ad Spend (${currency})`, val: adSpend, set: setAdSpend },
            { label: `Revenue Generated (${currency})`, val: revenue, set: setRevenue },
            { label: `COGS (${currency})`, val: cogs, set: setCogs },
            { label: `Operating Costs (${currency})`, val: opCosts, set: setOpCosts },
          ].map(({ label, val, set }) => (
            <div key={label} style={{ marginBottom: '1rem' }}>
              <label className="form-label">{label}</label>
              <input type="number" className="form-input" value={formatInputValue(val, currency)} onChange={e => set(parseCurrencyInput(e.target.value, currency))} min="0" step="0.01" />
            </div>
          ))}
        </div>

        <div className="calc-panel">
          <h2>Marketing Analytics</h2>
          {metricCard('ROAS — Return on Ad Spend', `${roas}:1`, `For every $1 in ads, you earn $${roas}`, '#2563eb', '#eff6ff', '#93c5fd')}
          {metricCard('ROI — Return on Investment', `${roi}%`, 'Percentage profit on your total ad spend', '#059669', '#ecfdf5', '#6ee7b7')}
          {metricCard('Net Profit', formatCurrency(profit, currency), 'After all costs including ad spend', isProfit ? '#7c3aed' : '#dc2626', isProfit ? '#f5f3ff' : '#fef2f2', isProfit ? '#ddd6fe' : '#fca5a5')}
          {metricCard('Profit Margin', `${profitMargin}%`, 'Percentage of revenue that is profit', '#d97706', '#fffbeb', '#fde68a')}
        </div>
      </div>

      <div style={{ marginTop: '1.25rem', overflowX: 'auto' }}>
        <div className="calc-panel">
          <h2>ROAS Benchmarks by Platform (2026)</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1.5px solid #e2e8f0' }}>
                {['Platform', 'Good ROAS', 'Great ROAS', 'Exceptional'].map(h => (
                  <th key={h} style={{ padding: '0.625rem 1rem', textAlign: h === 'Platform' ? 'left' : 'center', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Facebook / Instagram', '3:1', '5:1', '8:1+'],
                ['Google Shopping', '4:1', '6:1', '10:1+'],
                ['Amazon PPC (ACoS)', '25%', '15%', '10%'],
                ['TikTok Ads', '2:1', '4:1', '7:1+'],
                ['Email Marketing', '4:1', '8:1', '15:1+'],
              ].map(([plat, good, great, exc], i) => (
                <tr key={plat} style={{ background: i % 2 === 0 ? 'white' : '#fafafa', borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '0.625rem 1rem', fontWeight: 500 }}>{plat}</td>
                  <td style={{ padding: '0.625rem 1rem', textAlign: 'center', color: '#d97706', fontWeight: 600 }}>{good}</td>
                  <td style={{ padding: '0.625rem 1rem', textAlign: 'center', color: '#059669', fontWeight: 600 }}>{great}</td>
                  <td style={{ padding: '0.625rem 1rem', textAlign: 'center', color: '#7c3aed', fontWeight: 600 }}>{exc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Calculator>
  )
}
