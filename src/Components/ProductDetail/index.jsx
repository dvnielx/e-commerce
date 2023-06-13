import { XMarkIcon } from '@heroicons/react/24/solid';
import './styles.css';

const ProductDetails = () => {
    return(
        <aside className='product-detail flex flex-col fixed right-2 border border-black rounded-lg bg-white'>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-4'>Detail</h2>
                <div>
                    <XMarkIcon className='h-5 w-5 text-black' />
                </div>
            </div>
        </aside>
    )
}

export default ProductDetails;