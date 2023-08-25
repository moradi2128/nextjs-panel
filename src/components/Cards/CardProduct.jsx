import React from 'react'
import Link from 'next/link'


import { ChevronLeftIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { PersianNumbers, toPersianNumberWithComma } from '@/utils/toPersianNumber'
import AddToCart from '@/pages/(user)/products/[slug]/AddToCart'
import LikeProduct from '@/pages/(user)/products/LikeProduct'
const CardProduct = ({ product }) => {
    // console.log('product', product)
    const { description, createdAt, slug, title, price, offPrice, discount, imageLink } = product
    return <div
        className='col-span-6 md:col-span-2 lg:col-span-2 rounded-2xl transition-all duration-200 shadow-card hover:shadow-light p-2 flex flex-col' >
        {/* {imageLink && <figure><Image src={imageLink} width={200} height={100} alt={title} /></figure>} */}
        <Link
            href={`/products/${slug}`}
        >
            <figure className='h-[200px] bg-black/10 rounded-xl overflow-hidden mb-3'>
                <span className='flex justify-center items-center h-full'>
                    <PhotoIcon className="w-9 h-9 text-gray-400" />
                </span>
            </figure>
        </Link>
        <div className='p-3 flex-1 flex flex-col justify-between'>
            {/* === Body ===  */}
            <div className="flex-1 flex justify-between flex-col">
                <div>
                    <div className='flex justify-between items-center mb-3'>
                        <div>
                            <Link
                                href={`/products/${slug}`}>
                                <h2 className='font-bold text-xl'>{title}</h2>

                            </Link>
                            {/* <div className='text-xs'>
                <span>تاریخ انتشار :</span>
                <span className='font-bold'>
                  {toLocalDateStringShort(createdAt)}
                </span>
              </div> */}
                        </div>
                        <LikeProduct product={product} />
                    </div>
                    {/* === description === */}
                    <p className='mb-3 text-justify line-clamp-3'>{description}</p>
                </div>
                <Link className='group transition-all duration-200 text-primary-800 hover:text-primary-900 font-bold'
                    href={`/products/${slug}`}
                >
                    مشاهده محصول
                    <ChevronLeftIcon className="w-5 h-5 transition-all duration-200 inline mr-1 group-hover:mr-2" />
                </Link>
            </div>
            {/* === footer === */}
            <div className='flex items-center gap-2 border-t border-gray-200 pt-3 mt-3 min-h-[75px]'>
                <AddToCart product={product} className="flex-1" />
                <div className="flex-1 text-end">
                    {!!discount && <div className='mb-1 flex justify-end items-center'>
                        <s className='font-bold text-gray-400 text-lg'>{toPersianNumberWithComma(price)}</s>
                        <span className='badge badge__error mr-3'>% {PersianNumbers(discount)}</span>
                    </div>}
                    <span className='font-bold text-gray-800 text-xl'>{toPersianNumberWithComma(offPrice)} تومان</span>
                </div>
            </div>
        </div>
    </div >
}
export default CardProduct