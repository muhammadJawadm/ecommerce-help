import { useState } from 'react'
import Calculator from '../../components/Calculator'

export default function AmazonFBACalculator() {
  const [salePrice, setSalePrice] = useState(50)
  const [cogs, setCogs] = useState(12)
  const [weight, setWeight] = useState(1)
  const [adSpend, setAdSpend] = useState(12)

  // FBA Fee Calculations
  const referralFee = salePrice * 0.15
  const fulfillmentFee = weight > 1 ? 3.22 + (weight - 1) * 0.39 : 3.22
  const storageFee = weight * 0.78 / 100
  const totalFees = referralFee + fulfillmentFee + storageFee
  const profit = salePrice - cogs - totalFees - adSpend
  const profitMargin = ((profit / salePrice) * 100).toFixed(2)
  const breakEvenROAS = ((cogs + totalFees) / salePrice).toFixed(2)

  return (
    <Calculator
      title="Amazon FBA Calculator"
      description="Calculate FBA fees, storage costs, and profitability with complete breakdown"
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
              Unit Cost / COGS ($)
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
              Weight (lbs)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ad Spend Per Sale ($)
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
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Fee Breakdown</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Referral Fee (15%)</span>
              <span className="font-bold">${referralFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Fulfillment Fee</span>
              <span className="font-bold">${fulfillmentFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Storage Fee</span>
              <span className="font-bold">${storageFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Total FBA Fees</span>
              <span className="font-bold text-red-600">${totalFees.toFixed(2)}</span>
            </div>

            <div className="pt-4 mt-4 border-t-2 border-blue-300">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">COGS</span>
                <span>${cogs.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Ad Spend</span>
                <span>${adSpend.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-4 pb-4 border-b-2 border-blue-300">
                <span className="text-gray-700">Total Costs</span>
                <span>${(cogs + totalFees + adSpend).toFixed(2)}</span>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-900 font-bold">Net Profit</span>
                  <span className="text-2xl font-bold text-green-600">${profit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-bold">Margin</span>
                  <span className="text-xl font-bold text-green-600">{profitMargin}%</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <p className="text-sm text-gray-700">Break-even ROAS: <span className="font-bold">{breakEvenROAS}x</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-bold mb-4">💡 Tips for Amazon FBA Success</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Monitor seasonal storage fees (September rates are higher)</li>
          <li>• Products under 12 oz have lower fulfillment fees</li>
          <li>• Account for product returns (typically 8-15% depending on category)</li>
          <li>• Consider long-term storage fees for slow-moving inventory</li>
          <li>• Optimize product weight and dimensions to reduce fulfillment costs</li>
        </ul>
      </div>
    </Calculator>
  )
}
