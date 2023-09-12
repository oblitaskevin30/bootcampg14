import { useState } from "react"

const useAuth = () => {
        const [user, setUser] = useState(
            JSON.parse(localStorage.getItem('auth')) || { email: '' } // extraemos el json de 
            // usuario autenticado si no lo encuentra , va a colocar el objeto de email vacio
        )
        
        const isAuth = Boolean(user?.email) // comprueba Si estas logueado
        
        const setAuth = (user) => {
            setUser(user) // este para setear el user
            localStorage.setItem('auth', JSON.stringify(user))// este para guardar el localStorage
        }
        
        const logout = ()  => {
            localStorage.removeItem('auth')
        }
        
        return {
            user,
            isAuth,
            setAuth,
            logout
        }
}

export default useAuth