import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Explore from './pages/Explore'
import ShoppingCart from './pages/ShoppingCart'
import Navbar from './components/Navbar'
function App() {
  // probar https://react-hot-toast.com/
  return (
    <ShoppingCartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/shopping-cart' element={<ShoppingCart />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </ShoppingCartProvider>
  )
}

export default App
