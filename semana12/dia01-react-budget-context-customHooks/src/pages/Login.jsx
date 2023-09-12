// observar que aca importamos 
// el useConstext de react mientras que mas abajo 
// estamos importando el UseContext de nuestro
//componente
import { useState, useContext } from "react" 
import { json } from "react-router-dom"

import { useNavigate } from 'react-router-dom'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// import useAuth from "../hooks/useAuth"

// este userContext es nuestro componente
import { UseContext } from "../context/UseContext"

const MySwal = withReactContent(Swal)
///////////////////////////////////////////////////////////////////////
const Login = () => {
    // aca llamamos al metodo storeUser del UseContext
    //por medio del useContext de React
    const { storeUser } = useContext(UseContext)

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate()

  // const { setAuth } = useAuth()

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

            const email = form.email
            const password = form.password
        
        const url = `https://64fd0d80596493f7af7e15de.mockapi.io/api/v1/users?email=${email}&password=${password}`

        //no necesitamos el post en el login , sino en el register
        // const option = {
        //     method : 'POST',
        //     headers:{
        //         'content-Type' : 'application/json'
        //     },
        //     body : JSON.stringify(form)
        // }

        const response = await fetch(url)

        const data = await response.json()

        console.log(data)

        // colocamos el formulario vacio 
            // debemos colocarle los values en las etiquetas
        setForm({ email: '', password: '' })

        
        //validacion del usuario
            if (data.length === 1) {
            const cloneData =  { ...data[0] }
            
            delete cloneData.password
                
            // en el local storage guardamos string por ello se convierte
            // localStorage.setItem('auth', JSON.stringify(cloneData)) 
            // setAuth(cloneData)
            //observar que aca le estamos pasando 
            // como argumento el cloneData el cual es el email
            // que ingresamos en el login
            storeUser(cloneData)

            navigate('/')
            } else {
            MySwal.fire({
                icon: 'error',
                title: 'Credenciales incorrectas!'
            })
            }
    }

    return (
        <form className="w-96 mx-auto" onSubmit={handleSubmit} >
        <h1 className="text-center text-3xl mb-8">Budget App - Login</h1>

        {JSON.stringify(form)}

        <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg">
            <label className="font-medium">
            Email
            <input
                type="text"
                name="email"
                placeholder="jonathanOblitas@gmail.com"
                className="border w-full p-3"
                onChange={handleChange}
                value={form?.email}

            />
            </label>
            <label className="font-medium">
            Password
            <input
                type="password"
                name="password"
                placeholder="123456"
                className="border w-full p-3"
                onChange={handleChange}
                value={form?.password}
                
            />
            </label>
            <input
            type="submit"
            value="Login"
            className="w-full bg-amber-300 p-3 font-medium"
            />
        </div>
        </form>
    )
}

export default Login