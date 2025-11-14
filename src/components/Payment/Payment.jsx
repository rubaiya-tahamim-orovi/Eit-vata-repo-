import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { LuNotebookPen } from "react-icons/lu";

const Payment = () => { 

    const [showPayment , setShowPayment] = useState(false);
    const [showModal, setShowModal] = useState(false);
  

    return (
        <div className='px-5 py-5'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
     <p onClick={() => setShowPayment(!showPayment)}
      className='bg-green-600 px-5 py-1 text-white rounded font-semibold cursor-pointer flex gap-1 items-center'>
        <span>নতুন পেমেন্ট</span>
        {showPayment ? (<IoIosArrowUp className='transition-transform duration-300 ' /> ) : 
         (<IoIosArrowDown className='transition-transform duration-300' />)}
        </p>

 <p className=' border border-green-600 px-5 py-1 text-green-600 rounded font-semibold'>মোট পেমেন্ট : 0 টাকা</p>
                </div>
           <div className='flex gap-3 items-center'>
            <div className='flex items-center border border-gray-300 rounded '>
                <input type="search" placeholder='সার্চ করুণ' className='px-3 outline-none py-1 ' />
                <p className='bg-gray-300 border-l border-gray-400 px-2 py-2 h-full flex flex-col justify-center'><IoSearchSharp className=' ' /></p>
            </div>
            <div>
                     <input type="date" name="hey"  id="" className='border border-gray-400 rounded px-3 py-1' />
            </div>
            <div>
             <p  className='flex items-center gap-2 border border-green-600
             font-semibold px-5 py-1 text-green-600 rounded'> <FaFileInvoice />  রিপোর্ট</p>
            </div>
           </div>
            </div>

{/* expandable section here --> when clicked on নতুন পেমেন্ট it will pop down */}

<div className= {`overflow-hidden transition-all duration-300
    ease-out ${showPayment ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opcacity-0'}`}>
<div  className='flex gap-3 items-end mt-5'>

    
   <div>
     <p className='text-gray-600 text-sm'>খতিয়ান</p>
    <input   type="text" className='border w-32 border-gray-300 rounded mt-1 outline-gray-400'
     onClick={() => setShowModal(true)} />
   </div>

   <div className=''>
     <p className='text-gray-600 text-sm'>পেমেন্টের বিবরন</p>
    <input   type="text" className='border w-xs border-gray-300
     rounded mt-1 outline-gray-400'  />
    
   </div>

   
   <div>
     <p className='text-gray-600 text-sm'>পেমেন্টের ধরণ</p>
     <input type="text" className='border w-32 border-gray-300 rounded mt-1 outline-gray-400' />
   

   </div>
   
   <div>
     <p className='text-gray-600 text-sm'>পরিমান</p>
    <input type="text" className='border w-30 border-gray-300 rounded mt-1 outline-gray-400' />
   </div>
   <div>
     <p className='text-gray-600 text-sm'>মোট বিল</p>
    <input type="text" className='border w-30 border-gray-300 rounded mt-1 outline-gray-400' />
   </div>
   <div>
     <p className='text-gray-600 text-sm'>কর্তন</p>
    <input type="text" className='border w-30 border-gray-300 rounded mt-1 outline-gray-400' />
   </div>
   <div>
     <p className='text-gray-600 text-sm'>পেমেন্ট</p>
    <input type="text" className='border w-30 border-gray-300 rounded mt-1 outline-gray-400' />
   </div>


<button className='bg-green-600 px-5 py-1 text-white rounded font-semibold text-sm'>সেভ করুণ</button>

</div>
</div>
{/* table section here */}
<div>

<table className='mt-10'>
  <thead className=''>
    <tr className='space-x-3.5 '>
        <th className='py-1 bg-green-600 border border-green-800'><input type="text" name="hash" placeholder='#' className='
        w-20 placeholder:text-white pl-3 outline-none'  id="" /></th>
        <th className='w-10 px-10  text-white bg-green-600 border border-green-800'><p className=' '>খতিয়ান</p></th>
        <th className='px-10 bg-green-600 text-white border border-green-800'>পেমেন্টের বিবরন</th>
        <th className='px-7 bg-green-600 border border-green-800'><input type="text" name="hash" placeholder='পরিমান' className='
        w-20 placeholder:text-white pl-3 outline-none'  id="" /></th>
        <th  className='px-7 bg-green-600 text-white border border-green-800'>
            <input type="text" name="hash" placeholder='মোট বিল ' className='
        w-20 placeholder:text-white pl-3 outline-none'  id="" /></th>
        <th  className='px-5 bg-green-600 text-white border border-green-800'>
            <input type="text" name="hash" placeholder='অগ্রিম' className='
        w-20 placeholder:text-white pl-3 outline-none'  id="" />
        </th>
        <th  className='px-5 bg-green-600 text-white border border-green-800'>
            <input type="text" name="hash" placeholder='কর্তন' className='
        w-20 placeholder:text-white pl-3 outline-none'  id="" />
        </th>
        <th  className='px-5 bg-green-600 text-white border border-green-800'>
            <input type="text" name="hash" placeholder='পেমেন্ট' className='
        w-20 placeholder:text-white pl-3 outline-none'  id="" />
        </th>

        <th  className='px-5 bg-green-600 text-white border border-green-800'>কম/বেশি</th>
        <th  className='px-5 bg-green-600 text-white border border-green-800'>বাটন</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <th>hello</th>
        <th>hello</th>
    </tr>
   
  </tbody>
</table>

 </div>

 {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
{showModal && (
  <dialog id="my_modal_4" className="modal" open>
  <div className="modal-box w-11/12 max-w-2xl">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button onClick={() => setShowModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>

    <h3 className="font-bold text-xl text-green-600">খতিয়ান নির্বাচন করুণ!</h3>
     {/* <div className='flex items-center border border-gray-300 rounded w-full'>
                <input type="search" placeholder='সার্চ করুণ' className='px-3 outline-none py-1 ' />
                <p className='bg-gray-300 border-l border-gray-400 px-2 py-2 h-full flex flex-col justify-center'><IoSearchSharp className=' ' /></p>
            </div> */}

            <div className='flex items-center border border-gray-300 rounded my-2'>
              <input type="text" placeholder='গ্রুপ বা খতিয়ান নাম দিয়ে সার্চ করুণ' className=' w-full py-1 outline-gray-300
              px-3 placeholder:text-sm' />
              <p className='bg-gray-300 py-2.5 px-2'><IoSearchSharp/></p>
            </div>
<div className='grid grid-cols-4 gap-4'>


  <details className="dropdown w-full dropdown-center">
  <summary className="btn m-1 w-full"><p><LuNotebookPen /></p>মেল</summary>
  <ul className="menu dropdown-content bg-base-100  rounded-box z-1 w-52 p-2 shadow-sm">
    <li className='hover:text-green-600'><a><LuNotebookPen /> ১ নং মেল</a></li>
    <li className='hover:text-green-600'><a><LuNotebookPen />২ নং মেল</a></li>
    <li className='hover:text-green-600'><a><LuNotebookPen />৩ নং মেল</a></li>
  </ul>
</details>

<details className="dropdown w-full dropdown-center">
  <summary className="btn m-1 w-full"><p><LuNotebookPen/></p>অন্যান্য</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li className='hover:text-green-600'><a><LuNotebookPen /> অন্যান্য</a></li>
  <li className='hover:text-green-600'><a><LuNotebookPen /> লেবার খাওয়া</a></li>
  </ul>
</details>

<details className="dropdown w-full dropdown-center">
  <summary className="btn m-1 w-full"><LuNotebookPen />লোড মিস্ত্রি</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<details className="dropdown w-full dropdown-center">
  <summary className="btn m-1 w-full"><LuNotebookPen />রেজা লোড</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<details className="dropdown w-full dropdown-center">
  <summary className="btn m-1 w-full"><LuNotebookPen />আনলোড</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<details className="dropdown w-full dropdown-center">
  <summary className="btn m-1 w-full"><LuNotebookPen />পোড়াই</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<details className="dropdown w-full dropdown-center">
  <summary className="btn m-1 w-full"><LuNotebookPen />ডেইলি লেবার</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<details className="dropdown w-full dropdown-center">
  <summary className="btn m-1 w-full"><LuNotebookPen />রাবিশ ম্যান</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<details className="dropdown w-full dropdown-center">
  <summary className="btn m-1 w-full"><LuNotebookPen />কয়লা ভাঙা</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<details className="dropdown w-full dropdown-center">
  <summary className="btn m-1 w-full"><LuNotebookPen />পরিষষ্কার</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<details className="dropdown w-full dropdown-center">
  <summary className="btn m-1 w-full"><LuNotebookPen />সাদা মাটি</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<details className="dropdown w-full dropdown-center">
  <summary className="btn m-1 w-full"><LuNotebookPen />লাল মাটি</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<details className="dropdown w-full dropdown-center">
  <summary className="btn m-1 w-full"><LuNotebookPen />কুয়লা</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<details className="dropdown w-full dropdown-center">
  <summary className="btn m-1 w-full"><LuNotebookPen />কালি</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<details className="dropdown w-full dropdown-center">
  <summary className="btn m-1 w-full"><LuNotebookPen />অফিস খরচ</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<details className="dropdown dropdown-center w-full">
  <summary className="btn m-1 w-full "><LuNotebookPen />ম্যানেজার</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm ">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

</div>

<button className='px-3 py-1 text-sm rounded border border-gray-300 mt-7'> + নতুন খতিয়ান অ্যাড</button>

  </div>
</dialog>
)}


        </div>
    );
};

export default Payment;