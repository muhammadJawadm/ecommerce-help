import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'
import { BarChart3 } from 'lucide-react'

export default function BreakEvenROASCalculator() {
  const [salePrice, setSalePrice] = useState(0)
  const [cogs, setCogs] = useState(0)
  const [platformFeePercent, setPlatformFeePercent] = useState(0)
  const [paymentFeePercent, setPaymentFeePercent] = useState(0)
  const [shippingCost, setShippingCost] = useState(0)
  const [returnRate, setReturnRate] = useState(0)
  const [appCostPerUnit, setAppCostPerUnit] = useState(0)
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const sale = salePrice || 0
  const cost = cogs || 0
  const ship = shippingCost || 0
  const appCost = appCostPerUnit || 0
  const pfr = platformFeePercent || 0
  const pymtRate = paymentFeePercent || 0
  const ret = returnRate || 0

  const platformFee = sale * pfr
  const paymentFee = sale * pymtRate
  const returnCost = sale * ret
  const totalCosts = cost + platformFee + paymentFee + ship + returnCost + appCost
  const breakEvenROAS = sale ? (totalCosts / sale).toFixed(2) : '0.00'
  const allowableCAC = sale - totalCosts
  const recommendedROAS = Number(breakEvenROAS) * 1.5
  const profitAtRec = sale - totalCosts - (sale && recommendedROAS ? sale / recommendedROAS : 0)

  const clearForm = () => { setSalePrice(0); setCogs(0); setPlatformFeePercent(0); setPaymentFeePercent(0); setShippingCost(0); setReturnRate(0); setAppCostPerUnit(0) }

  const row = (label, value) => (
    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 0', borderBottom: '1px solid #f1f5f9' }}>
      <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{label}</span>
      <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a' }}>{value}</span>
    </div>
  )

  return (
    <Calculator title="Break-Even ROAS Calculator" description="Find your true break-even ROAS including all hidden costs and fees." icon={BarChart3} iconColor="cyan" onClear={clearForm}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        <div className="calc-panel">
          <h2>Cost Inputs</h2>
          {[
            { label: `Sale Price (${currency})`, val: salePrice, set: setSalePrice, currency: true },
            { label: `COGS (${currency})`, val: cogs, set: setCogs, currency: true },
            { label: `Shipping Cost (${currency})`, val: shippingCost, set: setShippingCost, currency: true },
            { label: `App Cost Per Unit (${currency})`, val: appCostPerUnit, set: setAppCostPerUnit, currency: true },
          ].map(({ label, val, set }) => (
            <div key={label} style={{ marginBottom: '1rem' }}>
              <label className="form-label">{label}</label>
              <input type="number" className="form-input" value={formatInputValue(val, currency)} onChange={e => set(parseCurrencyInput(e.target.value, currency))} min="0" step="0.01" />
            </div>
          ))}
          {[
            { label: `Platform Fee %`, val: pfr * 100, set: v => setPlatformFeePercent(v / 100) },
            { label: `Payment Fee %`, val: pymtRate * 100, set: v => setPaymentFeePercent(v / 100) },
            { label: `Return Rate %`, val: ret * 100, set: v => setReturnRate(v / 100) },
          ].map(({ label, val, set }) => (
            <div key={label} style={{ marginBottom: '1rem' }}>
              <label className="form-label">{label}</label>
              <input type="number" className="form-input" value={val} onChange={e => set(e.target.value === '' ? 0 : parseFloat(e.target.value))} min="0" max="100" step="0.1" />
            </div>
          ))}
        </div>

        <div className="calc-panel">
          <h2>Cost Analysis</h2>
          {row('COGS', formatCurrency(cost, currency))}
          {row(`Platform Fee (${(pfr * 100).toFixed(0)}%)`, formatCurrency(platformFee, currency))}
          {row(`Payment Fee (${(pymtRate * 100).toFixed(1)}%)`, formatCurrency(paymentFee, currency))}
          {row('Shipping', formatCurrency(ship, currency))}
          {row(`Return Loss (${(ret * 100).toFixed(0)}%)`, formatCurrency(returnCost, currency))}
          {row('App Costs', formatCurrency(appCost, currency))}
          <div style={{ height: '0.75rem' }} />

          <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 12, padding: '1rem', marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '0.8125rem', color: '#64748b', marginBottom: '0.375rem' }}>Break-Even ROAS</div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#dc2626' }}>{breakEvenROAS}x</div>
            <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>Earn {breakEvenROAS}x for every $1 in ads just to break even</div>
          </div>

          <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 12, padding: '1rem', marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '0.8125rem', color: '#64748b', marginBottom: '0.375rem' }}>Recommended ROAS (1.5× break-even)</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#d97706' }}>{recommendedROAS.toFixed(2)}x</div>
            <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>Profit at this ROAS: {formatCurrency(profitAtRec, currency)}</div>
          </div>

          <div style={{ background: '#ecfdf5', border: '1px solid #6ee7b7', borderRadius: 12, padding: '1rem' }}>
            <div style={{ fontSize: '0.8125rem', color: '#64748b', marginBottom: '0.375rem' }}>Allowable CAC (Max ad spend/unit)</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#059669' }}>{formatCurrency(allowableCAC, currency)}</div>
          </div>
        </div>
      </div>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: '1.25rem 1.5rem', marginTop: '1.25rem' }}>
        <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>Silent Profit Killers</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', color: '#475569', fontSize: '0.875rem' }}>
          {['Return Rate Bleed: 10% refund rate on $50 products = $5 lost per sale.', 'Payment Fee Drain: 2.9% + 30¢ on Shopify = hidden ~3.9% loss.', 'App Subscription Creep: $150/month in apps = $0.50 per unit at 300 sales.', 'Blended CAC is always higher than what ad manager reports.', 'A healthy ecommerce ROAS target is 3:1 to 5:1.'].map(t => (
            <li key={t} style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#ef4444', flexShrink: 0 }}>!</span>{t}</li>
          ))}
        </ul>
      </div>
    </Calculator>
  )
}
