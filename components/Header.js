import React from 'react'
import Image from 'next/dist/client/image'
import { MenuIcon, SearchIcon, ShoppingIcon } from '@heroicons/react/outline' 

const style = {
    header: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px'
    },
    h1: {
        fontSize: '24px'
    }
}

export default function Header() {
  return (
    <header style={style.header}>
        <h1 style={style.h1}>Hala Market</h1>
        <div className='flex items-center bg-hala_blue p-1 flex-grow py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
            <Image 
            src="/logo.png"
            alt="Hala Market Logo" 
            width={128} 
            height={77}
            objectFit="contain" 
            className="cursor-pointer  "
            />
            </div>

            <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
                <input className='p-2 h-full w-6 flex-grow rounded-grow flex-shrink rounded-l-md focus:outline-none px-4 ' type='text'></input>
                <SearchIcon className='h-12 p-4'></SearchIcon>
            </div>

            <div className='text-white flex items-center text-xs space-x-6  mx-6 whitespace-nowrap'>
                <div className=' link'>
                    <p>Hello Junaid</p>
                    <p className='font-extrabold'>Account & Lists</p>

                </div>
                <div className=' link'>
                <p>Returns</p>
                <p className='font-extrabold'>Orders</p>
                </div>
                <div className=' link'>
                <ShoppingIcon className='h-10'></ShoppingIcon>
                <p className='font-extrabold'>Basket</p>
                </div>
            </div>
        </div>
    </header>
    
  )
}
