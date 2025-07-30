import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../AppContext'
import '../styles/AsianPage.css'
import { FaStar, FaUtensils } from 'react-icons/fa'

function AsianPage() {
  const { addToCart } = useContext(AppContext)
  const [asianFoods, setAsianFoods] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAsianFoods()
  }, [])

  const fetchAsianFoods = async () => {
    try {
      const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?cuisine=asian&number=12&apiKey=demo')
      const data = await response.json()
      
      if (data.results && data.results.length > 0) {
        const formattedFoods = data.results.map(recipe => ({
          id: recipe.id,
          name: recipe.title,
          description: `Delicious ${recipe.title} - Authentic Asian cuisine`,
          price: (Math.random() * 15 + 8).toFixed(2),
          image: recipe.image || 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300',
          category: 'Asian',
          rating: (Math.random() * 1.5 + 3.5).toFixed(1)
        }))
        setAsianFoods(formattedFoods)
      } else {
        throw new Error('No results from API')
      }
    } catch (error) {
      console.error('Error fetching Asian foods:', error)
      const mockAsianFoods = [
        { id: 1, name: 'Kung Pao Chicken', description: 'Spicy stir-fried chicken with peanuts', price: '12.99', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300', category: 'Asian', rating: '4.5' },
        { id: 2, name: 'Sweet and Sour Pork', description: 'Classic Chinese dish with tangy sauce', price: '11.99', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300', category: 'Asian', rating: '4.3' },
        { id: 3, name: 'Beef Lo Mein', description: 'Stir-fried noodles with tender beef', price: '13.99', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300', category: 'Asian', rating: '4.6' },
        { id: 4, name: 'General Tso Chicken', description: 'Crispy chicken in sweet and spicy sauce', price: '12.49', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300', category: 'Asian', rating: '4.4' },
        { id: 5, name: 'Pad Thai', description: 'Traditional Thai stir-fried noodles', price: '11.49', image: 'https://images.unsplash.com/photo-1559314809-0f31657def5e?w=300', category: 'Asian', rating: '4.7' },
        { id: 6, name: 'Chicken Teriyaki', description: 'Grilled chicken with teriyaki glaze', price: '13.49', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300', category: 'Asian', rating: '4.2' }
      ]
      setAsianFoods(mockAsianFoods)
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = (food) => {
    addToCart(food, 'asian')
  }

  return (
    <div className="container">
      <div className="asian-header">
        <FaUtensils className="asian-icon" />
        <h2>Asian Cuisine</h2>
        <p>Authentic flavors from across Asia</p>
      </div>
      
      {loading ? (
        <div className="loading">Loading Asian cuisine...</div>
      ) : asianFoods.length === 0 ? (
        <div className="loading">No Asian dishes available</div>
      ) : (
        <div className="asian-grid">
          {asianFoods.map(food => (
            <div key={food.id} className="asian-card">
              <img src={food.image} alt={food.name} className="asian-image" />
              <div className="asian-info">
                <h3 className="asian-name">{food.name}</h3>
                <p className="asian-description">{food.description}</p>
                <div className="asian-meta">
                  <span className="asian-type">Chinese</span>
                  <div className="asian-rating">
                    <FaStar className="star-icon" />
                    {food.rating}
                  </div>
                </div>
                <div className="asian-footer">
                  <span className="asian-price">${food.price}</span>
                  <button 
                    className="add-asian-btn"
                    onClick={() => handleAddToCart(food)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AsianPage