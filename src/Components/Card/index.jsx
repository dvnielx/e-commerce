import React from 'react';

const Card = () => {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
        <figure className='relative mb-2 w-full h-4/5'> 
            <span className='absolute bottom-0 eft-0 mg-2 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>Electronics</span>
                <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/17131288/pexels-photo-17131288/free-photo-of-senderos-del-canon-del-antilope.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='headphones' />
                <div className='absolute top-0 right-0 flex justify-center items-center m-2 bg-white w-6 h-6 rounded-full p-1'> 
                + </div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>Hadphones</span>
            <span className='text-lg font-medium'>$300</span>
        </p>
    </div>
  )
}

export default Card