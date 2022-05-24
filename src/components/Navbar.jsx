import { useNavigate } from 'react-router-dom'
import { ReactComponent as CartIcon } from '../assets/svg/cart.svg'
import { ReactComponent as ListIcon } from '../assets/svg/list.svg'
import { useContext } from 'react'
import ShoppingCartContext from '../context/ShoppingCartContext'

const getQty = (shoppingCart) => {
  const sumall = shoppingCart
    .map((item) => item.qty)
    .reduce((prev, curr) => prev + curr, 0)

  return sumall
}
function Navbar() {
  const navigate = useNavigate()
  const { shoppingCart } = useContext(ShoppingCartContext)
  return (
    <div className='navbar-container'>
      <div className='navbar-icon-container' onClick={() => navigate('/')}>
        <ListIcon className='h-6 w-6 text-gray-200' />
        <p className='text-lg text-gray-200'>Products</p>
      </div>

      <div
        className='navbar-icon-container'
        onClick={() => navigate('/shopping-cart')}>
        <CartIcon className='h-6 w-6 text-gray-200' />
        <p className='text-lg text-gray-200'>Cart({getQty(shoppingCart)})</p>
      </div>
    </div>
  )
}

export default Navbar
