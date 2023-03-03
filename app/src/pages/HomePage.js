import React from 'react'
function HomePage(){
    return(
    <div class="card">
        <img class="card-img-top img-thumbnail" src="images/tim-kilby-x2qzLL3vdBs-unsplash.jpg" alt="alt text"/>
        <div class="card-img-overlay ">
        <p class="text-light">
            <i>Lifting the veil of mismanaged information of Bone Grafting</i>
        </p>
    </div>
        <div class="card-img-overlay text-center">
        <a href="#" class="btn btn-outline-warning btn-sm"
           data-bs-toggle="popover" data-bs-content="Edit image" data-bs-trigger="hover focus">
            <i class="far fa-edit">Sign Up</i>
        </a>
    </div>

    <div class="card-body">
        <h5 class="card-title">Some title</h5>
        <p class="card-text">Some text</p>      
    </div>
</div>
    )
}

export default HomePage