import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'

const initialState = {
  revenue: 5000,
  cogs: 1800,
  hosting: 30,
  pluginCosts: 90,
  adSpend: 800,
}

export default function WooCommerceCalculator() {
  const [revenue, setRevenue] = useState(initialState.revenue)
  const [cogs, setCogs] = useState(initialState.cogs)
  const [hosting, setHosting] = useState(initialState.hosting)
  const [pluginCosts, setPluginCosts] = useState(initialState.pluginCosts)
  const [adSpend, setAdSpend] = useState(initialState.adSpend)
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const revenueAmount = revenue ?? 0
  const cogsAmount = cogs ?? 0
  const hostingAmount = hosting ?? 0
  const pluginAmount = pluginCosts ?? 0
  const adSpendAmount = adSpend ?? 0

  const paymentFee = revenueAmount * 0.029 + 0.3
  const totalCosts = cogsAmount + hostingAmount + pluginAmount + adSpendAmount + paymentFee
  const profit = revenueAmount - totalCosts
  const profitMargin = revenueAmount ? ((profit / revenueAmount) * 100).toFixed(2) : '0.00'

  const clearForm = () => {
    setRevenue(null)
    setCogs(null)
    setHosting(null)
    setPluginCosts(null)
    setAdSpend(null)
  }

  return (
    <Calculator
      title="WooCommerce Profit Calculator"
      description="Calculate WooCommerce store profit, fees, and recurring platform costs"
      onClear={clearForm}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Revenue ({currency})</label>
            <input type="number" value={formatInputValue(revenue, currency)} onChange={(e) => setRevenue(parseCurrencyInput(e.target.value, currency))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">COGS ({currency})</label>
            <input type="number" value={formatInputValue(cogs, currency)} onChange={(e) => setCogs(parseCurrencyInput(e.target.value, currency))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Hosting & Maintenance ({currency})</label>
            <input type="number" value={formatInputValue(hosting, currency)} onChange={(e) => setHosting(parseCurrencyInput(e.target.value, currency))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Plugin / App Costs ({currency})</label>
            <input type="number" value={formatInputValue(pluginCosts, currency)} onChange={(e) => setPluginCosts(parseCurrencyInput(e.target.value, currency))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ad Spend ({currency})</label>
            <input type="number" value={formatInputValue(adSpend, currency)} onChange={(e) => setAdSpend(parseCurrencyInput(e.target.value, currency))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Profit Breakdown</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Payment Processing</span>
              <span className="font-bold">{formatCurrency(paymentFee, currency)}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Hosting & Maintenance</span>
              <span className="font-bold">{formatCurrency(hostingAmount, currency)}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Plugin Costs</span>
              <span className="font-bold">{formatCurrency(pluginAmount, currency)}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Total Expenses</span>
              <span className="font-bold text-red-600">{formatCurrency(totalCosts, currency)}</span>
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
    </Calculator>
  )
}