import React from 'react';
import { TbCurrencyTaka } from "react-icons/tb";
// import { FaFile } from "react-icons/fa6";
// import { FaTruckFast } from "react-icons/fa6";
// import { FaMoneyBillWave } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const GoToProfile = () => {
    return (
        <div className='px-5 py-4'>
            
            {/* upper section */}
            <div className='flex  justify-around py-2'>
                {/* <div className='bg-[#fb2c364D] flex justify-center items-center text-center   px-7'>
                    <p className='text-red-500 text-3xl  h-full'>4615</p>
                </div> */}
                <div className="bg-[#fb2c364D] flex items-center justify-center px-7 rounded">
  <p className="text-red-500 text-3xl font-semibold">4615</p>
</div>

                <div className='flex items-center gap-3'>
                    <div className='space-y-2'><p className='bg-gray-200 px-3 pb-1  rounded-lg'>নাম</p> 
                    <p className='bg-gray-200 px-3 rounded-lg pb-1'>ঠিকানা</p>
                     <p className='bg-gray-200 px-3 rounded-lg pb-1'>ফোন নম্বর</p></div>

                    <div className='space-y-3'><p>abul hasan</p> <p>bakir mor</p> <p>000034902</p></div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='space-y-2'><p className='bg-gray-200 px-3 pb-1  rounded-lg'>মোট ইট ক্রয়</p>
                     <p className='bg-gray-200 px-3 pb-1  rounded-lg'>ডেলিভারি</p>
                      <p className='bg-gray-200 px-3 pb-1  rounded-lg'>ডেলিভারি বাকি</p></div>

                    <div className='space-y-3'><p>10,000</p> <p>6,000</p> <p>4,000</p></div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='space-y-2'><p className='bg-gray-200 px-3 pb-1  rounded-lg'>মোট মূল্য</p>
                     <p className='bg-gray-200 px-3 pb-1  rounded-lg'>পরিশোধ</p>
                      <p className='bg-gray-200 px-3 pb-1  rounded-lg'>টাকা বাকি</p></div>
                    
                    <div className='space-y-3'><p className='flex items-center '><TbCurrencyTaka />10,000</p>
                     <p className='flex items-center'><TbCurrencyTaka />6,000</p>
                      <p className='flex items-center'><TbCurrencyTaka />4,000</p></div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='space-y-2'><p className='bg-gray-200 px-3 pb-1  rounded-lg'>পরিশোধের তারিখ</p>
                     <p className='bg-gray-200 px-3 pb-1  rounded-lg'>নোট</p> 
                     <p className='bg-gray-200 px-3 pb-1  rounded-lg'>সিজন</p></div>
                    <div className='space-y-3'><p>-</p> <p>-</p> <p>4,000</p></div>
                </div>
            </div>

            {/* name of each tab group should be unique */}
<div className="tabs tabs-border relative">
  <input type="radio" name="my_tabs_2" className="tab" aria-label="সব চালান" defaultChecked />
{/* */}
  <div className="tab-content border-base-300 bg-base-100 p-10">
    {/* Tab content 1 */}
    
                            {/* table section here */}
    
    <div className="">
      {/* Table for medium+ screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="py-1 bg-green-600 border border-green-800 w-12 text-white">#</th>
              <th className="px-3 bg-green-600 border border-green-800 text-white">কাস্টমার</th>
              <th className="px-4 bg-green-600 border border-green-800 text-white">ঠিকানা</th>
              <th className="px-4 bg-green-600 border border-green-800 text-white">শ্রেণী</th>
              <th className="px-4 bg-green-600 border border-green-800 text-white">পরিমান</th>
              <th className="px-5 bg-green-600 border border-green-800 text-white">রেট</th>
              <th className="px-5 bg-green-600 border border-green-800 text-white">মূল্য</th>
              <th className="px-5 bg-green-600 border border-green-800 text-white">মোট মূল্য</th>
              <th className="px-5 bg-green-600 border border-green-800 text-white">ছাড়</th>
              <th className="px-5 bg-green-600 border border-green-800 text-white">ভাড়া</th>
              <th className="px-5 bg-green-600 border border-green-800 text-white">সর্বমোট</th>
              <th className="px-9 bg-green-600 border border-green-800 text-white">নগদ</th>
              <th className="px-9 bg-green-600 border border-green-800 text-white">বাকি</th>
              <th className="px-5 bg-green-600 border border-green-800 text-white">বাটন</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 text-center">6948</td>
              <td className="border border-gray-400 text-center">আবুল হোসেন</td>
              <td className="border border-gray-400 text-center">বাকির মোড়</td>
              <td className="border border-gray-400 text-center">১ নং</td>
              <td className="border border-gray-400 text-center">৪,০০০</td>
              <td className="border border-gray-400 text-center "> 
                <p className='flex items-center justify-center'><TbCurrencyTaka/>100</p> </td>
              <td className="border border-gray-400 text-center "> 
                <p className='flex items-center justify-center'><TbCurrencyTaka/>100</p> </td>
              <td className="border border-gray-400 text-center "> 
                <p className='flex items-center justify-center'><TbCurrencyTaka/>100</p> </td>
              <td className="border border-gray-400 text-center"></td> <td className="border border-gray-400 text-center "> 
                <p className='flex items-center justify-center'><TbCurrencyTaka/>100</p> </td><td className="border border-gray-400 text-center text-green-600">300</td>
              <td className="border border-gray-400 text-center "> 
                <p className='flex items-center justify-center'><TbCurrencyTaka/>100</p> </td>
              <td className="border border-gray-400 text-center "> 
                <p className='flex items-center justify-center'><TbCurrencyTaka/>100</p> </td>
             
              <td className="border border-gray-400 py-3.5 flex justify-center text-center">
                <CiMenuKebab className="border border-gray-300 py-0.5 text-xl text-center" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    
      {/* Card layout for mobile */}
      <div className="md:hidden space-y-4">
        <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
          <p><span className="font-semibold">#:</span> 6948</p>
          <p><span className="font-semibold">চালান নং:</span> 6485</p>
          <p><span className="font-semibold">কাস্টমার:</span> রাজিব</p>
          <p><span className="font-semibold">ঠিকানা:</span> বাগদা</p>
          <p><span className="font-semibold">শ্রেণী:</span> ৩ নং আদলা</p>
          <p><span className="font-semibold">ক্রয়:</span> 300</p>
          <p><span className="font-semibold">ডেলিভারি:</span> <span className="text-green-600">300</span></p>
          <p><span className="font-semibold">ডে.বাকি:</span> 0</p>
          <p><span className="font-semibold">ড্রাইভার:</span> —</p>
          <p><span className="font-semibold">মোট ডেলিভারি:</span> <span className="text-green-600">300</span></p>
          <p><span className="font-semibold">তারিখ ও সময়:</span> 12/03/2025 1.00 PM</p>
          <div className="flex justify-end mt-2 ">
            <CiMenuKebab className="border border-gray-300 py-0.5 text-xl" />
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

  <input type="radio" name="my_tabs_2" className="tab" aria-label="ডেলিভারি হিস্ট্রি"  />
  <div className="tab-content border-base-300 bg-base-100 p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="বাকি জমা হিস্ট্রি" />
  <div className="tab-content border-base-300 bg-base-100 p-10">Tab content 3</div>
</div>



        </div>
    );
};

export default GoToProfile;