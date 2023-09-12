import { useState } from "react"

const useAuth = () => {
    //1
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('auth')) || { email: '' }
    )
    
    //2
    const isAuth = Boolean(user?.email) 
    
    //3
    const setAuth = (user) => {
        setUser(user)
        localStorage.setItem('auth', JSON.stringify(user))
    }

    //4
    const logout = ()  => {
        localStorage.removeItem('auth')
    }

    //5
    return {
        user,
        isAuth,
        setAuth,
        logout
    }
}

export default useAuth