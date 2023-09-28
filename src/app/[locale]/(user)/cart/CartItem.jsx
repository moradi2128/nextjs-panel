"use client"

import Counter from '@/components/Counter';
import { useAddToCart, useDecrementFromCart } from '@/hooks/useCart';
import { PersianNumbers, toPersianNumberWithComma } from '@/utils/toPersianNumber';
import { MinusIcon, PhotoIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react'
import { toast } from 'react-hot-toast';
const iconStyle = "w-4 h-4  text-secondary-600";

const CartItem = ({ content, readOnly = false }) => {
    var { title, quantity, discount, price, offPrice, _id, slug } = content;
    return (
        <div className='flex flex-col md:flex-row items-center justify-between gap-3 rounded-xl p-4 shadow-card '>
            {/* {imageLink && <figure><Image src={imageLink} width={200} height={100} alt={title} /></figure>} */}
            <Link
                href={`/products/${slug}`}
                className="w-full flex flex-row items-center flex-1 gap-3"
            >
                <figure className='h-[70px] w-[70px] bg-black/10 rounded-xl overflow-hidden mb-3'>
                    <span className='flex justify-center items-center h-full'>
                        <PhotoIcon className="w-6 h-6 text-gray-400" />
                    </span>
                </figure>
                <h3 className='flex-1 block mb-2 text-lg font-bold whitespace-nowrap' href={`/products/${slug}`}>
                    {title}
                </h3>
            </Link>
            <div className="flex flex-row gap-4 items-center">
                <div >
                    {!!discount && <div className='mb-1 flex  items-center'>
                        <s className='font-bold text-gray-400 text-lg'>{toPersianNumberWithComma(price)}</s>
                        <span className='badge badge__error mr-3'>% {PersianNumbers(discount)}</span>
                    </div>}
                    <span className='font-bold text-gray-800 dark:text-slate-300 text-xl'>{toPersianNumberWithComma(offPrice)} تومان</span>
                </div>
                {readOnly ?
                    <span className='font-bold'>تعداد : {PersianNumbers(quantity) + "×"}</span>
                    : <Counter
                        quantity={quantity}
                        productId={_id}
                    />
                }
            </div>

        </div>
    )
}

export default CartItem

