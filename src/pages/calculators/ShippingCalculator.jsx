import { useState } from 'react'
import Calculator from '../../components/Calculator'
import { useCurrency } from '../../context/CurrencyContext'

export default function ShippingCalculator() {
  const [weight, setWeight] = useState(1)
  const [zipCode, setZipCode] = useState('10001')
  const [carrier, setCarrier] = useState('usps')
  const { currency, formatCurrency } = useCurrency()

  // Simplified shipping rates (2026)
  const shippingRates = {
    usps: {
      name: 'USPS',
      rates: {
        1: 5.45,
        2: 5.95,
        3: 6.45,
        5: 7.95,
        10: 12.45,
      }
    },
    ups: {
      name: 'UPS',
      rates: {
        1: 8.50,
        2: 9.75,
        3: 11.00,
        5: 14.00,
        10: 22.00,
      }
    },
    fedex: {
      name: 'FedEx',
      rates: {
        1: 9.00,
        2: 10.50,
        3: 12.00,
        5: 15.50,
        10: 25.00,
      }
    },
    dhl: {
      name: 'DHL',
      rates: {
        1: 7.50,
        2: 8.75,
        3: 10.00,
        5: 13.50,
        10: 21.50,
      }
    }
  }

  const getRate = (w) => {
    const carriers = shippingRates[carrier]
    if (w <= 1) return carriers.rates[1]
    if (w <= 2) return carriers.rates[2]
    if (w <= 3) return carriers.rates[3]
    if (w <= 5) return carriers.rates[5]
    return carriers.rates[10] + ((w - 10) * 0.50)
  }

  const rate = getRate(weight)
  const estimatedDelivery = carrier === 'usps' ? '5-7 business days' : '2-3 business days'

  const clearForm = () => {
    setWeight(null)
    setZipCode('')
    setCarrier('usps')
  }

  return (
    <Calculator
      title="Shipping Cost Calculator"
      description="Compare shipping costs across USPS, UPS, FedEx, and DHL"
      onClear={clearForm}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Package Weight (lbs)
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
              Destination Zip Code
            </label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Shipping Carrier
            </label>
            <select
              value={carrier}
              onChange={(e) => setCarrier(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="usps">USPS (Most Affordable)</option>
              <option value="ups">UPS (Fast)</option>
              <option value="fedex">FedEx (Standard)</option>
              <option value="dhl">DHL (Reliable)</option>
            </select>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Shipping Details</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b-2 border-blue-300">
              <span className="text-gray-700">Carrier</span>
              <span className="text-xl font-bold text-blue-600">{shippingRates[carrier].name}</span>
            </div>

            <div className="flex justify-between items-center pb-3 border-b-2 border-blue-300">
              <span className="text-gray-700">Weight</span>
              <span className="text-lg font-bold">{weight} lbs</span>
            </div>

            <div className="bg-white p-4 rounded-lg my-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-700 font-semibold">Estimated Shipping Cost</span>
                <span className="text-3xl font-bold text-green-600">{formatCurrency(rate, currency)}</span>
              </div>
              <p className="text-gray-600 text-sm">For shipment to zip {zipCode}</p>
            </div>

            <div className="p-4 bg-blue-100 rounded-lg">
              <p className="text-gray-800 text-sm"><strong>Estimated Delivery:</strong> {estimatedDelivery}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Carrier Comparison */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Carrier Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-blue-900 mb-2">USPS</h4>
            <p className="text-sm text-gray-700 mb-3">Best for small, lightweight packages</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>✓ Most affordable option</li>
              <li>✓ Free tracking</li>
              <li>✓ Perfect for Shopify/Etsy</li>
              <li>✗ Slower delivery (5-7 days)</li>
            </ul>
          </div>

          <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-600">
            <h4 className="font-bold text-green-900 mb-2">UPS</h4>
            <p className="text-sm text-gray-700 mb-3">Good for medium packages</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>✓ Fast delivery (2-3 days)</li>
              <li>✓ Great tracking</li>
              <li>✓ Good for heavier items</li>
              <li>✗ More expensive</li>
            </ul>
          </div>

          <div className="p-6 bg-purple-50 rounded-lg border-l-4 border-purple-600">
            <h4 className="font-bold text-purple-900 mb-2">FedEx</h4>
            <p className="text-sm text-gray-700 mb-3">Standard shipping solution</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>✓ Competitive pricing</li>
              <li>✓ Reliable service</li>
              <li>✓ Business-friendly</li>
              <li>✗ Standard speed</li>
            </ul>
          </div>

          <div className="p-6 bg-orange-50 rounded-lg border-l-4 border-orange-600">
            <h4 className="font-bold text-orange-900 mb-2">DHL</h4>
            <p className="text-sm text-gray-700 mb-3">Good for international shipping</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>✓ International specialist</li>
              <li>✓ Good rates</li>
              <li>✓ Global network</li>
              <li>✗ Less domestic coverage</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-bold mb-4">💡 Shipping Cost Tips</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Negotiate bulk rates if shipping 100+ packages monthly</li>
          <li>• Consider offering free shipping but factor it into product price</li>
          <li>• USPS Priority Mail is cheapest for packages under 3 lbs</li>
          <li>• UPS is better for items over 70 lbs</li>
          <li>• Shipping costs directly impact your profitability - optimize packaging</li>
          <li>• Compare negotiated rates vs retail rates (use Pirate Ship or ShipStation)</li>
        </ul>
      </div>
    </Calculator>
  )
}
