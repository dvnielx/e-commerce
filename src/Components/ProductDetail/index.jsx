import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import './styles.css';

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    console.log('Product to show', context.productToShow)

    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-2 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-2'>
                <h2 className='font-medium text-xl p-2'>Details</h2>
                <div>
                    <XMarkIcon className='h-5 w-5 mr-5 text-black cursor-pointer' 
                    onClick={() => context.closeProductDetail()}/>
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' 
                src={context.productToShow.images[0]} 
                alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail;