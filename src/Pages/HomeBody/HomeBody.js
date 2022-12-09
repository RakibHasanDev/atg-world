import React from 'react';
import {  AiOutlineUsergroupAdd } from 'react-icons/ai';
const HomeBody = () => {
    return (
        <section className='mt-5 d-md-block d-none' >

            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex gap-3'>
                    <p className='fw-semibold'> All Post (32)</p>
                    <p>Article</p>
                    <p> Education</p>
                    <p> Job</p>
                </div>


                <div className='d-flex gap-3 '  >
                    {/* <button className='btn share fw-semibold'>
                        Write A post
                    </button> */}
                    <button className="btn share dropdown-toggle fw-semibold" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Write A post
                    </button>

                    <button className='btn btn-primary fw-semibold d-flex gap-1 align-items-center'>
                       <AiOutlineUsergroupAdd className='fs-5'/> Join Group
                    </button>
                </div>
         </div>
            

        </section>
    );
};

export default HomeBody;