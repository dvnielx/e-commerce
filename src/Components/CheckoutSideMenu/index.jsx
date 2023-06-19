import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import './styles.css';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    console.log('Product to show', context.productToShow)

    return(
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-2 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-2'>
                <h2 className='font-medium text-xl p-2'>My Order</h2>
                <div>
                    <XMarkIcon className='h-5 w-5 mr-5 text-black cursor-pointer' 
                    onClick={() => context.closeCheckoutSideMenu() }/>
                </div>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu;