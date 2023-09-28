import { userPaymentTHeads } from '@/constants/tableHeads'
import { toLocalDateString } from '@/utils/toLocalDate'
import { toPersianNumberWithComma } from '@/utils/toPersianNumber'
import React from 'react'

const PaymentTable = ({ payments }) => {
    return (
        <table className="_table">
            <thead className="_thead">
                <tr className="_tr">
                    {(userPaymentTHeads || []).map((item) => {
                        return <th scope="col" className="_th" key={item.id}>{item.label}</th>
                    })}
                </tr>
            </thead>
            <tbody className="_tbody">
                {(payments || []).map((payment, index) => {
                    return (
                        <tr key={index} className="_tr" >
                            <td className="_td">{index}</td>
                            <td className="_td">{payment.invoiceNumber}</td>
                            <td className="_td max-w-[280px] whitespace-nowrap truncate">{payment.description}</td>
                            <td className="_td">{payment.cart.productDetail.map((product) => {
                                return <div key={product._id}>{product.title}</div>
                            })}</td>

                            <td className="_td font-bold">{toPersianNumberWithComma(payment.amount)}</td>
                            <td className="_td">{toLocalDateString(payment.createdAt)}</td>
                            <td className="_td">{payment.status === "COMPLETED" ? (
                                <span className='badge badge__success'>موفق</span>
                            ) : <span className='badge badge__error'>نا موفق</span>}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default PaymentTable