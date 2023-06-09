import React from 'react';


export default function LoginPage(props) {
    return (


        <div id='container' className='flex items-center justify-center'>
            

            <div id='login card' className='flex w-1/2 my-20 rounded-xl overflow-hidden border-2 border-black'>


                <div id='left-side' className='w-1/2'>
                    <img src='images/login-img.jpg' className=''/>
                </div>


                <div id='right-side login-form' className='w-1/2 flex flex-col items-center justify-center font-["Montserrat"]'>

                    <h1 className='text-center text-7xl font-["Lato"] font-semibold leading-snug mb-7'>Login</h1>

                    <div className='flex mb-2'>
                        <input type="email" name="name" required placeholder='Email' className='border-1 border-black rounded-md p-1 w-80'></input>
                    </div>

                    <div className='flex  mb-7'>
                        <input type="password" name="password" required placeholder='Password' className='border-1 border-black rounded-md p-1 w-80'></input>
                    </div>

                    <a><button className='border-1 bg-blue-600 w-80 py-1 rounded-xl text-white font-semibold mb-2 text-2xl'>Login</button></a>
                    <a href='/createaccount'><button className='border-1 bg-blue-400 w-80 py-1 rounded-xl text-white font-semibold'>Create an Account</button></a>
                </div>


            </div>

        </div>
    );
}
