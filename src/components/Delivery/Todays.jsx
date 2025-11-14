import React, { useState } from 'react';
import { FaFileInvoice } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { LuNotebookPen } from "react-icons/lu";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const Todays = () => {

   const [showModal, setShowModal] = useState(false);
    return (
        <div className='px-5 py-5'>
            {/* upper parts */}
              <div className='md:flex md:space-y-0 space-y-3 justify-between items-center'>
                            <div className='flex items-center gap-3'>
                 <p 
                 onClick={() => setShowModal(true)} className='bg-green-600 px-5 py-1 text-white rounded font-semibold cursor-pointer '>
                    <span>নতুন ডেলিভারি</span>
                   
                    </p>

                            </div>
                       <div className='flex gap-3 items-center'>
                      
                        <div>
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
          <th className="py-1 bg-green-600 border border-green-800 w-14 text-white">#</th>
          <th className="px-7 bg-green-600 border border-green-800 text-white">চালান নং</th>
          <th className="px-4 bg-green-600 border border-green-800 text-white">কাস্টমার</th>
          <th className="px-6 bg-green-600 border border-green-800 text-white">ঠিকানা</th>
          <th className="px-5 bg-green-600 border border-green-800 text-white">শ্রেণী</th>
          <th className="px-5 bg-green-600 border border-green-800 text-white">ক্রয়</th>
          <th className="px-5 bg-green-600 border border-green-800 text-white">ডেলিভারি</th>
          <th className="px-5 bg-green-600 border border-green-800 text-white">ডে.বাকি</th>
          <th className="px-5 bg-green-600 border border-green-800 text-white">ড্রাইভার</th>
          <th className="px-5 bg-green-600 border border-green-800 text-white">মোট ডেলিভারি</th>
          <th className="px-9 bg-green-600 border border-green-800 text-white">তারিখ ও সময়</th>
          <th className="px-5 bg-green-600 border border-green-800 text-white">বাটন</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 text-center">6948</td>
          <td className="border border-gray-400 text-center">6485</td>
          <td className="border border-gray-400 text-center">রাজিব</td>
          <td className="border border-gray-400 text-center">বাগদা</td>
          <td className="border border-gray-400 text-center">৩ নং আদলা</td>
          <td className="border border-gray-400 text-center">300</td>
          <td className="border border-gray-400 text-center text-green-600">300</td>
          <td className="border border-gray-400 text-center">0</td>
          <td className="border border-gray-400 text-center"></td>
          <td className="border border-gray-400 text-center text-green-600">300</td>
          <td className="border border-gray-400 text-center">12/03/2025 1.00 PM</td>
          <td className="border border-gray-400 text-center">
            <CiMenuKebab className="border border-gray-300 py-0.5 text-xl" />
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
      <div className="flex justify-end mt-2">
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

{showModal && (
  <dialog id="my_modal_4" className="modal" open>
  <div className="modal-box w-11/12 max-w-2xl ">
    <form method="dialog" >
      {/* if there is a button in form, it will close the modal */}
      <button onClick={() => setShowModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>

   <div className='border-b pb-3 border-gray-300'>
     <h3 className="font-bold text-xl text-black">নতুন ডেলিভারি</h3>
   </div>
    
<div className='mt-5 md:flex  md:space-y-0 space-y-3 justify-between'>

  <div>
    <p className='text-sm mb-2'>ডেলিভারি নং</p>
    <input type="text"  defaultValue={6950} className='border border-gray-300 rounded pl-3 placeholder:text-sm' />
  </div>

  <div>
    <p className='text-sm mb-2'>চালান নং</p>
    <input type="text" placeholder='চালান নং' className='border border-gray-300 rounded pl-3 placeholder:text-sm' />
  </div>

    <div>
      <p className='text-sm mb-2'>ডেলিভারি তারিখ</p>
      <input type="date"  placeholder='002' className='border border-gray-300 rounded pl-3 placeholder:text-sm' />
    </div>

</div>
    
<div className='mt-5 md:flex md:space-y-0 space-y-3 justify-between'>

  <div>
    <p className='text-sm mb-2'>কাস্টমারের নাম</p>
    <input type="text"  placeholder='কাস্টমারের নাম' className='border border-gray-300 rounded pl-3 placeholder:text-sm' />
  </div>

  <div>
    <p className='text-sm mb-2'>ফোন নম্বর</p>
    <input type="number" placeholder='ফোন নম্বর' className='border border-gray-300 rounded pl-3 placeholder:text-sm' />
  </div>

    <div>
      <p className='text-sm mb-2'>ডেলিভারি ঠিকানা</p>
      <input type="text"  placeholder='ডেলিভারি ঠিকানা' className='border border-gray-300 rounded pl-3 placeholder:text-sm' />
    </div>

</div>

<div className='mt-5 md:grid md:grid-cols-3 grid-cols-1 md:space-y-0 space-y-3 gap-3'>

  <div className='col-span-2 w-full'>
    <p className='text-sm mb-2'>নোট</p>
    <input type="text" placeholder='চালানের নোট'   className='border border-gray-300 w-full rounded pl-3 placeholder:text-sm' />
  </div>


    <div className='col-span-1'>
      <p className='text-sm mb-2'>পরবর্তী ডেলিভারি তারিখ</p>
      <input type="date"  placeholder='002' className='border border-gray-300 rounded pl-3 w-full placeholder:text-sm' />
    </div>

</div>  

<div className='md:grid md:grid-cols-4 grid-cols-1 md:space-y-0 
space-y-3 gap-2 mt-7 bg-gray-100 px-3 py-4 rounded'>

  <div>
    <p className='text-sm mb-2'>শ্রেণী</p>
    <input type="text" placeholder='শ্রেণী সিলেক্ট করুণ' className='border bg-white border-gray-300
    rounded w-full px-2 py-1.5  placeholder:text-sm' />
  </div>
  <div>
    <p className='text-sm mb-2 text-red-500'>ডেলিভারি পাবে</p>
    <input type="text" placeholder='ডেলিভারি পাবে' className='border bg-white border-gray-300
    rounded w-full px-2 py-1.5  placeholder:text-sm' />
  </div>
  <div>
    <p className='text-sm mb-2 text-green-600'>আজকের ডেলিভারি</p>
    <input type="text" placeholder='আজকের ডেলিভারি' className='border bg-white border-gray-300
    rounded w-full px-2 py-1.5  placeholder:text-sm' />
  </div>
  <div>
    <p className='text-sm mb-2 text-red-500'>ডেলিভারি বাকি</p>
    <input type="text" placeholder='ডেলিভারি বাকি' className='border bg-white border-gray-300 
    rounded w-full px-2 py-1.5  placeholder:text-sm' />
  </div>

</div>

<div className='md:grid  md:grid-cols-3 grid-cols-1 md:space-y-0 space-y-4 items-end mt-5 gap-2 '>
  <div className='space-y-2'>
    <p>ড্রাইভারের তথ্য</p>
   <div className='grid grid-rows-3 gap-2'>
     <input type="text" placeholder='ড্রাইভারের নাম' className='border border-gray-300 px-2 py-0.5
     placeholder:text-sm rounded row-span-1' />
    <input type="text" placeholder='ড্রাইভারের ফোন নম্বর' className='border border-gray-300 px-2 py-0.5
    placeholder:text-sm rounded  row-span-1' />
    <input type="text" placeholder='গাড়ি নম্বর' className='border border-gray-300 px-2 py-0.5
    placeholder:text-sm rounded row-span-1 ' />
   </div>
  </div>
  <div className='space-y-2 row-span-1'>
    <p>গাড়ি ভাড়া</p>
  
   <div className='grid grid-rows-3 gap-2 relative'>
      <input type="text" placeholder='ভাড়া' className='row-span-2 
       rounded placeholder:text-sm placeholder:text-center border border-gray-300 ' />
   <div className='absolute top-7 md:left-17 left-40'><FaBangladeshiTakaSign className='text-sm text-gray-400' /></div>
<input type="text" placeholder='কাস্টমার কে এসএমএস দিন' className='row-span-1 border py-0.5 rounded px-2 
placeholder:text-sm md:placeholder:text-start placeholder:text-center border-gray-300' />
   </div>

  </div>
  <div className='space-y-2'>
    <input type="text" placeholder='ক্লিয়ার' className='border placeholder:text-sm border-gray-300 px-2 py-0.5 rounded w-full md:placeholder:text-start text-center' />
 <button className='bg-green-600 text-white w-full py-1 rounded'>সেভ করুণ</button>
 <button className='bg-green-600 text-white w-full py-1 rounded'>সেভ + নতুন ডেলিভারি</button>
  </div>
</div>


  </div>
</dialog>
)}

        </div>
    );
};

export default Todays;