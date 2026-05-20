import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'

export default function EtsyCalculator() {
  const [salePrice, setSalePrice] = useState(50)
  const [cogs, setCogs] = useState(12)
  const [shipping, setShipping] = useState(5)
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const sale = salePrice ?? 0
  const cost = cogs ?? 0
  const shippingCost = shipping ?? 0

  const transactionFee = sale * 0.065
  const paymentProcessingFee = sale * 0.04 + 0.2
  const listingFee = 0.2
  const shippingTransaction = shippingCost * 0.065

  const totalFees = transactionFee + paymentProcessingFee + listingFee + shippingTransaction
  const profit = sale - cost - shippingCost - totalFees
  const profitMargin = sale ? ((profit / sale) * 100).toFixed(2) : '0.00'
  const breakEvenPrice = cost + shippingCost + totalFees

  const clearForm = () => {
    setSalePrice(null)
    setCogs(null)
    setShipping(null)
  }

  return (
    <Calculator
      title="Etsy Fee Calculator"
      description="Calculate transaction, payment processing, and listing fees for Etsy sellers"
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
              Shipping Cost ({currency})
            </label>
            <input
              type="number"
              value={formatInputValue(shipping, currency)}
              onChange={(e) => setShipping(parseCurrencyInput(e.target.value, currency))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Fee Breakdown</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Transaction Fee (6.5%)</span>
              <span className="font-bold">{formatCurrency(transactionFee, currency)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Payment Processing (4% + $0.20)</span>
              <span className="font-bold">{formatCurrency(paymentProcessingFee, currency)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Listing Fee</span>
              <span className="font-bold">{formatCurrency(listingFee, currency)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Shipping Transaction Fee (6.5%)</span>
              <span className="font-bold">{formatCurrency(shippingTransaction, currency)}</span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Total Etsy Fees</span>
              <span className="font-bold text-red-600">{formatCurrency(totalFees, currency)}</span>
            </div>

            <div className="pt-4 mt-4 border-t-2 border-blue-300">
              <div className="flex justify-between items-center mb-2 pb-2 border-b border-blue-200">
                <span className="text-gray-700">COGS</span>
                <span>{formatCurrency(cost, currency)}</span>
              </div>
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-blue-200">
                <span className="text-gray-700">Shipping</span>
                <span>{formatCurrency(shippingCost, currency)}</span>
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

              <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                <p className="text-sm text-gray-700">
                  Minimum price needed: <span className="font-bold">{formatCurrency(breakEvenPrice, currency)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-bold mb-4">💡 Etsy Seller Tips</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Etsy is perfect for handmade, vintage, and craft supplies</li>
          <li>• Transaction fee is 6.5% + payment processing (4% + $0.20)</li>
          <li>• Each listing costs $0.20 and lasts 4 months</li>
          <li>• Etsy charges 6.5% on shipping costs too</li>
          <li>• Consider using Etsy Ads to boost visibility (additional cost)</li>
          <li>• Handmade sellers can build loyal audiences with great branding</li>
        </ul>
      </div>
    </Calculator>
  )
}
