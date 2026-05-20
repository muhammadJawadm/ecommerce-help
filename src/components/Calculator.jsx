import { Printer, RotateCcw } from 'lucide-react'
import { useCurrency } from '../context/CurrencyContext'

export default function Calculator({ title, description, children, onClear }) {
  const { currency, formatCurrency } = useCurrency()

  const handleExportPdf = () => {
    window.print()
  }

  return (
    <div className="calculator-page min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
              <p className="text-gray-600 text-lg">{description}</p>
            </div>

            <div className="flex flex-wrap gap-3 calculator-actions">
              <button
                type="button"
                onClick={handleExportPdf}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                <Printer size={16} />
                Export PDF
              </button>
              {onClear && (
                <button
                  type="button"
                  onClick={onClear}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  <RotateCcw size={16} />
                  Clear
                </button>
              )}
            </div>
          </div>

          <p className="sr-only">Current currency: {formatCurrency(1, currency)}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
