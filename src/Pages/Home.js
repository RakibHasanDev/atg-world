import React from 'react';
import banner from '../../src/Assests/Images/Rectangle 2.png'
import './Home.css'
import HomeBody from './HomeBody/HomeBody';
import { AiOutlineSearch } from 'react-icons/ai';

const Home = () => {
    return (
        <div>
            <section className='banner position-relative'

            >
                <div className='position-absolute bottom-0 ms-5 pb-5'>
                    <h3 className='text-white fs-2 fw-bold'>Computer Engineering</h3>
                    <p className='text-white fs-5'>142,765 Computer Engineers follow this</p>
                </div>


            </section>
            <div className='container'>
                <HomeBody></HomeBody>
                <hr />
                
            </div>
      </div>
    );
};

export default Home;