import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Blog() {
  const blogPosts = [
    {
      slug: 'amazon-fba-complete-guide',
      title: 'How to Sell on Amazon in 2026: Complete Beginner\'s Guide',
      excerpt: 'Step-by-step guide to setting up an Amazon seller account, choosing FBA vs FBM, product research, and launching your first product.',
      category: 'Amazon',
      date: 'May 15, 2026',
      readTime: '12 min read'
    },
    {
      slug: 'amazon-ppc-acos-guide',
      title: 'Amazon PPC & ACOS: Complete 2026 Guide',
      excerpt: 'Master Amazon advertising metrics, calculate break-even ACOS, understand TACOS, and optimize your ad spend for maximum profit.',
      category: 'Amazon',
      date: 'May 10, 2026',
      readTime: '15 min read'
    },
    {
      slug: 'paypal-business-fees',
      title: 'PayPal Business Fees 2026: Full Pricing Guide',
      excerpt: 'Complete breakdown of PayPal transaction fees, withdrawal rates, currency conversion fees, and how to reduce costs as a merchant.',
      category: 'Payments',
      date: 'May 8, 2026',
      readTime: '8 min read'
    },
    {
      slug: 'ecommerce-profit-margins',
      title: 'What Is a Good Profit Margin for Ecommerce?',
      excerpt: 'Industry benchmarks for apparel, electronics, beauty, and other categories. Learn what margins are healthy and how to improve yours.',
      category: 'Finance',
      date: 'May 5, 2026',
      readTime: '10 min read'
    },
    {
      slug: 'stripe-vs-paypal',
      title: 'Stripe vs PayPal Fees 2026: Which Saves More?',
      excerpt: 'Side-by-side comparison of Stripe (2.9% + $0.30) vs PayPal (3.49% + $0.49). Calculate your savings and choose the best processor.',
      category: 'Payments',
      date: 'May 1, 2026',
      readTime: '7 min read'
    },
    {
      slug: 'tiktok-shop-guide',
      title: 'TikTok Shop Seller Fees 2026: Complete Guide',
      excerpt: 'Everything about TikTok Shop: commission rates (2-8%), payment fees, profit calculator, and why it\'s cheaper than eBay.',
      category: 'TikTok Shop',
      date: 'April 28, 2026',
      readTime: '9 min read'
    },
    {
      slug: 'ebay-selling-guide',
      title: 'How to Sell on eBay in 2026: Complete Beginner\'s Guide',
      excerpt: 'Seller account setup, listing optimization, shipping options, fees explained, and strategies to maximize your eBay sales.',
      category: 'eBay',
      date: 'April 25, 2026',
      readTime: '13 min read'
    },
    {
      slug: 'shopify-profit-margins',
      title: 'Shopify Profit Margins: How Much Are You Really Making?',
      excerpt: 'Calculate true Shopify profitability: platform fees, payment processing, app subscriptions, shipping, and hidden costs.',
      category: 'Shopify',
      date: 'April 22, 2026',
      readTime: '11 min read'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ecommerce Blog & Guides</h1>
          <p className="text-gray-600 text-lg">
            In-depth articles on Amazon FBA, Shopify, eBay, fees, profit margins, and more
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-500"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="group"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {post.title}
                </h2>
              </Link>

              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition"
                >
                  Read More
                  <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-4">
            Get weekly updates on fee changes, new calculators, and ecommerce tips
          </p>
          <form className="flex flex-col sm:flex-row gap-2 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
