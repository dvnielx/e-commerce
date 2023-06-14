import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import './styles.css';

const ProductDetails = () => {
    const context = useContext(ShoppingCartContext)

    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-2 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-4'>Details</h2>
                <div>
                    <XMarkIcon className='h-5 w-5 text-black cursor-pointer' 
                    onClick={() => context.closeProductDetail()}/>
                </div>
            </div>
        </aside>
    )
}

export default ProductDetails;