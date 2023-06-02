import React from 'react'

function PricingPage(){
    return (
      <>

        <div id='title-container' className='px-20 mt-10 '>
          <h1 className='text-5xl font-["Lato"] font-normal leading-snug tracking-tight'>Pricing Options</h1>
          <p className='py-2 font-["Montserrat"] tracking-tight'>Breif reasoning on why spending your money at BGC is worth it. Explain the exact process of how they will receive a return on their investment.</p>
        </div>



        <div class="row justify-content-center p-20" id='price-options-container'>


          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <div class="card-header bg-blue-400">
                <h4 class="my-0 font-semibold text-3xl text-center text-white">Single Product</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">$5,000<small class="text-muted">/per submission</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
              </div>
            </div>
          </div>



          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <div class="card-header bg-blue-600">
                <h4 class="my-0 font-semibold text-3xl text-center text-white">Multiple Products</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">$20,000<small class="text-muted">/flat fee</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Provides 5-8 Bone offerings</li>
                  <li>The more products the higher the savings</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-outline-primary">Get started</button>
              </div>
            </div>
          </div>



          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <div class="card-header bg-blue-800">
                <h4 class="my-0 font-semibold text-3xl text-center text-white">Unlimited Products</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">$35,000<small class="text-muted">/flat fee</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>8 or more bone offerings</li>
                  <li>30 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-outline-primary">Contact us</button>
              </div>
            </div>
          </div>


        </div>




        <div id='img-container' className='flex justify-center'>
          <img src='images/undraw_payment.png' className='h-60'/>
        </div>
      
      </>
    )
}

export default PricingPage