import { useContext } from 'react'
import { AppContext } from '../AppContext'
import '../styles/DessertPage.css'
import { FaStar, FaIceCream } from 'react-icons/fa'

function DessertPage() {
  const { restaurants, menuItems, addToCart } = useContext(AppContext)
  
  const allDesserts = []
  restaurants.forEach(restaurant => {
    if (menuItems[restaurant.id]) {
      const dessertItems = menuItems[restaurant.id].filter(item => item.category === 'Desserts')
      dessertItems.forEach(item => {
        allDesserts.push({
          ...item,
          restaurantName: restaurant.name,
          restaurantId: restaurant.id,
          rating: restaurant.rating,
          image: restaurant.image
        })
      })
    }
  })

  const handleAddToCart = (item) => {
    addToCart(item, item.restaurantId)
  }

  return (
    <div className="container">
      <div className="desserts-header">
        <FaIceCream className="desserts-icon" />
        <h2>Sweet Desserts</h2>
        <p>Indulge in our delicious dessert collection</p>
      </div>
      
      <div className="desserts-grid">
        {allDesserts.map(dessert => (
          <div key={dessert.id} className="dessert-card">
            <img src={dessert.image} alt={dessert.name} className="dessert-image" />
            <div className="dessert-info">
              <h3 className="dessert-name">{dessert.name}</h3>
              <p className="dessert-description">{dessert.description}</p>
              <div className="dessert-meta">
                <span className="dessert-type">{dessert.restaurantName}</span>
                <div className="dessert-rating">
                  <FaStar className="star-icon" />
                  {dessert.rating}
                </div>
              </div>
              <div className="dessert-footer">
                <span className="dessert-price">${dessert.price.toFixed(2)}</span>
                <button 
                  className="add-dessert-btn"
                  onClick={() => handleAddToCart(dessert)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DessertPage