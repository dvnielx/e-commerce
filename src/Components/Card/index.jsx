import React from 'react';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusIcon } from '@heroicons/react/24/solid';

const Card = (data) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count +1)
    context.setCartProducts([context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
    console.log('Cart:', context.cartProducts)
  }

  return (
    <div className='bg-white cursor-pointer w-45 h-50 rounded-lg'
    onClick={() => showProduct(data.data)}>
        <figure className='relative mb-2 w-full h-4/5'> 
            <span className='absolute bottom-0 eft-0 mg-2 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.description} />
                <div className='absolute top-0 right-0 flex justify-center items-center m-2 bg-white w-6 h-6 rounded-full p-1'
                onClick={(event) => addProductsToCart(event,  data.data)}> 
                <PlusIcon className='h-5 w-5 text-black' />
                 </div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>{data.data.title}</span>
            <span className='text-lg font-medium'>${data.data.price}</span>
        </p>
    </div>
  )
}

export default Card