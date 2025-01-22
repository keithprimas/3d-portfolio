import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex items-center justify-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <div className='flex gap-3'>
                <div className='social-icon'>
                    <a href="https://github.com/keithprimas" target='_blank'><img src='/assets/github.svg' alt='github' className='w-[35px] h-[50px]'/></a>  
                </div>
                <div className='social-icon'>
                    <a href="https://www.linkedin.com/in/keith-primas-217766141/" target='_blank'><img src='/assets/linked-in.svg' alt='linkedin' className='w-[30px] h-[50px]'/></a>  
                </div>
            </div>
        </div>
        <p className='text-white-500'>&copy; 2025 Keith Primas. All rights reserved.</p>
    </section>
  )
}

export default Footer