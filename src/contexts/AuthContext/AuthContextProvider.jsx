import { useState } from "react"
import { AuthContext } from "./AuthContext"


function AuthContextProvider(props) {
    const [user, setUser] = useState(localStorage.getItem("currentUserEmail") ? {email: localStorage.getItem("currentUserEmail")} : null)

    const signUp = (email, password) => {
        const users = JSON.parse(localStorage.getItem('users') || "[]")

        if(users.find((u) => u.email === email)) {
            return { success: false, error: "Email already exists"}
        }

        const newUser = {email, password}
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("currentUserEmail", email)

        setUser({ email })

        return { success: true }
    }
    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('users') || "[]")
        const currentUser = users.find(u => u.email === email && u.password === password);

        if(!currentUser) {
            return {success: false, error: "Invalid email or password"}
        }

        localStorage.setItem("currentUserEmail", email);
        setUser({ email })

        return {success: true}
    }

    const logout = () => {
        localStorage.removeItem("currentUserEmail");
        setUser(null)
    }
  return (
    <AuthContext.Provider value={{signUp, user, login, logout}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider