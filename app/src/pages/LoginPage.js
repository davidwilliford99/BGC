import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";


export default function LoginPage(props) {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userInvalid, setUserInvalid] = useState(false);
    const navigate = useNavigate();



    /**
     * Logs in user 
     * 
     * Sends post request to auth endpoint,
     * and receives jwt in return 
     */
    const loginUser = async (event) => {

        event.preventDefault();


        const apiUrl = "http://54.174.140.152:8000/users/login/";
        const loginData = {
            email: email,
            password: password,
          };
          

        const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
        };


        const loginRequest = await fetch(apiUrl, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.message === "Invalid email" || data.message === "Incorrect Password") {
                    setUserInvalid(true);
                }
                else {
                    const jwtToken = data.jwt;                                          // Assuming the response contains a field named "jwt" with the JWT token.
                    localStorage.setItem("jwt", jwtToken);                              // Store the JWT token in the localStorage.
                    localStorage.setItem("jwt-exp", Date.now() + 2 * 60 * 60 * 1000);   // expiration is checked in Navbar component
                    navigate('/myaccount/');
                }

              })
              .catch((error) => console.error("Error:", error));
    }




    



    return (

        <div id='container' className='flex fitems-center justify-center'>
            

            <div id='login card' className='flex xl:w-1/2 my-20 rounded-xl overflow-hidden border-2'>


                <div id='left-side' className='w-1/2'>
                    <img src='images/login-img.jpg' alt="login" className=''/>
                </div>


                <form id='right-side login-form' className='w-1/2 flex flex-col items-center justify-center font-["Montserrat"]'>

                    <h1 className='text-center text-7xl font-["Lato"] font-semibold leading-snug mb-7'>Login</h1>


                    { userInvalid && 
                    <h1
                        className='p-3 mb-4 rounded-xl bg-red-300 font-semibold'
                        >
                            Incorrect username or password
                    </h1>
                    }




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
