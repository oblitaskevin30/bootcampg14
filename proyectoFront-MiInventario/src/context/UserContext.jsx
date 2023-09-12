import { createContext, useState } from 'react'


//1.0
export const UserContext = createContext()

export const UserProvider = ({ children }) => {


    //1
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('auth') || null ))



    //2
    const storeUser = (dataUser) => {
        localStorage.setItem('auth', JSON.stringify(dataUser))
        setUser(dataUser)
    }


    //3
    const cleanUser = () => {
        localStorage.removeItem('auth')
        setUser(null)
    }


    //4
    


    // exportamos con el provider
    return (
        <UserContext.Provider
            value={{ user, storeUser, cleanUser}}
            >
            {children}
        </UserContext.Provider>
    )
}