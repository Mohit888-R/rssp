import React, { useState } from 'react';
import {TbExternalLink} from "react-icons/tb";
import Input from './forms/Input';
import Select from './forms/Select';

function AlertData() {
    const [hospital, setHospital] = useState(true);
  return (
    <div>
        <table className='w-full'>
            <tbody>
            <tr className='border border-black mt-2 '>
            <th className='border border-black px-4'>S.No </th>
                <th className='border border-black px-4'>Reason</th>
                <th className='border border-black px-4'>Location</th>
                <th className='border border-black px-4'>IsHospital</th>
                <th className='border border-black px-4'>Image</th>
                <th className='border border-black px-4'>Name</th>
                <th className='border border-black px-4'>Address</th>
                <th className='border border-black px-4'>Mobile Number</th>
                <th className='border border-black px-4'>Zip Code</th>
                <th className='border border-black px-4'>Status</th>
                <th className='border border-black px-4'>Expected Time <span className='text-[12px] font-normal'><br></br>  (In minutes) </span> </th>
            </tr>
            <tr className='border border-black mt-2 '>
                <th className='border border-gray-400 font-normal px-4'>1</th>
                <th className='border border-gray-400 font-normal px-4'>Violation </th>
                <th className='border border-gray-400 font-normal px-4  items-center '> <a href='' className='flex items-center gap-2'> Map <TbExternalLink className="w-4 h-4"/> </a> </th>
                <th className='border border-gray-400 font-normal px-4'><input type="checkbox" name='ishospital'/></th>
                <th className='border border-gray-400 font-normal px-4 cursor-pointer'>Image </th>
                <th className='border border-gray-400 font-normal px-4'>Mohit</th>
                <th className='border border-gray-400 font-normal px-4'>A-66, Jain Mandir, Scheme-10, Alwar </th>
                <th className='border border-gray-400 font-normal px-4'>8058297839</th>
                <th className='border border-gray-400 font-normal px-4'>301001</th>
                <th className='border border-gray-400 font-normal px-4'><Select placeholder="Select" options={[{ value:'Under Process',label:'Under Process' }, {value:'Resolved', label:'Resolved'} ]}>Status</Select></th>
                {hospital ? ( <th className='border border-gray-400 font-normal px-4'> <Input type="number"  placeholder="Please enter expected time in minutes"></Input> </th>) : "" }
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default AlertData