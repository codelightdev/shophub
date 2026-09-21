import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext/CartContext'

function useCart() {
  return useContext(CartContext)
}

export default useCart