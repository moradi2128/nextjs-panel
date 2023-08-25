"use client"
import Loading from '@/common/Loading'
import { productsListTHeads } from '@/constants/tableHeads'
import { useRemoveProduct } from '@/hooks/useProduct'
import { PersianNumbers, toPersianNumberWithComma } from '@/utils/toPersianNumber'
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-hot-toast'

const ProductTable = ({ products }) => {
    const queryClient = useQueryClient()
    const { isLoading, mutateAsync } = useRemoveProduct();

    const removeProductHandler = async (id) => {
        try {
            const { message } = await mutateAsync(id)
            toast.success(message)
            queryClient.invalidateQueries({ queryKey: ["get-products"] })
        } catch (error) {
            if (error?.response?.data) {
                toast.error(error?.response?.data.message);
            }
        }
    }
    return (
        <table className="_table">
            <thead className="_thead">
                <tr className='_tr'>
                    {(productsListTHeads || []).map((item) => {
                        return <th scope="col" className="_th" key={item.id}>{item.label}</th>
                    })}
                </tr>
            </thead>
            <tbody className="_tbody">
                {(products || []).map((product, index) => {
                    return (
                        <tr key={index} className="_tr" >
                            <td className="_td">{index}</td>
                            <td className="_td font-bold whitespace-nowrap">{product.title}</td>
                            <td className="_td whitespace-nowrap">
                                <span className='block'>
                                    نام :  {product.category.title}
                                </span>
                                <span>
                                    نام انگلیسی : {product.category.englishTitle}
                                </span>
                            </td>
                            <td className="_td ">{toPersianNumberWithComma(product.price)}</td>
                            <td className="_td">
                                <span className='block'>{PersianNumbers(product.discount)}  %</span>
                            </td>
                            <td className="_td">{toPersianNumberWithComma(product.offPrice)}</td>
                            <td className="_td">{PersianNumbers(product.countInStock)}</td>
                            <td className="_td">
                                <div className='flex gap-4'>
                                    <Link href={`/admin/products/${product._id}`} className="crud__style detail__icon">
                                        <EyeIcon className='w-5 h-5 text-slate-400' />
                                    </Link>
                                    <Link href={`/admin/products/edit/${product._id}`} className="crud__style edit__icon">
                                        <PencilSquareIcon className='w-5 h-5 text-slate-400' />
                                    </Link>
                                    <button onClick={() => removeProductHandler(product._id)} className="crud__style delete__icon">
                                        <TrashIcon className='w-5 h-5 text-red-400' />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table >
    )
}

export default ProductTable