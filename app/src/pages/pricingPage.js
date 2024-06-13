import React from 'react';
import { useState, useEffect } from 'react';
import PaypalComp from '../components/PaypalComp';
import PayPalButton from '../components/PayPalButton';


export default function PricingPage() {


  const [purchaseItem, setPurchaseItem] = useState("");
  const [clickedPurchase, setClickedPurchase] = useState(false);
  const [price, setPrice] = useState();
  const [signedIn, setSignedIn] = useState(false);



  /**
  * Checks if a user is logged in
  * Users that are not logged in can not buy credits
  */
  useEffect(() => {
    const jwtToken = localStorage.getItem("jwt");
    if(jwtToken !== null) {
        setSignedIn(true);
    }
    else {
        setSignedIn(false);
    }
  }, []);




  return (
    <div className='bg-neutral-100'>
      <div id='img-container' className='flex justify-center pt-5'>
        <img src='images/undraw_payment.png' className='h-40 rounded-xl shadow-md'/>
      </div>


      <div id='title-container' className='px-20 mt-10 '>
        <h1 className='text-5xl font-["Lato"] font-normal leading-snug tracking-tight text-center'>Subscription Pricing for Manufacturers</h1>
        <p className='py-2 font-["Montserrat"] tracking-tight text-center'>As the marketplace becomes increasingly crowded with new product offerings, companies MUST make the effort to delineate and substantiate the claims made regarding their bone grafting portfolio. Utilizing the BGC’s “checks and balances” system, based on board member peer review, your company can be assured fairness and visibility within our valued hospital and ASC partnerships across the United States. Once reviewed and approved as accurate by our board, and your product(s) “go live” on the site, BGC participating partners will have complete visibility of your offerings, scientific data, pricing, IFUs, FDA filings, ASPs, and marketing acumen immediately, and on demand, when time matters most.</p>
      </div>


      { clickedPurchase && !signedIn && <h1 className='text-red-500 text-xl font-bold text-center'>Please log in or create an account before purchasing</h1> }


      <div class="flex flex-col md:flex-row justify-content-center p-20" id='price-options-container'>


        <div class="border-1 border-black bg-white">
          <h4 class="my-0 font-semibold text-3xl text-center text-white bg-blue-400 px-5 py-2 font-['Lato']">Single Product</h4>
          <div class="card-body flex items-center justify-center flex-col">
            <h1 class="card-title pricing-card-title py-5 font-medium text-2xl">$5,000<small class="text-muted"> /per graft</small></h1>
            <ul class="list-unstyled mt-3 mb-4 text-center pb-5 font-['Montserrat'] leading-loose font-medium">
              <li>Ability to post product</li>
              <li>2 GB of storage</li>
              <li>Customer support</li>
            </ul>
            <PayPalButton 
              price={"5000"}
              name={"single"} />
          </div>
        </div>



        <div class="border-1 border-black bg-white">
          <h4 class="my-0 font-semibold text-3xl text-center text-white bg-blue-600 px-5 py-2 font-['Lato']">Multiple Products</h4>
          <div class="card-body flex items-center justify-center flex-col">
            <h1 class="card-title pricing-card-title py-5 font-medium text-2xl">$25,000<small class="text-muted"> flat fee</small></h1>
            <ul class="list-unstyled mt-3 mb-4 text-center pb-5 font-['Montserrat'] leading-loose font-medium">
              <li>Provides 8 bone offerings</li>
              <li>More products, more savings!!</li>
              <li>Customer support</li>
            </ul>
            <PayPalButton
              price={"25000"}
              name={"multiple"} />
          </div>
        </div>


        
        <div class="border-1 border-black bg-white">
          <h4 class="my-0 font-semibold text-3xl text-center text-white bg-blue-800 px-5 py-2 font-['Lato']">Unlimited Products</h4>
          <div class="card-body flex items-center justify-center flex-col">
            <h1 class="card-title pricing-card-title py-5 font-medium text-2xl">$35,000<small class="text-muted"> flat fee</small></h1>
            <ul class="list-unstyled mt-3 mb-4 text-center pb-5 font-['Montserrat'] leading-loose font-medium">
              <li>Unlimited bone offerings</li>
              <li>Best long-term deal</li>
              <li>Direct owner support</li>
            </ul>
            <PayPalButton 
              price={"35000"}
              name={"unlimited"} />
          </div>
        </div>
      </div>

      {/* { clickedPurchase && signedIn && <PurchaseForm item={purchaseItem} price={price}/> } */}
      


    </div>
  )
}
