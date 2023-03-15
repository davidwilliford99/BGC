import React from 'react'
function HomePage(){
    return(
    <div class='card-wrapper'>
    <div class="card">
        <img class="card-img-top img-thumbnail" src="images/tim-kilby-x2qzLL3vdBs-unsplash.jpg" alt="alt text"/>
        <div class="card-img-overlay">
        <p class="text-light">
            <h1>
                "Lifting the veil of mismanaged information of
                <small class='text-muted'> Bone Grafting"</small>
            </h1>
        </p>
        <p class='text-light'>
        <h1>- Mike Weddington</h1>
        </p>
    </div>
        <div class="card-img-overlay position-absolute top-50">
        <a href="#" class="btn btn-outline-primary btn-lg btn-block w-50"
           data-bs-toggle="popover" data-bs-content="Edit image" data-bs-trigger="hover focus">
            <h2 class="far fa-edit">Get Started</h2>
        </a>
    </div>
    </div>
    
    <div class="pt-md">
        <h2 class="card-title">Who we are</h2>
        <h5 class="card-text">At Bone Graft Consortium, we help to take the guess work out of the crowded bone grafting space.</h5>      
        <a href="/about" class="btn btn-outline-primary btn-sm"
           data-bs-toggle="popover" data-bs-content="Edit image" data-bs-trigger="hover focus">
            <h5 class="far fa-edit">Read More</h5>
        </a>
    </div>

    <div class="pt-md">
    <h2>
    What we provide
    </h2>
    <p>Place holder text</p>
    </div>
    <div>
        <h1>
           F.A.Q 
        </h1>
    </div>
    
</div>
    )
}

export default HomePage