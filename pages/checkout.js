import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import Image from 'next/image'
import { useSession } from 'next-auth/client'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'
import { useRouter } from 'next/router'
import Currency from 'react-currency-formatter'

const checkout = () => {
    const items = useSelector(selectItems)
    const [session] = useSession()
    const total = useSelector(selectItems).reduce((total, item) => total + item.price, 0)
    const router = useRouter()
    const stripe = useStripe()
    const elements = useElements()
    
  return (
    <div className='lg:flex max-w-screen-2xl mx-auto'>
        <main className='flex-grow m-5 shadow-sm'>
            <h1 className='text-3xl border-b pb-4'>Shopping Basket</h1>

            <div className='flex items-center space-x-5 p-5 bg-white'>
                <img className='w-20 h-20 object-contain' src='https://links.papareact.com/ikj' alt='' width={1020} height={250}></img>
                <div className='flex-grow'>
                    <h2>Product Name</h2>
                    <div className='flex'>
                        <p>Rating</p>
                        <p>Prime</p>
                    </div>
                    
                    <div className='flex flex-col p-5 space-y-2 bg-gray-100'>
                    <h1 className='text-3xl border-b pb-4'>{items.length === 0
                    ? "Your Hala Basket is empty"
                    : "Shopping Basket"}
                    </h1>
                    {items.map((item, i) => (
                        <CheckoutProduct
                        key={i}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                        hasPrime={item.hasPrime}
                        />
                    ))}

            </div>
                </div>


            </div>
            {items.length > 0 && (
                <div className='flex flex-col bg-white p-10 shadow-md'>
                    <h2 className='whitespace-nowrap'>Subtotal ({items.length} items): <span className='font-bold'>
                        <Currency quantity={total} currency='GBP' />
                    </span></h2>
                    <button
                    disabled={!session}
                    className={`button mt-2 ${
                        !session &&
                        "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed" }` 
                    }>
                        {!session ? "Sign in to checkout" :
                    "Proceed to checkout"}</button>
                </div>
            )}


            
        </main>
        
    </div>
  )
}

export default checkout