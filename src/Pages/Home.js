import React from 'react';
import './Home.css'
import HomeBody from './HomeBody/HomeBody';
import img1 from '../../src/Assests/Images/Rectangle 5.png'
import img5 from '../../src/Assests/Images/Rectangle 5 (1).png'
import img2 from '../../src/Assests/Images/card-logo/✍️ Article (1).png'
import img4 from '../../src/Assests/Images/card-logo/🔬️ Education.png'
import img3 from '../../src/Assests/Images/Rectangle 3 (1).png'
import img6 from '../../src/Assests/Images/Rectangle 3 (2).png'
import img8 from '../../src/Assests/Images/Rectangle 3 (3).png'
import img9 from '../../src/Assests/Images/Rectangle 5 (2).png'
import img7 from '../../src/Assests/Images/card-logo/🗓️ Meetup.png'
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { BsFillShareFill } from 'react-icons/bs';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';


const Home = () => {
    return (
        <div>
            <section className='banner position-relative'

            >
                <div className='position-absolute bottom-0  pb-5 card-content'>
                    <h3 className='text-white fs-2 fw-bold'>Computer Engineering</h3>
                    <p className='text-white fs-5'>142,765 Computer Engineers follow this</p>
                </div>


            </section>
            <div className='container'>
                <HomeBody></HomeBody>
                <hr className='mt-0' />
                
                 {/* card start  */}
                <div className=' mt-5 row gap-5 '>
                    <div className='col-md-7 col-12'>
                        <div className="card mb-3">
                            <img src={img1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                    <p><img src={img2} alt="" /></p>
                                <div className='d-flex justify-content-between'>
                                
                                    <h5 className="card-title fw-semibold">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                                   <BsThreeDots/>
                              </div>
                                <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>

                                <div className='d-flex justify-content-between align-items-center fw-semibold'>
                                    <div className='d-flex gap-3 align-items-center mt-3'>
                                        <img src={img3} alt="" />
                                        <p className='fw-bold'>Sarthak Kamra</p>
                                    </div>
                                    <div className='mt-3 d-flex gap-3 align-items-center'>
                                        <p> <span><AiOutlineEye /></span> 1.4k views</p>
                                        <p className='px-2 py-1  share rounded'> <BsFillShareFill/> </p>
                                    </div>
                              </div>
                                
                            </div>
                        </div>
                        <div className="card mb-3">
                            <img src={img5} className="card-img-top" alt="..." />
                            <div className="card-body">
                                    <p><img src={img4} alt="" /></p>
                                <div className='d-flex justify-content-between'>
                                
                                    <h5 className="card-title fw-semibold">Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
                                   <BsThreeDots/>
                              </div>
                                <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>

                                <div className='d-flex justify-content-between align-items-center fw-semibold'>
                                    <div className='d-flex gap-3 align-items-center mt-3'>
                                        <img src={img6} alt="" />
                                        <p className='fw-bold'>Sarah West</p>
                                    </div>
                                    <div className='mt-3 d-flex gap-3 align-items-center'>
                                        <p> <span><AiOutlineEye /></span> 1.4k views</p>
                                        <p className='px-2 py-1 share rounded'> <BsFillShareFill/> </p>
                                    </div>
                              </div>
                                
                            </div>
                        </div>
                        <div className="card mb-3">
                            <img src={img9} className="card-img-top" alt="..." />
                            <div className="card-body">
                                    <p><img src={img7} alt="" /></p>
                                <div className='d-flex justify-content-between'>
                                
                                    <h5 className="card-title fw-semibold">Finance & Investment Elite Social Mixer @Lujiazui</h5>
                                   <BsThreeDots/>
                              </div>
                             
                                <div className='d-flex gap-5'>
                                    <p className="card-text  fw-semibold"> <AiTwotoneCalendar className='fs-5' /> <span>Fri, 12 Oct, 2018</span> </p>

                                    <p className='flex gap-3 fw-semibold'> <span> <CiLocationOn className='fw-semibold' /></span> Ahmedabad, India</p>
                                </div>
                                    <button className='text-warning btn border border-2   w-100'> Visit Website</button>
                                <div className='d-flex justify-content-between align-items-center fw-semibold'>
                                    <div className='d-flex gap-3 align-items-center mt-3'>
                                        <img src={img8} alt="" />
                                        <p className='fw-bold'>  Sarah West</p>
                                    </div>
                                    <div className='mt-3 d-flex gap-3 align-items-center'>
                                        <p> <span><AiOutlineEye /></span> 1.4k views</p>
                                        <p className='px-2 py-1 rounded share'> <BsFillShareFill/> </p>
                                    </div>
                              </div>
                                
                            </div>
                        </div>
                        

                        
                    </div>

                    <div className='col-md-4 col-12'>

                        <h1>This is from second card</h1>


                    </div>

                </div>
                
            </div>
      </div>
    );
};

export default Home;