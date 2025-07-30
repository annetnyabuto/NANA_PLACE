import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../AppContext'
import '../styles/ReviewsPage.css'
import { FaStar } from 'react-icons/fa'

function ReviewsPage() {
  const { reviews, setReviews } = useContext(AppContext)
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: '',
    restaurant: ''
  })

  // GET request to fetch reviews
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL || 'http://localhost:3001/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error('Error fetching reviews:', err))
  }, [setReviews])

  // Add new review function - THIS STATE UPDATE IS REQUIRED
  const addReview = (newReview) => {
    setReviews([...reviews, newReview]) // Updating reviews state
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const configObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    }

    fetch(process.env.REACT_APP_API_URL || 'http://localhost:3001/reviews', configObj)
      .then(res => res.json())
      .then(data => addReview(data)) // THIS STATE UPDATE IS REQUIRED!!!
      .then(() => {
        // Clear form
        setFormData({ name: '', rating: 5, comment: '', restaurant: '' })
      })
      .catch(err => console.error('Error posting review:', err))
  }

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="container">
      <h2>Customer Reviews</h2>
      
      {/* Controlled Form Component */}
      <div className="review-form-container">
        <h3>Leave a Review</h3>
        <form onSubmit={handleSubmit} className="review-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <select
            name="restaurant"
            value={formData.restaurant}
            onChange={handleChange}
            required
          >
            <option value="">Select Restaurant</option>
            <option value="Burger Palace">Burger Palace</option>
            <option value="Pizza Heaven">Pizza Heaven</option>
            <option value="Sushi World">Sushi World</option>
            <option value="Sweet Dreams">Sweet Dreams</option>
          </select>
          
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value={5}>5 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={2}>2 Stars</option>
            <option value={1}>1 Star</option>
          </select>
          
          <textarea
            name="comment"
            placeholder="Write your review..."
            value={formData.comment}
            onChange={handleChange}
            required
          />
          
          <button type="submit">Submit Review</button>
        </form>
      </div>

      {/* Reviews List */}
      <div className="reviews-list">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <h4>{review.name}</h4>
              <div className="rating">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
            </div>
            <p className="restaurant-name">{review.restaurant}</p>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewsPage