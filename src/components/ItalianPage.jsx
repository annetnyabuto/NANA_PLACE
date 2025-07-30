import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../AppContext'
import '../styles/ItalianPage.css'
import { FaStar, FaUtensils } from 'react-icons/fa'

function ItalianPage() {
  const { addToCart } = useContext(AppContext)
  const [italianFoods, setItalianFoods] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchItalianFoods()
  }, [])

  const fetchItalianFoods = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/v1/1/filter.php?a=Italian')
      const data = await response.json()
      
      if (data.meals && data.meals.length > 0) {
        const formattedFoods = data.meals.slice(0, 12).map(meal => ({
          id: meal.idMeal,
          name: meal.strMeal,
          description: `Authentic ${meal.strMeal} - Traditional Italian cuisine`,
          price: (Math.random() * 18 + 10).toFixed(2),
          image: meal.strMealThumb || 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300',
          category: 'Italian',
          rating: (Math.random() * 1.5 + 3.5).toFixed(1)
        }))
        setItalianFoods(formattedFoods)
      } else {
        throw new Error('No results from API')
      }
    } catch (error) {
      console.error('Error fetching Italian foods:', error)
      const mockItalianFoods = [
        { id: 1, name: 'Spaghetti Carbonara', description: 'Classic pasta with eggs, cheese, and pancetta', price: '14.99', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300', category: 'Italian', rating: '4.8' },
        { id: 2, name: 'Margherita Pizza', description: 'Traditional pizza with tomato, mozzarella, and basil', price: '12.99', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300', category: 'Italian', rating: '4.6' },
        { id: 3, name: 'Chicken Parmigiana', description: 'Breaded chicken with marinara and mozzarella', price: '16.99', image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=300', category: 'Italian', rating: '4.5' },
        { id: 4, name: 'Fettuccine Alfredo', description: 'Creamy pasta with parmesan cheese', price: '13.99', image: 'https://images.unsplash.com/photo-1621647264227-c5a0b8b7b8b8?w=300', category: 'Italian', rating: '4.4' },
        { id: 5, name: 'Lasagna', description: 'Layered pasta with meat sauce and cheese', price: '15.99', image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300', category: 'Italian', rating: '4.7' },
        { id: 6, name: 'Risotto', description: 'Creamy rice dish with mushrooms', price: '14.49', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=300', category: 'Italian', rating: '4.3' }
      ]
      setItalianFoods(mockItalianFoods)
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = (food) => {
    addToCart(food, 'italian')
  }

  return (
    <div className="container">
      <div className="italian-header">
        <FaUtensils className="italian-icon" />
        <h2>Italian Cuisine</h2>
        <p>Authentic flavors from Italy</p>
      </div>
      
      {loading ? (
        <div className="loading">Loading Italian cuisine...</div>
      ) : italianFoods.length === 0 ? (
        <div className="loading">No Italian dishes available</div>
      ) : (
        <div className="italian-grid">
          {italianFoods.map(food => (
            <div key={food.id} className="italian-card">
              <img src={food.image} alt={food.name} className="italian-image" />
              <div className="italian-info">
                <h3 className="italian-name">{food.name}</h3>
                <p className="italian-description">{food.description}</p>
                <div className="italian-meta">
                  <span className="italian-type">Italian</span>
                  <div className="italian-rating">
                    <FaStar className="star-icon" />
                    {food.rating}
                  </div>
                </div>
                <div className="italian-footer">
                  <span className="italian-price">${food.price}</span>
                  <button 
                    className="add-italian-btn"
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

export default ItalianPage