import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../context/UserContext"



const Login = () => {

    //3
    const {storeUser} = useContext(UserContext)
    const navigate = useNavigate()

    //1

    const [form, setForm] = useState({
        email: '',
        password: '',
    })



    
    //2
    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        setForm({ ...form, [name]: value })
    }

    //4
    const handleSubmit = async (event) => {
        
        event.preventDefault();
        //5
        const email = form.email
        const password = form.password
        
        //6
        const url = `https://64fe9bcbf8b9eeca9e28dc1e.mockapi.io/api/v1/usuarios?email=${email}&password=${password}`

        const response = await fetch(url)

        const data = await response.json()

        console.log(data)

        setForm({ email: '', password: '' })
        
        if (data.length === 1) {


            const cloneData =  { ...data[0] }
        
            delete cloneData.password
        
            //7
            storeUser(cloneData)

            navigate('/')

        }else {
            alert("Error en los datos")
        }
    }

    return (
        <form className="w-96 mx-auto" onSubmit={handleSubmit}>
            <h1 className="text-center text-3xl mb-8">Ingresar al Inventario</h1>

            {JSON.stringify(form)}
            

            
            <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg">
                
                <label className="font-medium">
                Email
                <input
                    required
                    type="text"
                    name="email"
                    placeholder="JonathanOblitas@gmail.com"
                    className="border w-full p-3"
                    onChange={handleChange}
                    value={form?.email}
                />
                </label>
                
                <label className="font-medium">
                Password
                <input
                    required
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