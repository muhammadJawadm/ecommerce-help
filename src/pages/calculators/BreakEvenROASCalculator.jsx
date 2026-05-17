import { useState } from 'react'
import Calculator from '../../components/Calculator'

export default function BreakEvenROASCalculator() {
  const [salePrice, setSalePrice] = useState(50)
  const [cogs, setCogs] = useState(12)
  const [platformFeePercent, setPlatformFeePercent] = useState(0.15)
  const [paymentFeePercent, setPaymentFeePercent] = useState(0.05)
  const [shippingCost, setShippingCost] = useState(5)
  const [returnRate, setReturnRate] = useState(0.10)
  const [appCostPerUnit, setAppCostPerUnit] = useState(0.50)

  const platformFee = salePrice * platformFeePercent
  const paymentFee = salePrice * paymentFeePercent
  const returnCost = salePrice * returnRate
  const totalCostsBeforeAds = cogs + platformFee + paymentFee + shippingCost + returnCost + appCostPerUnit

  const breakEvenROAS = (totalCostsBeforeAds / salePrice).toFixed(2)
  const allowableCAC = (salePrice - totalCostsBeforeAds).toFixed(2)
  
  // Recommended ROAS for profitability
  const recommendedROAS = (breakEvenROAS * 1.5).toFixed(2)
  const profitAtRecommendedROAS = (salePrice - totalCostsBeforeAds - (salePrice / recommendedROAS)).toFixed(2)

  return (
    <Calculator
      title="Break-Even ROAS Calculator"
      description="Find your true break-even ROAS including all hidden costs and fees"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Sale Price ($)
            </label>
            <input
              type="number"
              value={salePrice}
              onChange={(e) => setSalePrice(parseFloat(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              COGS ($)
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
              Platform Fee ({(platformFeePercent * 100).toFixed(0)}%)
            </label>
            <input
              type="number"
              value={platformFeePercent * 100}
              onChange={(e) => setPlatformFeePercent(parseFloat(e.target.value) / 100)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Payment Fee ({(paymentFeePercent * 100).toFixed(1)}%)
            </label>
            <input
              type="number"
              value={paymentFeePercent * 100}
              onChange={(e) => setPaymentFeePercent(parseFloat(e.target.value) / 100)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Shipping Cost ($)
            </label>
            <input
              type="number"
              value={shippingCost}
              onChange={(e) => setShippingCost(parseFloat(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Return Rate ({(returnRate * 100).toFixed(0)}%)
            </label>
            <input
              type="number"
              value={returnRate * 100}
              onChange={(e) => setReturnRate(parseFloat(e.target.value) / 100)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              App Cost Per Unit ($)
            </label>
            <input
              type="number"
              value={appCostPerUnit}
              onChange={(e) => setAppCostPerUnit(parseFloat(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Cost Analysis</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">COGS</span>
              <span className="font-bold">${cogs.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Platform Fee</span>
              <span className="font-bold">${platformFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Payment Fee</span>
              <span className="font-bold">${paymentFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Shipping</span>
              <span className="font-bold">${shippingCost.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Return Cost Loss</span>
              <span className="font-bold">${returnCost.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">App Costs</span>
              <span className="font-bold">${appCostPerUnit.toFixed(2)}</span>
            </div>

            <div className="pt-4 mt-4 border-t-2 border-blue-300">
              <div className="bg-red-100 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-700 mb-2">Break-Even ROAS</p>
                <p className="text-3xl font-bold text-red-600">{breakEvenROAS}x</p>
                <p className="text-xs text-gray-600 mt-2">You must earn ${breakEvenROAS} for every $1 spent on ads just to break even</p>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-700 mb-2">Recommended ROAS (50% Margin)</p>
                <p className="text-3xl font-bold text-yellow-700">{recommendedROAS}x</p>
                <p className="text-xs text-gray-600 mt-2">Profit at this ROAS: ${profitAtRecommendedROAS}</p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">Allowable CAC Per Unit</p>
                <p className="text-2xl font-bold text-green-600">${allowableCAC}</p>
                <p className="text-xs text-gray-600 mt-2">Max you can spend per customer to break even</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-bold mb-4">⚠️ The 5 Silent Profit Killers</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Return Rate Bleed:</strong> A 10% refund rate on $50 products = $5 lost per sale</li>
          <li>• <strong>Payment Fee Drain:</strong> 2.9% + 30¢ on Shopify = 3.9% of revenue you don't see</li>
          <li>• <strong>App Subscription Creep:</strong> $150/month in apps = $0.50 per unit on 300 sales</li>
          <li>• <strong>Platform Fee Reduction:</strong> Amazon 15%, Etsy 6.5%, eBay 13.25%</li>
          <li>• <strong>Blended CAC vs Reported ROAS:</strong> Actual CAC is higher than ad manager shows</li>
        </ul>
      </div>

      <div className="mt-8 p-6 bg-blue-100 rounded-lg">
        <h3 className="text-lg font-bold mb-4">💡 Optimization Tips</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• A healthy ecommerce ROAS is 3:1 to 5:1 (earn $3-5 for every $1 spent)</li>
          <li>• Reduce return rates through better product descriptions and photos</li>
          <li>• Audit app subscriptions monthly - most stores have unnecessary apps</li>
          <li>• Consider higher AOV (Average Order Value) to spread fixed costs</li>
          <li>• Test different platforms - they have vastly different economics</li>
        </ul>
      </div>
    </Calculator>
  )
}
