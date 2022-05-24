import { useContext } from 'react'
import ShoppingCartContext from '../context/ShoppingCartContext'
import Item from '../components/Item'
import { toast } from 'react-toastify'

function Explore() {
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
    <Item key={item.id} item={item} addCart={addCart} />
  ))

  const handleChange = (e) => {
    searchProducts(e.target.value)
  }
  return (
    <div className='screen'>
      <div className='searchbar-container animate-slider'>
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
      </div>
      <div className='product-list-container'>{prodList}</div>
    </div>
  )
}

export default Explore
