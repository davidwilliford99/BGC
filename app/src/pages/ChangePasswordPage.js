import {React, useState} from 'react';



export default function ChangePasswordPage(props) {


    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [incorrect, setIncorrect] = useState(false);
    const [correct, setCorrect] = useState(false);
    


    /**
     * This is the method for sending API request to password changing endpoint 
     * 
     * 1. Make API call
     * 2. If response is not correct, chang incorrect to true
     * 3. If correct, set to correct 
     * 4. Redirect to account page after 2 seconds
     * 
     */
    const changePassword = () => {

        
    }

    


    return (
        <div className='flex flex-col items-center justify-center my-20 font-[Montserrat]'>
            <h1 className='text-center text-4xl mb-5 font-bold'>Change Password</h1>


            { incorrect && 
                <h1
                    className='p-3 mb-4 rounded-xl bg-red-500 font-semibold'
                    >
                        Incorrect Password
                </h1>
            }


            { correct && 
                <h1
                    className='p-3 mb-4 rounded-xl bg-green-300 font-semibold'
                    >
                        Password Succesfully Changed! You will now be redirected to your account page
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


            <button
                className='bg-blue-600 mt-4 text-white text-xl font-semibold px-5 py-2 rounded-xl'
                onClick={changePassword}
                >
                    Submit
            </button>

        </div>
    );
}