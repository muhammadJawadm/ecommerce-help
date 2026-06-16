import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCurrency } from '../context/CurrencyContext'
import {
  Calculator, Ruler, ChevronDown, Menu, X, TrendingUp,
  DollarSign, ShoppingCart, Package, Zap, BarChart3, Store,
  Factory, Scale, Thermometer, Gauge, Activity, Timer,
  Database, Flame, Hash, Wind
} from 'lucide-react'

const calcItems = [
  { to: '/calculator/amazon-fba', icon: Package, label: 'Amazon FBA', color: 'orange' },
  { to: '/calculator/shopify-profit', icon: ShoppingCart, label: 'Shopify Profit', color: 'emerald' },
  { to: '/calculator/ebay-fees', icon: DollarSign, label: 'eBay Fees', color: 'blue' },
  { to: '/calculator/etsy-fees', icon: TrendingUp, label: 'Etsy Fees', color: 'rose' },
  { to: '/calculator/tiktok-shop', icon: Zap, label: 'TikTok Shop', color: 'violet' },
  { to: '/calculator/break-even-roas', icon: BarChart3, label: 'Break-Even ROAS', color: 'cyan' },
  { to: '/calculator/profit-margin', icon: TrendingUp, label: 'Profit Margin', color: 'emerald' },
  { to: '/calculator/shipping', icon: Package, label: 'Shipping Cost', color: 'blue' },
  { to: '/calculator/marketing-roi', icon: BarChart3, label: 'Marketing ROI', color: 'violet' },
  { to: '/calculator/woocommerce-profit', icon: Store, label: 'WooCommerce', color: 'indigo' },
  { to: '/calculator/amazon-white-label', icon: Factory, label: 'White Label', color: 'orange' },
]

const converterItems = [
  { to: '/converter/length', icon: Ruler, label: 'Length', color: 'blue' },
  { to: '/converter/weight', icon: Scale, label: 'Weight & Mass', color: 'violet' },
  { to: '/converter/temperature', icon: Thermometer, label: 'Temperature', color: 'rose' },
  { to: '/converter/area', icon: Gauge, label: 'Area', color: 'emerald' },
  { to: '/converter/volume', icon: Activity, label: 'Volume', color: 'cyan' },
  { to: '/converter/speed', icon: Wind, label: 'Speed', color: 'orange' },
  { to: '/converter/time', icon: Timer, label: 'Time', color: 'indigo' },
  { to: '/converter/data', icon: Database, label: 'Data Storage', color: 'sky' },
  { to: '/converter/pressure', icon: Gauge, label: 'Pressure', color: 'teal' },
  { to: '/converter/energy', icon: Flame, label: 'Energy', color: 'amber' },
  { to: '/converter/fuel', icon: Activity, label: 'Fuel Economy', color: 'green' },
  { to: '/converter/number', icon: Hash, label: 'Number Systems', color: 'pink' },
]

const currencies = ['USD', 'INR', 'PKR']

