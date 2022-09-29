import { StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

const Product = ({id, title, price, description, category, image}) => {
    const [rating] = React.useState(
        Math.floor(Math.random() * (5 - 1 + 1)) + 1
    )

    const [hasPrime] = React.useState(Math.random() < 0.5)


  return (
    <div >
    <p>{Category}</p>
        
        <Image src={image} width={200} height={200} objectFit='contain' />
        <h4>{title}</h4>
        <StarIcon>
            {Array(rating).fill().map((_, i) => (
                <StarIcon key={i} />
            ))}  
        </StarIcon>
        <div className='flex'>
            <p className='line-through text-xs'>${price}</p>
            <p className='text-xs font-bold'>${price}</p>
    
    </div>
    </div>
  )
}

export default Product