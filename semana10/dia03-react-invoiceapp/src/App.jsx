import { useEffect, useState } from "react"
import { fetchInvoices } from "./services/invoices"
import { Header } from "./components/Header"
import { Main } from "./components/Main"

function App() {
  

  const [invoice , setInvoice] = useState([])

  useEffect(()=>{
    fetchInvoices().then(data => setInvoice(data))

    console.log(fetchInvoices())
  },[])

  return (
    <> 
      <Header></Header>
      
      <Main invoice={invoice}></Main>
    
    </>

  )
}

export default App
