import ResentSalesSkeleton from '@/components/Skeleton/ResentSalesSkeleton'
import { toLocalDateString } from '@/utils/toLocalDate'
import { toPersianNumberWithComma } from '@/utils/toPersianNumber'
import Image from 'next/image'
import React from 'react'

const ResentSales = ({ data }) => {
    return (
        <ul>
            {data.length === 0 ?
                [...Array(3).keys()].map((_, i) => {
                    return <ResentSalesSkeleton key={i} />
                })
                :
                data.map((salesItem) => {
                    return <ResentSalesItem key={salesItem.id} content={salesItem} />
                })}
        </ul>
    )
}
const ResentSalesItem = ({ content }) => {
    const { name, avatar, date, price } = content
    return <li className='flex flex-row justify-between items-center mb-3'>
        <div className='flex flex-row gap-3'>
            <div className="avatar">
                <div className="w-12 rounded-full ">
                    <Image src={avatar} alt={name} />
                </div>
            </div>
            <div>
                <h4 className="font-bold  dark:text-gray-400">{name}</h4>
                <p className="text-xs text-gray-400 dark:text-gray-500">{toLocalDateString(date)}</p>
            </div>
        </div>
        <p className="font-bold text-green-500">{toPersianNumberWithComma(price) + " تومان"}</p>
    </li>

}
export default ResentSales