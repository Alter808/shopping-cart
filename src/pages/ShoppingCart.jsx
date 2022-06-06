import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ShoppingCartContext from '../context/ShoppingCartContext'
import CartItem from '../components/CartItem'
import CartTotals from '../components/CartTotals'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

function ShoppingCart() {
  window.scrollTo(0, 0)
  const { shoppingCart, placeOrder } = useContext(ShoppingCartContext)
  const navigate = useNavigate()
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 700,
        velocity: 2,
        restSpeed: 0.5,
        mass: 0.5,
        bounce: 0.25
      }
    },
    hidden: { opacity: 1, x: -50 }
  }
  const cart = shoppingCart.map((item) => (
    <CartItem key={item.id} item={item} />
  ))
  const doOrder = () => {
    const options = {
      autoClose: 1000
    }
    placeOrder()
    toast.success('Order Placed!!', options)
    navigate('/')
  }
  const emptyCart = <p>Shopping cart is empty</p>
  const carTotalsTemplate = (
    <div className='flex justify-end p-2'>
      <CartTotals shoppingCart={shoppingCart} />
    </div>
  )
  const placeOrderButton = (
    <div className='flex justify-end'>
      <button onClick={() => doOrder()} className='btn btn-green rounded-full'>
        Place Order
      </button>
    </div>
  )
  return (
    <div className='screen'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
        className='bg-white px-4 py-2 rounded-md shadow-xl max-w-lg md:max-w-2xl mx-auto mb-24'>
        <p className='mb-4 text-lg font-semibold text-gray-600'>
          Shopping Cart
        </p>
        <div>{shoppingCart.length > 0 ? cart : emptyCart}</div>
        <div>{shoppingCart.length > 0 && carTotalsTemplate}</div>
        {shoppingCart.length > 0 && placeOrderButton}
      </motion.div>
    </div>
  )
}

export default ShoppingCart
