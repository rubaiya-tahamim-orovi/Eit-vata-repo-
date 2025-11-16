import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { LuNotebookPen } from "react-icons/lu";
import { IoPrint } from "react-icons/io5";
import { TbCurrencyTaka } from 'react-icons/tb';
import { FiEdit } from "react-icons/fi";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { RiProfileFill } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const SobBakiList = () => {
    return (
        <div>
                  <div className='px-5 py-5'>
                                    <div className='md:flex md:space-y-0 space-y-3 justify-between items-center'>
                                        <div className='flex items-center gap-3'>
                             <p 
                              className='bg-green-600 px-5 py-1 text-white rounded font-semibold cursor-pointer flex gap-1 items-center'>
                                <span>সব সিজন</span>
                               
                                </p>
                        
                         <p className=' border border-green-600 px-5 py-1
                          text-green-600 rounded font-semibold'>মোট বাকি : 10,000 </p>
                                        </div>
                                   <div className='md:flex md:space-y-0 space-y-3  md:gap-3 items-center'>
                                    <div className='flex items-center border border-gray-300 rounded '>
                                        <input type="search" placeholder='সার্চ করুণ' className='px-3 outline-none py-1 md:w-auto w-full' />
                                        <p className='bg-gray-300 border-l border-gray-400 px-2 py-2 h-full flex flex-col justify-center'><IoSearchSharp className=' ' /></p>
                                    </div>
                                    <div className='md:flex-none flex md:justify-normal justify-end'>
                                             <input type="date" name="hey"  id="" className='border border-gray-400 rounded px-3 py-1 ' />
                                    </div>
                                    <div className='md:flex-none flex md:justify-normal justify-end'>
                                     <p  className='flex items-center gap-2 border border-green-600
                                     font-semibold px-5 py-1 text-green-600 rounded '> <IoPrint />প্রিন্ট করুন </p>
                                    </div>
                                   </div>
                                    </div>
                        

                        {/* table section here */}
                        <div className="mt-10 overflow-x-auto">
                          <table className="hidden md:table w-full border-collapse">
                            <thead>
                              <tr>
                                <th className="py-1 bg-green-600 border border-green-800">
                                  
                                  <p className="text-center text-white  outline-none">কা.আইডি</p>
                                </th>
                                <th className="text-center px-10 text-white bg-green-600 border border-green-800">নাম</th>
                                <th className="text-center px-10 bg-green-600 text-white border border-green-800">ঠিকানা</th>
                                <th className="text-center text-white px-7 bg-green-600 border border-green-800">
                                ডেলিভারি বাকি
                                </th>
                                <th className="text-center px-7 bg-green-600 text-white border border-green-800">
                                    টাকা বাকি 
                                 
                                </th>
                                <th className="text-center px-7 bg-green-600 text-white border border-green-800">
                                   পরিশোধের তারিখ
                                 
                                </th>
                                <th className="px-5 w-50 bg-green-600 text-center text-white border border-green-800">
                                 নোট
                                 
                                </th>
                                <th className="px-5  bg-green-600 text-center text-white border border-green-800">
                                   ফোন নম্বর
                                
                                </th>
                             
                                <th className="px-5 bg-green-600 text-center text-white border border-green-800">সিজন</th>
                                <th className="px-5 bg-green-600 text-white text-center border border-green-800">বাটন</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border p-2">1200</td>
                                <td className="border p-2">আজিজ ম্যানেজার</td>
                                <td className="border p-2">লিলির মোড় </td>
                                <td className="border  text-center text-red-500 border-black"> 0 </td>
                                <td className="border-r border-b p-2 flex items-center justify-center text-red-500 border-black"> <TbCurrencyTaka/> 200 </td>
                                  <td className="border-b border-r  text-center"> 12/09/25 </td>
                                  <td className="border-b border-r  text-center"> ম্যানেজার </td>
                                  <td className="border-b border-r  text-center"> 01788641043 </td>
                                  <td className="border-b border-r  text-center"> 2300 </td>
                                  <td className="border-b border-r
                                text-center"> <p className=' flex items-center  gap-2 text-green-600 text-base'><FiEdit/> <FaMoneyBillWaveAlt/>
                                 <GoCommentDiscussion/> <RiProfileFill className='text-red-500' /></p> </td>
                              </tr>
                            </tbody>
                          </table>
                        
                          {/* Mobile Card Layout */}
                          <div className="md:hidden space-y-4">
                            <div className="border border-green-400 rounded-lg p-4  shadow">
                              <p><span className="font-bold">#: </span>hello</p>
                              <p><span className="font-bold">খতিয়ান: </span>hello</p>
                              <p><span className="font-bold">পেমেন্টের বিবরন: </span>---</p>
                              <p><span className="font-bold">পরিমান: </span>---</p>
                              <p><span className="font-bold">মোট বিল: </span>---</p>
                              <p><span className="font-bold">অগ্রিম: </span>---</p>
                              <p><span className="font-bold">কর্তন: </span>---</p>
                         
                              <p><span className="font-bold">কম/বেশি: </span>---</p>
                              <button className="mt-2 px-3 py-1 bg-green-600 text-white rounded">বাটন</button>
                            </div>
                          </div>
                        </div>
                        
                        
                         {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
                   
                        
                                            <div className='flex items-center justify-end gap-3 mt-5'>
                                              <p className='text-sm'>মোট বাকি ২ টি </p>
                                            <div className='flex items-center gap-1 text-sm'>
                                                <p><IoIosArrowBack className='cursor-pointer' /></p>
                                              <p className='border px-2 rounded border-green-600 text-green-600'>1</p>
                                              <p><IoIosArrowForward className='cursor-pointer' /></p>
                                            </div>
                                              <button className='cursor-pointer'><p className='border border-gray-400 px-3 text-sm py-1 rounded'>20 ডেলিভারি / পেজ</p></button>
                                            
                                            </div>
                        
                                </div>
        </div>
    );
};

export default SobBakiList;