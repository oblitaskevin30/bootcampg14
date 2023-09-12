import {Link , Outlet} from 'react-router-dom'




const PrimaryLayout = () => {
  return (
    <>
        <header>
            <h1 className='text-2xl text-center'> React - router-hooks</h1>
            <nav className='flex justify-center gap-4 mt-4 bg-red-700'>
                <Link to = '/Home'>Home</Link>
                <Link to = '/Login'>Login</Link>
                <Link to = '/Register'>Register</Link>
            </nav>
         </header>
         <main>
            <Outlet/>
         </main>
         <footer>
          Agosto 2023
         </footer>

    </>
  )
}

export default PrimaryLayout