import React from 'react'

export const App = () => {
  // en esta zona podemos colocar codigo
  // o lo que querramos


  return (
    // lo que esta dentro de este return
    // es lo que se vizualizara en la pantalla
    // no podemos definir funciones
    // LO QUE COLOCAMOS ACA DEBE IR ENTRE LOS FRAGMENTS QUE SON DIVS FANTASMAS

    <div>
      <span>Selecciona un color  : </span>
      <input type="text"
      placeholder='#ff000' />
    </div>


    
  )
}
