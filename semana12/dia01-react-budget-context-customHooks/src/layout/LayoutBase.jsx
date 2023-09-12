//recordar que usaremos useContext de React para
//llamar a UseContext componente
import { useContext } from "react"
import { UseContext } from '../context/UseContext'

import { Link, useNavigate } from 'react-router-dom'
// import useAuth from '../hooks/useAuth'


//////////////////////////////////////////////////////////////////////////////////
const LayoutBase = (props) => {
  const {user, cleanUser} = useContext(UseContext)
  const  navigate = useNavigate()
  // const {logout, isAuth} = useAuth()

    const handleLogout = () => {
      // logout()
      cleanUser()
      navigate('/Login')
    }


    return (
        <>
            <header className='bg-amber-200 py-4 px-6'>
              <div className='container mx-auto flex justify-between'>
                <h1 className='font-bold'>Budget App</h1>
                <nav className='flex gap-3'>
                  
                  {/* hacemos la validacion del email para permitir la visualiacion
                  de estos links */}
                  {user?.email &&(
                    <>
                        <Link to='/'>Home</Link>
                        <Link to='/new-budget'>New Budget</Link>
                        <Link to='/new-expense'>New expense</Link>
                        <button onClick={handleLogout}>logout</button>
                    </>
                  )}

                  {!user?.email &&(
                    <>
                        
                        <Link to='/Login'>Login</Link>
                        <Link to='/Register'>Register</Link>
                        
                    </>
                  )}
              
                </nav>
              </div>
            </header>

            <main className='my-6'>
              <div className='container mx-auto'>
                    {props.children}
              </div>
            </main>
        </>
      )
}

export default LayoutBase





