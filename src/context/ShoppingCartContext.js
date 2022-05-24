import { createContext, useState } from 'react'
import { productList } from '../data/Products'

const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  //product list
  const [products, setProducts] = useState(productList)
  //shopping cart
  const [shoppingCart, setShoppingCart] = useState([])

  //function to add an item to cart.
  const addToCart = (item) => {
    const exist = shoppingCart.find((x) => x.id === item.id)
    if (exist) {
      setShoppingCart(
        shoppingCart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setShoppingCart([...shoppingCart, { ...item, qty: 1 }])
    }
  }

  //function to remove an item from cart.
  const removeFromCart = (item) => {
    const exist = shoppingCart.find((x) => x.id === item.id)
    if (exist.qty === 1) {
      setShoppingCart(shoppingCart.filter((x) => x.id !== item.id))
    } else {
      setShoppingCart(
        shoppingCart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }
  //function to search products.
  const searchProducts = (searchText) => {
    //filter the array with the search value
    const res = products.filter((obj) =>
      JSON.stringify(obj).toLowerCase().includes(searchText.toLowerCase())
    )
    if (searchText) {
      setProducts(res)
    } else {
      setProducts(productList)
    }
  }

  //place order function.
  const placeOrder = () => {
    setShoppingCart([])
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        products,
        shoppingCart,
        addToCart,
        removeFromCart,
        searchProducts,
        placeOrder
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartContext
