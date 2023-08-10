import { useState } from "react"

export const AppointmentsForm = ({onSaveAppointment}) => {
    const [form,setForm] = useState({
        petName : '',
        owner:'',
        appointmentDate : '',
        appointmentTime : '',
        symptoms : ''
    })

    const handleChange=(event) =>{
        const {name,value} = event.target
        setForm({
            ...form,// esto es una copia de todo el formulario
            [name] : value // me extrae el nombre 
        })
    }

    const handleSaveAppointment = (e) =>{
        e.preventDefault()
        
        onSaveAppointment(form)
        console.log(form)
    }


    return (
        <>
            <section className="w-96 p-4 bg-slate-950">
                <h2 className="text-2xl text-center mb-4 text-zinc-100">Nuevo Paciente</h2>

                <form
                className="flex flex-col gap-3"
                onSubmit={handleSaveAppointment}
                
                >
                <input
                    type="text"
                    name="petName"
                    className="border p-2 shadow-md rounded-md"
                    placeholder="Nombre de mi mascota"
                    onChange={handleChange}
                    
                />
                <input
                    type="number"
                    name="petAge"
                    min="0"
                    max="50"
                    className="border p-2 shadow-md rounded-md"
                    placeholder="Edad de la mascota"
                    onChange={handleChange}
                    
                />
                <input
                    type="text"
                    name="ownerName"
                    className="border p-2 shadow-md rounded-md"
                    placeholder="Dueño de la mascota"
                    onChange={handleChange}
                    
                />
                <input
                    type="date"
                    name="appointmentDate"
                    className="border p-2 shadow-md rounded-md"
                    placeholder="Fecha de la cita"
                    onChange={handleChange}
                    
                />
                <input
                    type="time"
                    name="appointmentTime"
                    className="border p-2 shadow-md rounded-md"
                    placeholder="Hora de la cita"
                    onChange={handleChange}
                    
                />
                <textarea
                    name="symptoms"
                    className="border p-2 shadow-md rounded-md"
                    placeholder="Síntomas"
                    rows={3}
                    
                />

                <input
                    className="border p-2 bg-green-800 text-white rounded-md cursor-pointer"
                    type="submit"
                    value="Guardar"
                />
                
            </form>
            {JSON.stringify(form)}
        </section>
        </>

    )
}
