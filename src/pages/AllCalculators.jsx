import { Link } from 'react-router-dom'
import {
  Package, ShoppingCart, TrendingUp, DollarSign, Zap,
  BarChart3, Store, Factory, Calculator
} from 'lucide-react'

const tools = [
  { to: '/calculator/amazon-fba', icon: Package, label: 'Amazon FBA Calculator', desc: 'Calculate referral fees (15%), FBA fulfillment fees, storage fees, net profit and profit margin.', color: 'orange', badge: 'Popular' },
  { to: '/calculator/shopify-profit', icon: ShoppingCart, label: 'Shopify Profit Calculator', desc: 'Analyze total revenue, COGS, platform subscription, payment processing and ad spend.', color: 'emerald', badge: '' },
  { to: '/calculator/ebay-fees', icon: DollarSign, label: 'eBay Fee Calculator', desc: 'Compute final value fees by category (9–13.25%), payment processing and net profit.', color: 'blue', badge: '' },
  { to: '/calculator/etsy-fees', icon: TrendingUp, label: 'Etsy Fee Calculator', desc: 'Break down transaction fees (6.5%), listing fees ($0.20) and payment processing fees.', color: 'rose', badge: '' },
  { to: '/calculator/tiktok-shop', icon: Zap, label: 'TikTok Shop Calculator', desc: 'Calculate TikTok Shop commission rates (2–8% by category), payment fees and seller profit.', color: 'violet', badge: 'New' },
  { to: '/calculator/break-even-roas', icon: BarChart3, label: 'Break-Even ROAS Calculator', desc: 'Determine the minimum ROAS needed for your advertising campaigns to break even.', color: 'cyan', badge: '' },
  { to: '/calculator/profit-margin', icon: TrendingUp, label: 'Profit Margin Calculator', desc: 'Calculate gross margin, operating margin and net profit margin for any product or business.', color: 'indigo', badge: '' },
  { to: '/calculator/shipping', icon: Package, label: 'Shipping Cost Calculator', desc: 'Compare shipping rates across USPS, UPS, FedEx and DHL for your package dimensions.', color: 'teal', badge: '' },
  { to: '/calculator/marketing-roi', icon: BarChart3, label: 'Marketing ROI Calculator', desc: 'Measure the return on investment for your marketing campaigns and ad spend.', color: 'emerald', badge: '' },
  { to: '/calculator/woocommerce-profit', icon: Store, label: 'WooCommerce Profit Calculator', desc: 'Account for hosting, plugin costs, payment gateway fees and calculate true profitability.', color: 'violet', badge: '' },
  { to: '/calculator/amazon-white-label', icon: Factory, label: 'Amazon White Label Calculator', desc: 'Model private label or white label product margins including sourcing, Amazon fees and shipping.', color: 'orange', badge: '' },
]

export default function AllCalculators() {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #7c3aed 100%)',
        padding: '3rem 1.5rem', color: 'white'
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Calculator size={22} color="white" />
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Ecommerce Calculators</h1>
          </div>
          <p style={{ opacity: 0.85, fontSize: '1rem', maxWidth: 600 }}>
            Free profit calculators for every major ecommerce platform. No signup, no credit card — real-time results in your browser.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
            {[['11', 'Calculators'], ['100%', 'Free'], ['0', 'Signup Required']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: '1.375rem', fontWeight: 800 }}>{n}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.75 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {tools.map(({ to, icon: Icon, label, desc, color, badge }) => (
            <Link key={to} to={to} className="tool-card" style={{ textDecoration: 'none', position: 'relative' }}>
              {badge && (
                <span style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: badge === 'New' ? '#f5f3ff' : '#fff7ed',
                  color: badge === 'New' ? '#7c3aed' : '#c2410c',
                  fontSize: '0.6875rem', fontWeight: 700,
                  padding: '0.175rem 0.5rem', borderRadius: 999
                }}>{badge}</span>
              )}
              <span className={`icon-container ${color}`}><Icon size={22} /></span>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>{label}</h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.6 }}>{desc}</p>
              <div style={{ marginTop: '1rem', fontSize: '0.8125rem', fontWeight: 600, color: '#2563eb' }}>
                Open Calculator →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
