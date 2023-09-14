import AddToCart from '@/pages/(user)/products/[slug]/AddToCart'
import { toPersianNumberWithComma } from '@/utils/toPersianNumber'
import React from 'react'
import Counter from './Counter';

const ProductPrice = ({ product }) => {
    const { discount, price, offPrice, countInStock, _id } = product;
    return (
        // <div className="">
            <div className="flex justify-between">
                <div>
                    <p className="mb-2">قیمت محصول :{" "}
                        <span className={`${discount ? "line-through" : "font-bold"}`}>
                            {" "}
                            {toPersianNumberWithComma(price)} تومان
                        </span>
                    </p>
                    {!!discount && (
                        <div className=' relative mb-5'>
                            <p className='text-xl font-bold text-gray-700 dark:text-gray-300'>قیمت با تخفیف : {toPersianNumberWithComma(offPrice)} تومان</p>
                            <div className='absolute left-0 -top-[25px] bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm'>
                                {toPersianNumberWithComma(discount)} %
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex gap-10">
                    {/* <Counter
                    quantity={countInStock}
                    productId={_id}
                /> */}
                    <AddToCart product={product} className="" />
                </div>
            </div>
        // </div>
    )
}

export default ProductPrice