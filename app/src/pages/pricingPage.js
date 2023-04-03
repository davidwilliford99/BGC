import React from 'react'

function PricingPage(){
    return(
        <div class="row justify-content-center">
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Single Product</h4>
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
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Multiple Products</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$20,000<small class="text-muted">/flat fee</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>Provides 5-8 Bone offerings</li>
          <li>The more products the higher the savings</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Unlimited Products</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$35,000<small class="text-muted">/flat fee</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>8 or more bone offerings</li>
          <li>30 GB of storage</li>
          <li>Phone and email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
      </div>
    </div>
  </div>
</div>
    )
}

export default PricingPage