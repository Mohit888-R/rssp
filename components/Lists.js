import React from 'react'

function Lists() {
    return (
        <div>
            <div className=''>
                <h1 className='text-[28px] font-semibold'>Reports</h1>
                <table className='w-full border'>
                    <tr className=''>
                        <th className='border-2 border-black px-4'>S.No.</th>
                        <th className='border-2 border-black px-4'>Date</th>
                        <th className='border-2 border-black px-4'>Time</th>
                        <th className='border-2 border-black px-4 w-6/12'>Report Description</th>
                        <th className='border-2 border-black px-4'>Status</th>
                    </tr>
                    <tr className=''>
                        <th className='font-normal border border-black px-4'>1</th>
                        <th className='font-normal border border-black px-4'>20/3/2023</th>
                        <th className='font-normal border border-black px-4'>14:09</th>
                        <th className='font-normal border border-black px-4 w-6/12 word-wrap '> truncat eclip clipclip md:text-clip clip clipclip md:text-clip clip clipclip md:text-clip clipclipclipclipclip  </th>
                        <th className='font-normal border border-black px-4 text-green-600'>Under Process</th>
                    </tr>
                </table>
            </div>

            <div className='mt-8'>
                <h1 className='text-[28px] font-semibold'>Alerts</h1>
                <table className='w-full border'>
                    <tr className=''>
                        <th className='border-2 border-black  px-4'>S.No.</th>
                        <th className='border-2 border-black px-4'>Date</th>
                        <th className='border-2 border-black px-4'>Time</th>
                        <th className='border-2 border-black px-4'>Reason</th>
                        <th className='border-2 border-black px-4'>Status</th>
                    </tr>
                    <tr className=''>
                        <th className='font-normal border border-black px-4'>1</th>
                        <th className='font-normal border border-black px-4'>20/3/2023</th>
                        <th className='font-normal border border-black px-4'>14:09</th>
                        <th className='font-normal border border-black px-4 '> Accident </th>
                        <th className='font-normal border border-black px-4 text-red-600'>No Response</th>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Lists