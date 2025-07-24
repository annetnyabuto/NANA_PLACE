import { useContext } from 'react'
import { AppContext } from './AppContext'
import './styles/global.css'
import Header from './components/Header'
import Footer from './components/footer'
import HomePage from './components/HomePage'
import RestaurantPage from './components/RestaurantPage'
import CartSidebar from './components/CartSidebar'
import LoginModal from './components/LoginModal'
import CheckoutPage from './components/CheckoutPage'
import DashboardPage from './components/DashboardPage'
function App() {
  const { currentPage, showLoginModal, showCart } = useContext(AppContext)

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'restaurant':
        return <RestaurantPage />
      case 'dashboard':
        return <DashboardPage />
      case 'checkout':
        return <CheckoutPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="app">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
      
      {showLoginModal && <LoginModal />}
      {showCart && <CartSidebar />}
    </div>
  )
}

export default App