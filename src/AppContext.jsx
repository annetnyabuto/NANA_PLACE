import { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [user, setUser] = useState(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [orders, setOrders] = useState([])

  const categories = [
    { id: 1, name: 'Fast Food', icon: 'category-food' },
    { id: 2, name: 'Drinks', icon: 'category-drink' },
    { id: 3, name: 'Groceries', icon: 'category-grocery' },
    { id: 4, name: 'Desserts', icon: 'category-dessert' },
    { id: 5, name: 'Asian', icon: 'category-food' },
    { id: 6, name: 'Italian', icon: 'category-food' },
  ]

  const restaurants = [
    {
      id: 1,
      name: 'Burger Palace',
      image: '/images/burger.jpg',
      rating: 4.5,
      deliveryTime: '20-30 min',
      minOrder: 'KSh 500',
      categories: [1],
      coordinates: [-1.2921, 36.8219],
    },
    {
      id: 2,
      name: 'Pizza Heaven',
      image: '/images/Pizza.jpg',
      rating: 4.2,
      deliveryTime: '25-35 min',
      minOrder: 'KSh 800',
      categories: [1, 6],
      coordinates: [-1.2841, 36.8155],
    },
    {
      id: 3,
      name: 'Sushi World',
      image: '/images/sushi.jpg',
      rating: 4.7,
      deliveryTime: '30-40 min',
      minOrder: 'KSh 1200',
      categories: [5],
      coordinates: [-1.3031, 36.8331],
    },
    {
      id: 4,
      name: 'Sweet Dreams',
      image: '/images/dessert.jpg',
      rating: 4.3,
      deliveryTime: '15-25 min',
      minOrder: 'KSh 400',
      categories: [4],
      coordinates: [-1.2751, 36.8081],
    },
    {
      id: 5,
      name: 'Nyama Choma Palace',
      image: '/images/burger.jpg',
      rating: 4.1,
      deliveryTime: '20-30 min',
      minOrder: 'KSh 600',
      categories: [1],
      coordinates: [-1.2881, 36.8281],
    },
    {
      id: 6,
      name: 'Java House',
      image: '/images/dessert.jpg',
      rating: 4.6,
      deliveryTime: '10-20 min',
      minOrder: 'KSh 300',
      categories: [2],
      coordinates: [-1.2801, 36.8201],
    },
    {
      id: 7,
      name: 'Mama Oliech',
      image: '/images/Pizza.jpg',
      rating: 4.4,
      deliveryTime: '25-35 min',
      minOrder: 'KSh 700',
      categories: [6],
      coordinates: [-1.2961, 36.8261],
    },
    {
      id: 8,
      name: 'Spice Route',
      image: '/images/sushi.jpg',
      rating: 4.8,
      deliveryTime: '30-45 min',
      minOrder: 'KSh 900',
      categories: [5],
      coordinates: [-1.2701, 36.8141],
    },
  ]

  const menuItems = {
    1: [
      {
        id: 101,
        name: 'Classic Burger',
        description: 'Beef patty with lettuce, tomato, and special sauce',
        price: 8.99,
        category: 'Mains',
      },
      {
        id: 102,
        name: 'Cheeseburger',
        description: 'Classic burger with American cheese',
        price: 9.99,
        category: 'Mains',
      },
      {
        id: 103,
        name: 'Bacon Burger',
        description: 'Classic burger with crispy bacon',
        price: 10.99,
        category: 'Mains',
      },
      {
        id: 104,
        name: 'French Fries',
        description: 'Crispy golden fries with sea salt',
        price: 3.99,
        category: 'Sides',
      },
      {
        id: 105,
        name: 'Chocolate Shake',
        description: 'Creamy chocolate milkshake',
        price: 4.99,
        category: 'Drinks',
      },
    ],
    2: [
      {
        id: 201,
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato sauce and mozzarella',
        price: 12.99,
        category: 'Mains',
      },
      {
        id: 202,
        name: 'Pepperoni Pizza',
        description: 'Margherita pizza with pepperoni',
        price: 14.99,
        category: 'Mains',
      },
      {
        id: 203,
        name: 'Garlic Bread',
        description: 'Toasted bread with garlic butter',
        price: 5.99,
        category: 'Sides',
      },
      {
        id: 204,
        name: 'Tiramisu',
        description: 'Classic Italian dessert',
        price: 6.99,
        category: 'Desserts',
      },
    ],
    3: [
      {
        id: 301,
        name: 'California Roll',
        description: 'Crab, avocado and cucumber',
        price: 8.99,
        category: 'Mains',
      },
      {
        id: 302,
        name: 'Spicy Tuna Roll',
        description: 'Tuna with spicy mayo',
        price: 9.99,
        category: 'Mains',
      },
      {
        id: 303,
        name: 'Miso Soup',
        description: 'Traditional Japanese soup',
        price: 3.99,
        category: 'Sides',
      },
      {
        id: 304,
        name: 'Green Tea Ice Cream',
        description: 'Refreshing green tea flavor',
        price: 5.99,
        category: 'Desserts',
      },
    ],
    4: [
      {
        id: 401,
        name: 'Chocolate Cake',
        description: 'Rich chocolate cake with fudge icing',
        price: 6.99,
        category: 'Desserts',
      },
      {
        id: 402,
        name: 'Cheesecake',
        description: 'New York style cheesecake',
        price: 7.99,
        category: 'Desserts',
      },
      {
        id: 403,
        name: 'Ice Cream Sundae',
        description: 'Vanilla ice cream with toppings',
        price: 5.99,
        category: 'Desserts',
      },
      {
        id: 404,
        name: 'Coffee',
        description: 'Freshly brewed coffee',
        price: 2.99,
        category: 'Drinks',
      },
    ],
  }
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const deliveryFee = cartTotal > 0 ? 2.99 : 0
  const orderTotal = cartTotal + deliveryFee

  const addToCart = (item, restaurantId) => {
    if (cartItems.length > 0 && cartItems[0].restaurantId !== restaurantId) {
      if (window.confirm('Your cart contains items from another restaurant. Would you like to clear your cart and add this item?')) {
        setCartItems([{ ...item, restaurantId, quantity: 1 }])
      }
      return
    }

    const existingItem = cartItems.find(cartItem => cartItem.id === item.id)
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ))
    } else {
      setCartItems([...cartItems, { ...item, restaurantId, quantity: 1 }])
    }
    setShowCart(true)
  }
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId))
  }
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId)
      return
    }
    setCartItems(cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ))
  }
  const handleLogin = (email, password) => {
    setUser({ email, name: 'Ann Joe' })
    setShowLoginModal(false)
  }
  const handleLogout = () => {
    setUser(null)
  }
  const handleCheckout = (address, paymentMethod) => {
    const newOrder = {
      id: Date.now(),
      items: [...cartItems],
      total: orderTotal,
      address,
      paymentMethod,
      status: 'preparing',
      restaurant: restaurants.find(r => r.id === cartItems[0]?.restaurantId),
      date: new Date().toISOString(),
    }
    setOrders([...orders, newOrder])
    setCartItems([])
    setShowCart(false)
    setCurrentPage('dashboard')
  }

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedRestaurant,
        setSelectedRestaurant,
        cartItems,
        setCartItems,
        user,
        setUser,
        showLoginModal,
        setShowLoginModal,
        showCart,
        setShowCart,
        orders,
        setOrders,
        categories,
        restaurants,
        menuItems,
        cartTotal,
        deliveryFee,
        orderTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        handleLogin,
        handleLogout,
        handleCheckout,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}