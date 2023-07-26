import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";


export default function LoginPage(props) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    /**
     * Logs in user 
     * 
     * Sends post request to auth endpoint,
     * and receives jwt cookie in return 
     * 
     * Not using axios due to cookie issues 
     */
    const loginUser = async (event) => {

        event.preventDefault();

        await fetch("http://54.174.140.152:8000/users/login/" , {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });   

        navigate('/myaccount/');
    }




    return (

        <div id='container' className='flex fitems-center justify-center'>
            

            <div id='login card' className='flex xl:w-1/2 my-20 rounded-xl overflow-hidden border-2'>


                <div id='left-side' className='w-1/2'>
                    <img src='images/login-img.jpg' alt="login" className=''/>
                </div>


                <form id='right-side login-form' className='w-1/2 flex flex-col items-center justify-center font-["Montserrat"]'>

                    <h1 className='text-center text-7xl font-["Lato"] font-semibold leading-snug mb-7'>Login</h1>

                    <div className='flex mb-2'>
                        <input 
                            type="email" 
                            name="name" 
                            required 
                            placeholder='Email' 
                            className='border-1 border-black rounded-md p-1 w-80'
                            value = {email}
                            onChange = {(e) => setEmail(e.target.value)}
                        ></input>
                    </div>

                    <div className='flex  mb-7'>
                        <input 
                            type="password" 
                            name="password" 
                            required 
                            placeholder='Password' 
                            className='border-1 border-black rounded-md p-1 w-80'
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)}
                        ></input>
                    </div>

                    <a href="/">
                        <button 
                            onClick={loginUser} 
                            type="submit"
                            className='border-1 bg-blue-600 w-80 py-1 rounded-xl text-white font-semibold mb-2 text-2xl'
                            >
                                Login
                        </button>
                    </a>
                    <a href='/createaccount'className='border-1 bg-blue-400 w-80 py-1 rounded-xl text-white font-semibold text-center'>Create an Account</a>
                </form>


            </div>

        </div>
    );
}
