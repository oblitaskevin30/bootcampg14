// trabajaremos con el RouterProvider en el cual no usaremos componentes 

import {RouterProvider} from 'react-router-dom' //1 va en el main del app.jsx
import {createBrowserRouter} from 'react-router-dom' // 2sirve para colocar las demas rutas
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

import PrimaryLayout from './layouts/PrimaryLayout'// 4dentro colocamos las rutas hijas
import PokemonDetail from './pages/PokemonDetail'

function App() {

  const PrimaryRouter = createBrowserRouter([
    {
      path : '/', 
      element:<PrimaryLayout></PrimaryLayout>, // renderiza el llamado de las rutas hijas
      children : [
        {
          path:'/Home',// definimos home como el index
          element:<Home></Home>
        },
        { 
          path : '/Login',
          element:<Login></Login>
        },
        {
          path : '/Register',
          element:<Register></Register>
        },
        {
          path : '/pokemon/:id',
          element:<PokemonDetail></PokemonDetail>
        }

      ]
    },

  ])


  return (
    <>
      <RouterProvider router={PrimaryRouter}></RouterProvider>
    </>
  )
}

export default App
