import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

const PokemonDetail = () => {
    const {id} = useParams();

    const [pokemon,setPokemon] = useState(null);

    const getPokemons = async(id) =>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
    }

    useEffect(()=>{
        getPokemons(id)
    },[])

    if (!pokemon) return <h1>not found pokemon</h1>

    return (
    <>
    <section className='w-10/12 mx-auto mt-5'>
        <Link to = '/Home'> Regresar al Home</Link>
        <div>Pokemon detail {id} </div>
        <div className='text-center'>
            <h1 className='text-4xl capitalize'>{pokemon?.name}</h1>
         {/* <div>{JSON.stringify(pokemon)}</div> */}
        <img src={pokemon.sprites.other['official-artwork'].front_default} />
        </div>

        

    </section>
    
    
    </>
    
  )
}

export default PokemonDetail