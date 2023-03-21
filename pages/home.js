import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import {ImQuotesLeft,ImQuotesRight} from "react-icons/im";
import {BsPencilFill} from "react-icons/bs";
import {MdAddAlert} from 'react-icons/md';
import DropDowns from '../assets/dropdown.svg';
import Image from 'next/image';
import List from '../components/Lists';
import Link from 'next/link';


function home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar/>
      <p className='text-center text-blue-500 text-[60px] font-semibold mt-12 flex m-auto justify-center'><ImQuotesLeft className="w-8 h-8 text-black"/> Get alert before it hurt!! <ImQuotesRight className="w-8 h-8 text-black"/></p>
      <p className='text-center text-[18px] font-normal  opacity-80 flex justify-center m-auto w-7/12'>Register any road safety problem, report any violation here. Send Alert to near Police Station and Hospitals for emergency help or Issues.</p>
      <div className='flex justify-center  mt-12 gap-4 text-[24px] '>
        <Link href='/raiseissue' className='border-2 border-black hover:bg-black hover:text-white hover:bg-opacity-80 rounded-full px-4 py-2 flex items-center'>Raise a Issue <BsPencilFill className="w-5 h-5 ml-2"/></Link>
        <Link  href='/alert' className='border-2 border-black hover:bg-black hover:text-white hover:bg-opacity-80 rounded-full px-4 py-2 flex items-center'>Send Alert <MdAddAlert className="w-6 h-6   ml-2"/></Link>
      </div>
      <div className='mt-20 px-8'>
        <p className='flex  text-[24px] items-center border-b hover:cursor-pointer border-black px-2' onClick={()=>{setOpen(!open)}}> <span className="flex">  See Your Previous Concerns (Reports & Alerts) </span> <Image src={DropDowns} width={40} height={40}  className={`${open ? "" : "-rotate-90 mt-2"}`}/></p>
        {open? <List/> : ""}
      </div>  
    </div>
  )
}

export default home;