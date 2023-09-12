import { useEffect, useState} from "react"

const HomeUsers = () => {
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

    return (
        <>  
            <div className=" container my-5 w-30 m-auto flex justify-between px-20 ">
                <h1 className="m-auto px-5container font-extrabold text-4xl">LISTA DE ARTICULOS EN ALMACEN</h1>
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
                    </tr>
                </tbody>
            </table>
        </>

    )
}

export default HomeUsers