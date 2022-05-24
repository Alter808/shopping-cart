import formatMoney from '../utils/FormatMoney'
import { useContext } from 'react'
import ShoppingCartContext from '../context/ShoppingCartContext'

function CartItem({ item }) {
  const getSubtotal = (qty, price) => {
    return qty * price
  }
  const { addToCart, removeFromCart } = useContext(ShoppingCartContext)
  const add = (item) => {
    addToCart(item)
  }

  const remove = (item) => {
    removeFromCart(item)
  }

  return (
    <div className='cart-item-container'>
      <div className='cart-item-title-container'>
        <img className='cart-item-img' src={item.imageUrl} alt={item.name} />
        <p className='cart-item-name'>{item.name}</p>
      </div>
      <div className='flex flex-row justify-around items-baseline'>
        {/* container for the qty and buttons */}
        <div className='qty-container'>
          <p className='ml-1 mt-1 text-lg'>Quantity</p>
          <div className='qty-buttons-container'>
            <div
              onClick={() => add(item)}
              className='qty-btn bg-teal-300 hover:bg-teal-200'>
              +
            </div>
            <p className='qty-num'>{item.qty}</p>
            <div
              onClick={() => remove(item)}
              className='qty-btn bg-red-300 hover:bg-red-200'>
              -
            </div>
          </div>
        </div>
        {/* container for the Price */}
        <div className='price-container'>
          <p className='ml-1 mt-1 text-lg'>Price</p>
          <p className='qty-num mt-1.5'>{formatMoney(item.regPrice)}</p>
        </div>
        {/* container for the total */}
        <div className='price-container'>
          <p className='ml-1 mt-1 text-lg'>Total</p>
          <p className='qty-num mt-1.5'>
            {formatMoney(getSubtotal(item.qty, item.regPrice))}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartItem
