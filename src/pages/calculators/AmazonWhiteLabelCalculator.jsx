import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'

const INITIAL = {
  salePrice: 45,
  cogs: 12,
  fbaFee: 5.5,
  prepFee: 1.25,
  adSpend: 8,
  launchBudget: 15,
}

export default function AmazonWhiteLabelCalculator() {
  const [salePrice, setSalePrice] = useState(INITIAL.salePrice)
  const [cogs, setCogs] = useState(INITIAL.cogs)
  const [fbaFee, setFbaFee] = useState(INITIAL.fbaFee)
  const [prepFee, setPrepFee] = useState(INITIAL.prepFee)
  const [adSpend, setAdSpend] = useState(INITIAL.adSpend)
  const [launchBudget, setLaunchBudget] = useState(INITIAL.launchBudget)
  const { currency, formatCurrency, formatInputValue, parseCurrencyInput } = useCurrency()

  const sale = salePrice ?? 0
  const cost = cogs ?? 0
  const fbaCost = fbaFee ?? 0
  const prepCost = prepFee ?? 0
  const ads = adSpend ?? 0
  const launch = launchBudget ?? 0

  const totalCosts = cost + fbaCost + prepCost + ads + launch
  const profit = sale - totalCosts
  const profitMargin = sale ? ((profit / sale) * 100).toFixed(2) : '0.00'
  const breakEvenPrice = totalCosts

  const clearForm = () => {
    setSalePrice(null)
    setCogs(null)
    setFbaFee(null)
    setPrepFee(null)
    setAdSpend(null)
    setLaunchBudget(null)
  }

  return (
    <Calculator
      title="Amazon White Label Calculator"
      description="Model white label margins, launch spend, and Amazon fulfillment costs"
      onClear={clearForm}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Sale Price ({currency})</label>
            <input type="number" value={formatInputValue(salePrice, currency)} onChange={(e) => setSalePrice(parseCurrencyInput(e.target.value, currency))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">COGS ({currency})</label>
            <input type="number" value={formatInputValue(cogs, currency)} onChange={(e) => setCogs(parseCurrencyInput(e.target.value, currency))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">FBA Fee ({currency})</label>
            <input type="number" value={formatInputValue(fbaFee, currency)} onChange={(e) => setFbaFee(parseCurrencyInput(e.target.value, currency))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Prep / Packaging ({currency})</label>
            <input type="number" value={formatInputValue(prepFee, currency)} onChange={(e) => setPrepFee(parseCurrencyInput(e.target.value, currency))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ad Spend ({currency})</label>
            <input type="number" value={formatInputValue(adSpend, currency)} onChange={(e) => setAdSpend(parseCurrencyInput(e.target.value, currency))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Launch Budget ({currency})</label>
            <input type="number" value={formatInputValue(launchBudget, currency)} onChange={(e) => setLaunchBudget(parseCurrencyInput(e.target.value, currency))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">White Label Profit</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Total Costs</span>
              <span className="font-bold text-red-600">{formatCurrency(totalCosts, currency)}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-blue-200">
              <span className="text-gray-700">Break-even Price</span>
              <span className="font-bold">{formatCurrency(breakEvenPrice, currency)}</span>
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