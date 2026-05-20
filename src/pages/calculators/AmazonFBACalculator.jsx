import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'

export default function AmazonFBACalculator() {
  const [salePrice, setSalePrice] = useState(50)
  const [cogs, setCogs] = useState(12)
  const [weight, setWeight] = useState(1)
  const [adSpend, setAdSpend] = useState(12)
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const sale = salePrice ?? 0
  const productCost = cogs ?? 0
  const parcelWeight = weight ?? 0
  const ads = adSpend ?? 0

  // FBA Fee Calculations
  const referralFee = sale * 0.15
  const fulfillmentFee = parcelWeight > 1 ? 3.22 + (parcelWeight - 1) * 0.39 : 3.22
  const storageFee = parcelWeight * 0.78 / 100
  const totalFees = referralFee + fulfillmentFee + storageFee
  const profit = sale - productCost - totalFees - ads
  const profitMargin = sale ? ((profit / sale) * 100).toFixed(2) : '0.00'
  const breakEvenROAS = sale ? ((productCost + totalFees) / sale).toFixed(2) : '0.00'

  const clearForm = () => {
    setSalePrice(null)
    setCogs(null)
    setWeight(null)
    setAdSpend(null)
  }

  return (
    <Calculator
      title="Amazon FBA Calculator"
      description="Calculate FBA fees, storage costs, and profitability with complete breakdown"
      onClear={clearForm}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Sale Price ({currency})
            </label>
            <input
              type="number"
              value={formatInputValue(salePrice, currency)}
              onChange={(e) => setSalePrice(parseCurrencyInput(e.target.value, currency))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Unit Cost / COGS ({currency})
            </label>
            <input
              type="number"
              value={formatInputValue(cogs, currency)}
              onChange={(e) => setCogs(parseCurrencyInput(e.target.value, currency))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Weight (lbs)
            </label>
            <input
              type="number"
              value={weight ?? ''}
              onChange={(e) => setWeight(e.target.value === '' ? null : parseFloat(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ad Spend Per Sale ({currency})
            </label>
            <input
              type="number"
              value={formatInputValue(adSpend, currency)}
              onChange={(e) => setAdSpend(parseCurrencyInput(e.target.value, currency))}
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
              <span className="font-bold">{formatCurrency(referralFee, currency)}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Fulfillment Fee</span>
              <span className="font-bold">{formatCurrency(fulfillmentFee, currency)}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Storage Fee</span>
              <span className="font-bold">{formatCurrency(storageFee, currency)}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Total FBA Fees</span>
              <span className="font-bold text-red-600">{formatCurrency(totalFees, currency)}</span>
            </div>

            <div className="pt-4 mt-4 border-t-2 border-blue-300">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">COGS</span>
                <span>{formatCurrency(productCost, currency)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Ad Spend</span>
                <span>{formatCurrency(ads, currency)}</span>
              </div>
              <div className="flex justify-between items-center mb-4 pb-4 border-b-2 border-blue-300">
                <span className="text-gray-700">Total Costs</span>
                <span>{formatCurrency(productCost + totalFees + ads, currency)}</span>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-900 font-bold">Net Profit</span>
                  <span className="text-2xl font-bold text-green-600">{formatCurrency(profit, currency)}</span>
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
