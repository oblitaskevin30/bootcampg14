import { useState } from "react"
import { AppointmentsForm } from "../components/appointments/AppoinmentsForm"
import { AppointmentsList } from "../components/appointments/AppointmentsList"


export const Appointments = () => {
    const[appointments,setApppointments] = useState([])

    const handleSaveAppointment = (form) =>{
        setApppointments([...appointments,form])
    }
    return (
        <>
        <AppointmentsForm
            onSaveAppointment = {handleSaveAppointment}
        />
        <AppointmentsList
            appointments={appointments}
        />
        </>
    )
}
