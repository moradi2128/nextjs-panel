import { adminPaymentTHeads } from '@/constants/tableHeads'
import { toLocalDateString } from '@/utils/toLocalDate'
import { toPersianNumberWithComma } from '@/utils/toPersianNumber'
import { EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const PaymentAdminTable = ({ payments }) => {
    return (
        <table className="__table">
            <thead className="_thead">
                <tr className="_tr">
                    {(adminPaymentTHeads || []).map((item) => {
                        return <th scope="col" className="_th" key={item.id}>{item.label}</th>
                    })}
                </tr>
            </thead>
            <tbody className="_tbody">
                {(payments || []).map((payment, index) => {
                    return (
                        <tr key={index} className="_tr" >
                            <td className="_td">{index}</td>
                            <td className="_td">{payment._id}</td>
                            <td className="_td max-w-[280px] whitespace-nowrap truncate">{payment.description}</td>
                            <td className="_td">
                                <div className='flex flex-col'>
                                    <span>{payment.user.name}</span>
                                    <span>{payment.user.email}</span>
                                    <span className='font-bold'>{payment.user.phoneNumber}</span>
                                </div>
                            </td>
                            <td className="_td">{payment.cart.productDetail.map((product) => {
                                return <span key={product._id} className="whitespace-nowrap">{product.title + " "}</span>
                            })}</td>

                            <td className="_td font-bold">{toPersianNumberWithComma(payment.amount)}</td>
                            <td className="_td whitespace-nowrap">{toLocalDateString(payment.createdAt)}</td>
                            <td className="_td">{payment.status === "COMPLETED" ? (
                                <span className='badge badge__success'>موفق</span>
                            ) : <span className='badge badge__error'>نا موفق</span>}</td>
                            <td>
                                <div className='center'>
                                    <Link href={`/admin/payments/${payment._id}`} className="crud__style detail__icon">
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

export default PaymentAdminTable