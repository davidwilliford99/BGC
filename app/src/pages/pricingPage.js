import React from 'react'

function PricingPage(){
    return (
      <>


        <div id='img-container' className='flex justify-center pt-5'>
          <img src='images/undraw_payment.png' className='h-40'/>
        </div>



        <div id='title-container' className='px-20 mt-10 '>
          <h1 className='text-5xl font-["Lato"] font-normal leading-snug tracking-tight text-center'>Pricing Options</h1>
          <p className='py-2 font-["Montserrat"] tracking-tight text-center'>Breif reasoning on why spending your money at BGC is worth it. Explain the exact process of how they will receive a return on their investment.</p>
        </div>




        <div class="flex justify-content-center p-20" id='price-options-container'>


          <div class="border-1 border-black">
            <h4 class="my-0 font-semibold text-3xl text-center text-white bg-blue-400 px-5 py-2 font-['Lato']">Single Product</h4>
            <div class="card-body flex items-center justify-center flex-col">
              <h1 class="card-title pricing-card-title py-5 font-medium text-2xl">$5,000<small class="text-muted"> /per graft</small></h1>
              <ul class="list-unstyled mt-3 mb-4 text-center pb-5 font-['Montserrat'] leading-loose font-medium">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Customer support</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-outline-primary rounded-xl border-2 font-semibold mb-5">Purchase Today</button>
            </div>
          </div>



          <div class="border-1 border-black">
            <h4 class="my-0 font-semibold text-3xl text-center text-white bg-blue-600 px-5 py-2 font-['Lato']">Multiple Products</h4>
            <div class="card-body flex items-center justify-center flex-col">
              <h1 class="card-title pricing-card-title py-5 font-medium text-2xl">$25,000<small class="text-muted"> flat fee</small></h1>
              <ul class="list-unstyled mt-3 mb-4 text-center pb-5 font-['Montserrat'] leading-loose font-medium">
                <li>Provides 8 bone offerings</li>
                <li>More products, more savings!!</li>
                <li>Customer support</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-outline-primary rounded-xl border-2 font-semibold mb-5">Purchase Today</button>
            </div>
          </div>


          
          <div class="border-1 border-black">
            <h4 class="my-0 font-semibold text-3xl text-center text-white bg-blue-800 px-5 py-2 font-['Lato']">Unlimited Products</h4>
            <div class="card-body flex items-center justify-center flex-col">
              <h1 class="card-title pricing-card-title py-5 font-medium text-2xl">$35,000<small class="text-muted"> flat fee</small></h1>
              <ul class="list-unstyled mt-3 mb-4 text-center pb-5 font-['Montserrat'] leading-loose font-medium">
                <li>Unlimited bone offerings</li>
                <li>30 GB of storage</li>
                <li>Direct owner support</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-outline-primary rounded-xl border-2 font-semibold mb-5">Purchase Today</button>
            </div>
          </div>


        </div>


      
      </>
    )
}

export default PricingPage