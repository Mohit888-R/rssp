import React from 'react';
import Select from "../components/forms/Select";

function ReportData() {
  return (
    <div className='w-full'>
        <table className='w-full'>
            <tbody>
            <tr className='border border-black mt-2 '>
            <th className='border border-black px-4'>S.No </th>
                <th className='border border-black px-4'>Name</th>
                <th className='border border-black px-4'>Mobile Number</th>
                <th className='border border-black px-4'>Address</th>
                <th className='border border-black px-4'>Zip Code</th>
                <th className='border border-black px-4'>Report</th>
                <th className='border border-black px-4'>Report Address</th>
                <th className='border border-black px-4'>Status</th>
            </tr>
            <tr className='border border-black mt-2 '>
                <th className='border border-gray-400 font-normal px-4'>1</th>
                <th className='border border-gray-400 font-normal px-4'>Mohit </th>
                <th className='border border-gray-400 font-normal px-4'>8058297839</th>
                <th className='border border-gray-400 font-normal px-4'>A-66, Jain Mandir, Scheme-10, Alwar</th>
                <th className='border border-gray-400 font-normal px-4'>301001</th>
                <th className='border border-gray-400 font-normal px-4 flex-wrap'>this is report Desription</th>
                <th className='border border-gray-400 font-normal px-4'>Bhagat Singh Circle, Alwar</th>
                <th className='border border-gray-400 font-normal px-4'><Select placeholder="Select" options={[{ value:'Under Process',label:'Under Process' }, {value:'Resolved', label:'Resolved'} ]}>Country</Select></th>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ReportData