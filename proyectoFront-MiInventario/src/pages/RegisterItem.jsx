import { useState} from "react"
import { useNavigate } from "react-router-dom"

const RegisterItem = () => {
    //1
    const [form, setForm] = useState({
        id: '',
        description: '',
        group: '',
        und: '',
        stock:'',
        price:''
    })

    const navigate = useNavigate()

    //2
    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        setForm({ ...form, [name]: value })
    }

    //3
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const url = 'https://64fe9bcbf8b9eeca9e28dc1e.mockapi.io/api/v1/items'

        //4
        const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
        }

        const response = await fetch(url, options)

        const data = await response.json()

        console.log(data)

        setForm({  id: '',
        description: '',
        group: '',
        und: '',
        stock:'',
        price:''})



        navigate('/')
    }

    return (
        <form className="w-96 mx-auto" onSubmit={handleSubmit}>
        <h1 className="text-center font-semibold text-3xl mb-8">RESITRAR NUEVO ITEM</h1>

        {JSON.stringify(form)}

        <div className="flex flex-col gap-4 bg-slate-600 p-8 shadow-lg">
            <label className="font-medium">
            id
            <input
                type="text"
                name="id"
                placeholder="51GYO000010"
                className="border w-full p-3"
                required
                onChange={handleChange}
                value={form?.id}
            />
            </label>
            <label className="font-medium">
            description
            <input
                type="text"
                name="description"
                placeholder="acero cronit"
                className="border w-full p-3"
                required
                onChange={handleChange}
                value={form?.description}
            />
            </label>
            <label className="font-medium">
            grupo
            <input
                type="text"
                name="group"
                placeholder="123456"
                className="border w-full p-3"
                required
                onChange={handleChange}
                value={form?.group}
            />
            </label>
            <label className="font-medium">
            unidad
            <input
                type="text"
                name="und"
                placeholder="pza, par, m, etc"
                className="border w-full p-3"
                required
                onChange={handleChange}
                value={form?.und}
            />
            </label>
            <label className="font-medium">
            stock
            <input
                type="number"
                name="stock"
                placeholder="20"
                className="border w-full p-3"
                required
                onChange={handleChange}
                value={form?.stock}
            />
            </label>
            <label className="font-medium">
            Precio
            <input
                type="number"
                name="price"
                placeholder="1000"
                className="border w-full p-3"
                required
                onChange={handleChange}
                value={form?.price}
            />
            </label>
            <input
            type="submit"
            value="Register"
            className="w-full bg-slate-900 text-cyan-200 p-3 font-medium"
            />
        </div>
        </form>
    )
}

export default RegisterItem