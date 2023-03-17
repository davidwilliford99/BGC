import React from 'react';

function HomePage() {
    
  return (
    <div className='card-wrapper'>
      <div className='card'>
        <img
          className='card-img-top img-thumbnail'
          src='images/tim-kilby-x2qzLL3vdBs-unsplash.jpg'
          alt='alt text'
        />
        <div className='card-img-overlay d-flex flex-column justify-content-center align-items-center'>
          <h1 className='text-light text-center'>
            "Lifting the veil of mismanaged information of{' '}
            <small className='text-muted'>Bone Grafting"</small>
          </h1>
          <h1 className='text-light text-center'>- Mike Weddington</h1>
          <a href='#' className='btn btn-primary btn-lg btn-get-started'>
            Get Started
          </a>
        </div>
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

      <div className='py-5'>
        <h2>F.A.Q</h2>
        <p>Place holder text</p>
      </div>
    </div>
  );
}

export default HomePage;