function DropdownMenu({ items, onClose }) {
  return (
    <div style={{
      position: 'absolute', top: 'calc(100% + 8px)', left: '50%',
      transform: 'translateX(-50%)', background: 'white',
      border: '1px solid #e2e8f0', borderRadius: '16px',
      boxShadow: '0 20px 40px rgb(0 0 0 / 0.12)', padding: '0.875rem',
      minWidth: '460px', animation: 'fadeIn 0.18s ease', zIndex: 200
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.25rem' }}>
        {items.map(({ to, icon: Icon, label, color }) => (
          <Link key={to} to={to} onClick={onClose} style={{
            display: 'flex', alignItems: 'center', gap: '0.625rem',
            padding: '0.5rem 0.75rem', borderRadius: '10px',
            textDecoration: 'none', color: '#374151', fontSize: '0.875rem',
            fontWeight: 500, transition: 'background 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.color = '#2563eb' }}
            onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '#374151' }}
          >
            <span className={`icon-container ${color}`} style={{ width: 30, height: 30, borderRadius: 8, flexShrink: 0, marginBottom: 0 }}>
              <Icon size={15} />
            </span>
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [calcOpen, setCalcOpen] = useState(false)
  const [convOpen, setConvOpen] = useState(false)
  const [mobileCalcOpen, setMobileCalcOpen] = useState(false)
  const [mobileConvOpen, setMobileConvOpen] = useState(false)
  const { currency, setCurrency } = useCurrency()
  const location = useLocation()
  const calcRef = useRef(null)
  const convRef = useRef(null)

  useEffect(() => {
    setMobileOpen(false)
    setCalcOpen(false)
    setConvOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function handler(e) {
      if (calcRef.current && !calcRef.current.contains(e.target)) setCalcOpen(false)
      if (convRef.current && !convRef.current.contains(e.target)) setConvOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const navBtnStyle = (active) => ({
    display: 'flex', alignItems: 'center', gap: '0.3rem',
    padding: '0.45rem 0.875rem', borderRadius: '8px',
    fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer',
    background: active ? '#f1f5f9' : 'none', border: 'none',
    color: active ? '#2563eb' : '#374151', textDecoration: 'none',
    fontFamily: 'var(--font-sans)', whiteSpace: 'nowrap', transition: 'background 0.15s, color 0.15s'
  })

  return (
    <nav className="navbar" style={{
      position: 'sticky', top: 0, zIndex: 1000,
      background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgb(0 0 0/0.06)'
    }}>
      {/* Main bar */}
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem',
        height: 64, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: '1rem'
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: 36, height: 36,
            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
            borderRadius: 10, display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: 'white'
          }}>
            <TrendingUp size={18} />
          </div>
          <span style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a' }}>
            iLove<span style={{ color: '#2563eb' }}>Profit</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
          <Link to="/" style={navBtnStyle(location.pathname === '/')}>Home</Link>

          <div style={{ position: 'relative' }} ref={calcRef}>
            <button style={navBtnStyle(location.pathname.startsWith('/calculator'))}
              onClick={() => { setCalcOpen(o => !o); setConvOpen(false) }}>
              <Calculator size={15} /> Calculators
              <ChevronDown size={14} style={{ transform: calcOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </button>
            {calcOpen && <DropdownMenu items={calcItems} onClose={() => setCalcOpen(false)} />}
          </div>

          <div style={{ position: 'relative' }} ref={convRef}>
            <button style={navBtnStyle(location.pathname.startsWith('/converter'))}
              onClick={() => { setConvOpen(o => !o); setCalcOpen(false) }}>
              <Ruler size={15} /> Converters
              <ChevronDown size={14} style={{ transform: convOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </button>
            {convOpen && <DropdownMenu items={converterItems} onClose={() => setConvOpen(false)} />}
          </div>

          <Link to="/blog" style={navBtnStyle(location.pathname.startsWith('/blog'))}>Blog</Link>
          <Link to="/support" style={navBtnStyle(location.pathname === '/support')}>Support</Link>
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <select value={currency} onChange={e => setCurrency(e.target.value)} style={{
            padding: '0.375rem 0.625rem', border: '1.5px solid #e2e8f0',
            borderRadius: 8, fontSize: '0.8125rem', fontWeight: 700,
            color: '#374151', background: 'white', cursor: 'pointer',
            fontFamily: 'var(--font-sans)'
          }}>
            {currencies.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              display: 'none', alignItems: 'center', justifyContent: 'center',
              width: 38, height: 38, borderRadius: 8,
              border: '1.5px solid #e2e8f0', background: 'white',
              cursor: 'pointer', color: '#374151'
            }}
            className="mobile-toggle-btn"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          borderTop: '1px solid #e2e8f0', background: 'white',
          padding: '1rem 1.5rem 1.5rem', maxHeight: '80vh', overflowY: 'auto'
        }}>
          <Link to="/" style={{ display: 'block', padding: '0.75rem 0', fontWeight: 600, color: '#374151', textDecoration: 'none', borderBottom: '1px solid #f1f5f9' }}>Home</Link>

          <button onClick={() => setMobileCalcOpen(o => !o)} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            width: '100%', padding: '0.75rem 0', fontWeight: 700, color: '#0f172a',
            background: 'none', border: 'none', borderBottom: '1px solid #f1f5f9',
            fontFamily: 'var(--font-sans)', cursor: 'pointer', fontSize: '0.9375rem'
          }}>
            Calculators <ChevronDown size={16} style={{ transform: mobileCalcOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
          </button>
          {mobileCalcOpen && (
            <div style={{ padding: '0.5rem 0 0.75rem 0.5rem', display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
              {calcItems.map(({ to, icon: Icon, label, color }) => (
                <Link key={to} to={to} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.5rem', borderRadius: 8, textDecoration: 'none', color: '#374151', fontSize: '0.875rem', fontWeight: 500 }}>
                  <span className={`icon-container ${color}`} style={{ width: 28, height: 28, borderRadius: 7, flexShrink: 0, marginBottom: 0 }}><Icon size={14} /></span>
                  {label}
                </Link>
              ))}
            </div>
          )}

          <button onClick={() => setMobileConvOpen(o => !o)} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            width: '100%', padding: '0.75rem 0', fontWeight: 700, color: '#0f172a',
            background: 'none', border: 'none', borderBottom: '1px solid #f1f5f9',
            fontFamily: 'var(--font-sans)', cursor: 'pointer', fontSize: '0.9375rem'
          }}>
            Unit Converters <ChevronDown size={16} style={{ transform: mobileConvOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
          </button>
          {mobileConvOpen && (
            <div style={{ padding: '0.5rem 0 0.75rem 0.5rem', display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
              {converterItems.map(({ to, icon: Icon, label, color }) => (
                <Link key={to} to={to} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.5rem', borderRadius: 8, textDecoration: 'none', color: '#374151', fontSize: '0.875rem', fontWeight: 500 }}>
                  <span className={`icon-container ${color}`} style={{ width: 28, height: 28, borderRadius: 7, flexShrink: 0, marginBottom: 0 }}><Icon size={14} /></span>
                  {label}
                </Link>
              ))}
            </div>
          )}

          <Link to="/blog" style={{ display: 'block', padding: '0.75rem 0', fontWeight: 600, color: '#374151', textDecoration: 'none', borderBottom: '1px solid #f1f5f9' }}>Blog</Link>
          <Link to="/support" style={{ display: 'block', padding: '0.75rem 0', fontWeight: 600, color: '#374151', textDecoration: 'none' }}>Support</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle-btn { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-toggle-btn { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
