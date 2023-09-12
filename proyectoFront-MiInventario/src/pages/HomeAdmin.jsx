import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import { deleteItem} from "../services/crudItems"


const HomeAdmin = () => {
    const navigate = useNavigate()

    

    const [items, setItems] = useState([])
    
    const fetchItems = async() =>{
        const response = await fetch("https://64fe9bcbf8b9eeca9e28dc1e.mockapi.io/api/v1/items");
        const data = await response.json();
        setItems(data)
        console.log(data)
        }

    useEffect(()=>{
        fetchItems()
    },[])




    // boton AddItem
    const addItem = () => {
        navigate('/RegistrarItem')
    }

    // boton delete 
    const handleDelete = (id) =>{
        deleteItem(id)
        navigate('/')
        console.log("eliminado")

    }

    const handleEdite = (item) =>{
        console.log(item.id)
        navigate('/EditeItem/'+ item.id)
    }


    return (
        <>  
            <div className=" container my-5 w-30 m-auto flex justify-between px-20 ">
                <h1 className="m-auto px-5container font-extrabold text-4xl">LISTA DE ARTICULOS EN ALMACEN</h1>
                <button onClick={addItem} className="bg-blue-500 container w-36 m-auto  hover:bg-blue-700 text-white font-bold py-1 px-1 rounded">
                    CREAR NUEVO ITEM
                </button>
            </div>
            

            <table className="m-auto table-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DESCRIPCION</th>
                        <th>GRUPO</th>
                        <th>UNIDAD</th>
                        <th>STOCK</th>
                        <th>PRECIO</th>
                        <th>TOTAL</th>
                        <th>EDITAR</th>
                        <th>ELIMINAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        {
                            items.map((item)=>{
                            return(
                                <>
                                    <article className=" bg-slate-500" key={item.id} >
                                        <h1 className="text-slate-300 border border-cyan-950">{item.id}</h1>
                                    </article>
                                </>
                            )})
                        }
                        </td>
                        <td>
                        {
                            items.map((item)=>{
                            return(
                                <>
                                    <article className=" bg-slate-500" key={item.id} >
                                        <h1 className="text-slate-300 border border-cyan-950">{item.description}</h1>
                                    </article>
                                </>
                            )})
                        }
                        </td>
                        <td>
                        {
                            items.map((item)=>{
                            return(
                                <>
                                    <article className=" bg-slate-500" key={item.id} >
                                        <h1 className="text-slate-300 border border-cyan-950">{item.group}</h1>
                                    </article>
                                </>
                            )})
                        }
                        </td>
                        <td>
                        {
                            items.map((item)=>{
                            return(
                                <>
                                    <article className=" bg-slate-500" key={item.id} >
                                        <h1 className="text-slate-300 border border-cyan-950">{item.und}</h1>
                                    </article>
                                </>
                            )})
                        }
                        </td>
                        <td>
                        {
                            items.map((item)=>{
                            return(
                                <>
                                    <article className=" bg-slate-500" key={item.id} >
                                        <h1 className="text-slate-300 border border-cyan-950">{item.stock}</h1>
                                    </article>
                                </>
                            )})
                        }
                        </td>
                        <td>
                        {
                            items.map((item)=>{
                            return(
                                <>
                                    <article className=" bg-slate-500" key={item.id} >
                                        <h1 className="text-slate-300 border border-cyan-950">{item.price}</h1>
                                    </article>
                                </>
                            )})
                        }
                        </td>
                        <td>
                        {
                            items.map((item)=>{
                            return(
                                <>
                                    <article className=" bg-slate-500" key={item.id} >
                                        <h1 className="text-slate-300 border border-cyan-950">{(item.price * item.stock).toFixed(2)}</h1>
                                    </article>
                                </>
                            )})
                        }
                        </td>
                        
                        <td>
                        {
                            items.map((item)=>{
                            return(
                                <>
                                    <article className=" bg-slate-500" key={item.id} >
                                        <button className="text-slate-300 border border-cyan-950"
                                        onClick={()=>handleEdite(item)}
                                        
                                        >
                                            Editar 🤧
                                        </button>
                                    </article>
                                </>
                            )})
                        }
                        </td>
                        <td>
                        {
                            items.map((item)=>{
                            return(
                                <>
                                    <article className=" bg-slate-500" key={item.id} >
                                        <button className="text-slate-300 border border-cyan-950"
                                        onClick={(item) => handleDelete(item.id)}
                                        
                                        > Eliminar ❎</button>
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

export default HomeAdmin