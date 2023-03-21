import Image from 'next/image'
import React from 'react'
import {AiOutlineBell} from "react-icons/ai";
import {FaUserCircle} from "react-icons/fa";
import {TbMathGreater} from "react-icons/tb";
import { useRouter } from 'next/router';

function Navbar() {
    const router = useRouter();
  return (
    <div className='container border px-8 bg-gray-100'>
        <div className='flex items-center'>
           <p className='text-blue-600 text-[40px] font-bold select-none flex-1' onClick={()=>{router.push('/home')}}>RRSP</p>
        <div className='gap-4 flex'>
        <div><AiOutlineBell className='w-6 h-6'/></div>  
        <div className='flex items-center  hover:cursor-pointer'><FaUserCircle className="w-6 h-6"/> <span className='ml-2'></span> Mohit   <TbMathGreater className='w-2 h-2 mt-1 ml-1 rotate-90'/> </div>  
        </div>
        </div>
    </div>
  )
}

export default Navbar