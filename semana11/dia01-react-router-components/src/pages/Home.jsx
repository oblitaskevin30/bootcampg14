import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



// mi componente
export const Home = () => {
  const [characters, setCharacter] = useState([])

  const fetchCaracters = async() =>{
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const results = data.results;
    
    setCharacter(results)
  }

  useEffect(()=>{
    fetchCaracters()
  },[])

  return (
    <>
      <div>ahora estas en Home</div>

      {characters.map((character)=>{
        return(
          <article key={character.id}>
            <Link to={`/character/${character.id}`}>{character.name}</Link>
          </article>
      )
      })}
      <Link to={'/Home'}>Ir Home</Link>  
    </>
    
  )
}
