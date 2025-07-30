import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppContext } from './AppContext'
import RouterWrapper from './components/RouterWrapper'
import './styles/global.css'
import Header from './components/Header'
import Footer from './components/footer'
import HomePage from './components/HomePage'
import RestaurantPage from './components/RestaurantPage'
import CartSidebar from './components/CartSidebar'
import LoginModal from './components/LoginModal'
import CheckoutPage from './components/CheckoutPage'
import DashboardPage from './components/DashboardPage'
import MapView from './components/MapView'
import DrinksPage from './components/DrinksPage'
import FastFoodPage from './components/FastFoodPage'
import GroceriesPage from './components/GroceriesPage'
import DessertPage from './components/DessertPage'
import AsianPage from './components/AsianPage'
import ItalianPage from './components/ItalianPage'
import OffersPage from './components/OffersPage'
import HelpPage from './components/HelpPage'
import AboutPage from './components/AboutPage'
import PartnerPage from './components/PartnerPage'

function App() {
  const { showLoginModal, showCart } = useContext(AppContext)

  return (
    <Router>
      <RouterWrapper>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/restaurant" element={<RestaurantPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/map" element={<MapView />} />
              <Route path="/drinks" element={<DrinksPage />} />
              <Route path="/fastfood" element={<FastFoodPage />} />
              <Route path="/groceries" element={<GroceriesPage />} />
              <Route path="/desserts" element={<DessertPage />} />
              <Route path="/asian" element={<AsianPage />} />
              <Route path="/italian" element={<ItalianPage />} />
              <Route path="/offers" element={<OffersPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/partner" element={<PartnerPage />} />
            </Routes>
          </main>
          <Footer />
          
          {showLoginModal && <LoginModal />}
          {showCart && <CartSidebar />}
        </div>
      </RouterWrapper>
    </Router>
  )
}

export default App