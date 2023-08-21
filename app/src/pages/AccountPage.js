import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


/**
 * 
 * This page is to display account details
 * 
 */

export default function AccountPage(props) {

    const [userInfo, setUserInfo] = useState([]);
    const [infoLoaded, setInfoLoaded] = useState(false);
    const [isStaff, setIsStaff] = useState(false);
    const navigate = useNavigate();


    /**
     * Gets user info when signed in 
     */
    useEffect(() => {
        (
            async () => {
                const apiUrl = "http://54.174.140.152:8000/users/info/";

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
                        setUserInfo(data);
                        setIsStaff(data[0].is_staff);
                    })
                    .catch((error) => console.error("Error:", error));

                setInfoLoaded(true);
            }
        )();
    }, [])


    /**
     * Logs out user by deleting jwt token 
     */
    const logoutUser = async () => {
        localStorage.removeItem("jwt");
        localStorage.removeItem("jwt-exp");
        navigate("/");
    }



    return (

        <div id='container' className='flex items-center justify-center gap-5 mt-20 font-["Lato"]'>



            <div id='account-info-card' className='border-1 border-black rounded-2xl p-5'>

                <div className='flex items-center justify-center'>
                    <img src={require('./../images/Account-img.png')} className='h-60 mb-5'/>
                </div>


                <h1 className='text-4xl mb-10 text-center'>Account Info</h1>

                <div className='flex flex-wrap justify-between'>
                    <p className=''>Username</p>
                    {infoLoaded && <p className='ml-20'>{userInfo[0].username}</p>}
                </div>

                <div className='flex flex-wrap justify-between'>
                    <p className=''>Email: </p>
                    {infoLoaded && <p className=''>{userInfo[0].email}</p>}
                </div>

                <div className='flex flex-wrap justify-between mb-4'>
                    <p className=''>Product Credits:  </p>
                    {infoLoaded && <p className=''>{userInfo[1].num_credits}</p>}
                </div>
                

                { isStaff &&
                
                    <a href='/reviewgrafts' className='underline text-blue-600'><p className='text-center'>Review Products (Staff Only)</p></a>

                }

                <a href='/myproducts' className='underline text-blue-600'><p className='text-center'>Your Products</p></a>
                <a href='/creategraft' className='underline text-blue-600'><p className='text-center'>Add new product</p></a>
            </div>





            <div className=''>

                <div id='account-options-card' className='border-1 border-black rounded-2xl p-5'>

                    <div className='flex items-center justify-center'>
                        <img src={require('./../images/account-settings.png')} className='h-40 mb-5'/>
                    </div>

                    <h1 className='text-4xl mb-10 text-center'>Account Options</h1>

                    <a href='/changepassword' className='underline text-blue-600'><p className='text-center'>Change Password</p></a>
                    <a href='/changeusername' className='underline text-blue-600'><p className='text-center'>Change Username</p></a>
    
                    <div className='flex flex-col items-center justify-center'>


                        <button  
                            onClick={logoutUser}
                            className='bg-blue-600 px-4 py-1 font-semibold text-white mt-3 rounded-2xl'
                            >
                                Logout
                        </button>


                        <img src={require("./../images/settings.gif")} className='h-20 mt-10 mb-5'/>
                    </div>

                </div>


            </div>


        </div>


    );
}
