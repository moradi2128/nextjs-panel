"use client"
import { adminCouponTHeads } from '@/constants/tableHeads'
import { PersianNumbers } from '@/utils/toPersianNumber'
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-hot-toast'
import { toLocalDateStringShort } from "@/utils/toLocalDate"
import { useRemoveCoupon } from '@/hooks/useCoupons'
const CouponsTable = ({ coupons }) => {
    const queryClient = useQueryClient()
    const { isLoading, mutateAsync } = useRemoveCoupon();

    const removeCouponHandler = async (id) => {
        try {
            const { message } = await mutateAsync(id)
            toast.success(message)
            queryClient.invalidateQueries({ queryKey: ["get-coupons"] })
        } catch (error) {
            if (error?.response?.data) {
                toast.error(error?.response?.data.message);
            }
        }
    }
    return (
        <table className="_table">
            <thead className="_thead">
                <tr className="_tr">
                    {(adminCouponTHeads || []).map((item) => {
                        return <th scope="col" className="_th" key={item.id}>{item.label}</th>
                    })}
                </tr>
            </thead>
            <tbody className="_tbody">
                {(coupons || []).map((coupon, index) => {
                    return (
                        <tr key={index} className="_tr" >
                            <td className="_td">{index}</td>
                            <td className="_td font-bold">{coupon.code}</td>
                            <td className="_td">
                                <span className='badge badge__primary'>
                                    {coupon.type}
                                </span>
                            </td>
                            <td className="_td text-center">{PersianNumbers(coupon.amount)}</td>
                            <td className="_td flex flex-wrap gap-2">{coupon.productIds.map((product) => {
                                return <span key={product._id} className="whitespace-nowrap badge badge__primary">{product.title}</span>
                            })}</td>
                            <td className="_td text-center">{PersianNumbers(coupon.usageCount)}</td>
                            <td className="_td text-center">{PersianNumbers(coupon.usageLimit)}</td>
                            <td className="_td text-center">{toLocalDateStringShort(coupon.expireDate)}</td>
                            <td className="_td">
                                <div className='flex gap-4'>
                                    <Link href={`/admin/coupons/${coupon._id}`} className="crud__style detail__icon">
                                        <EyeIcon className='w-5 h-5 text-slate-400' />
                                    </Link>
                                    <Link href={`/admin/coupons/edit/${coupon._id}`} className="crud__style edit__icon">
                                        <PencilSquareIcon className='w-5 h-5 text-slate-400' />
                                    </Link>
                                    <button onClick={() => removeCouponHandler(coupon._id)} className="crud__style delete__icon">
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

export default CouponsTable