import { useState } from 'react'
import Calculator from '../../components/Calculator'

export default function eBayCalculator() {
  const [salePrice, setSalePrice] = useState(50)
  const [cogs, setCogs] = useState(12)
  const [category, setCategory] = useState('general')

  const categoryFees = {
    general: 0.1325,
    books: 0.09,
    clothing: 0.1325,
    electronics: 0.1325,
    collectibles: 0.10
  }

  const finalValueFee = salePrice * categoryFees[category]
  const paymentProcessingFee = salePrice * 0.029 + 0.30
  const totalFees = finalValueFee + paymentProcessingFee
  const profit = salePrice - cogs - totalFees
  const profitMargin = ((profit / salePrice) * 100).toFixed(2)
  const breakEvenPrice = cogs + totalFees

  return (
    <Calculator
      title="eBay Fee Calculator"
      description="Calculate eBay final value fees and marketplace fees for your category"
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
              Cost / COGS ($)
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
              Product Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="general">General - 13.25%</option>
              <option value="books">Books - 9%</option>
              <option value="clothing">Clothing - 13.25%</option>
              <option value="electronics">Electronics - 13.25%</option>
              <option value="collectibles">Collectibles - 10%</option>
            </select>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Fee Breakdown</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Final Value Fee ({(categoryFees[category] * 100).toFixed(2)}%)</span>
              <span className="font-bold">${finalValueFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Payment Processing (2.9% + $0.30)</span>
              <span className="font-bold">${paymentProcessingFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Total eBay Fees</span>
              <span className="font-bold text-red-600">${totalFees.toFixed(2)}</span>
            </div>

            <div className="pt-4 mt-4 border-t-2 border-blue-300">
              <div className="flex justify-between items-center mb-2 pb-2 border-b border-blue-200">
                <span className="text-gray-700">COGS</span>
                <span>${cogs.toFixed(2)}</span>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-900 font-bold">Net Profit</span>
                  <span className="text-2xl font-bold text-green-600">${profit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-bold">Profit Margin</span>
                  <span className="text-xl font-bold text-green-600">{profitMargin}%</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                <p className="text-sm text-gray-700">
                  Minimum price needed to break even: <span className="font-bold">${breakEvenPrice.toFixed(2)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-bold mb-4">💡 eBay Fee Structure Tips</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Final Value Fees vary by category (9-15%)</li>
          <li>• Managed Payments includes payment processing in the final value fee</li>
          <li>• Most eBay categories have a $750 cap on final value fees</li>
          <li>• Consider shipping costs as well - they impact overall profit</li>
          <li>• Use competitive pricing - eBay has high competition</li>
          <li>• Books have lower fees at 9%, making them great for resellers</li>
        </ul>
      </div>
    </Calculator>
  )
}
