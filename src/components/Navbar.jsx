import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="navbar-icon">📊</div>
          <span>EcomCalc</span>
        </Link>

        <div className="navbar-menu-desktop">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/calculators" className="navbar-link">Calculators</Link>
          <Link to="/blog" className="navbar-link">Blog</Link>
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
          <Link to="/blog" className="navbar-link-mobile" onClick={() => setIsOpen(false)}>Blog</Link>
        </div>
      )}
    </nav>
  )
}
