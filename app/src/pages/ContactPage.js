import React, { useState } from 'react';

function ContactForm() {
    
    const people = [ 
        {
            name: "Michael Weddington",
            role: "Owner",
            email: "Michael@weddconsulting.com",
            img: "images/owner.png"

        },
        {
            name: "David Williford",
            role: "Developer",
            email: "d9899w@gmail.com",
            img: "images/developer.png"

        },
        {
            name: "Matt Miranda",
            role: "Developer",
            email: "mattmiranda55@gmail.com",
            img: "images/developer.png"

        },
    ]

    return (

        <div className='bg-neutral-200 min-h-screen'>
        
            <div id='title section'>
                <h1 className='text-center text-5xl pt-20 font-["Lato"] font-semibold leading-snug tracking-tight'>Contact Us</h1>
            </div>

            <div className='flex flex-col lg:flex-row gap-5 items-center justify-center py-20'>


                {
                    people.map((person) => {
                    return  <div className='rounded-lg p-5 text-center bg-white shadow-lg'>
                                <h1 className='text-2xl'>{person.name}</h1>
                                <h1 className='py-2 font-bold'>{person.role}</h1>
                                <h1 className='text-blue-500'>{person.email}</h1>
                                <img src={person.img} alt='role' className='h-60 mt-5'/>
                            </div>

                    })
                }


                
            </div>
        
        </div>
















        // <div class="container py-4">
        //     <form id='contactForm' onSubmit={handleSubmit}>
        //         <div class="mb-3">
        //             <label class="form-label" htmlFor="name">Name:</label>
        //             <input class="form-control"
        //                 type="text"
        //                 id="name"
        //                 name="name"
        //                 value={formData.name}
        //                 onChange={handleChange}
        //                 required
        //             />
        //         </div>
        //         <label class="form-label" htmlFor="email">Email:</label>
        //         <input class="form-control"
        //             type="email"
        //             id="email"
        //             name="email"
        //             value={formData.email}
        //             onChange={handleChange}
        //             required
        //         />

        //         <label class="form-label" htmlFor="message">Message:</label>
        //         <textarea class="form-control"
        //             id="message"
        //             name="message"
        //             value={formData.message}
        //             onChange={handleChange}
        //             required
        //         ></textarea>

        //         <button class="btn btn-primary btn-lg disabled" type="submit">Submit</button>
        //     </form>
        // </div>
    );
}

export default ContactForm;
