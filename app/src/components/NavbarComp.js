import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';


function NavScrollExample(props) {




  const [signedIn, setSignedIn] = useState(false);





  /**
   * Get user info from auth request to display username etc
   * Runs once every 500ms
   * 
   * Since this runs every 500ms, we will handle jwt expiration
   */    

  useEffect(() => { 
    const interval = setInterval(() => { 

      const token = localStorage.getItem("jwt");
      if(token !== null) {
        setSignedIn(true);
      }
      else {
        setSignedIn(false);
      }


      /**
      * Checks for expired (jwt) authentication token 
      */
      if(localStorage.getItem('jwt-exp')) {
        const jwtExpiration = localStorage.getItem('jwt-exp');
        if (Number(jwtExpiration) < Date.now()) {
          localStorage.removeItem('jwt');
          localStorage.removeItem('jwt-exp');
        }
      }
      else {
        return null;
      }



    }, 100); 

    return () => clearInterval(interval); 
  }, [])



  

  



  return (


    <Navbar expand="lg" className='border-b-2' color='white'>
      <Container fluid>
        <Navbar.Brand href="/home">
          <img
            classname='img-fluid'
            src={require("./../images/MicrosoftTeams-image (1).png")} width='150' height='100' alt='navbar-logo'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-lg gap-4 font-['Lato']"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href='/products'>Products</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
            <Nav.Link href='/pricing'>Pricing</Nav.Link>
          </Nav>


          {/* This section is for the user image and cart. Only shows up when user is signed in */}
          {
            signedIn && (
              <>
              <a href='/myaccount'>
                <div id='user-img' className='rounded-full mr-4 ml-8 p-1 overflow-hidden'>
                  <img src={require("./../images/user-img.png")} className='h-8'/>
                </div>
              </a>
              
              </>
            )
          }

          
          {/* Log in button. Shows when user is not signed in */}
          {
            !signedIn && (
              <a href='/login'>
                <Button className='bg-blue-600 px-4 font-semibold text-white ml-4 mr-8 rounded-2xl'>Login or Sign Up</Button>
              </a>
            )
          }




        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
}

export default NavScrollExample;