import { useState } from 'react'
import Calculator from '../../components/Calculator'

export default function ShopifyCalculator() {
  const [revenue, setRevenue] = useState(5000)
  const [cogs, setCogs] = useState(1500)
  const [shopifyPlan, setShopifyPlan] = useState('basic')
  const [appsMonthly, setAppsMonthly] = useState(150)
  const [adSpend, setAdSpend] = useState(1000)

  const planCosts = {
    basic: 29,
    shopify: 299,
    advanced: 2299
  }

  const paymentFee = revenue * 0.029 + revenue * 0.30 / 100
  const totalCosts = cogs + planCosts[shopifyPlan] + appsMonthly + adSpend + paymentFee
  const profit = revenue - totalCosts
  const profitMargin = ((profit / revenue) * 100).toFixed(2)
  const breakEvenRevenue = totalCosts / (1 - (profit / revenue))

  return (
    <Calculator
      title="Shopify Profit Calculator"
      description="Calculate your Shopify store profitability with all expenses"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Monthly Revenue ($)
            </label>
            <input
              type="number"
              value={revenue}
              onChange={(e) => setRevenue(parseFloat(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              COGS (Cost of Goods Sold)
            </label>
            <input
              type="number"
              value={cogs}
              onChange={(e) => setCogs(parseFloat(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Shopify Plan
            </label>
            <select
              value={shopifyPlan}
              onChange={(e) => setShopifyPlan(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="basic">Basic - $29/month</option>
              <option value="shopify">Shopify - $299/month</option>
              <option value="advanced">Advanced - $2,299/month</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Monthly App Subscriptions ($)
            </label>
            <input
              type="number"
              value={appsMonthly}
              onChange={(e) => setAppsMonthly(parseFloat(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Monthly Ad Spend ($)
            </label>
            <input
              type="number"
              value={adSpend}
              onChange={(e) => setAdSpend(parseFloat(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Profit Analysis</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Revenue</span>
              <span className="font-bold">${revenue.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">COGS</span>
              <span className="font-bold">${cogs.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Shopify Plan</span>
              <span className="font-bold">${planCosts[shopifyPlan].toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Payment Processing (2.9% + $0.30)</span>
              <span className="font-bold">${paymentFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Apps & Subscriptions</span>
              <span className="font-bold">${appsMonthly.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Ad Spend</span>
              <span className="font-bold">${adSpend.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Total Expenses</span>
              <span className="font-bold text-red-600">${totalCosts.toFixed(2)}</span>
            </div>

            <div className="pt-4 mt-4 border-t-2 border-blue-300">
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-900 font-bold">Net Profit</span>
                  <span className="text-2xl font-bold text-green-600">${profit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-bold">Profit Margin</span>
                  <span className="text-xl font-bold text-green-600">{profitMargin}%</span>
                </div>
              </div>

              <div className="p-3 bg-blue-100 rounded-lg">
                <p className="text-sm text-gray-700">A healthy ecommerce margin is typically 20-40% depending on your niche.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-bold mb-4">📊 Shopify Profitability Tips</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Shopify charges 2.9% + 30¢ per transaction on Basic plan (lower on higher tiers)</li>
          <li>• Use Shopify Payments to avoid additional gateway fees</li>
          <li>• Monitor app subscriptions - they add up quickly</li>
          <li>• Higher plans offer better rates but start at $299/month</li>
          <li>• Factor in email marketing, shipping, and customer service costs</li>
          <li>• Aim for 3:1 ROAS (for every $1 spent on ads, earn $3 in revenue)</li>
        </ul>
      </div>
    </Calculator>
  )
}
