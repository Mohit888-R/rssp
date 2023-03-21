import React from 'react'
import Input from '../components/forms/Input'
import Select from '../components/forms/Select'
import Navbar from '../components/Navbar';
import {MdOutlineNotificationsActive} from "react-icons/md";

function alert() {
  return (
    <div>
        <Navbar/>
        <p className=' text-[36px] font-bold mt-10 text-center flex justify-center items-center  '><MdOutlineNotificationsActive className="w-10 h-10 mr-1 mt-1"/> Notify Us</p>
        <form className='flex justify-center mt-12'>
            <div className='container px-28 pt-10 w-5/12 space-y-4'>
                    <Select placeholder="Select Country">Country</Select>
                    <Select placeholder="Select State">State</Select>
                    <Select placeholder="Select District">District</Select>
                    <p className='items-center'> <span className='text-[16px] font-bold'> Reason : </span> 
                        <label className='mx-2'>  <input type="radio"/> Violation</label>
                        <label className='mx-2'> <input type="radio"/> Accident</label>
                        <label className='mx-2'> <input type="radio"/> Other</label>
                    </p>
                    <Select placeholder="Select Police Station" required>Police Station</Select>
                    <Select placeholder="Select Hospital" required>Hospital</Select>
                    <button className='border px-2 py-1 bg-gray-50'>Click to capture picture + </button>
                    <br></br>
                    <button className='w-4/12 bg-blue-400 text-white px-2 py-1  rounded-full mt-6' >Send</button>
            </div>

        </form>
    </div>
  )
}

export default alert