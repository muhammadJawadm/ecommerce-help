import { Link } from 'react-router-dom'
import { Package, ShoppingCart, TrendingUp, DollarSign, Zap, BarChart3, HelpCircle, Store, Factory } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Package,
      title: 'Amazon FBA',
      description: 'Calculate FBA fees, storage, and profit margins',
      link: '/calculator/amazon-fba'
    },
    {
      icon: ShoppingCart,
      title: 'Shopify Profit',
      description: 'Analyze Shopify store profitability instantly',
      link: '/calculator/shopify-profit'
    },
    {
      icon: TrendingUp,
      title: 'eBay Fees',
      description: 'Calculate eBay selling fees and final value fees',
      link: '/calculator/ebay-fees'
    },
    {
      icon: DollarSign,
      title: 'Etsy Calculator',
      description: 'Understand Etsy fees and profit margins',
      link: '/calculator/etsy-fees'
    },
    {
      icon: Zap,
      title: 'TikTok Shop',
      description: 'Calculate TikTok Shop seller fees and commissions',
      link: '/calculator/tiktok-shop'
    },
    {
      icon: BarChart3,
      title: 'ROAS Calculator',
      description: 'Find your break-even ROAS for advertising',
      link: '/calculator/break-even-roas'
    },
    {
      icon: Store,
      title: 'WooCommerce Profit',
      description: 'Calculate WooCommerce store profit after fees and ads',
      link: '/calculator/woocommerce-profit'
    },
    {
      icon: Factory,
      title: 'Amazon White Label',
      description: 'Model margins for private label and white label Amazon products',
      link: '/calculator/amazon-white-label'
    },
    {
      icon: HelpCircle,
      title: 'Support Center',
      description: 'Send a request to the help desk with your calculator questions',
      link: '/support'
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Free Ecommerce Calculator Tools</h1>
          <p className="text-xl text-blue-100 mb-4">
            Calculate fees, profit margins, and business metrics for Amazon, Shopify, eBay, Etsy, TikTok Shop and more
          </p>
          <p className="text-blue-100 mb-8">No signup • No credit card • Real-time results • All calculations in your browser</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/calculators"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Browse All Calculators
            </Link>
            <Link
              to="/blog"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition"
            >
              Read Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition hover:scale-105"
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Optimizing Your Business Today</h2>
          <p className="text-gray-600 text-lg mb-8">
            Whether you're selling on Amazon, Shopify, eBay, or Etsy, our free calculators help you understand your true profit margins and make better business decisions.
          </p>
          <Link
            to="/calculators"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Explore All Tools
          </Link>
        </div>
      </section>
    </div>
  )
}
