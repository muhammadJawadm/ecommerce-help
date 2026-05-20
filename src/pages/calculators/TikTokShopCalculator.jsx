import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'

export default function TikTokShopCalculator() {
  const [salePrice, setSalePrice] = useState(50)
  const [cogs, setCogs] = useState(12)
  const [category, setCategory] = useState('general')
  const [isCreatorContent, setIsCreatorContent] = useState(false)
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const sale = salePrice ?? 0
  const cost = cogs ?? 0

  const categoryCommissions = {
    general: 0.05,
    electronics: 0.08,
    beauty: 0.05,
    clothing: 0.05,
    home: 0.05
  }

  const sellerFee = sale * categoryCommissions[category]
  const paymentProcessingFee = sale * 0.035 + 0.3
  const creatorCommission = isCreatorContent ? sale * 0.15 : 0
  const totalFees = sellerFee + paymentProcessingFee + creatorCommission
  const profit = sale - cost - totalFees
  const profitMargin = sale ? ((profit / sale) * 100).toFixed(2) : '0.00'

  const clearForm = () => {
    setSalePrice(null)
    setCogs(null)
    setCategory('general')
    setIsCreatorContent(false)
  }

  return (
    <Calculator
      title="TikTok Shop Fee Calculator"
      description="Calculate TikTok Shop seller fees, commissions, and profit margins"
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
              Cost / COGS ({currency})
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
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="general">General - 5%</option>
              <option value="electronics">Electronics - 8%</option>
              <option value="beauty">Beauty - 5%</option>
              <option value="clothing">Clothing - 5%</option>
              <option value="home">Home - 5%</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="creator"
              checked={isCreatorContent}
              onChange={(e) => setIsCreatorContent(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="creator" className="ml-2 text-sm font-semibold text-gray-700">
              Using Creator Content (15% commission)
            </label>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Fee Breakdown</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Seller Fee ({(categoryCommissions[category] * 100).toFixed(0)}%)</span>
              <span className="font-bold">{formatCurrency(sellerFee, currency)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Payment Processing (3.5% + $0.30)</span>
              <span className="font-bold">{formatCurrency(paymentProcessingFee, currency)}</span>
            </div>

            {isCreatorContent && (
              <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                <span className="text-gray-700">Creator Commission (15%)</span>
                <span className="font-bold">{formatCurrency(creatorCommission, currency)}</span>
              </div>
            )}

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Total Fees</span>
              <span className="font-bold text-red-600">{formatCurrency(totalFees, currency)}</span>
            </div>

            <div className="pt-4 mt-4 border-t-2 border-blue-300">
              <div className="flex justify-between items-center mb-2 pb-2 border-b border-blue-200">
                <span className="text-gray-700">COGS</span>
                <span>{formatCurrency(cost, currency)}</span>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-900 font-bold">Net Profit</span>
                  <span className="text-2xl font-bold text-green-600">{formatCurrency(profit, currency)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-bold">Profit Margin</span>
                  <span className="text-xl font-bold text-green-600">{profitMargin}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-bold mb-4">💡 TikTok Shop Success Tips</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• TikTok Shop commission rates are 2-8% depending on category (much lower than eBay!)</li>
          <li>• Payment processing fee is 3.5% + $0.30 (lower than most platforms)</li>
          <li>• Using creator content adds 15% commission to creators</li>
          <li>• TikTok Shop is fastest growing ecommerce platform in 2025-2026</li>
          <li>• Great for dropshipping and viral marketing</li>
          <li>• Consider combining organic TikTok content with shop links for maximum reach</li>
        </ul>
      </div>
    </Calculator>
  )
}
