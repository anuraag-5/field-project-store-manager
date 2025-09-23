"use client";

import { useEmployeeStore } from 'lib/employeeStore';
import { getTodaysSales, getTotalCustomers } from 'lib/store';
import Image from 'next/image';
import { useEffect, useState } from 'react'

const QuickOverview = () => {
  const { store } = useEmployeeStore();
  const [ totalCustomers, setTotalCustomers ] = useState(0);
  const [ totalSales, setTotalSales ] = useState(0);
  useEffect(() => {
    const totalCustomers = async  () => (await (getTotalCustomers(store?.id!))).count;
    totalCustomers().then((totalCustomers) => setTotalCustomers(totalCustomers));

    const todaysSales = async () => (await getTodaysSales(store?.id!)).count;
    todaysSales().then((todaysSales) => setTotalSales(todaysSales));
  });
  return (
    <div className='rounded-2xl pl-10'>
        <div className='text-[26px] pt-6 pb-4'>Quick Overview</div>
        <div className='flex gap-5'>
          <div className='bg-[#3D4445] w-fit py-5 px-20 rounded-3xl flex flex-col items-center justify-center font-semibold gap-2'>
            <Image 
            src="/images/customers.svg"
            alt=''
            width={50}
            height={50}
            />
            <div>Total Customers</div>
            <div className='text-[#00D4FF] text-3xl'>{ totalCustomers }</div>
          </div>
          <div className='bg-[#3D4445] w-fit py-5 px-23 rounded-3xl flex flex-col items-center justify-center font-semibold gap-2'>
            <Image 
            src="/images/rupee.png"
            alt=''
            width={50}
            height={50}
            />
            <div>Todays Sales</div>
            <div className='text-[#00D4FF] text-3xl'>{ totalSales }</div>
          </div>
        </div>
    </div>
  )
}

export default QuickOverview;