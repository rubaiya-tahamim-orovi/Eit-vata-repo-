import React from 'react';
import { IoSearch } from "react-icons/io5";
import { RiEqualizer2Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import user from "../../../public/images/Ellipse 7.png"

const Navbar = () => {
    return (
       <div className=''>
         <div className='flex  bg-[#F6F6F6]  justify-around col-span-6'>
          <div className='flex gap-2 py-4'>
              <div className='flex items-center gap-2 bg-[#007AFF0F] rounded-full px-5 py-2'>
            <IoSearch className='text-[#8E8E93] text-xl rounded-full' />
                <input type="text" placeholder='Search' className='text-[#8E8E93] outline-none' />
            </div>
            <div className='bg-[#007AFF] px-3 py-3 items-center flex justify-center rounded-full'>
<RiEqualizer2Line className='text-white text-2xl text-center ' />
            </div>
          </div>

            <div className='flex items-center gap-3'>
                <div className='bg-[#D1D1D633] rounded-full px-3 py-3'>
                    <FaRegBell className='text-xl' />
                </div>
                <div>
                    <div class="dropdown dropdown-bottom cursor-pointer">
  <div tabindex="0" role="button"  class=" m-1">
    <div className='flex gap-3  items-center'>
        <img src={user} className='w-10' alt="" />
        <p>Admin user</p>
         <MdKeyboardArrowDown className='text-xl' />
        </div>
        </div>
  <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Navbar;