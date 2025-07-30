import { useContext } from 'react'
import { AppContext } from '../AppContext'
import '../styles/Footer.css'

function Footer() {
  const { setCurrentPage } = useContext(AppContext)

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>NANA'S PLACE</h3>
            <ul>
              <li><a href="#" onClick={() => setCurrentPage('about')}>About Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Help</h3>
            <ul>
              <li><a href="#" onClick={() => setCurrentPage('help')}>Contact Us</a></li>
              <li><a href="#" onClick={() => setCurrentPage('help')}>FAQs</a></li>
              <li><a href="#" onClick={() => setCurrentPage('help')}>Privacy Policy</a></li>
              <li><a href="#" onClick={() => setCurrentPage('help')}>Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>For Restaurants</h3>
            <ul>
              <li><a href="#">Partner With Us</a></li>
            </ul>
          </div>

        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NANA'S PLACE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer