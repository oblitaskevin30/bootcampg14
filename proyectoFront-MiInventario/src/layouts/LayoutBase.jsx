import { useContext } from "react"

import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'



import { UserContext } from "../context/UserContext"

const LayoutBase = (props) => {
    //1
    const { user, cleanUser } = useContext(UserContext)

    
    const navigate = useNavigate()

    //4 
    const handleLogout = () => {
        
        cleanUser()
        navigate('/login')
    }

    return (
        <>
        <header className='bg-slate-900 py-4 px-6'>
            <div className='container mx-auto flex justify-around'>
                <h1 className='text-3xl text-cyan-200'>MiInventario</h1>
                <nav className='flex gap-1 px-6 mx-2  text-cyan-200 '>
                    
                    {/* 2 */}
                    {user?.email && user.area =="admin" && (
                    <>
                        <Link to='/'>HomeAdmin</Link>
                        <Link to='/HomeUsers'>HomeUsers</Link>
                        <Link to='/Usuarios'>Usuarios</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                    )} 

                    {/* {user?.email && !user.area=="admin" && (
                    <>
                        <Link to='/HomeUsers'>HomeUsers</Link>
                        
                        <button onClick={handleLogout}>Logout</button>
                    </>
                    )}  */}


                    {/* 3 */}
                    {!user?.email &&  (
                    <>  
                        <Link to='/HomeUsers'>HomeUsers</Link>
                        <Link to='/login'>Login</Link>
                        
                        <Link to='/register'>Register</Link>
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