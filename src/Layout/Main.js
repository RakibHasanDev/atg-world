import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Navbar/Navbar';
import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
    return (
        <div>
         <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Main;