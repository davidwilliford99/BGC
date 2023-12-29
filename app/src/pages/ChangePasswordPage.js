import {React, useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";



export default function ChangePasswordPage(props) {


    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [response, setResponse] = useState(null);
    const [correct, setCorrect] = useState(false);
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);


    const navigate = useNavigate();
    

    // getting user info
    useEffect(() => {
        (
            async () => {
                const apiUrl = "http://34.201.53.67:8000/users/info/";

                // Retrieve the JWT token from localStorage
                const jwtToken = localStorage.getItem("jwt");

                // Data to be sent in the request body
                const requestData = {
                    jwt: jwtToken
                };

                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                        body: JSON.stringify(requestData),
                };

                await fetch(apiUrl, requestOptions)
                    .then((response) => response.json())
                    .then((data) => {
                        // setPassword(data[0].password);
                        setEmail(data[0].email);
                    })
                    .catch((error) => console.error("Error:", error));
            }
        )();
    }, [])


    

    // useEffect to check if passwords match
    useEffect(() => {
        setPasswordMatch(newPassword === confirmNewPassword)
    }, [newPassword, confirmNewPassword]); 






    /**
     * This is the method for sending API request to password changing endpoint 
     * 
     * 1. Make API call
     * 2. If response is not correct, change incorrect to true
     * 3. If correct, set to correct 
     * 4. Redirect to account page after 2 seconds
     * 
     */
    const changePassword = async () => {

        if (newPassword != confirmNewPassword) 
        {
            // dont send request 
            return;
        }


        else 
        {

            const apiUrl = "http://34.201.53.67:8000/users/changepassword/";

            // temp variable to update response in real time since useState won't
            let tempResponse = null; 
    
            // Retrieve the JWT token from localStorage
            const jwtToken = localStorage.getItem("jwt");
    
            // Data to be sent in the request body
            const requestData = {
                jwt: jwtToken,
                email: email,
                password: password,
                new_password: newPassword
            };
    
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                    body: JSON.stringify(requestData),
            };
    
            await fetch(apiUrl, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setResponse(data.message);
                    tempResponse = data.message
                })
                .catch((error) => console.error("Error:", error));
    
            
             /**
             * Sets "incorrect" and "correct"
             * 
             * Checks the response message when api requests are returned
             * Re-routes to account page
             */
            if(tempResponse === "Password changed successfully") {
                setCorrect(true);
                setTimeout(() => navigate("/myaccount"), 2000);
            }
            else {
                setCorrect(false);
            }

        }

    }

    


    return (
        <div className='flex flex-col items-center justify-center my-20 font-[Montserrat]'>
            <h1 className='text-center text-4xl mb-5 font-bold'>Change Password</h1>


            { !correct && 
                <h1
                    className='p-3 mb-4 rounded-xl text-red-500 font-semibold'
                    >
                        {response}
                </h1>
            }


            { correct && 
                <h1
                    className='p-3 mb-4 rounded-xl bg-green-300 font-semibold'
                    >
                        Password Succesfully Changed! You will now be redirected to your account page
                </h1>
            }

            { !passwordMatch && 
                <h1
                    className='p-3 mb-4 rounded-xl text-red-500 font-semibold'
                    >
                        Passwords do not match!!
                </h1>
            }
            


            <div className='flex  mb-7'>
                <input 
                    type="password" 
                    name="password" 
                    required 
                    placeholder='Current Password' 
                    className='border-1 border-black rounded-md p-1 w-80'
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                ></input>
            </div>


            <div className='flex  mb-7'>
                <input 
                    type="password" 
                    name="password" 
                    required 
                    placeholder='New Password' 
                    className='border-1 border-black rounded-md p-1 w-80'
                    value = {newPassword}
                    onChange = {(e) => setNewPassword(e.target.value)}
                ></input>
            </div>


            <div className='flex  mb-7'>
                <input 
                    type="password" 
                    name="password" 
                    required 
                    placeholder='Confirm New Password' 
                    className='border-1 border-black rounded-md p-1 w-80'
                    value = {confirmNewPassword}
                    onChange = {(e) => setConfirmNewPassword(e.target.value)}
                ></input>
            </div>


            <button
                className='bg-blue-600 mt-4 text-white text-xl font-semibold px-5 py-2 rounded-xl'
                onClick={changePassword}
                >
                    Submit
            </button>

        </div>
    );
}