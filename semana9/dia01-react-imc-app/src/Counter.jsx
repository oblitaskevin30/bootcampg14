
import { useState } from 'react'

const Counter = () => {
    // creamos variables mediante el useState y le damos un valor por default
    
    const [contador,setContador] = useState(0)
    return (
        <div>
            <button onClick={() => setContador(contador + 1) } > + </button>
            <h1>{contador}</h1>
            <button onClick={() => setContador(contador - 1) } > - </button>
        </div>
    )
}

export default Counter