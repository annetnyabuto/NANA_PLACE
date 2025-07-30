import { useContext } from 'react'
import { AppContext } from '../AppContext'
import '../styles/OffersPage.css'
import { FaPercent, FaStar } from 'react-icons/fa'

function OffersPage() {
  const { restaurants, addToCart } = useContext(AppContext)

  const offers = [
    { id: 1, title: '20% OFF', description: 'On orders above $25', code: 'SAVE20', discount: 20, minOrder: 25 },
    { id: 2, title: 'Free Delivery', description: 'On orders above $15', code: 'FREEDEL', discount: 0, minOrder: 15 },
    { id: 3, title: '30% OFF', description: 'First order discount', code: 'FIRST30', discount: 30, minOrder: 10 },
    { id: 4, title: 'Buy 1 Get 1', description: 'On selected items', code: 'BOGO', discount: 50, minOrder: 0 }
  ]

  const featuredDeals = [
    { id: 101, name: 'Combo Deal', description: 'Burger + Fries + Drink', originalPrice: 15.99, offerPrice: 9.99, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300' },
    { id: 102, name: 'Pizza Special', description: 'Large Pizza + Garlic Bread', originalPrice: 22.99, offerPrice: 16.99, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300' },
    { id: 103, name: 'Sushi Platter', description: '12 pieces mixed sushi', originalPrice: 28.99, offerPrice: 19.99, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300' }
  ]

  const handleAddToCart = (item) => {
    addToCart({ ...item, price: item.offerPrice }, 'offers')
  }

  return (
    <div className="container">
      <div className="offers-header">
        <h2>Special Offers</h2>
      </div>

      <div className="offers-section">
        <h3>Discount Codes</h3>
        <div className="offers-grid">
          {offers.map(offer => (
            <div key={offer.id} className="offer-card">
              <div className="offer-badge">{offer.title}</div>
              <p className="offer-description">{offer.description}</p>
              <div className="offer-code">Code: <strong>{offer.code}</strong></div>
              <div className="offer-terms">Min. order: ${offer.minOrder}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="deals-section">
        <h3>Featured Deals</h3>
        <div className="deals-grid">
          {featuredDeals.map(deal => (
            <div key={deal.id} className="deal-card">
              <img src={deal.image} alt={deal.name} className="deal-image" />
              <div className="deal-info">
                <h4 className="deal-name">{deal.name}</h4>
                <p className="deal-description">{deal.description}</p>
                <div className="deal-pricing">
                  <span className="original-price">${deal.originalPrice}</span>
                  <span className="offer-price">${deal.offerPrice}</span>
                </div>
                <button 
                  className="add-deal-btn"
                  onClick={() => handleAddToCart(deal)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OffersPage