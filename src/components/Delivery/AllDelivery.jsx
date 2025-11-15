import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const AllDelivery = () => {
    return (
        <div className='px-5 py-5'>
               <div >
            
                           <div className='md:flex justify-between md:space-y-0 space-y-3 items-center gap-4'>
            
                      
                        <div className='flex  items-center gap-4 border border-gray-300 rounded w-full'>
                           <input type="search" placeholder='সার্চ করুণ' className='px-3 outline-none py-1 w-full' />
                        <p className='bg-gray-300 border-l border-gray-400 px-2 py-2 h-full flex flex-col
                         justify-center'><IoSearchSharp className=' ' /></p>
                            </div> 
                             <div className='flex md:justify-normal justify-center gap-3 items-center'>
                                 
                               <div className='md:flex gap-2 md:space-y-0 space-y-3'>
                                 <input type="date" name="hey"  id="" className='border border-gray-400 rounded px-3 py-1' />
                                 <input type="date" name="hey"  id="" className='border border-gray-400 rounded px-3 py-1' />
                                    </div>
                                    <div>
                                     <p  className='flex items-center gap-2 border border-green-600
                                     font-semibold px-5 py-1 text-green-600 rounded'> <FaFileInvoice />  রিপোর্ট</p>
                                    </div>
                                   </div>
                                    </div>
            
                       {/* table section here */}
            
            
            <div className="mt-10">
              {/* Table for medium+ screens */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                    
                      <th className="px-7 bg-green-600 border border-green-800 text-white">চালান নং</th>
                      <th className="px-4 bg-green-600 border border-green-800 text-white">কাস্টমার</th>
                      <th className="px-6 bg-green-600 border border-green-800 text-white">ঠিকানা</th>
                      <th className="px-6 bg-green-600 border border-green-800 text-white">টাকা বাকি</th>
                      <th className="px-6 bg-green-600 border border-green-800 text-white">নোট</th>
                      <th className="px-5 bg-green-600 border border-green-800 text-white">শ্রেণী</th>
                      <th className="px-5 bg-green-600 border border-green-800 text-white">ক্রয়  </th>
                      <th className="px-5 bg-green-600 border border-green-800 text-white"> ডেলিভারি </th>
                      <th className="px-5 bg-green-600 border border-green-800 text-white">ডে.বাকি </th>
                      <th className="px-5 bg-green-600 border border-green-800 text-white">মোট ডে. বাকি</th>
                      <th className="px-5 bg-green-600 border border-green-800 text-white">ডে তারিখ</th>
                     
                      <th className="px-5 bg-green-600 border border-green-800 text-white">বাটন</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 text-center">6948</td>
                      <td className="border border-gray-400 text-center">6485</td>
                      <td className="border border-gray-400 text-center">রাজিব</td>
                      <td className="border border-gray-400 text-center">রাজিব</td>
                      <td className="border border-gray-400 text-center">রাজিব</td>
                     
                      <td className="border border-gray-400 text-center">৩ নং আদলা</td>
                      <td className="border border-gray-400 text-center">300</td>
                      <td className="border border-gray-400 text-center text-green-600">300</td>
                      <td className="border border-gray-400 text-center">0</td>
                      <td className="border border-gray-400 text-center"></td>
                      <td className="border border-gray-400 text-center">12/09/25</td>
                       <td className="border border-gray-400 py-1 flex justify-center text-center">
                                 <CiMenuKebab className="border border-gray-300 py-0.5 text-xl text-center" />
                               </td>
                     
                    
                    </tr>
                  </tbody>
                </table>
              </div>
            
              {/* Card layout for mobile */}
              <div className="md:hidden space-y-4">
                <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
            
                  <p><span className="font-semibold">চালান নং:</span> 6485</p>
                  <p><span className="font-semibold">কাস্টমার:</span> রাজিব</p>
                  <p><span className="font-semibold">ঠিকানা:</span> বাগদা</p>
                  <p><span className="font-semibold">টাকা বাকি:</span> বাগদা</p>
                  <p><span className="font-semibold">নোট:</span> বাগদা</p>
                  <p><span className="font-semibold">শ্রেণী:</span> বাগদা</p>
                 
                  <p><span className="font-semibold">ক্রয়:</span> 300</p>
                  <p><span className="font-semibold">ডেলিভারি:</span> <span className="text-green-600">300</span></p>
                  <p><span className="font-semibold">ডে.বাকি:</span> 0</p>
                  <p><span className="font-semibold">মোট ডে. বাকি:</span> <span className="text-green-600">300</span></p>
                  <p><span className="font-semibold">ডে তারিখ:</span> <span className="text-green-600">300</span></p>
                  <p><span className="font-semibold">বাটন:</span> —</p>
                 
                
                </div>
              </div>
            </div>
            
            
            
                    </div>

                    <div className='flex items-center justify-end gap-3 mt-5'>
                      <p className='text-sm'>মোট ডেলিভারির ২ টি </p>
                    <div className='flex items-center gap-1 text-sm'>
                        <p><IoIosArrowBack className='cursor-pointer' /></p>
                      <p className='border px-2 rounded border-green-600 text-green-600'>1</p>
                      <p><IoIosArrowForward className='cursor-pointer' /></p>
                    </div>
                      <button className='cursor-pointer'><p className='border border-gray-400 px-3 text-sm py-1 rounded'>20 ডেলিভারি / পেজ</p></button>
                    
                    </div>
        </div>
    );
};

export default AllDelivery;