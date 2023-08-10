import { Header } from "./components/Header"
import { Appointments } from "./pages/appointments"

function App() {

  return (
    <>
      <Header title = "Citas Médicas para mascotas"/>

      <main className="container  m-auto flex gap-12
      w-full py-5 justify-center">
        <Appointments/>
      </main>
      
    </>
  )
}

export default App
