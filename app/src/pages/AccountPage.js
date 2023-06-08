import React from 'react';



/**
 * 
 * This page is to display account details
 * Obviously it will accept props. But for now, I will hard code it
 * 
 * 
 */

export default function AccountPage(props) {
    return (

        <div id='container' className='flex items-center justify-center gap-5 mt-20'>



            <div id='account-info-card' className='border-1 border-black rounded-2xl p-5'>

                <div className='flex items-center justify-center'>
                    <img src='images/Account-img.png' className='h-60 mb-5'/>
                </div>


                <h1 className='text-4xl mb-10 text-center'>Account Info</h1>

                <div className='flex flex-wrap justify-between'>
                    <p className=''>Username: </p>
                    <p className='ml-20'>DavidWilliford1999</p>
                </div>

                <div className='flex flex-wrap justify-between'>
                    <p className=''>Email: </p>
                    <p className=''>D9899W@gmail.com</p>
                </div>

                <div className='flex flex-wrap justify-between'>
                    <p className=''>Products Listed: </p>
                    <p className=''>0</p>
                </div>

                <div className='flex flex-wrap justify-between'>
                    <p className=''>Products Purchased: </p>
                    <p className=''>0</p>
                </div>

                <div className='flex flex-wrap justify-between'>
                    <p className=''>Products Sold:  </p>
                    <p className=''>0</p>
                </div>

                <div className='flex flex-wrap justify-between mb-4'>
                    <p className=''>Product Credits:  </p>
                    <p className=''>0</p>
                </div>

                <a href='/' className='underline text-blue-600'><p className='text-center'>Change Password</p></a>
            </div>





            <div className=''>

                <div id='account-options-card' className='border-1 border-black rounded-2xl p-5'>

                    <div className='flex items-center justify-center'>
                        <img src='images/account-settings.png' className='h-40 mb-5'/>
                    </div>

                    <h1 className='text-4xl mb-10 text-center'>Account Options</h1>

                    <a href='/' className='underline text-blue-600'><p className='text-center'>Add new product</p></a>
                    <a href='/' className='underline text-blue-600'><p className='text-center'>Delete product</p></a>
                    <a href='/' className='underline text-blue-600'><p className='text-center'>Change Username</p></a>
    
                    <div className='flex items-center justify-center'>
                        <img src='images/settings.gif' className='h-20 mt-20 mb-10'/>
                    </div>
                </div>


            </div>


        </div>


    );
}
