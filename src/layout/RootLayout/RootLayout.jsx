import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import AuthContextProvider from "../../contexts/AuthContext/AuthContextProvider"
import CartContextProvider from "../../contexts/CartContext/CartContextProvider"


function RootLayout() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <div className="app">
            <Navbar/>
            <Outlet />
        </div>
      </CartContextProvider>
    </AuthContextProvider>
  )
}

export default RootLayout