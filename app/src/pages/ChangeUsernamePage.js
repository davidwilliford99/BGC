import {React, useState} from 'react';



export default function ChangeUsernamePage(props) {



    const [newUsername, setNewUsername] = useState("");
    const [isTaken, setIsTaken] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    const [success, setSuccess] = useState(false);



    /**
     * Method for calling API to change username 
     * 
     * 1. Calls API to change username 
     * 2. See if username is taken
     * 3. See if username is invalid
     * 3. Set success to true if valid and not taken
     * 4. Navigate to account page after 2 seconds
     * 
     */
    const changeUsername = () => {

    }



    return (
        <div className='flex flex-col items-center justify-center my-20 font-[Montserrat]'>
            <h1 className='text-center text-4xl mb-5 font-bold'>Change Username</h1>


            { isTaken && 
                <h1
                    className='p-3 mb-4 rounded-xl bg-red-500 font-semibold'
                    >
                        Username is already in use
                </h1>
            }


            { isInvalid && 
                <h1
                    className='p-3 mb-4 rounded-xl bg-red-500 font-semibold'
                    >
                        Username is invalid. Make sure it does not contain spaces or special characters
                </h1>
            }


            { success && 
                <h1
                    className='p-3 mb-4 rounded-xl bg-green-300 font-semibold'
                    >
                        Username Succesfully Changed! You will now be redirected to your account page
                </h1>
            }
            


            <div className='flex  mb-7'>
                <input 
                    type="password" 
                    name="password" 
                    required 
                    placeholder='New Username' 
                    className='border-1 border-black rounded-md p-1 w-80'
                    value = {newUsername}
                    onChange = {(e) => setNewUsername(e.target.value)}
                ></input>
            </div>


            <button
                className='bg-blue-600 mt-4 text-white text-xl font-semibold px-5 py-2 rounded-xl'
                onClick={changeUsername}
                >
                    Submit
            </button>

        </div>
    );
}
