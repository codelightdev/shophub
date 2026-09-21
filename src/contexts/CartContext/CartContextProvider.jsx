import { useState } from "react"
import { CartContext } from "./CartContext"
import { getProductById } from "../../data/product";

function CartContextProvider(props) {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (productId) => {
        const existing = cartItems.find((item) => item.id === productId);
        if(existing) {
            const currentQuantity = existing.quantity;
            const updatedCartItems = cartItems.map((item) => item.id === productId ? {id: productId, quantity: currentQuantity + 1} : item)
            setCartItems(updatedCartItems)
        }else {
            setCartItems([...cartItems, {id: productId, quantity: 1}]);
        }
    }

    const getCartItemsWithProducts = () => {
        return cartItems.map((item) => ({...item, product: getProductById(item.id)})).filter((item) => item.product)
    }

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId))
    }

    const updateQuantity = (productId, quantity) => {
        if(quantity <= 0) {
            removeFromCart(productId)
            return;
        }
        setCartItems(cartItems.map((item) => item.id === productId ? {...item, quantity} : item))
    }

    const getCartTotal = () => {
        const total = cartItems.reduce((total, item) => {
            const product = getProductById(item.id)
            return total = !product ? product.price * item.quantity : 0;
        }, 0)

        return total;
    }

    const clearCart = () => {
        setCartItems([])
    }

  return (
    <>
        <CartContext.Provider value={{addToCart, cartItems, getCartItemsWithProducts, updateQuantity, removeFromCart, getCartTotal, clearCart}}>
            {props.children}
        </CartContext.Provider>
    </>
  )
}

export default CartContextProvider