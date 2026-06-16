import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Package, ShoppingCart, TrendingUp, DollarSign, Zap, BarChart3,
  Store, Factory, Ruler, Scale, Thermometer, Gauge, Activity,
  Wind, Timer, Database, Flame, Hash, Search, ArrowRight,
  CheckCircle, Calculator, RefreshCw
} from 'lucide-react'

const ecomCalcs = [
  { to: '/calculator/amazon-fba', icon: Package, label: 'Amazon FBA Calculator', desc: 'Fees, storage, net profit & margin', color: 'orange', badge: 'Popular' },
  { to: '/calculator/shopify-profit', icon: ShoppingCart, label: 'Shopify Profit Calculator', desc: 'Revenue, COGS, platform fees & ads', color: 'emerald', badge: '' },
  { to: '/calculator/ebay-fees', icon: DollarSign, label: 'eBay Fee Calculator', desc: 'Final value fees & payment processing', color: 'blue', badge: '' },
  { to: '/calculator/etsy-fees', icon: TrendingUp, label: 'Etsy Fee Calculator', desc: 'Transaction, listing & payment fees', color: 'rose', badge: '' },
  { to: '/calculator/tiktok-shop', icon: Zap, label: 'TikTok Shop Calculator', desc: 'Commission rates & seller fees', color: 'violet', badge: 'New' },
  { to: '/calculator/profit-margin', icon: BarChart3, label: 'Profit Margin Calculator', desc: 'Gross, operating & net margins', color: 'cyan', badge: '' },
  { to: '/calculator/break-even-roas', icon: BarChart3, label: 'Break-Even ROAS', desc: 'Find your advertising break-even point', color: 'indigo', badge: '' },
  { to: '/calculator/shipping', icon: Package, label: 'Shipping Cost Calculator', desc: 'Compare USPS, UPS, FedEx & DHL', color: 'teal', badge: '' },
  { to: '/calculator/marketing-roi', icon: TrendingUp, label: 'Marketing ROI Calculator', desc: 'Calculate campaign return on investment', color: 'emerald', badge: '' },
  { to: '/calculator/woocommerce-profit', icon: Store, label: 'WooCommerce Profit', desc: 'Plugin costs, fees & profitability', color: 'violet', badge: '' },
  { to: '/calculator/amazon-white-label', icon: Factory, label: 'Amazon White Label', desc: 'Private label margin modeling', color: 'orange', badge: '' },
]

const converters = [
  { to: '/converter/length', icon: Ruler, label: 'Length Converter', desc: 'mm, cm, m, km, in, ft, yd, mi', color: 'blue' },
  { to: '/converter/weight', icon: Scale, label: 'Weight Converter', desc: 'g, kg, oz, lb, ton, stone', color: 'violet' },
  { to: '/converter/temperature', icon: Thermometer, label: 'Temperature Converter', desc: '°C, °F, Kelvin, Rankine', color: 'rose' },
  { to: '/converter/area', icon: Gauge, label: 'Area Converter', desc: 'sq m, sq ft, acre, hectare, sq mi', color: 'emerald' },
  { to: '/converter/volume', icon: Activity, label: 'Volume Converter', desc: 'ml, L, gal, cups, fl oz, pint', color: 'cyan' },
  { to: '/converter/speed', icon: Wind, label: 'Speed Converter', desc: 'km/h, mph, m/s, knots, ft/s', color: 'orange' },
  { to: '/converter/time', icon: Timer, label: 'Time Converter', desc: 'seconds, minutes, hours, days, years', color: 'indigo' },
  { to: '/converter/data', icon: Database, label: 'Data Storage Converter', desc: 'bit, byte, KB, MB, GB, TB, PB', color: 'sky' },
  { to: '/converter/pressure', icon: Gauge, label: 'Pressure Converter', desc: 'Pa, bar, psi, atm, mmHg', color: 'teal' },
  { to: '/converter/energy', icon: Flame, label: 'Energy Converter', desc: 'J, kJ, cal, kcal, Wh, kWh, BTU', color: 'amber' },
  { to: '/converter/fuel', icon: Activity, label: 'Fuel Economy Converter', desc: 'mpg, L/100km, km/L', color: 'green' },
  { to: '/converter/number', icon: Hash, label: 'Number System Converter', desc: 'Decimal, Binary, Octal, Hex', color: 'pink' },
]

const allTools = [
  ...ecomCalcs.map(t => ({ ...t, type: 'calc' })),
  ...converters.map(t => ({ ...t, type: 'conv' })),
]

const features = [
  { icon: CheckCircle, title: 'No Signup Required', desc: 'All tools are completely free — no account, email, or credit card needed.', color: 'emerald' },
  { icon: RefreshCw, title: 'Real-time Results', desc: 'Results update instantly as you type, no submit button required.', color: 'blue' },
  { icon: Calculator, title: '23+ Free Tools', desc: 'Ecommerce calculators, unit converters, and more — all in one place.', color: 'violet' },
  { icon: Ruler, title: 'Comprehensive Coverage', desc: 'From Amazon FBA to unit conversion — every calculation you need.', color: 'orange' },
]

export default function Home() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const filtered = search.trim()
    ? allTools.filter(t =>
      t.label.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase())
    )
    : []

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (filtered.length === 1) navigate(filtered[0].to)
  }

  return (
    <div style={{ background: 'var(--color-bg)' }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 35%, #2563eb 65%, #7c3aed 100%)',
        padding: '5rem 1.5rem 4rem',
        position: 'relative', overflow: 'hidden'
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: 'radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 80%, white 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(255,255,255,0.1)', borderRadius: 999,
            padding: '0.375rem 1rem', fontSize: '0.8125rem', fontWeight: 600,
            color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem',
            border: '1px solid rgba(255,255,255,0.15)'
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            Free · No Signup · Real-time Results
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 900,
            color: 'white', marginBottom: '1.25rem', lineHeight: 1.15
          }}>
            Free Calculators &<br />
            <span style={{
              background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>Unit Converters</span>
          </h1>

          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Calculate Amazon FBA fees, Shopify profit margins, eBay fees and more.<br />
            Plus convert any unit instantly — length, weight, temperature & 9 more.
          </p>

          {/* Search */}
          <form onSubmit={handleSearchSubmit} style={{ position: 'relative', maxWidth: 540, margin: '0 auto 1.5rem' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none' }} />
            <input
              type="text"
              placeholder="Search calculators and converters..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%', padding: '0.875rem 1rem 0.875rem 2.75rem',
                borderRadius: 12, border: 'none', fontSize: '0.9375rem',
                fontFamily: 'var(--font-sans)', background: 'rgba(255,255,255,0.95)',
                color: '#0f172a', outline: 'none', boxShadow: '0 4px 20px rgb(0 0 0/0.2)'
              }}
            />
            {/* Search Dropdown */}
            {filtered.length > 0 && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0,
                background: 'white', borderRadius: 12, boxShadow: '0 8px 30px rgb(0 0 0/0.15)',
                border: '1px solid #e2e8f0', zIndex: 50, overflow: 'hidden', maxHeight: 320, overflowY: 'auto'
              }}>
                {filtered.slice(0, 8).map(t => {
                  const Icon = t.icon
                  return (
                    <Link key={t.to} to={t.to} onClick={() => setSearch('')} style={{
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.75rem 1rem', textDecoration: 'none', color: '#374151',
                      borderBottom: '1px solid #f8fafc', transition: 'background 0.1s'
                    }}
                      onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
                      onMouseLeave={e => e.currentTarget.style.background = ''}
                    >
                      <span className={`icon-container ${t.color}`} style={{ width: 32, height: 32, borderRadius: 8, flexShrink: 0, marginBottom: 0 }}>
                        <Icon size={15} />
                      </span>
                      <div style={{ textAlign: 'left' }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{t.label}</div>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{t.desc}</div>
                      </div>
                      <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: '#94a3b8' }}>
                        {t.type === 'calc' ? 'Calculator' : 'Converter'}
                      </span>
                    </Link>
                  )
                })}
              </div>
            )}
          </form>

          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/calculators" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'white', color: '#2563eb', padding: '0.75rem 1.5rem',
              borderRadius: 10, fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none',
              transition: 'all 0.15s', boxShadow: '0 2px 8px rgb(0 0 0/0.15)'
            }}>
              <Calculator size={16} /> Ecommerce Calculators
            </Link>
            <Link to="/converters" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(255,255,255,0.12)', color: 'white', padding: '0.75rem 1.5rem',
              borderRadius: 10, fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none',
              border: '1.5px solid rgba(255,255,255,0.3)', transition: 'all 0.15s'
            }}>
              <Ruler size={16} /> Unit Converters
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: 'white', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1.25rem 1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem' }}>
          {[
            ['11', 'Ecommerce Calculators'],
            ['12', 'Unit Converters'],
            ['100%', 'Free Forever'],
            ['0', 'Signup Required'],
          ].map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563eb' }}>{num}</div>
              <div style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ecommerce Calculators */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                <span className="icon-container blue" style={{ width: 28, height: 28, borderRadius: 7, marginBottom: 0 }}><Calculator size={14} /></span>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ecommerce Calculators</span>
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>Calculate Your True Profit</h2>
              <p style={{ color: '#64748b', marginTop: '0.375rem' }}>Amazon, Shopify, eBay, Etsy, TikTok Shop and more — all platforms covered.</p>
            </div>
            <Link to="/calculators" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
              color: '#2563eb', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none'
            }}>
              View all <ArrowRight size={15} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {ecomCalcs.slice(0, 6).map(({ to, icon: Icon, label, desc, color, badge }) => (
              <Link key={to} to={to} className="tool-card" style={{ textDecoration: 'none', position: 'relative' }}>
                {badge && (
                  <span style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: badge === 'New' ? '#f5f3ff' : '#fff7ed',
                    color: badge === 'New' ? '#7c3aed' : '#c2410c',
                    fontSize: '0.6875rem', fontWeight: 700, padding: '0.175rem 0.5rem',
                    borderRadius: 999
                  }}>{badge}</span>
                )}
                <span className={`icon-container ${color}`}><Icon size={22} /></span>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.375rem' }}>{label}</h3>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5 }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Unit Converters */}
      <section style={{ padding: '4rem 1.5rem', background: '#fafafa', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                <span className="icon-container violet" style={{ width: 28, height: 28, borderRadius: 7, marginBottom: 0 }}><Ruler size={14} /></span>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Unit Converters</span>
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>Convert Any Unit Instantly</h2>
              <p style={{ color: '#64748b', marginTop: '0.375rem' }}>See all conversions at once — results update as you type, no submit needed.</p>
            </div>
            <Link to="/converters" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
              color: '#7c3aed', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none'
            }}>
              View all <ArrowRight size={15} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
            {converters.slice(0, 8).map(({ to, icon: Icon, label, desc, color }) => (
              <Link key={to} to={to} className="tool-card" style={{ textDecoration: 'none' }}>
                <span className={`icon-container ${color}`}><Icon size={22} /></span>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.375rem' }}>{label}</h3>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5 }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Features */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Why Use iLoveProfit?</h2>
            <p style={{ color: '#64748b', fontSize: '1rem' }}>Built for sellers and professionals who need fast, accurate answers.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {features.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} style={{
                background: 'white', border: '1px solid #e2e8f0',
                borderRadius: 16, padding: '1.5rem', textAlign: 'center'
              }}>
                <span className={`icon-container ${color}`} style={{ margin: '0 auto 1rem', width: 52, height: 52 }}><Icon size={22} /></span>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.375rem' }}>{title}</h3>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #7c3aed 100%)',
        padding: '4rem 1.5rem', textAlign: 'center'
      }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '0.875rem' }}>
            Start Calculating Now
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Join thousands of sellers and professionals who use iLoveProfit every day to make smarter business decisions.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/calculators" style={{
              background: 'white', color: '#2563eb', padding: '0.8rem 1.75rem',
              borderRadius: 10, fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none'
            }}>
              Browse Calculators
            </Link>
            <Link to="/converters" style={{
              background: 'rgba(255,255,255,0.12)', color: 'white', padding: '0.8rem 1.75rem',
              borderRadius: 10, fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none',
              border: '1.5px solid rgba(255,255,255,0.3)'
            }}>
              Browse Converters
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
