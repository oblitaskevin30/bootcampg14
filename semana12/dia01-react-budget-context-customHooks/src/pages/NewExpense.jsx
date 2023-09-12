import { UseContext } from "../context/UseContext"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useContext } from "react"

import { createExpense } from "../services/budgets"
import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"

const MySwal = withReactContent(Swal)

const NewExpense = () => {

    const { user } = useContext(UseContext)
    const navigate = useNavigate()
    // creamos el useState para captuara la informacion y setearla en el formato
    const [form, setForm] = useState({
        name: '',
        amount: '',
    })

    

    // const { setAuth } = useAuth()
// aca trabajamos el evento para extraer la informacion
// que ingresamos en el fomulario
// luego seteamos lo que escribimos en los inputs con el set
    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const name = form.name
        const amount = form.amount

        // hacemos el PUT con el createExpense de services
        createExpense(name, amount)
        .then(() => {
            MySwal.fire({
            icon: 'success',
            title: 'Expense saved!'
            })
            .then(() => {
            navigate('/')
            })
        })
        .catch((err) => {
            MySwal.fire({
            icon: 'error',
            title: 'Error!'
            })
        })
    }

    return (
        <form className="w-96 mx-auto" onSubmit={handleSubmit}>
        <h1 className="text-center text-3xl mb-8">Budget App - Add Expense</h1>

        <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg">
            <label className="font-medium">
            Name
            <input
                type="text"
                name="name"
                placeholder="Restaurant, Travel, etc"
                className="border w-full p-3"
                onChange={handleChange}
                value={form?.name}
            />
            </label>
            <label className="font-medium">
            Amount
            <input
                type="number"
                name="amount"
                placeholder="0"
                className="border w-full p-3"
                onChange={handleChange}
                value={form?.amount}
            />
            </label>
            <input
            type="submit"
            value="Save budget"
            className="w-full bg-amber-300 p-3 font-medium"
            />
        </div>
        </form>
    )
}

export default NewExpense