import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CurrencyProvider } from './context/CurrencyContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AllCalculators from './pages/AllCalculators'
import UnitConverters from './pages/UnitConverters'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Support from './pages/Support'

// Ecommerce Calculators
import AmazonFBACalculator from './pages/calculators/AmazonFBACalculator'
import ShopifyCalculator from './pages/calculators/ShopifyCalculator'
import EBayCalculator from './pages/calculators/eBayCalculator'
import EtsyCalculator from './pages/calculators/EtsyCalculator'
import TikTokShopCalculator from './pages/calculators/TikTokShopCalculator'
import BreakEvenROASCalculator from './pages/calculators/BreakEvenROASCalculator'
import ProfitMarginCalculator from './pages/calculators/ProfitMarginCalculator'
import ShippingCalculator from './pages/calculators/ShippingCalculator'
import MarketingROICalculator from './pages/calculators/MarketingROICalculator'
import WooCommerceCalculator from './pages/calculators/WooCommerceCalculator'
import AmazonWhiteLabelCalculator from './pages/calculators/AmazonWhiteLabelCalculator'

// Unit Converters
import LengthConverter from './pages/converters/LengthConverter'
import WeightConverter from './pages/converters/WeightConverter'
import TemperatureConverter from './pages/converters/TemperatureConverter'
import AreaConverter from './pages/converters/AreaConverter'
import VolumeConverter from './pages/converters/VolumeConverter'
import SpeedConverter from './pages/converters/SpeedConverter'
import TimeConverter from './pages/converters/TimeConverter'
import DataConverter from './pages/converters/DataConverter'
import PressureConverter from './pages/converters/PressureConverter'
import EnergyConverter from './pages/converters/EnergyConverter'
import FuelConverter from './pages/converters/FuelConverter'
import NumberConverter from './pages/converters/NumberConverter'

import './App.css'

function App() {
  return (
    <CurrencyProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Calculator Hub */}
            <Route path="/calculators" element={<AllCalculators />} />
            <Route path="/calculator/amazon-fba" element={<AmazonFBACalculator />} />
            <Route path="/calculator/shopify-profit" element={<ShopifyCalculator />} />
            <Route path="/calculator/ebay-fees" element={<EBayCalculator />} />
            <Route path="/calculator/etsy-fees" element={<EtsyCalculator />} />
            <Route path="/calculator/tiktok-shop" element={<TikTokShopCalculator />} />
            <Route path="/calculator/break-even-roas" element={<BreakEvenROASCalculator />} />
            <Route path="/calculator/profit-margin" element={<ProfitMarginCalculator />} />
            <Route path="/calculator/shipping" element={<ShippingCalculator />} />
            <Route path="/calculator/marketing-roi" element={<MarketingROICalculator />} />
            <Route path="/calculator/woocommerce-profit" element={<WooCommerceCalculator />} />
            <Route path="/calculator/amazon-white-label" element={<AmazonWhiteLabelCalculator />} />

            {/* Unit Converter Hub */}
            <Route path="/converters" element={<UnitConverters />} />
            <Route path="/converter/length" element={<LengthConverter />} />
            <Route path="/converter/weight" element={<WeightConverter />} />
            <Route path="/converter/temperature" element={<TemperatureConverter />} />
            <Route path="/converter/area" element={<AreaConverter />} />
            <Route path="/converter/volume" element={<VolumeConverter />} />
            <Route path="/converter/speed" element={<SpeedConverter />} />
            <Route path="/converter/time" element={<TimeConverter />} />
            <Route path="/converter/data" element={<DataConverter />} />
            <Route path="/converter/pressure" element={<PressureConverter />} />
            <Route path="/converter/energy" element={<EnergyConverter />} />
            <Route path="/converter/fuel" element={<FuelConverter />} />
            <Route path="/converter/number" element={<NumberConverter />} />

            {/* Blog & Support */}
            <Route path="/support" element={<Support />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CurrencyProvider>
  )
}

export default App
