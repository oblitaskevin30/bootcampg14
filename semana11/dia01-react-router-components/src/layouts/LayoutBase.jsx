import { Link } from "react-router-dom"

export const LayoutBase = (props) => {
  return (
    <>
        <header className='container mx-auto bg-red-600
        py-4 px-6 flex justify-between'>
            <Link to='/'>Inicio</Link>
            <Link to='/hola'>hola</Link>
            <Link to='/Home'>Home</Link>
        </header>

        <main className="container mx-auto bg-slate-600
        py-4 px-6 " >
            {props.children}
        </main>
    </>
  )
}
