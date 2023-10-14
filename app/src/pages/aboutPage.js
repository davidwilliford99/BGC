import React from 'react'


function AboutPage(){

    const aboutText = "BGC (Bone Graft Consortium) is a non-profit repository for bone grafts. We are here to provide our customers with a non-biased repository for bone grafts, where any licensed vendors can post their products.";

    return(
        <div className='about-wrapper md:mx-20 lg:mx-40'>

           
           
            <div id="header-section" className='container flex'>

                <div className='container py-5 flex flex-col justify-center'>
                    <h1 className='text-3xl md:text-5xl font-["Lato"] font-normal leading-snug tracking-tight'>About BGC</h1>
                    <p className='mt-4 card-text py-2 font-["Montserrat"] tracking-tight'>{aboutText}</p>
                </div>

                <div id='image' className='flex flex-col justify-center'>
                    <img src='images/undraw_doctors.png' className='max-h-60'/>
                </div>

            </div>

                


            <div id='info-containers' className='mb-40'>


                <div class="container p-5 mt-5 bg-light">
                    <h2 className='text-3xl md:text-4xl font-["Lato"] mb-5 tracking-tight'>Our Story</h2>
                    <p className='py-2 font-["Montserrat"] tracking-tight'>BGC's owner and founder Michael Weddington is also the founder of Quantum Biologics. During his time in the medical field, he noticed a strong bias and financial monopoly within the bone grafting industry. He consulted colleagues and other individuals in the medical field, and came to the conclusion that hosting a non-profit repository for bone grafting could potentially help millions of patients and surgeons alike. </p> 
                </div>
                

                <div class="container p-5 border">
                    <h2 className='text-3xl md:text-4xl font-["Lato"] mb-5 tracking-tight'>Our Vision</h2>
                    <p className='py-2 font-["Montserrat"] tracking-tight'> At The Bone Graft Consortium , we 
                        lift the veil of mismanaged, 
                        misrepresented, and misunderstood 
                        grafting categories so HCPs can easily 
                        and quickly make an informed decision. 
                        With seats on our board filled by 
                        executives from major grafting 
                        manufacturers, KOLs, insurance providers,
                        as well as small, biologic only companies, the BGC is the only 
                        completely comprehensive resource demanded by hospital systems and 
                        providers alike, in order to make an informed decision based on facts, 
                        not marketing, for best practices and patient specific needs.</p>
                </div>
                    

                <div class="container p-5 bg-light">
                    <h2 className='text-3xl md:text-4xl font-["Lato"] mb-5'>Marketing Statements</h2>
                    <p className='py-2 font-["Montserrat"] tracking-tight tracking-tight'>Not all bone graft is created equally, nor should it have to be. 
                        At the Bone Graft Consortium(BGC) we help to take the guess work(and marketing 
                        confusion) out of the crowded bone grafting space.</p>
                </div> 


                <div class = "container p-5 border">      
                    <h2 className='text-3xl md:text-4xl font-["Lato"] mb-5 tracking-tight'>Hospital Facing Statement</h2>
                    <p className='py-2 font-["Montserrat"] tracking-tight'>The fact based information provided by the BGC allows your hospital or ASC to make 
                        an informed decision, in a reasonable amount of time, as to the most relevant bone 
                        grafts for your institution’s requirements. This not only helps the hospital, provider, 
                        and patient workflow but it also allows companies to know their place in the queue, without 
                        waiting an undetermined amount of time for a possible approval or denial based on non factual 
                        vetting processes(current value analysis systems across our country).</p>
                </div>


            </div>
            
        </div>
    )
}

export default AboutPage