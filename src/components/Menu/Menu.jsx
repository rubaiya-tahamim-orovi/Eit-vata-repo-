import React from 'react';
import logo from "../../../public/images/logo-35.png"
import { Link } from 'react-router';
import { RxDashboard } from "react-icons/rx";   
// import { LuClipboardList } from "react-icons/lu";
// import { GrAnnounce } from "react-icons/gr";
// import { GoHourglass } from "react-icons/go";
// import { FaRegUser } from "react-icons/fa";

const Menu = () => {
    return (
        <div className=' bg-[#F6F6F6] min-h-screen'>
            <div className=' flex justify-center pt-4'>
                <img className='w-15' src={logo} alt="" />
            </div>
            <div className=''>
                <p className='text-[#8E8E93] pl-4'>Menu</p>
              <div className='ml-7 mt-3 space-y-4'>
                  <Link to="/dashboard" className='flex items-center gap-2'>
                <RxDashboard />
                Dashboard

                </Link>

                <Link to="/payment" className='flex items-center gap-2'>
                Payment Khata
                </Link>
            
                 <Link to="/prdoucts" className='flex items-center gap-2'>
                <RxDashboard />
                Delivery

                </Link>
                 <Link to="/toddelivery" className='flex items-center gap-2'>
                <RxDashboard />
                Todays Delivery 

                </Link>

                 
                  <Link to="/willToday" className='flex items-center gap-2'>
               
                আজকে যাবে 

                </Link>
   
                  <Link to="/allDelivery" className='flex items-center gap-2'>
                All delivery

                </Link>
                {/* 
                  <Link to="/payments" className='flex items-center gap-2'>
                <LuClipboardList />
                Payments

                </Link>
                  <Link to="/advertisement" className='flex items-center gap-2'>
               <GrAnnounce />
                Advertisement

                </Link>
                  <Link to="/activeAds" className='flex items-center gap-2'>
               <GrAnnounce />
                ActiveAds

                </Link>
                  <Link to="/expireAds" className='flex items-center gap-2'>
               <GrAnnounce />
                Expire Ads

                </Link>
                  <Link to="/workHours" className='flex items-center gap-2'>
                <GoHourglass />
              Work Hours

                </Link>
                  <Link to="/profile" className='flex items-center gap-2'>
                <FaRegUser />
                Profile
                </Link>
                  <Link to="/shopListing" className='flex items-center gap-2'>
                <FaRegUser />
               shop/ listing
                </Link>
                  <Link to="/productDetails" className='flex items-center gap-2'>
                <FaRegUser />
                product details
                </Link> */}
              </div>
        
              
            </div>
           
        </div>
    );
};

export default Menu;