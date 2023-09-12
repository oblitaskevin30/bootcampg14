import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LayoutBase from '../layouts/LayoutBase'

import Home from '../pages/Home'
import Login from '../pages/Login'
import EditHero from '../pages/EditHero'
import NewHero from '../pages/NewHero'

const Router = () => {
    return (
        <BrowserRouter>
        <LayoutBase>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/new-hero' element={<NewHero />} />
                <Route path='/edit-hero/:id' element={<EditHero />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </LayoutBase>
        </BrowserRouter>
    )
}

export default Router