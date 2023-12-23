"use client"
import Image from 'next/image'
import React from 'react'
import {MagnifyingGlassIcon, UserCircleIcon} from "@heroicons/react/24/solid"
import Avatar from "react-avatar"

function Header() {
  return (
    <div>
      <header>
        <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2x1'>

          <div
          className='absolute
          top-0
          w-full
          left-0
          h-96
          bg-gradient-to-br
          from-pink-400
          to-[#0051D1]
          rounded-md
          filter
          blur-3xl
          opacity-50
          -z-50
          '
          >

          </div>
                <Image 
                src="/logo.png"
                alt='Logo'
                width={300}
                height={100}
                className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
                /> 
                  <div className='flex items-center space-x-5 justify-end w-full'>
                      {/* Search */}
                      <form action=""
                      className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'
                      >
                        <MagnifyingGlassIcon 
                        className="h-6 w-6 text-gray-400"
                        />
                        <input type="text" placeholder='Search' className='flex-1 outline-none p-2'/>
                        <button hidden type='submit' >Search</button>
                      </form>
                      {/* Avatar */}
                      <Avatar name="Ajayi Raphael" round color="blue" size="50" />
                      </div>
          </div>

          <div className='flex items-center justify-center px-5 py-2 md:py-5'>
          <p className="flex items-center pr-5 text-sm font-light p-3 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1]">
          <UserCircleIcon
          className="inline-block h-10 w-10 text-[#0055D1] mr-1"
          />   
          Summarizing tasks, please chill ...
          </p>
          
          </div>
      </header>
    </div>
  )
}

export default Header
