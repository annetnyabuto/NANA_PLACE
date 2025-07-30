import '../styles/HelpPage.css'
import { FaHeart, FaUsers, FaTruck, FaStar } from 'react-icons/fa'

function AboutPage() {
  return (
    <div className="help-page-full">
      <div className="help-header">
        <h2>About NANA'S PLACE</h2>
      </div>

      <div className="help-sections">
        <div className="help-section">
          <h3> Our Story</h3>
          <div className="policy-content">
            <p>NANA'S PLACE was founded with a mission: to connect food lovers with their favorite restaurants and deliver exceptional dining experiences right to their door.</p>
            <p>We believe that great food brings people together and creates lasting memories.</p>
          </div>
        </div>

        <div className="help-section">
          <h3> Our Team</h3>
          <div className="terms-content">
            <p>Our dedicated team works around the clock to ensure you get the best food delivery experience.</p>
            <p>From our customer support to our delivery partners, everyone is committed to serving you with excellence.</p>
          </div>
        </div>

        <div className="help-section">
          <h3> Our Service</h3>
          <div className="contact-info">
            <p>We partner with the best local restaurants to bring you a wide variety of cuisines.</p>
            <p>Our fast and reliable delivery service ensures your food arrives fresh and on time, every time.</p>
          </div>
        </div>

        <div className="help-section">
          <h3><FaStar /> Our Values</h3>
          <div className="policy-content">
            <ul>
              <li>Quality food from trusted restaurants</li>
              <li>Fast and reliable delivery service</li>
              <li>Exceptional customer support</li>
              <li>Supporting local businesses</li>
              <li>Building community connections</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage