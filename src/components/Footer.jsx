import { Link } from 'react-router-dom'
import { TrendingUp, Mail, ExternalLink, Link2, Calculator, Ruler, BookOpen } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer" style={{
      background: '#0f172a',
      color: '#94a3b8',
      padding: '3.5rem 1.5rem 1.5rem',
      marginTop: 'auto'
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem'
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
              <div style={{
                width: 36, height: 36,
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                borderRadius: 10, display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: 'white', flexShrink: 0
              }}>
                <TrendingUp size={18} />
              </div>
              <span style={{ fontSize: '1.125rem', fontWeight: 800, color: '#f1f5f9' }}>
                iLove<span style={{ color: '#60a5fa' }}>Profit</span>
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Free ecommerce calculators and unit converters. No signup, no credit card, instant results.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: Mail, label: 'Email', href: 'mailto:malikjawadkanyal@gmail.com' },
                { icon: ExternalLink, label: 'Twitter', href: '#' },
                { icon: Link2, label: 'LinkedIn', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label} style={{
                  width: 34, height: 34, borderRadius: 8,
                  background: '#1e293b', color: '#94a3b8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.15s, color 0.15s', textDecoration: 'none'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#1e293b'; e.currentTarget.style.color = '#94a3b8' }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Ecommerce Calculators */}
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: 700, color: '#f1f5f9', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              <Calculator size={13} /> Calculators
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                ['Amazon FBA', '/calculator/amazon-fba'],
                ['Shopify Profit', '/calculator/shopify-profit'],
                ['eBay Fees', '/calculator/ebay-fees'],
                ['Etsy Fees', '/calculator/etsy-fees'],
                ['TikTok Shop', '/calculator/tiktok-shop'],
                ['Profit Margin', '/calculator/profit-margin'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} style={{
                    fontSize: '0.875rem', color: '#94a3b8',
                    textDecoration: 'none', transition: 'color 0.15s'
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#60a5fa'}
                    onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unit Converters */}
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: 700, color: '#f1f5f9', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              <Ruler size={13} /> Unit Converters
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                ['Length', '/converter/length'],
                ['Weight & Mass', '/converter/weight'],
                ['Temperature', '/converter/temperature'],
                ['Area', '/converter/area'],
                ['Volume', '/converter/volume'],
                ['Speed', '/converter/speed'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} style={{ fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
                    onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: 700, color: '#f1f5f9', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              <BookOpen size={13} /> Resources
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                ['Blog & Guides', '/blog'],
                ['All Calculators', '/calculators'],
                ['All Converters', '/converters'],
                ['Support', '/support'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} style={{ fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#34d399'}
                    onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid #1e293b', paddingTop: '1.5rem',
          display: 'flex', flexWrap: 'wrap', gap: '0.75rem',
          justifyContent: 'space-between', alignItems: 'center',
          fontSize: '0.8125rem'
        }}>
          <p>© 2026 iLoveProfit. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            Free · No Signup · Real-time Results
          </p>
        </div>
      </div>
    </footer>
  )
}
