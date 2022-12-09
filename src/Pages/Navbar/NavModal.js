
import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import pic from '../../Assests/Images/login.png'

import google from '../../Assests/Images/card-logo/search.png'
import facebook from '../../Assests/Images/card-logo/f_logo_RGB-Blue_1024.png'

function Example({ setProfile }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handelLogin = (e) => {
        e.preventDefault()

        setProfile(true)

      
    
    }

    return (
        <>
            <button onClick={handleShow} class="btn btn-sm fs-6 fw-bold dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Create Account. <span className='text-primary'> It's Free !</span>
            </button>
           

            <Modal show={show} onHide={handleClose}  >
                <Modal.Header closeButton>
                   
                </Modal.Header>
                <Modal.Body >
                    <div className='row w-100 align-items-center'>
                        <h6 className='fw-semibold'>Sign In</h6>

                        <div className='col-6'>
                            <form >
                                <div>
                                 
                                    <div className='mt-1'>
                                        <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' required />
                                </div>
                                    <div className='mt-2'>
                                        <input type="Password"  name='password' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Password' required />
                                    </div>
                                    <button onClick={handelLogin} className='btn btn-primary text-white fw-semibold mt-2 w-100 rounded-pill'> Sign In</button>
                                    <button className='btn btn-light border border-2 fw-semibold mt-2 w-100 d-flex gap-3 align-items-center'> <img src={google} alt="" /> Sign With Google</button>
                                    <button className='btn btn-light border border-2 fw-semibold mt-2 w-100  d-flex gap-3 align-items-center'> <img src={facebook} alt="" />  Sign With Facebook</button>

                                    <p className='fw-semibold mt-2 text-center'>Forget Password ?</p>


                                       
                                </div>
                              

                            </form>

                        </div>
                        <div className='col-6'>
                            <img src={pic} className='img-fluid' alt="" />
                        </div>
                    </div>
                
                </Modal.Body>
               
            </Modal>
        </>
    );
}



export default Example