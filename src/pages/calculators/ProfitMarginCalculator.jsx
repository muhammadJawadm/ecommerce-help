import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'

export default function ProfitMarginCalculator() {
  const [revenue, setRevenue] = useState(1000)
  const [cogs, setCogs] = useState(400)
  const [operatingExpenses, setOperatingExpenses] = useState(200)
  const [taxes, setTaxes] = useState(100)
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const revenueAmount = revenue ?? 0
  const cogsAmount = cogs ?? 0
  const operatingAmount = operatingExpenses ?? 0
  const taxAmount = taxes ?? 0

  const grossProfit = revenueAmount - cogsAmount
  const grossMargin = revenueAmount ? ((grossProfit / revenueAmount) * 100).toFixed(2) : '0.00'
  
  const operatingProfit = grossProfit - operatingAmount
  const operatingMargin = revenueAmount ? ((operatingProfit / revenueAmount) * 100).toFixed(2) : '0.00'
  
  const netProfit = operatingProfit - taxAmount
  const netMargin = revenueAmount ? ((netProfit / revenueAmount) * 100).toFixed(2) : '0.00'

  const clearForm = () => {
    setRevenue(null)
    setCogs(null)
    setOperatingExpenses(null)
    setTaxes(null)
  }

  return (
    <Calculator
      title="Profit Margin Calculator"
      description="Calculate gross, operating, and net profit margins with complete breakdown"
      onClear={clearForm}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Total Revenue ({currency})
            </label>
            <input
              type="number"
              value={formatInputValue(revenue, currency)}
              onChange={(e) => setRevenue(parseCurrencyInput(e.target.value, currency))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              COGS (Cost of Goods Sold)
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
              Operating Expenses (salaries, rent, marketing, etc.)
            </label>
            <input
              type="number"
                value={formatInputValue(operatingExpenses, currency)}
                onChange={(e) => setOperatingExpenses(parseCurrencyInput(e.target.value, currency))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Taxes & Other Expenses
            </label>
            <input
              type="number"
              value={formatInputValue(taxes, currency)}
              onChange={(e) => setTaxes(parseCurrencyInput(e.target.value, currency))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Margin Analysis</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b-2 border-blue-300">
              <span className="text-gray-700 font-semibold">Revenue</span>
              <span className="text-2xl font-bold text-blue-600">{formatCurrency(revenueAmount, currency)}</span>
            </div>

            <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-green-500">
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-700 font-semibold">Gross Profit</span>
                <span className="text-xl font-bold text-green-600">{formatCurrency(grossProfit, currency)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Gross Margin</span>
                <span className="text-lg font-bold text-green-600">{grossMargin}%</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Revenue minus COGS</p>
            </div>

            <div className="p-4 bg-white rounded-lg border-l-4 border-yellow-500">
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-700 font-semibold">Operating Profit</span>
                <span className="text-xl font-bold text-yellow-600">{formatCurrency(operatingProfit, currency)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Operating Margin</span>
                <span className="text-lg font-bold text-yellow-600">{operatingMargin}%</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">After operating expenses</p>
            </div>

            <div className="p-4 bg-white rounded-lg border-l-4 border-blue-500">
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-700 font-semibold">Net Profit</span>
                <span className="text-xl font-bold text-blue-600">{formatCurrency(netProfit, currency)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Net Margin</span>
                <span className="text-lg font-bold text-blue-600">{netMargin}%</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Bottom line after all expenses</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-900 mb-2">Gross Margin</h4>
          <p className="text-sm text-green-700 mb-3">
            Revenue minus the cost of goods sold. Shows production efficiency.
          </p>
          <p className="text-xs text-green-600"><strong>Target:</strong> 50-80% for ecommerce</p>
        </div>

        <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
          <h4 className="font-bold text-yellow-900 mb-2">Operating Margin</h4>
          <p className="text-sm text-yellow-700 mb-3">
            After operating expenses like salaries, rent, and marketing.
          </p>
          <p className="text-xs text-yellow-600"><strong>Target:</strong> 10-30% for ecommerce</p>
        </div>

        <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-bold text-blue-900 mb-2">Net Margin</h4>
          <p className="text-sm text-blue-700 mb-3">
            True bottom line profit after ALL expenses and taxes.
          </p>
          <p className="text-xs text-blue-600"><strong>Target:</strong> 5-20% for ecommerce</p>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-bold mb-4">📊 Ecommerce Margin Benchmarks by Industry (2026)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-2 px-3">Category</th>
                <th className="text-center py-2 px-3">Gross Margin</th>
                <th className="text-center py-2 px-3">Net Margin</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-2 px-3">Apparel & Fashion</td>
                <td className="text-center">50-60%</td>
                <td className="text-center">10-15%</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 px-3">Electronics</td>
                <td className="text-center">20-35%</td>
                <td className="text-center">5-10%</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 px-3">Beauty & Personal Care</td>
                <td className="text-center">65-75%</td>
                <td className="text-center">15-25%</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 px-3">Home & Garden</td>
                <td className="text-center">40-55%</td>
                <td className="text-center">8-15%</td>
              </tr>
              <tr>
                <td className="py-2 px-3">Books & Media</td>
                <td className="text-center">35-45%</td>
                <td className="text-center">5-12%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Calculator>
  )
}
