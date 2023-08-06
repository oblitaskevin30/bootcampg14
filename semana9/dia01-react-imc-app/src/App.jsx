import { useState } from "react"

function App() {
  //variables
  const[peso, setPeso] = useState(180);
  const[altura,setAltura] = useState(300);

  //funciones
  const handleChangePeso = (event) =>{
    const valuePeso = event.target.value;
    setPeso(valuePeso)
  }

  const handleChangeAltura = (event) =>{
    const valueAltura = event.target.value;
    setAltura(valueAltura)
  }
  
  return (
    <>
      <section className="w-96 mx-auto my-5 rounded-md bg-sky-500">
        <h1 className="text-3xl font-bold text-center text-white p-5 ">
          IMC CALCULATOR
        </h1>
        <div className="bg-sky-200 p-5">
          <p>Peso : {peso} kg </p>
          <input type="range" 
            className="w-full"
            min="50"
            max="200"
            onChange={handleChangePeso}
          />
          <p>Height : {altura} cm</p>
          <input type="range" 
            className="w-full"
            min="50"
            max="230"
            onChange={handleChangeAltura}
          />

          <p className="text-2xl font-bold bg-orange-400 text-center p-5 mt-5"> tu IMC es {(peso/(altura*altura/10000)).toFixed(2)} </p>

          

        </div>
      </section>
    
    </>

    
  )
}

export default App
