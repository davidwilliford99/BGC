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
import AccountPage from './pages/AccountPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import CreateAccountPage from './pages/CreateAccountPage'
import NewGraftPage from './pages/NewGraftPage'
import MyProductsPage from './pages/MyProductsPage'
import GraftReviewPage from './pages/GraftReviewPage'
import ChangePasswordPage from './pages/ChangePasswordPage'
import ChangeUsernamePage from './pages/ChangeUsernamePage'
import SingleProductPage from './pages/SingleProductPage'


function AppRouter(){
    return(
            <Routes>

                <Route path="/home" element={<HomePage/>} />

                <Route path="/about" element={<AboutPage/>}/>

                <Route path="/contact" element={<ContactPage/>}/>

                <Route path="/pricing" element={<PricingPage/>}/>

                <Route path="/products" element={<ProductsPage/>}/>

                <Route path="/myaccount" element={<AccountPage/>}/>

                <Route path="/login" element={<LoginPage/>} />

                <Route path="/createaccount" element={<CreateAccountPage/>} />

                <Route path="/" element={<HomePage/>} />

                <Route path="/creategraft" element={<NewGraftPage/>} />

                <Route path="/myproducts" element={<MyProductsPage/>} />

                <Route path="/reviewgrafts" element={<GraftReviewPage/>} />

                <Route path="/changepassword" element={<ChangePasswordPage/>} />

                <Route path="/changeusername" element={<ChangeUsernamePage/>} />

                <Route path="/grafts/:id" element={<SingleProductPage/>} />

            </Routes>
    )
}

export default AppRouter