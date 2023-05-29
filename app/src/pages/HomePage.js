import React from 'react';
import './HomePage.css';


function HomePage() {
  return (

    <div className='overflow-x-hidden w-full'>


      <div className='h-screen d-flex flex-column justify-content-center align-items-center' id='hero-section'>
        <h1 className='text-light text-center text-7xl px-40 py-20 font-["Lato"] font-bold leading-snug'>
          Lifting the veil of mismanaged information of Bone Grafting
        </h1>
        <a href='/products' className='btn btn-primary btn-lg btn-get-started px-5 rounded-xl font-["Montserrat"] font-medium'>
          See Products
        </a>
      </div>

      <div className='py-5'>
        <h2 className='card-title'>Who we are</h2>
        <p className='card-text'>
          At Bone Graft Consortium, we help to take the guess work out of the
          crowded bone grafting space.
        </p>
        <a
          href='/about'
          className='btn btn-outline-primary btn-sm'
          data-bs-toggle='popover'
          data-bs-content='Edit image'
          data-bs-trigger='hover focus'>
          <h5 className='far fa-edit'>Read More</h5>
        </a>
      </div>

      <section>
  <h3 class="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
  <p class="text-center mb-5">
    Find the answers for the most frequently asked questions below
  </p>

  <div class="row">
    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="far fa-paper-plane text-primary pe-2"></i>What does the BGC do that’s not currently being done in the industry</h6>
      <p>
        <strong><u>Absolutely!</u></strong> The Bone Graft Consortium is a platform that provides easily accessible, unbiased information about bone grafts for healthcare providers. It consolidates all bone grafts in a single website and app, allowing healthcare providers to make informed decisions based on facts. Manufacturers can register with the BGC and provide a comprehensive overview of their products, eliminating misinformation and misleading marketing claims. Hospitals and surgery centers can partner with the BGC to require manufacturers to join and gain entry into their facilities. The BGC provides a clear and concise pathway for manufacturers to gain visibility in facilities across the country.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-pen-alt text-primary pe-2"></i> Why would spine/orthopedic or small biologic companies join the BGC?</h6>
      <p>
        <strong><u>Yes, it is possible!</u></strong> The Bone Graft Consortium will be funded by the industry and will be a non-profit entity. Manufacturers who are not listed and reviewed by the BGC may be perceived as less relevant or unwilling to provide unbiased information, risking their acceptance by reviewing hospital/ASC committees. Hospitals will require manufacturers to join the BGC for efficiency and to keep unscrupulous vendors out of their system. The non-profit entity gives confidence and legitimacy to the bone grafting marketplace and allows for complete financial transparency.




      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-user text-primary pe-2"></i> Who will the BGC consist of and how will it help “level the playing field”?
      </h6>
      <p>
      The BCG will recruit board members from bone grafting companies, insurance providers, and key decision makers who will periodically review submissions. The subscription-based model will allow all manufacturers, big or small, to showcase their bone grafting options alongside others, giving them access and visibility in hospital systems and ASCs that they may not have otherwise had due to lack of representation or funding.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-rocket text-primary pe-2"></i> A simple
        question?
      </h6>
      <p>
        Yes. Go to the billing section of your dashboard and update your payment information.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-home text-primary pe-2"></i> A simple
        question?
      </h6>
      <p><strong><u>Unfortunately no</u>.</strong> We do not issue full or partial refunds for any
        reason.</p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-book-open text-primary pe-2"></i> Another
        question that is longer than usual</h6>
      <p>
        Of course! We’re happy to offer a free plan to anyone who wants to try our service.
      </p>
    </div>
  

  </div>
</section>
    </div>
  );
}

export default HomePage;