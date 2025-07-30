import { useContext, useState } from 'react'
import { AppContext } from '../AppContext'
import '../styles/Header.css'
import { FaShoppingCart, FaUser, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from 'react-icons/fa'

function Header() {
  const { user, cartItems, setShowCart, setShowLoginModal, setCurrentPage } = useContext(AppContext)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  return (
    <header>
      <div className="header-container container">
        <div className="logo">
          <span className="logo-icon">
            <FaShoppingCart />
          </span>
          <span>NANA'S PLACE</span>
        </div>
        
        <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <nav className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#" onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }}>Home</a></li>
            <li><a href="#" onClick={() => { setCurrentPage('map'); setIsMobileMenuOpen(false); }}>Restaurants</a></li>
            <li><a href="#" onClick={() => { setCurrentPage('offers'); setIsMobileMenuOpen(false); }}>Offers</a></li>
            <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>Help</a></li>
          </ul>
          
          <div className="mobile-auth">
            {user ? (
              <span className="user-greeting">
                <FaUser />
                <span>Welcome, {user.name}</span>
              </span>
            ) : (
              <>
                <button className="login-btn" onClick={() => { setShowLoginModal(true); setIsMobileMenuOpen(false); }}>
                  <FaSignInAlt />
                  <span>Log In</span>
                </button>
                <button className="signup-btn" onClick={() => { setShowLoginModal(true); setIsMobileMenuOpen(false); }}>
                  <FaUserPlus />
                  <span>Sign Up</span>
                </button>
              </>
            )}
          </div>
        </nav>
        
        <div className="desktop-auth">
          {user ? (
            <span className="user-greeting">
              <FaUser />
              <span>Welcome, {user.name}</span>
            </span>
          ) : (
            <>
              <button className="login-btn" onClick={() => setShowLoginModal(true)}>
                <FaSignInAlt />
                <span>Log In</span>
              </button>
              <button className="signup-btn" onClick={() => setShowLoginModal(true)}>
                <FaUserPlus />
                <span>Sign Up</span>
              </button>
            </>
          )}
          <button className="cart-btn" onClick={() => setShowCart(true)}>
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span className="cart-count">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header