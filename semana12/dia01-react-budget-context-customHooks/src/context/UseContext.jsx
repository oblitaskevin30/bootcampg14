import { createContext, useState } from 'react'


// exportamos el contexto que nos servira en nuestros componentes
export const UseContext = createContext()

// aca debemos tener en cuenta que el UseContext que hemos creado
// con el create context es el que dara la etiqueta provider

export const UserProvider = ({ children }) => {

    
    //observar que el valor inicial aca se esta 
    //seteando y parseando como el json que tenga nuestra appi
    //observar que en el caso de que no se encuentre un valor en el JSON se enviara
    //como valor incial el null
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('auth') || null ))


    //osbervar que el dataUser es solo un argumento 
    //cualquiera que recibira nuestro metodo
    const storeUser = (dataUser) => {
        // recordar que auth es la clave en la que 
        //estamos almacenando nuestro dataUse
        // localStorage guarda (clave,valor)
        localStorage.setItem('auth', JSON.stringify(dataUser))
        setUser(dataUser)
    }

    const cleanUser = () => {
        localStorage.removeItem('auth')
        setUser(null)

    }

    return (
        // observar que la etiqueta se realiza con el UseContext que 
        // creamos 
        <UseContext.Provider
        //los values son los metodos que hemos creado 
        //en el componente 
        
        value={{ user, storeUser, cleanUser }}
        >
        {children}
        </UseContext.Provider>
    )
    }