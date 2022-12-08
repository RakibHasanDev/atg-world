import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../../Assests/Images/Union 1.png'
import { AiOutlineSearch } from 'react-icons/ai';



function Header() {
  return (
      <Navbar bg="white" expand="lg" 
      >
      <Container fluid className='py-1' >
              <Navbar.Brand href="#" className='w-25 ps-5 fs-3 align-items-center fw-semibold'> <span className='text-success  '>ATG.</span><span>W<img src={img} alt="" className='pb-1' /></span>RLD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
                      className='w-100 '
                      
            style={{ maxHeight: '100px' }}
            navbarScroll
          >           
                      <input type="search" name="" id="" placeholder=' Search for your favorite groups in ATG' className='rounded-pill share border-0 py-2 px-6 flex justify-content-center text-center w-50 fw-semibold position-relative' />
                      <AiOutlineSearch className='position-absolute ms-5 mt-2 fs-5 fw-bold' />

                      <h5 className='ms-auto pe-5'> Create Account. <span className='text-primary'> It's Free !</span></h5>
                      
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;