import React from 'react';
import './HomePage.css';


function HomePage() {

  return (


    <div className='overflow-x-hidden w-full'>


      <div className='xl:h-screen px-10 pb-20 xl:px-40 d-flex flex-column justify-center' id='hero-section'>
        <h1 className='text-light text-3xl lg:text-5xl py-20 font-["Lato"] font-bold leading-normal'>
          Lifting the veil of mismanaged information on Bone Grafting
        </h1>
        <a href='/products' className='btn btn-primary btn-lg btn-get-started rounded-xl font-["Montserrat"] font-medium xl:w-1/4 text-xl'>
          Grafting Categories
        </a>
      </div>



      <div className='py-5 px-10 xl:px-40 border bg-neutral-100'>
        <h2 className='card-title text-3xl font-medium font-["Lato"] '>Who we are</h2>
        <p className='card-text py-2 font-["Montserrat"] tracking-tight'>
          At Bone Graft Consortium, we help to take the guess work out of the
          crowded bone grafting space.
        </p>
        <a
          href='/about'
          className='btn btn-outline-primary btn-sm mt-2 rounded-md'
          data-bs-toggle='popover'
          data-bs-content='Edit image'
          data-bs-trigger='hover focus'>
          <h5 className='far fa-edit font-["Montserrat"] font-medium p-1'>Read More</h5>
        </a>
      </div>



      <section className='px-5 xl:px-40 py-20'>
        <h3 class="text-center mb-4 text-primary fw-bold text-5xl font-['Lato'] font-bold leading-snug tracking-widest">FAQ</h3>
        <p class="text-center text-sm mb-5 tracking-widest font-['Montserrat'] text-neutral-500">
          Find the answers for the most frequently asked questions below
        </p>




        <div class="flex flex-row flex-wrap">



          <div class="col-md-6 col-lg-4 mb-4 bg-blue-200 p-5 rounded-sm">
            <h6 class="mb-5 text-blue-600 text-lg xl:text-2xl">What does the BGC do that’s not currently being done in the industry</h6>
            <p class="text-sm xl:text-md">
              <strong><u>Great Question!</u></strong>
              <br/>
               The BGC platform provides a comprehensive repository for bone grafts that is both nonprofit and non-biased, citing our mission statement from our 501(c)3 filings with the federal government.
            </p>
          </div>



          <div class="col-md-6 col-lg-4 mb-4 bg-blue-100 p-5 rounded-sm">
            <h6 class="mb-5 text-blue-600 text-lg xl:text-2xl">Why would spine/orthopedic or small biologic companies join the BGC?</h6>
            <p class="text-sm xl:text-md">
              <strong><u>Visibility and accountability matter</u></strong> The BGC is funded by the industry and is a registered 501(c)3 nonprofit organization. Manufacturers who are not listed and reviewed by the BGC may be perceived as less relevant or unwilling to provide unbiased information, risking their acceptance by reviewing hospital/ASC committees. Hospitals will require manufacturers to join the BGC for efficiency and to keep unscrupulous vendors out of their system. The non-profit entity gives confidence and legitimacy to the bone grafting marketplace and allows for complete financial transparency.
            </p>
          </div>



          <div class="col-md-6 col-lg-4 mb-4 bg-blue-200 p-5 rounded-sm">
            <h6 class="mb-5 text-blue-600 text-lg xl:text-2xl">Who will the BGC consist of and how will it help “level the playing field”?
            </h6>
            <p class="text-sm xl:text-md">
            The BCG has recruited board members from bone grafting companies, insurance providers, and key decision makers who will periodically review submissions. The subscription based model allows manufacturers, regardless of size or annual revenue, to all be treated as equals alongside one another.
            </p>
          </div>
        



        </div>
      </section>
    </div>
  );
}

export default HomePage;