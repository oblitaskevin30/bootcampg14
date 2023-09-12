import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { Home } from './pages/Home'
import { LayoutBase } from './layouts/LayoutBase'
import { Character } from './pages/Character'


export default function App() {
  return (
    <>

      
      <BrowserRouter>
        <LayoutBase> 
        <Routes>
          <Route path='/' element={<h1 className="text-3xl font-bold underline">
              Hello world!
            </h1>}/>
            <Route path='/hola' element={<h1 className="text-3xl font-bold underline">
              Hola Kevin
            </h1>}/>
            <Route path='/Home' element={<Home></Home>}/>
            <Route path='/Character/:id' element={<Character></Character>}></Route>

          </Routes>
        </LayoutBase>

            
      </BrowserRouter>    

    </>


  )
}