/*
This Routes paths to the pages!
*/

import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import AboutPage from './pages/aboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PricingPage from './pages/pricingPage'
import ProductsPage from './pages/ProductsPage'

function AppRouter(){
    return(
            <Routes>

                <Route path="/home" element={<HomePage/>} />

                <Route path="/about" element={<AboutPage/>}/>

                <Route path="/contact" element={<ContactPage/>}/>

                <Route path="/pricing" element={<PricingPage/>}/>

                <Route path="/products" element={<ProductsPage/>}/>


            </Routes>
    )
}

export default AppRouter