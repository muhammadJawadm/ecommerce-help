import { Link } from 'react-router-dom'
import { BookOpen, Clock, ChevronRight, Tag } from 'lucide-react'

const blogPosts = [
  { slug: 'amazon-fba-complete-guide', title: 'How to Sell on Amazon in 2026: Complete Beginner\'s Guide', excerpt: 'Step-by-step guide to setting up an Amazon seller account, choosing FBA vs FBM, product research, and launching your first product.', category: 'Amazon', date: 'May 15, 2026', readTime: '12 min', color: 'orange' },
  { slug: 'amazon-ppc-acos-guide', title: 'Amazon PPC & ACOS: Complete 2026 Guide', excerpt: 'Master Amazon advertising metrics, calculate break-even ACOS, understand TACOS, and optimize your ad spend for maximum profit.', category: 'Amazon', date: 'May 10, 2026', readTime: '15 min', color: 'orange' },
  { slug: 'paypal-business-fees', title: 'PayPal Business Fees 2026: Full Pricing Guide', excerpt: 'Complete breakdown of PayPal transaction fees, withdrawal rates, currency conversion fees, and how to reduce costs as a merchant.', category: 'Payments', date: 'May 8, 2026', readTime: '8 min', color: 'blue' },
  { slug: 'ecommerce-profit-margins', title: 'What Is a Good Profit Margin for Ecommerce?', excerpt: 'Industry benchmarks for apparel, electronics, beauty, and other categories. Learn what margins are healthy and how to improve yours.', category: 'Finance', date: 'May 5, 2026', readTime: '10 min', color: 'emerald' },
  { slug: 'stripe-vs-paypal', title: 'Stripe vs PayPal Fees 2026: Which Saves More?', excerpt: 'Side-by-side comparison of Stripe (2.9% + $0.30) vs PayPal (3.49% + $0.49). Calculate your savings and choose the best processor.', category: 'Payments', date: 'May 1, 2026', readTime: '7 min', color: 'blue' },
  { slug: 'tiktok-shop-guide', title: 'TikTok Shop Seller Fees 2026: Complete Guide', excerpt: 'Everything about TikTok Shop: commission rates (2–8%), payment fees, profit calculator, and why it\'s cheaper than eBay.', category: 'TikTok Shop', date: 'April 28, 2026', readTime: '9 min', color: 'violet' },
  { slug: 'ebay-selling-guide', title: 'How to Sell on eBay in 2026: Complete Beginner\'s Guide', excerpt: 'Seller account setup, listing optimization, shipping options, fees explained, and strategies to maximize your eBay sales.', category: 'eBay', date: 'April 25, 2026', readTime: '13 min', color: 'indigo' },
  { slug: 'shopify-profit-margins', title: 'Shopify Profit Margins: How Much Are You Really Making?', excerpt: 'Calculate true Shopify profitability: platform fees, payment processing, app subscriptions, shipping, and hidden costs.', category: 'Shopify', date: 'April 22, 2026', readTime: '11 min', color: 'emerald' },
]

const badgeColors = { Amazon: { bg: '#fff7ed', color: '#c2410c' }, Payments: { bg: '#eff6ff', color: '#1d4ed8' }, Finance: { bg: '#ecfdf5', color: '#065f46' }, 'TikTok Shop': { bg: '#f5f3ff', color: '#6d28d9' }, eBay: { bg: '#eef2ff', color: '#4338ca' }, Shopify: { bg: '#f0fdf4', color: '#166534' } }

export default function Blog() {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #7c3aed 100%)', padding: '3rem 1.5rem', color: 'white' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={22} color="white" />
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Blog & Guides</h1>
          </div>
          <p style={{ opacity: 0.85, fontSize: '1rem', maxWidth: 600 }}>
            In-depth articles on Amazon FBA, Shopify, eBay, fees, profit margins, and ecommerce strategy.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {blogPosts.map(post => {
            const badge = badgeColors[post.category] || { bg: '#f8fafc', color: '#374151' }
            return (
              <article key={post.slug} style={{
                background: 'white', border: '1px solid #e2e8f0',
                borderLeft: '4px solid #2563eb', borderRadius: '0 14px 14px 0',
                padding: '1.5rem', transition: 'box-shadow 0.2s, transform 0.2s'
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = '' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ background: badge.bg, color: badge.color, fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.625rem', borderRadius: 999, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Tag size={11} /> {post.category}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: '#94a3b8' }}>
                    <Clock size={12} /> {post.readTime}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginLeft: 'auto' }}>{post.date}</span>
                </div>

                <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <h2 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', lineHeight: 1.3, transition: 'color 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#2563eb'}
                    onMouseLeave={e => e.currentTarget.style.color = '#0f172a'}
                  >{post.title}</h2>
                </Link>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: '#2563eb', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', transition: 'gap 0.15s' }}>
                  Read Article <ChevronRight size={16} />
                </Link>
              </article>
            )
          })}
        </div>

        {/* Newsletter */}
        <div style={{ background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)', border: '1px solid #ddd6fe', borderRadius: 16, padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Stay Updated</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.25rem' }}>Get weekly updates on fee changes, new calculators, and ecommerce tips.</p>
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: '0.625rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input type="email" placeholder="Enter your email" className="form-input" style={{ maxWidth: 280 }} />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}
