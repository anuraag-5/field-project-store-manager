import React from 'react'

const AuthLayout = ( { children }: { children: React.ReactNode }) => {
  return (
    <section className='bg-[#212627]'>
        { children }
    </section>
  )
}

export default AuthLayout;