import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout/RootLayout"
import Home from "./pages/Home/Home"
import Auth from "./pages/Auth/Auth"
import CheckOut from "./pages/Checkout/CheckOut"
import './App.css'
import ProductDetails from "./components/ProductsDetails/ProductDetails"


function App() {
  const router = createBrowserRouter (
    createRoutesFromElements (
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App