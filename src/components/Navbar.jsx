import { useNavigate } from 'react-router-dom'
import { ReactComponent as CartIcon } from '../assets/svg/cart.svg'
import { ReactComponent as ListIcon } from '../assets/svg/list.svg'
import { useContext } from 'react'
import ShoppingCartContext from '../context/ShoppingCartContext'
import { motion } from 'framer-motion'

const getQty = (shoppingCart) => {
  const sumall = shoppingCart
    .map((item) => item.qty)
    .reduce((prev, curr) => prev + curr, 0)

  return sumall
}
function Navbar() {
  const navigate = useNavigate()
  const { shoppingCart } = useContext(ShoppingCartContext)
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 0.3
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren'
      }
    }
  }
  const variantsIcon = {
    visible: { scale: 1, transition: { type: 'spring' } },
    hidden: { scale: 0 }
  }
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={variants}
      className='navbar-container'>
      <motion.div
        variants={variantsIcon}
        className='navbar-icon-container'
        onClick={() => navigate('/')}>
        <ListIcon className='h-6 w-6 text-gray-200' />
        <p className='text-lg text-gray-200'>Products</p>
      </motion.div>

      <motion.div
        variants={variantsIcon}
        className='navbar-icon-container'
        onClick={() => navigate('/shopping-cart')}>
        <CartIcon className='h-6 w-6 text-gray-200' />
        <p className='text-lg text-gray-200'>Cart({getQty(shoppingCart)})</p>
      </motion.div>
    </motion.div>
  )
}

export default Navbar
