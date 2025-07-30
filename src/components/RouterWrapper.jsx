import { useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AppContext } from '../AppContext'

function RouterWrapper({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const { currentPage, setCurrentPage } = useContext(AppContext)

  // Update currentPage when URL changes
  useEffect(() => {
    const path = location.pathname.slice(1) || 'home'
    if (path !== currentPage) {
      setCurrentPage(path)
    }
  }, [location.pathname])

  // Navigate when currentPage changes
  useEffect(() => {
    const targetPath = currentPage === 'home' ? '/' : `/${currentPage}`
    if (location.pathname !== targetPath) {
      navigate(targetPath)
    }
  }, [currentPage])

  return children
}

export default RouterWrapper