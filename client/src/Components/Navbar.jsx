import React from 'react'

import { Toggler } from "../Theme/Index"
import Logo from "/logo.png"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <>
        <img src={Logo} alt='Logo' className='w-14 h-auto object-contain' />
      </>
      <div className=' flex gap-4'>
        <Toggler />
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/AbdulQuayyum/soft-cat-quiz.git", "_blank")
          }
          className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'
        >
          Source Code
        </button>
      </div>
    </nav>
  )
}

export default Navbar