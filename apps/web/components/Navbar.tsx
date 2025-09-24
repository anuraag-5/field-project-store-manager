import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[85px] w-full bg-[linear-gradient(to_right,_#467178_0%25,_#225A63_45%25,_#225A63_100%25)] flex justify-between items-center rounded-3xl pl-7 pr-12'>
        <div className='text-[30px] font-bold'>Shop Manager</div>
        <div className='flex gap-10 justify-evenly'>
            <div className='font-semibold text-white'>Pricing</div>
            <div className='font-semibold text-white'>About us</div>
            <div className='font-semibold text-white'>Contact us</div>
        </div>
    </div>
  )
}

export default Navbar;