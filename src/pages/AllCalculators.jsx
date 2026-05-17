import { Link } from 'react-router-dom'
import { Package, ShoppingCart, TrendingUp, DollarSign, Zap, BarChart3, Truck, Target, PieChart, Calculator } from 'lucide-react'

export default function AllCalculators() {
  const calculators = [
    {
      icon: Package,
      title: 'Amazon FBA Fee Calculator',
      description: 'Calculate itemized FBA fees including referral, fulfillment, and storage costs',
      category: 'Ecommerce',
      link: '/calculator/amazon-fba'
    },
    {
      icon: Package,
      title: 'Amazon FBA Profit Calculator',
      description: 'Calculate FBA profits, margins, and ROI with complete fee breakdown',
      category: 'Ecommerce',
      link: '/calculator/amazon-fba'
    },
    {
      icon: ShoppingCart,
      title: 'Shopify Profit Margin Calculator',
      description: 'Calculate your Shopify store profit margins instantly',
      category: 'Ecommerce',
      link: '/calculator/shopify-profit'
    },
    {
      icon: TrendingUp,
      title: 'eBay Fee Calculator',
      description: 'Calculate eBay selling fees and final value fees by category',
      category: 'Ecommerce',
      link: '/calculator/ebay-fees'
    },
    {
      icon: DollarSign,
      title: 'Etsy Fee Calculator',
      description: 'Understand Etsy transaction, payment processing, and listing fees',
      category: 'Ecommerce',
      link: '/calculator/etsy-fees'
    },
    {
      icon: Zap,
      title: 'TikTok Shop Fee Calculator',
      description: 'Calculate TikTok Shop seller fees and commission rates',
      category: 'Ecommerce',
      link: '/calculator/tiktok-shop'
    },
    {
      icon: BarChart3,
      title: 'Break-Even ROAS Calculator',
      description: 'Find your break-even ROAS and understand silent profit killers',
      category: 'Marketing',
      link: '/calculator/break-even-roas'
    },
    {
      icon: PieChart,
      title: 'Profit Margin Calculator',
      description: 'Calculate gross and net profit margins with all costs',
      category: 'Finance',
      link: '/calculator/profit-margin'
    },
    {
      icon: Truck,
      title: 'Shipping Cost Calculator',
      description: 'Compare USPS, UPS, FedEx, and DHL shipping rates',
      category: 'Ecommerce',
      link: '/calculator/shipping'
    },
    {
      icon: Target,
      title: 'Marketing ROI Calculator',
      description: 'Calculate return on investment for marketing campaigns',
      category: 'Marketing',
      link: '/calculator/marketing-roi'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Calculators</h1>
          <p className="text-gray-600 text-lg">
            48+ free tools to optimize your ecommerce business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc, index) => {
            const Icon = calc.icon
            return (
              <Link
                key={index}
                to={calc.link}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-start mb-4">
                  <Icon className="w-10 h-10 text-blue-600 mr-3" />
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded">
                    {calc.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{calc.title}</h3>
                <p className="text-gray-600 text-sm">{calc.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
