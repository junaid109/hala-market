import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

const CheckoutProduct = ({id, title, price, rating, description,
category, image, hasPrime}) => {

    const dispatch = useDispatch()

    const addItemToBasket = () => {
        const basketItem = {
            id, title, price, rating, description,
            category, image, hasPrime
        }

        dispatch(addToBasket(basketItem))
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    }

  return (
    <div className='grid grid-cols-3'>
    <Image src={image} height={200} width={200} objectFit='contain' />
    <div className='col-span-2 mx-5'>
    <p>{title}</p>
    <div className='flex'>
    {Array(rating)
    .fill()
    .map((_, i) => (
        <StarIcon key={i} />
    ))}
    </div>
    <p className='text-xs my-2 line-clamp-3'>{description}</p>
    <Currency quantity={price} currency='GBP' />
    {hasPrime && (
        <div className='flex items-center space-x-2'>
            <img className='w-12' src='https://links.papareact.com/fdw' alt='' />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
            </div>
    )}
    <div className='flex flex-col space-y-2 my-auto justify-self-start'>
        <button className='button mt-2'>Remove from Basket</button>
        <button className='button mt-2' onClick={addItemToBasket}>Add to Basket</button>
    </div>
    </div>
    </div>
  )
}

export default CheckoutProduct