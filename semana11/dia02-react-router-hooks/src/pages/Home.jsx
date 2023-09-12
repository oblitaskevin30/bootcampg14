import { useEffect,useState } from "react"
import {Link} from 'react-router-dom'

export const Home = () => {

  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async() =>{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await response.json()
    setPokemons(data.results) // observar que aca necesitamos el llamar a results
    // ya que si no lo hacemos la data no sera la lista de JSON 
    console.log(data.results) 
  }

  useEffect(() =>{
    fetchPokemons();
  },[])

  return (
      <>
        <section className="grid grid-cols-4 w-10/12 mx-auto mt-5 gap-4">

          {/* {JSON.stringify(pokemons)} */}

          {
            pokemons.map( pokemon => {
              const id = pokemon.url.split('/').at(-2)
              const imgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
              return (

                <Link to ={`/pokemon/${id}`}  key={pokemon.url}>
                <article
                  className=" capitalize text-center border rounded-lg bg-orange-700 p-4"
                  >
                    <img src={imgLink} alt="" />
                    {pokemon.name}
                  </article>
                  
                </Link>

              )
            })
          }

        </section>

      </>
  )
}
