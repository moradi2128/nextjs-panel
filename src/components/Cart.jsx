import CartItem from '@/pages/(user)/cart/CartItem'
import CartSummary from '@/pages/(user)/cart/CartSummary'
import React from 'react'

const CartComponent = ({ cart, readOnly = false }) => {
    return (
        <div className='grid grid-cols-6 gap-5'>
            <div className='order-2 lg:order-1 col-span-6 lg:col-span-4 space-y-5 '>
                {cart && cart.productDetail &&
                    cart.productDetail.sort((a, b) => a.title > b.title ? 0 : -1).map((product, i) => {
                        return <CartItem readOnly={readOnly} key={i} content={product} />
                    })}
            </div>
            <div className='order-1 lg:order-2 col-span-6 lg:col-span-2'>
                <CartSummary readOnly={readOnly} payDetail={cart?.payDetail} />
            </div>
        </div>
    )
}

export default CartComponent