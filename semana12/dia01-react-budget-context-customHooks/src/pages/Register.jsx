import { useState, useContext } from "react"
import { json } from "react-router-dom"

import { useNavigate } from 'react-router-dom'

// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// import useAuth from "../hooks/useAuth"

// import { UserContext } from "../context/UserContext"

// const MySwal = withReactContent(Swal)

const Register = () => {
//   const { storeUser } = useContext(UserContext)

    const [form, setForm] = useState({
        fullname : '',
        email: '',
        password: '',
        budget :0
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

    // const email = form.email
    // const password = form.password
    
    const url = `https://64fd0d80596493f7af7e15de.mockapi.io/api/v1/users`

    const option = {
        method : 'POST',
        headers:{
            'content-Type' : 'application/json'
        },
        body : JSON.stringify(form)
    }

    const response = await fetch(url,option)

    const data = await response.json()

    console.log(data)

    // colocamos el formulario vacio 
        // debemos colocarle los values en las etiquetas
    setForm({ fullname : '',email: '', password: '' })

    navigate('/Login')

    
    //vemos is esta logeado el uruario
        // if (data.length === 1) {
        // const cloneData =  { ...data[0] } /*spraid oprator para copiar el valor de la data */
        
        // delete cloneData.password

        // localStorage.setItem('auth', JSON.stringify(cloneData))
        // // setAuth(cloneData)
        // // storeUser(cloneData)

        //     navigate('/')
        // } else {
        // MySwal.fire({
        //     icon: 'error',
        //     title: 'Credenciales incorrectas!'
        // })
        // }
    }

    return (
        <form className="w-96 mx-auto" onSubmit={handleSubmit} >
        <h1 className="text-center text-3xl mb-8">Budget App - Register</h1>

        {JSON.stringify(form)}

        <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg">
        <label className="font-medium">
            Full Name
            <input
                type="text"
                name="fullname"
                placeholder="jonathan k. Oblitas"
                className="border w-full p-3"
                onChange={handleChange}
                value={form?.fullname}

            />
            </label>
            <label className="font-medium">
            Email
            <input
                type="email"
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
            value="Register"
            className="w-full bg-amber-300 p-3 font-medium"
            />
        </div>
        </form>
    )
}

export default Register