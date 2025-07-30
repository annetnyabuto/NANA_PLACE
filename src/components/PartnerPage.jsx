import '../styles/HelpPage.css'
import { FaHandshake, FaChartLine, FaUsers, FaClock } from 'react-icons/fa'

function PartnerPage() {
  return (
    <div className="help-page-full">
      <div className="help-header">
        <h2>Partner With Us</h2>
      </div>

      <div className="help-sections">
        <div className="help-section">
          <h3><FaHandshake /> Why Partner With NANA'S PLACE?</h3>
          <div className="policy-content">
            <p>Join Kenya's fastest-growing food delivery platform and expand your restaurant's reach to thousands of hungry customers.</p>
            <ul>
              <li>Increase your revenue with online orders</li>
              <li>Reach new customers in your area</li>
              <li>Easy-to-use restaurant dashboard</li>
              <li>Marketing support and promotions</li>
              <li>Real-time order management</li>
            </ul>
          </div>
        </div>



        <div className="help-section">
          <h3><FaUsers /> How It Works</h3>
          <div className="contact-info">
            <p><strong>Step 1:</strong> Submit your restaurant application</p>
            <p><strong>Step 2:</strong> Our team reviews and approves your restaurant</p>
            <p><strong>Step 3:</strong> Menu setup and professional photos</p>
            <p><strong>Step 4:</strong> Go live and start receiving orders</p>
          </div>
        </div>

        <div className="help-section">
          <h3><FaClock /> Get Started Today</h3>
          <div className="policy-content">
            <p>Ready to grow your restaurant business? Contact us to begin your partnership journey.</p>
            <ul>
              <li><strong>Email:</strong> partners@nanasplace.com</li>
              <li><strong>Phone:</strong> +254 77654321</li>
              <li><strong>WhatsApp:</strong> +254 77654321</li>
              <li><strong>Office:</strong> Nairobi CBD, Kenya</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnerPage