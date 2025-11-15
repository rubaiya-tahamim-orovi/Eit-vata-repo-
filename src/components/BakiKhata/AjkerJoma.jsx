import React, { useState } from 'react';
import { FaFileInvoice } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { LuNotebookPen } from "react-icons/lu";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const AjkerJoma = () => {
    
       const [showModal, setShowModal] = useState(false);
    return (
        <div>
       
            <div className='px-5 py-5'>
                   {/* upper parts */}
                     <div className='md:flex md:space-y-0 space-y-3 justify-between items-center'>
                                   <div className='flex items-center gap-3'>
                        <p 
                        onClick={() => setShowModal(true)} className='bg-green-600 px-5 py-1 text-white rounded font-semibold cursor-pointer '>
                           <span>নতুন বাকি জমা</span>
                        
                          
                           </p>
                               <p className=' border border-green-600 px-5 py-1 text-green-600 rounded
                             font-semibold'>মোট জমা : 0 টাকা</p>
       
                                   </div>
                              <div className='flex gap-3 items-center'>
                             
                               <div>
                                        <input type="date" name="hey"  id="" className='border border-gray-400 rounded px-3 py-1' />
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
                 <th className="py-1 bg-green-600 border border-green-800 w-14 text-white">নং</th>
                 <th className="px-7 bg-green-600 border border-green-800 text-white">নাম</th>
                 <th className="px-4 bg-green-600 border border-green-800 text-white">ঠিকানা</th>
                 <th className="px-6 bg-green-600 border border-green-800 text-white">বাকি ছিল</th>
                 <th className="px-5 bg-green-600 border border-green-800 text-white">জমা</th>
                 <th className="px-5 bg-green-600 border border-green-800 text-white">বাকি রইলো</th>
                 <th className="px-5 bg-green-600 border border-green-800 text-white">নতুন তারিখ</th>
                 <th className="px-5 bg-green-600 border border-green-800 text-white">সিজন</th>
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
             <p><span className="font-semibold">নং:</span> 6948</p>
             <p><span className="font-semibold">নাম:</span> 6485</p>
             <p><span className="font-semibold">ঠিকানা:</span> রাজিব</p>
             <p><span className="font-semibold">বাকি ছিল:</span> বাগদা</p>
             <p><span className="font-semibold">জমা:</span> ৩ নং আদলা</p>
             <p><span className="font-semibold">বাকি রইলো:</span> 300</p>
             <p><span className="font-semibold">নতুন তারিখ:</span> <span className="text-green-600">300</span></p>
             <p><span className="font-semibold">সিজন:</span> 0</p>
             <div className="flex justify-end mt-2 ">
               <CiMenuKebab className="border border-gray-300 py-0.5 text-xl" />
             </div>
           </div>
         </div>
       </div>
       
    
       
       {showModal && (
         <dialog id="my_modal_4" className="modal" open>
         <div className="modal-box w-11/12 max-w-3xl ">
           {/* <form method="dialog" > */}
             {/* if there is a button in form, it will close the modal */}
             {/* <button onClick={() => setShowModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
           </form> */}
       
          <div className='border-b pb-3 border-gray-300 flex justify-between'>
            <h3 className="font-bold text-xl text-black">বাকি জমা</h3>
            <div className='flex gap-3'>
              <p className='text-gray-400 rounded border border-gray-300 px-3 py-0.5'>জমা তারিখ</p>
              <input type="date" className='border border-gray-300 rounded pl-2' />
            </div>
                      <form method="dialog" >
             {/* if there is a button in form, it will close the modal */}
             <button onClick={() => setShowModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
           </form>
          </div>
           
       <div className='mt-5 md:flex  md:space-y-0 space-y-3 gap-3 '>
       
         <div>
           <p className='text-sm mb-2'>কাস্টমার আইডি</p>
           <input type="text" placeholder='কাস্টমার আইডি' className='border border-gray-300 w-full rounded pl-3 placeholder:text-sm' />
         </div>
       
         <div>
           <p className='text-sm mb-2'>কাস্টমারের নাম</p> 
           <input type="text" placeholder='কাস্টমারের নাম' className='border border-gray-300 w-full rounded pl-3 placeholder:text-sm' />
         </div>
       
           <div>
             <p className='text-sm mb-2'>কাস্টমারের ঠিকানা</p>
             <input type="text"  placeholder='কাস্টমারের ঠিকানা' className='border border-gray-300 w-full rounded pl-3 placeholder:text-sm' />
           </div>
           <div>
             <p className='text-sm mb-2'>সিজন</p>
             <input type="text"  placeholder='সিজন' className='border border-gray-300 rounded pl-3 w-full placeholder:text-sm' />
           </div>
       
       </div>
      
 
       
       <div className='md:grid md:grid-cols-3 grid-cols-1 md:space-y-0 
       space-y-3 gap-2 mt-7 bg-gray-100 px-3 py-4 rounded'>
       
         <div className='space-y-3'>
           <p className='text-sm mb-2'>মোট বাকি</p>
           <input type="text" placeholder='শ্রেণী সিলেক্ট করুণ' className='border bg-white border-gray-300
           rounded w-full px-2 py-1.5  placeholder:text-sm' />

   <div>
           <p className='text-sm mb-2 text-red-500'>নতুন তারিখ</p>
           <input type="text" placeholder='ডেলিভারি পাবে' className='border bg-white border-gray-300
           rounded w-full px-2 py-1.5  placeholder:text-sm' />
         </div>


         </div>
        
         <div className='space-y-3'>
           <p className='text-sm mb-2 text-green-600'>জমা</p>
           <input type="text" placeholder='আজকের ডেলিভারি' className='border bg-white border-gray-300
           rounded w-full px-2 py-1.5  placeholder:text-sm' />
              <div>
           <p className='text-sm mb-2 text-red-500'>এসএমএস</p>
           <input type="text" placeholder='ডেলিভারি বাকি' className='border bg-white border-gray-300 
           rounded w-full px-2 py-1.5  placeholder:text-sm' />
         </div>
         </div>
     <div className='grid grid-rows-4'>
      <p className=' text-sm'>নতুন বাকি</p>
      <input type="text" placeholder='নতুন বাকি' className='border md:-mt-2 rounded border-gray-300
       placeholder:text-center text-2xl bg-white row-span-3 w-full' />
     </div>
       
       </div>

       <div className='md:flex  md:space-y-0 space-y-3 gap-3 mt-5'>
        <input type="text" placeholder='ক্লিয়ার' className='border
         placeholder:text-sm border-gray-300 px-2 py-0.5 rounded w-full m text-center' />
        <button className='bg-green-600 text-white w-full py-1 rounded'>সেভ করুণ</button>
       </div>
     
       
       
         </div>
       </dialog>
       )}
       
               </div>

        </div>
    );
};

export default AjkerJoma;