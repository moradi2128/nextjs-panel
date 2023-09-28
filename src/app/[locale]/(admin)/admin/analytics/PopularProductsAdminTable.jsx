import { adminPopularProductsTHeads } from '@/constants/tableHeads'
import clsxm from '@/lib/clsxm'
import { toLocalDateStringShort } from '@/utils/toLocalDate'
import { toPersianNumberWithComma } from '@/utils/toPersianNumber'
import { EyeIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PopularProductsAdminTable = ({ products }) => {
    return (
        <table className="_table">
            <thead className="_thead">
                <tr>
                    {(adminPopularProductsTHeads || []).map((item) => {
                        return <th scope="col" className="px-6 py-3 whitespace-nowrap text-right" key={item.id}>{item.label}</th>
                    })}
                </tr>
            </thead>
            <tbody className='tbody'>
                {(products || []).map((product, index) => {
                    return (
                        <tr key={index} className={clsxm(`_tr`, products.length - 1 === index && "border-none")} >
                            <td className="_td">
                                <div className="avatar">
                                    <div className="w-16 rounded">
                                        <Image src={product.image} />
                                    </div>
                                </div>
                            </td>
                            <td className="_td max-w-[280px] whitespace-nowrap truncate">{product.productName}</td>
                            <td className="_td">{toLocalDateStringShort(product.date)}</td>
                            <td className={clsx("_td text-green-400")}>{toPersianNumberWithComma(product.price) + " تومان"}</td>
                            <td className="_td whitespace-nowrap">{product.author}</td>
                            <td className="_td">{product.status === "available" ?
                                <span className='badge badge__success'>موجود</span>
                                : <span className='badge badge__secondary'>پیش نویس</span>}
                            </td>
                            <td className={clsx("_td ")}>{toPersianNumberWithComma(product.salesCount)}</td>
                            <td>
                                <div className='center'>
                                    <Link href={`/admin/payments/${product.id}`} className="crud__style detail__icon">
                                        <EyeIcon className='w-5 h-5 text-slate-400' />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default PopularProductsAdminTable