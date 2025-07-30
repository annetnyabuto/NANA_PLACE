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
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
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
              <li><a href="#">Business App</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Download App</h3>
            <ul>
              <li><a href="#">iOS</a></li>
              <li><a href="#">Android</a></li>
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