import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import ReportData from '../../components/ReportData';
import AlertData from '../../components/AlertData';

function index() {
    const [Reports,setReports] = useState(false);
    const [Alerts,setAlerts] = useState(false);

    return (
  
    <div>
        <Navbar/>
        <div className='container  px-28 py-4 '>
            <div className='flex text-[20px] font-semibold space-x-2 border-b-2 '>
                <p className={`border-2 px-4 py-1 cursor-pointer ${Reports ? "bg-gray-100": ''}`} onClick={()=>{setReports(true);setAlerts(false)}}>Reports</p>
                <p className={`border-2 px-4 py-1  cursor-pointer  ${Alerts ? "bg-gray-100": ''}`} onClick={()=>{setAlerts(true);setReports(false)}}>Alerts</p>
            
            </div>
            {
                (Reports && !Alerts) ? (<ReportData/>) : (<AlertData/>)
            }

        </div>
    </div>
  )
}

export default index