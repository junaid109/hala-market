import React from 'react'
import Image from 'next/Image'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline' 
import { signIn, signOut, useSession } from 'next-auth/react'

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
            src="/logo."
            alt="Hala Market Logo" 
            width={128} 
            height={77}
            objectFit="contain" 
            className="cursor-pointer"
            />
            </div>

            <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
                <input className='p-2 h-full w-6 flex-grow rounded-grow flex-shrink rounded-l-md focus:outline-none px-4 ' type='text'></input>
                <SearchIcon className='h-12 p-4'></SearchIcon>
            </div>

            <div className='text-white flex items-center text-xs space-x-6  mx-6 whitespace-nowrap'>
                <div onClick={signIn} className='cursor-pointer link'>
                <p>Hello Junaid</p>
                <p className='font-extrabold md:text-sm'>Account & Lists</p>

                </div>
                <div className='link'>
                <p>Returns</p>
                <p className='font-extrabold md:text-sm'>Orders</p>
                </div>
                <div className='relative link flex items-center '>
                <span className='absolute top-0 right -0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>0</span>
                <ShoppingCartIcon className='h-10'></ShoppingCartIcon>
                <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
                </div>
            </div>
        </div>

        <div className='flex items-center space-x-3 p-2 pl-6 bg-hala_blue-light text-white text-sm'>
            <p className='link flex items-center'>
                <MenuIcon className='h-6 mr-2'></MenuIcon>
                All
            </p>
            <p className='link'>
                Hala Video
            </p>
            <p className='link'>
                Hala Business
            </p>

            <p className='link'>
                Todays Deals
            </p>

            <p className='link hidden lg:inline-flex'>
                Food & Grocery
            </p>

            <p className='link hidden lg:inline-flex'>
                Hala Prime
            </p>

            <p className='link hidden lg:inline-flex'>
                Buy Again
            </p>

            <p className='link hidden lg:inline-flex'>
                Shopper Toolkit
            </p>

            <p className='link hidden lg:inline-flex'>
                Health & Personal Care 
            </p>
        </div>
        
    </header>
    )
}

