import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LayoutBase from '../layouts/LayoutBase'

import HomeAdmin from '../pages/HomeAdmin'
import Login from '../pages/Login'


import PrivateRoute from './PrivateRoute'
import HomeUsers from '../pages/HomeUsers'

import { UserProvider } from '../context/UserContext'
import Usuarios from '../pages/Usuarios'
import RegisterItem from '../pages/RegisterItem'
import EditeItem from '../pages/EditeItem'
import RegisterUser from '../pages/RegisterUser'

const Router = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <LayoutBase>
                    <Routes>

                        <Route element={<PrivateRoute />}>
                            <Route path='/' element={<HomeAdmin/>} />
                            <Route path='/HomeUsers' element={<HomeUsers/>} />
                            <Route path='RegistrarItem' element = {<RegisterItem/>}/>
                            <Route path='EditeItem/:id' element = {<EditeItem/>}/>
                        </Route>
                        <Route path='/usuarios' element={<Usuarios />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<RegisterUser />} />
                        
                    </Routes>
                </LayoutBase>
            </BrowserRouter>
        </UserProvider>
    )
}

export default Router