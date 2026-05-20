import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCurrency } from '../context/CurrencyContext'
import '../styles/Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { currency, setCurrency, currencies } = useCurrency()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="navbar-icon">📊</div>
          <span>iLoveProfit</span>
        </Link>

        <div className="navbar-menu-desktop">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/calculators" className="navbar-link">Calculators</Link>
          <Link to="/support" className="navbar-link">Support</Link>
          <Link to="/blog" className="navbar-link">Blog</Link>
          <label className="currency-switcher" aria-label="Select currency">
            <span>Currency</span>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              {Object.entries(currencies).map(([code, details]) => (
                <option key={code} value={code}>{details.label}</option>
              ))}
            </select>
          </label>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="navbar-menu-mobile">
          <Link to="/" className="navbar-link-mobile" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/calculators" className="navbar-link-mobile" onClick={() => setIsOpen(false)}>Calculators</Link>
          <Link to="/support" className="navbar-link-mobile" onClick={() => setIsOpen(false)}>Support</Link>
          <Link to="/blog" className="navbar-link-mobile" onClick={() => setIsOpen(false)}>Blog</Link>
          <label className="currency-switcher currency-switcher-mobile" aria-label="Select currency">
            <span>Currency</span>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              {Object.entries(currencies).map(([code, details]) => (
                <option key={code} value={code}>{details.label}</option>
              ))}
            </select>
          </label>
        </div>
      )}
    </nav>
  )
}
