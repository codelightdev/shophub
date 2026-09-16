import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import AuthContextProvider from "../../contexts/AuthContext/AuthContextProvider"


function RootLayout() {
  return (
    <AuthContextProvider>
        <div className="app">
            <Navbar/>
            <Outlet />
        </div>
    </AuthContextProvider>
  )
}

export default RootLayout