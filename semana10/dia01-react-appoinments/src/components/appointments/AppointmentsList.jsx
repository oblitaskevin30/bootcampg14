

export const AppointmentsList = ({appointments}) => {
    return (
        <>
        <section className='w-96 bg-slate-200 p-4' >
            <h2 className='text-2xl text-center mb-4'>
                Listado de Pacientes
            </h2>
            <div>
                {appointments.map(appointment => {
                    return(
                        <div
                        key={appointment.id}
                        className="border-2 border-sky-500 p-3 rounded-lg bg-sky-300 flex justify-between"
                        >
                            <div>
                            <h4 className="font-semibold text-lg">Mascota</h4>
                            
                            <div>
                                <strong>Nombre:</strong> {appointment.petName}
                            </div>
            
                            <div>
                                <strong>Edad (años):</strong> {appointment.petAge}
                            </div>
                            </div>
                            
                            <div>
                            <h4 className="font-semibold text-lg">Dueño</h4>
            
                            <div>
                                <strong>Nombre:</strong> {appointment.ownerName}
                            </div>
                            </div>
                            
                            <div>
                            <h4 className="font-semibold text-lg">Citas</h4>
            
                            <div>
                                <strong>Fecha:</strong> {appointment.appointmentDate}
                            </div>
                            <div>
                                <strong>Hora:</strong> {appointment.appointmentTime}
                            </div>
                            <div>
                                <strong>Sintomas:</strong> {appointment.symptoms}
                            </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </section>
        </>
    )
}
