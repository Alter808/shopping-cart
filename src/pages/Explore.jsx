import { useContext } from 'react'
import ShoppingCartContext from '../context/ShoppingCartContext'
import Item from '../components/Item'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

function Explore() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const theItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  const { products, addToCart, searchProducts } =
    useContext(ShoppingCartContext)
  const addCart = (item) => {
    const options = {
      autoClose: 1000
    }
    addToCart(item)
    toast.success(`${item.name} added to your cart`, options)
  }
  const prodList = products.map((item) => (
    <motion.div variants={theItem} key={item.id}>
      <Item item={item} addCart={addCart} />
    </motion.div>
  ))

  const handleChange = (e) => {
    searchProducts(e.target.value)
  }
  return (
    <div className='screen'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='searchbar-container'>
        <div className='mb-2 mx-auto'>
          <p className='search-label'>Search</p>
          <input
            onChange={handleChange}
            className='search-input'
            type='text'
            name=''
            id='search'
          />
        </div>
      </motion.div>
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='product-list-container'>
        {prodList}
      </motion.div>
    </div>
  )
}

export default Explore
