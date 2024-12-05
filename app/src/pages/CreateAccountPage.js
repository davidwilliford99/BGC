import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';




export default function CreateAccountPage(props) {


    /**
     * keeping track of formm values
     */
    const [BusinessName, setBusinessName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    let navigate = useNavigate();

    const [emailTaken, setEmailTaken] = useState(false);
    const [usernameTaken, setUsernameTaken] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [successfulCreation, setSuccessfulCreation] = useState(false);


    
    /**
     * Function to submit the user to the database using POST 
     * 
     * 1. Submit user via POST
     * 2. Get user ID from user POST response
     * 3. Handle errors
     * 4. Submit profile details via PUT
     */
    const submitUser = async (event) => {

        event.preventDefault();

        if (password != confirmPassword) {
            setPasswordMatch(false);
        }
        else {

            const userRequest = await axios.post("https://api.bonegraftconsortium.com:8000/users/" , {
                username: username,
                email: email,
                password: password
            });

            console.log(userRequest.data.message)


            /**
             * Handling errors from API response 
             */
            if(userRequest.data.message === 'Email is already taken') {
                setEmailTaken(true);
            }
            else if (userRequest.data.message === 'Username is already taken') {
                setUsernameTaken(true);
            }

        

            await axios.put(`https://api.bonegraftconsortium.com:8000/profiles/${userRequest.data.id}`, {
                user_id: userRequest.data.id,
                num_credits: 0,
                business_name: BusinessName,
                phone_number: phoneNumber
            })

            
            setSuccessfulCreation(true);
            setTimeout(() => navigate("/login"), 2000);

        }


    }



    return (


        <div id='create-account-container' className="flex items-center justify-center bg-neutral-100">
            <div 
                className='
                    flex flex-col-reverse lg:flex-row items-center justify-center bg-white
                    font-["Lato"] rounded-xl my-20 lg:shadow-lg xl:w-2/3 lg:overflow-hidden
            '>


            <div id='left-side' className='w-full lg:w-1/2'>
                <img src='images/swv-createaccount.jpg' className=''/>
            </div>


            <form id='create-account-form' className='lg:p-5 w-1/2 flex flex-col items-center' onSubmit={submitUser}>

                <h1 className='text-center text-2xl lg:text-4xl mb-5 font-bold'>Create an Account</h1>

                {/* If account creation is succesfull */}
                { successfulCreation && 
                    <h1
                        className='p-3 mb-4 rounded-xl bg-green-300 font-semibold'
                        >
                            Account Created Successfully! You will now be redirected to the login page
                    </h1>
                }


                {/* Conditionally Rendering Error Messages */}
                <div id="error messages">
                    {emailTaken ? <p className="text-red-500 text-center mb-2">The email you entered is already in use</p> : null}
                    {usernameTaken ? <p className="text-red-500 text-center mb-2">The username you entered is not available</p> : null}
                    {!passwordMatch ? <p className="text-red-500 text-center mb-2">Passwords do not match!</p> : null}
                </div>


                <div className='flex justify-between mb-3'>
                    <input 
                        required 
                        placeholder="Business Name"
                        type='text' 
                        className='border-1 border-black rounded-md px-1 w-72 ml-5'
                        value = {BusinessName}
                        onChange = {(e) => setBusinessName(e.target.value)}
                        ></input>
                </div>

                <div className='flex justify-between mb-3'>
                    <input 
                        required 
                        placeholder="Username"
                        type='text' 
                        className='border-1 border-black rounded-md px-1 w-72 ml-5'
                        value = {username}
                        onChange = {(e) => setUsername(e.target.value)}
                        ></input>
                </div>

                <div className='flex justify-between mb-3'>
                    <input 
                        required 
                        placeholder="Email"
                        type='text' 
                        className='border-1 border-black rounded-md px-1 w-72 ml-5'
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        ></input>
                </div>

                <div className='flex justify-between mb-3'>
                    <input 
                        required 
                        placeholder="Phone Number"
                        type='tel' 
                        className='border-1 border-black rounded-md px-1 w-72 ml-5'
                        value = {phoneNumber}
                        onChange = {(e) => setPhoneNumber(e.target.value)}
                        ></input>
                </div>
                
                <div className='flex justify-between mb-3'>
                    <input 
                        required 
                        placeholder="Password"
                        type='password' 
                        className='border-1 border-black rounded-md px-1 w-72 ml-5'
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        ></input>
                </div>

                <div className='flex justify-between mb-3'>
                    <input 
                        required 
                        placeholder="Confirm Password"
                        type='password' 
                        className='border-1 border-black rounded-md px-1 w-72 ml-5'
                        value = {confirmPassword}
                        onChange = {(e) => setConfirmPassword(e.target.value)}
                        ></input>
                </div>

                <div className='flex flex-col items-center justify-center mt-5'>
                    <a>
                        <button 
                            type="submit"
                            className='bg-blue-600 mb-40 lg:mt-4 text-white text-xl font-semibold px-5 py-2 rounded-xl'
                            >
                                Create Account
                        </button>
                    </a>
                </div>
                

            </form>


            </div>

        </div>
        
    );
}
