import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'

export default function MarketingROICalculator() {
  const [adSpend, setAdSpend] = useState(1000)
  const [revenue, setRevenue] = useState(5000)
  const [cogs, setCogs] = useState(1500)
  const [operatingCosts, setOperatingCosts] = useState(800)
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const adSpendAmount = adSpend ?? 0
  const revenueAmount = revenue ?? 0
  const cogsAmount = cogs ?? 0
  const operatingAmount = operatingCosts ?? 0

  const profit = revenueAmount - cogsAmount - operatingAmount - adSpendAmount
  const roi = adSpendAmount ? ((profit / adSpendAmount) * 100).toFixed(2) : '0.00'
  const roas = adSpendAmount ? (revenueAmount / adSpendAmount).toFixed(2) : '0.00'
  const profitMargin = revenueAmount ? ((profit / revenueAmount) * 100).toFixed(2) : '0.00'

  const clearForm = () => {
    setAdSpend(null)
    setRevenue(null)
    setCogs(null)
    setOperatingCosts(null)
  }

  return (
    <Calculator
      title="Marketing ROI Calculator"
      description="Calculate return on investment for your marketing campaigns"
      onClear={clearForm}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ad Spend ({currency})
            </label>
            <input
              type="number"
              value={formatInputValue(adSpend, currency)}
              onChange={(e) => setAdSpend(parseCurrencyInput(e.target.value, currency))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Revenue Generated ({currency})
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
              COGS ({currency})
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
              Operating Costs ({currency})
            </label>
            <input
              type="number"
              value={formatInputValue(operatingCosts, currency)}
              onChange={(e) => setOperatingCosts(parseCurrencyInput(e.target.value, currency))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Marketing Analytics</h3>
          
          <div className="space-y-4">
            <div className="bg-blue-100 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-700 mb-1">ROAS (Return on Ad Spend)</p>
              <p className="text-3xl font-bold text-blue-600">{roas}:1</p>
              <p className="text-xs text-gray-600 mt-1">For every {formatCurrency(1, currency)} spent on ads, you earn {roas}x that amount</p>
            </div>

            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-700 mb-1">ROI (Return on Investment)</p>
              <p className="text-3xl font-bold text-green-600">{roi}%</p>
              <p className="text-xs text-gray-600 mt-1">Percentage profit on your ad spend</p>
            </div>

            <div className="bg-purple-100 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-700 mb-1">Net Profit</p>
              <p className="text-3xl font-bold text-purple-600">{formatCurrency(profit, currency)}</p>
              <p className="text-xs text-gray-600 mt-1">After all costs and ad spend</p>
            </div>

            <div className="bg-yellow-100 p-4 rounded-lg">
              <p className="text-sm text-gray-700 mb-1">Profit Margin</p>
              <p className="text-2xl font-bold text-yellow-600">{profitMargin}%</p>
              <p className="text-xs text-gray-600 mt-1">Percentage of revenue that's profit</p>
            </div>
          </div>
        </div>
      </div>

      {/* ROAS Benchmarks */}
      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-bold mb-4">📊 ROAS Benchmarks by Industry (2026)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-2 px-3">Platform/Industry</th>
                <th className="text-center py-2 px-3">Good ROAS</th>
                <th className="text-center py-2 px-3">Great ROAS</th>
                <th className="text-center py-2 px-3">Exceptional</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-2 px-3">Facebook/Instagram Ads</td>
                <td className="text-center">3:1</td>
                <td className="text-center">5:1</td>
                <td className="text-center">8:1+</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 px-3">Google Shopping</td>
                <td className="text-center">4:1</td>
                <td className="text-center">6:1</td>
                <td className="text-center">10:1+</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 px-3">Amazon Ads (ACOS)</td>
                <td className="text-center">25%</td>
                <td className="text-center">15%</td>
                <td className="text-center">10%</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 px-3">TikTok Ads</td>
                <td className="text-center">2:1</td>
                <td className="text-center">4:1</td>
                <td className="text-center">7:1+</td>
              </tr>
              <tr>
                <td className="py-2 px-3">Email Marketing</td>
                <td className="text-center">4:1</td>
                <td className="text-center">8:1</td>
                <td className="text-center">15:1+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 p-6 bg-blue-100 rounded-lg">
        <h3 className="text-lg font-bold mb-4">💡 Marketing ROI Optimization Tips</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Aim for minimum 3:1 ROAS (earn $3 for every $1 spent) to be profitable</li>
          <li>• Track every marketing channel separately - some underperform significantly</li>
          <li>• Test different audiences and creatives - winners can achieve 5:1+ ROAS</li>
          <li>• Lower CAC (Customer Acquisition Cost) = Higher ROI</li>
          <li>• Retargeting campaigns typically have 2-3x better ROAS than cold traffic</li>
          <li>• Calculate LTV (Customer Lifetime Value) - profits come from repeat purchases</li>
          <li>• Don't scale unprofitable campaigns - optimize first, then scale</li>
          <li>• Break-even ROAS varies by profit margin - thin margins need higher ROAS</li>
        </ul>
      </div>
    </Calculator>
  )
}
