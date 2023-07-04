import { useState } from "react";
import React from 'react';




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
    const [userId, setUserId] = useState("");


    
    /**
     * Function to submit the user to the database using POST 
     */
    async function submitUser() 
    {

        const userRequestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                "username": `${username}`, 
                "email": `${email}`,
                "password": `${password}`
            })
        };


        /**
         * We need to make 3 API calls
         * - One to POST user 
         * - One to GET new Users ID
         * - One to PUT additional profile info using the ID 
         */
        const userResponse = await fetch('http://54.174.140.152:8000/users/', userRequestOptions)
            .then(response => response.json());

        
        console.log(userResponse.json());


        const profileRequestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                "user_id": `${userId}`,
                "num_credits": 0,
                "phone_number": `${phoneNumber}`,
                "business_name": `${BusinessName}`
            })
        };


        /**
         * TODO: Get UserId from User POST response
         */



        const profileResponse = await fetch(`http://54.174.140.152:8000/profiles/${userId}/`, profileRequestOptions)
            .then((response) => response.json());
        
        
        console.log(profileResponse);
    }




    return (


        <div id='create-account-container' className="flex items-center justify-center">
            <div className='flex items-center justify-center font-["Lato"] rounded-xl my-20 border-2 xl:w-2/3 overflow-hidden'>



            <div id='left-side' className='w-1/2'>
                <img src='images/swv-createaccount.jpg' className=''/>
            </div>





            <form id='create-account-form' className='p-5 w-1/2' onSubmit={submitUser}>

                <h1 className='text-center text-4xl mb-5 font-bold'>Create an Account</h1>

                <div className='flex justify-between mb-3'>
                    <label>Business Name </label>
                    <input 
                        required 
                        type='text' 
                        className='border-1 border-black rounded-md px-1 w-72 ml-5'
                        value = {BusinessName}
                        onChange = {(e) => setBusinessName(e.target.value)}
                        ></input>
                </div>

                <div className='flex justify-between mb-3'>
                    <label>Username </label>
                    <input 
                        required 
                        type='text' 
                        className='border-1 border-black rounded-md px-1 w-72 ml-5'
                        value = {username}
                        onChange = {(e) => setUsername(e.target.value)}
                        ></input>
                </div>

                <div className='flex justify-between mb-3'>
                    <label>Email</label>
                    <input 
                        required 
                        type='text' 
                        className='border-1 border-black rounded-md px-1 w-72 ml-5'
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        ></input>
                </div>

                <div className='flex justify-between mb-3'>
                    <label>Phone Number</label>
                    <input 
                        required 
                        type='tel' 
                        className='border-1 border-black rounded-md px-1 w-72 ml-5'
                        value = {phoneNumber}
                        onChange = {(e) => setPhoneNumber(e.target.value)}
                        ></input>
                </div>
                
                <div className='flex justify-between mb-3'>
                    <label>Password</label>
                    <input 
                        required 
                        type='password' 
                        className='border-1 border-black rounded-md px-1 w-72 ml-5'
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        ></input>
                </div>

                <div className='flex justify-between mb-3'>
                    <label>Confirm Password</label>
                    <input 
                        required 
                        type='password' 
                        className='border-1 border-black rounded-md px-1 w-72 ml-5'
                        value = {confirmPassword}
                        onChange = {(e) => setConfirmPassword(e.target.value)}
                        ></input>
                </div>

                <div className='flex flex-col items-center justify-center mt-5'>
                    <p className='text-center font-bold'>To prevent spam and security risk, your account<br/>will need to be reviewed before you can post any products</p>
                    <a>
                        <button 
                            type="submit"
                            className='bg-blue-600 mt-4 text-white text-xl font-semibold px-5 py-2 rounded-xl'
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
