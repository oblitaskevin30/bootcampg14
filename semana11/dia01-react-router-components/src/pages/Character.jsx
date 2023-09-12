import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom"

export const Character = () => {

    const {id} = useParams();

    const [character , setCharacter] = useState(null);

    const getCharacter = async()=>{
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await  response.json();
        setCharacter(data)
        console.log(data)

    }

    useEffect(()=>{
        getCharacter(id)
    },[])

  return (
    <>
    <div>Character page {id}</div>
    <div className="gap-3 bg-red-700 ">
        <h1>{`este personaje es ${character?.name}`}</h1>
        
        <img src={character?.image} />
    </div>
    <Link to={'/Home'}>Back home</Link>
    </>
    

  )
}
