import React from 'react';
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className='mx-5 my-10'>
      {/* header section of dashboard */}
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <p className='bg-blue-500 text-white px-5 py-2 rounded'>আজকের হিসাব</p>
          <p className='bg-purple-500 text-white px-5 py-2 rounded'>গত সাত দিনের হিসাব</p>
          <p className='bg-blue-500 text-white px-5 py-2 rounded'>গত ১৫ দিনের হিসাব</p>
          <p className='bg-purple-500 text-white px-5 py-2 rounded'>সিজনের হিসাব</p>
          <p className='bg-red-500 text-white px-5 py-2 rounded'>লাভ লসের হিসাব</p>
        </div>

 <div className=' flex gap-5'>

  <input type="month" name="month"  id="month" className='border border-gray-400 rounded px-3' />
 <input type="date" name="hey"  id="" className='border border-gray-400 rounded px-3' />
 </div>
      </div>

<div className='my-5 grid grid-cols-6 gap-5 '>
  <div className='bg-blue-500 text-white py-3 px-5'>
    <p className='text-base'>মোট বিক্রি (ভাড়া সহ)</p>
    <p className='flex items-center'><FaBangladeshiTakaSign className='text-sm' /> <p className='text-2xl'>22,000</p></p>
  </div>
  <div className='bg-purple-500 text-white py-3 px-5'>
    <p className='text-base'>মোট বিক্রি (ভাড়া সহ)</p>
    <p className='flex items-center'><FaBangladeshiTakaSign className='text-sm' /> <p className='text-2xl'>22,000</p></p>
  </div>
  <div className='bg-blue-500 text-white py-3 px-5'>
    <p className='text-base'>মোট বিক্রি (ভাড়া সহ)</p>
    <p className='flex items-center'><FaBangladeshiTakaSign className='text-sm' /> <p className='text-2xl'>22,000</p></p>
  </div>
  <div className='bg-orange-500 text-white py-3 px-5'>
    <p className='text-base'>মোট বিক্রি (ভাড়া সহ)</p>
    <p className='flex items-center'><FaBangladeshiTakaSign className='text-sm' /> <p className='text-2xl'>22,000</p></p>
  </div>
  <div className='bg-green-500 text-white py-3 px-5'>
    <p className='text-base'>মোট বিক্রি (ভাড়া সহ)</p>
    <p className='flex items-center'><FaBangladeshiTakaSign className='text-sm' /> <p className='text-2xl'>22,000</p></p>
  </div>
  <div className='bg-purple-500 text-white py-3 px-5'>
    <p className='text-base'>মোট বিক্রি (ভাড়া সহ)</p>
    <p className='flex items-center'><FaBangladeshiTakaSign className='text-sm' /> <p className='text-2xl'>22,000</p></p>
  </div>

</div>

    </div>
  );
};

export default Dashboard;