
import { useState } from 'react'
import { useEffect } from 'react'

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([])
    const fetchUsuarios = async() =>{
        const url = `https://64fe9bcbf8b9eeca9e28dc1e.mockapi.io/api/v1/usuarios`
        const response = await fetch(url);
        const data = await response.json();
        setUsuarios(data)
        console.log(data)
        }

    useEffect(()=>{
        fetchUsuarios()
    },[])

    return (
        <>  
            <div className=" container my-5 w-30 m-auto flex justify-between px-20 ">
                <h1 className="m-auto px-5container font-extrabold text-4xl">USUARIOS REGISTRADOS</h1>
            </div>
            

            <table className="m-auto table-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>CORREO</th>
                        <th>AREA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        {
                            usuarios.map((usuarios)=>{
                            return(
                                <>
                                    <article className=" bg-slate-500" key={usuarios.id} >
                                        <h1 className="text-slate-300 border border-cyan-950">{usuarios.id}</h1>
                                    </article>
                                </>
                            )})
                        }
                        </td>
                        <td>
                        {
                            usuarios.map((usuarios)=>{
                            return(
                                <>
                                    <article className=" bg-slate-500" key={usuarios.id} >
                                        <h1 className="text-slate-300 border border-cyan-950">{usuarios.fullname}</h1>
                                    </article>
                                </>
                            )})
                        }
                        </td>
                        <td>
                        {
                            usuarios.map((usuarios)=>{
                            return(
                                <>
                                    <article className=" bg-slate-500" key={usuarios.id} >
                                        <h1 className="text-slate-300 border border-cyan-950">{usuarios.email}</h1>
                                    </article>
                                </>
                            )})
                        }
                        </td>
                        <td>
                        {
                            usuarios.map((item)=>{
                            return(
                                <>
                                    <article className=" bg-slate-500" key={item.id} >
                                        <h1 className="text-slate-300 border border-cyan-950">{item.area}</h1>
                                    </article>
                                </>
                            )})
                        }
                        </td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}

export default Usuarios