import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-section">
            <div className="footer-brand">
              <div className="footer-icon">📊</div>
              <span>iLoveProfit</span>
            </div>
            <p className="footer-description">
              Free ecommerce calculator tools for Shopify, Amazon FBA, eBay, Etsy, and more.
            </p>
          </div>

          {/* Calculators */}
          <div className="footer-section">
            <h3>Popular Calculators</h3>
            <ul className="footer-links">
              <li><Link to="/calculator/amazon-fba">Amazon FBA</Link></li>
              <li><Link to="/calculator/shopify-profit">Shopify Profit</Link></li>
              <li><Link to="/calculator/ebay-fees">eBay Fees</Link></li>
              <li><Link to="/calculator/profit-margin">Profit Margin</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/calculators">All Calculators</Link></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="footer-social">
              <a href="#" aria-label="Email">📧</a>
              <a href="#" aria-label="LinkedIn">🔗</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 iLoveProfit. All rights reserved. Free • No Signup • Real-time Results
          </p>
        </div>
      </div>
    </footer>
  )
}
