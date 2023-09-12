import Home from '../pages/Home'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutBase from '../layout/LayoutBase'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRoute from './PrivateRoute'
import { UserProvider } from '../context/UseContext'
import NewBudget from '../pages/NewBudget'
import NewExpense from '../pages/NewExpense.JSX'


const Router = () => {


    return (

    <UserProvider>
        <BrowserRouter>
            <LayoutBase>
                <Routes>

                    <Route element={<PrivateRoute />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/new-budget' element={<NewBudget/>} /> 
                        <Route path='/new-expense' element={<NewExpense />} />
                    </Route>
                    
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Register' element ={<Register/>}  />

                    {/* </Route> */}

                    {/* <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} /> */}
                </Routes>
            </LayoutBase>
        </BrowserRouter>
    </UserProvider>
    )
}

export default Router