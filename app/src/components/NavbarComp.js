import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample(props) {


  const signedIn = true;


  return (


    <Navbar expand="lg" className='border-b-2' color='white'>
      <Container fluid>
        <Navbar.Brand href="/home">
          <img
            classname='img-fluid'
            src='images/MicrosoftTeams-image (1).png' width='150' height='100' alt='navbar-logo'></img>
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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='hover:bg-blue-800 text-blue-600'>Search</Button>
          </Form>


          {/* This section is for the user image and cart. Only shows up when user is signed in */}
          {
            signedIn && (
              <>
              <a href='/myaccount'>
                <div id='user-img' className='rounded-full mr-4 ml-8 p-1 overflow-hidden'>
                  <img src='images/user-img.png' className='h-8'/>
                </div>
              </a>


              {/* Cart image */}
              <a href='/cart'>
                <div id='user-img' className='rounded-full mr-4 p-1 overflow-hidden'>
                  <img src='images/cart.png' className='h-8'/>
                </div>
              </a>
              
              </>
            )
          }

          
          {/* Log in button. Shows when user is not signed in */}
          {
            !signedIn && (
              <a href='/login'>
                <Button className='bg-blue-600 px-4 font-semibold text-white ml-4 mr-1 rounded-2xl'>Login or Sign Up</Button>
              </a>
            )
          }




        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
}

export default NavScrollExample;