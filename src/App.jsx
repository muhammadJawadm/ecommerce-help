import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AmazonFBACalculator from './pages/calculators/AmazonFBACalculator'
import ShopifyCalculator from './pages/calculators/ShopifyCalculator'
// import eBayCalculator from './pages/calculators/eBayCalculator'
import EtsyCalculator from './pages/calculators/EtsyCalculator'
import TikTokShopCalculator from './pages/calculators/TikTokShopCalculator'
import BreakEvenROASCalculator from './pages/calculators/BreakEvenROASCalculator'
import ProfitMarginCalculator from './pages/calculators/ProfitMarginCalculator'
import ShippingCalculator from './pages/calculators/ShippingCalculator'
import MarketingROICalculator from './pages/calculators/MarketingROICalculator'
import AllCalculators from './pages/AllCalculators'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Calculator Routes */}
          <Route path="/calculators" element={<AllCalculators />} />
          <Route path="/calculator/amazon-fba" element={<AmazonFBACalculator />} />
          <Route path="/calculator/shopify-profit" element={<ShopifyCalculator />} />
          <Route path="/calculator/ebay-fees" element={<eBayCalculator />} />
          <Route path="/calculator/etsy-fees" element={<EtsyCalculator />} />
          <Route path="/calculator/tiktok-shop" element={<TikTokShopCalculator />} />
          <Route path="/calculator/break-even-roas" element={<BreakEvenROASCalculator />} />
          <Route path="/calculator/profit-margin" element={<ProfitMarginCalculator />} />
          <Route path="/calculator/shipping" element={<ShippingCalculator />} />
          <Route path="/calculator/marketing-roi" element={<MarketingROICalculator />} />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
