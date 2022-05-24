import { useState, useEffect } from 'react'
import formatMoney from '../utils/FormatMoney'

function CartTotals({ shoppingCart }) {
  const [totalProducts, setTotalProducts] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [taxes, setTaxes] = useState(0)

  const calculateTotals = () => {
    //sets the total products in cart.
    const sumProds = shoppingCart.reduce((accumulator, curValue) => {
      return accumulator + curValue.qty
    }, 0)
    setTotalProducts(sumProds)
    //sets the total price.
    const totPrice = shoppingCart.reduce((accumulator, curValue) => {
      return accumulator + curValue.regPrice * curValue.qty
    }, 0)

    setTotalPrice(totPrice)
    setTaxes(totalPrice * 0.18)
  }

  useEffect(() => {
    calculateTotals()
  })
  return (
    <div className='flex flex-col py-2 px-4 border-4 rounded-md'>
      <p className='cart-total-p'>Items: {totalProducts}</p>
      <p className='cart-total-p'>Items amount: {formatMoney(totalPrice)}</p>
      <p className='cart-total-p'>taxes: {formatMoney(taxes)}</p>
      <p className='cart-total-p'>Shipping: {formatMoney(5)}</p>
      <p className='cart-total-p'>
        Total Amount {formatMoney(totalPrice + taxes + 5)}
      </p>
    </div>
  )
}

export default CartTotals
