/*
This Routes paths to the pages!
*/

import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import AboutPage from './pages/aboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PricingPage from './pages/pricingPage'

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/home" element={<HomePage/>} />

                <Route path="/about" element={<AboutPage/>}/>

                <Route path="/contact" element={<ContactPage/>}/>

                <Route path="/pricing" element={<PricingPage/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter