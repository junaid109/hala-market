import { StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter'

const  Product = ({key, id, title, price, description, category, image}) => {
    const [rating] = React.useState(
        Math.floor(Math.random() * (5 - 1 + 1)) + 1
    )

    const [hasPrime] = React.useState(Math.random() < 0.5)


  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'> 
    <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
        
        <Image alt="product" src={image} width={200} height={200} objectFit='contain' />
        <h4 className='h-5 text-yellow-400'>{title}</h4>
        <StarIcon>
            {Array(rating)
            .fill()
            .map((_, i) => (
                <StarIcon key={i} />
            ))}  
        </StarIcon>
        <p className='text-xs mt-2 my-2 line-clamp-2'>{description}</p>
        <div className='mb-5 '>
            <Currency quantity={price} currency='GBP' />
        </div>
        <div className='flex'>
            <p className='line-through text-xs'>${price}</p>
            <p className='text-xs font-bold'>${price}</p>
    
    </div>
    {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
            <Image className='w-12' src='https://links.papareact.com/fdw' alt='' />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
            </div>

    )}
    <button>
        Add to Basket
    </button>

    </div>
  )
}

export default Product