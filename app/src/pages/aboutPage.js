import React from 'react'

function AboutPage(){
    return(
        <div className='about-wrapper'>

            <div className='container p-5'>
                <h1 className='text-4xl'>About Us</h1>
                <p className='mt-2'>BGC is an important company.</p>
                <footer class="blockquote-footer mt-2">Mike Weddington</footer>
            </div>
                
            <div class="container p-5 mt-5 bg-light">
                <h2>Our Story</h2>
                <p>Something about the story of BGC. Have a picture here as well.</p> 
            </div>
            
            <div class="container p-5 my-5 border">
                <h2>Our Vision</h2>
                <p> At The Bone Graft Consortium , we 
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
                
            <div class="container p-5 my-5 bg-light">
                <h2>Marketing Statements</h2>
                <p>Not all bone graft is created equally, nor should it have to be. 
                    At the Bone Graft Consortium(BGC) we help to take the guess work(and marketing 
                    confusion) out of the crowded bone grafting space.</p>
            </div> 

            <div class = "container p-5 my-5 border">      
                <h2>Hospital Facing Statement</h2>
                <p>The fact based information provided by the BGC allows your hospital or ASC to make 
                    an informed decision, in a reasonable amount of time, as to the most relevant bone 
                    grafts for your institution’s requirements. This not only helps the hospital, provider, 
                    and patient workflow but it also allows companies to know their place in the queue, without 
                    waiting an undetermined amount of time for a possible approval or denial based on non factual 
                    vetting processes(current value analysis systems across our country).</p>
            </div>
        </div>
    )
}

export default AboutPage