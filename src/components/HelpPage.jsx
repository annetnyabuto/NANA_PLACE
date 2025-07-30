import '../styles/HelpPage.css'
import { FaQuestionCircle, FaPhone, FaEnvelope, FaShieldAlt, FaFileContract } from 'react-icons/fa'

function HelpPage() {
  const faqs = [
    { question: 'How do I place an order?', answer: 'Browse restaurants, select items, add to cart, and proceed to checkout.' },
    { question: 'What are the delivery charges?', answer: 'Delivery fee is $2.99. Free delivery on orders above $25.' },
    { question: 'How long does delivery take?', answer: 'Delivery typically takes 20-45 minutes depending on the restaurant.' },
    { question: 'Can I cancel my order?', answer: 'Orders can be cancelled within 5 minutes of placing them.' },
    { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, debit cards, and m.pesa.' }
  ]

  return (
    <div className="help-page-full">
      <div className="help-header">
        <h2>Help Center</h2>
      </div>

      <div className="help-sections">
        <div className="help-section">
          <h3><FaQuestionCircle /> Frequently Asked Questions</h3>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="help-section">
          <h3><FaPhone /> Contact Us</h3>
          <div className="contact-info">
            <p><strong>Customer Support:</strong> 1-800-NANA-FOOD</p>
            <p><strong>Email:</strong> support@nanasplace.com</p>
            <p><strong>Hours:</strong> 24/7 Customer Support</p>
          </div>
        </div>

        <div className="help-section">
          <h3><FaShieldAlt /> Privacy Policy</h3>
          <div className="policy-content">
            <p>We are committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information.</p>
            <ul>
              <li>We collect information to provide better services</li>
              <li>Your data is encrypted and securely stored</li>
              <li>We never sell your personal information</li>
              <li>You can request data deletion at any time</li>
            </ul>
          </div>
        </div>

        <div className="help-section">
          <h3><FaFileContract /> Terms of Service</h3>
          <div className="terms-content">
            <p>By using NANA'S PLACE, you agree to these terms:</p>
            <ul>
              <li>You must be 18+ to place orders</li>
              <li>Accurate information must be provided</li>
              <li>Orders are subject to restaurant availability</li>
              <li>Refunds processed within 3-5 business days</li>
              <li>We reserve the right to modify these terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpPage