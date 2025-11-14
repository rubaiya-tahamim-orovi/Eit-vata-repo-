import React from 'react';
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
          <div className='grid grid-cols-7'>
             <Menu></Menu>
           <div className='col-span-6'>
              <Navbar></Navbar>
             <Outlet></Outlet>
           </div>
         </div>
            
        </div>
    );
};

export default Root;