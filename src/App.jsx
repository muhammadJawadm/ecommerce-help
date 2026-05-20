import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CurrencyProvider } from './context/CurrencyContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
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
import AllCalculators from './pages/AllCalculators'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Support from './pages/Support'
import './App.css'

function App() {
  return (
    <CurrencyProvider>
      <BrowserRouter>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Calculator Routes */}
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

            {/* Support & Blog Routes */}
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
