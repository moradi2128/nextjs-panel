import { adminLastedInvoicesTHeads } from '@/constants/tableHeads'
import { toLocalDateStringShort } from '@/utils/toLocalDate'
import { toPersianNumberWithComma } from '@/utils/toPersianNumber'
import { EyeIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

const LastedInvoicesAdminTable = ({ invoices }) => {
    return (
        <table className="_table">
            <thead className="_thead">
                <tr>
                    {(adminLastedInvoicesTHeads || []).map((item) => {
                        return <th scope="col" className="_th" key={item.id}>{item.label}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {(invoices || []).map((invoice, index) => {
                    return (
                        <tr key={index} className="_tr" >
                            <td className="_td">{invoice.invoiceNo}</td>
                            <td className="_td max-w-[280px] whitespace-nowrap truncate">{invoice.customerName}</td>
                            <td className="_td">{toLocalDateStringShort(invoice.date)}</td>
                            <td className={clsx("_td", invoice.status === "UNPAID" ? "text-red-400" : "text-green-400")}>{toPersianNumberWithComma(invoice.amount) + " تومان"}</td>
                            <td className="_td whitespace-nowrap">{invoice.email}</td>
                            <td className="_td">{invoice.productId}</td>
                            <td className="_td">{invoice.status === "PAID" ?
                                <span className='badge badge__success'>پرداخت شده</span>
                                : invoice.status === "PENDING" ? <span className='badge badge__secondary'>در حال پرداخت</span> : <span className='badge badge__error'>پرداخت نشده</span>}</td>
                            <td>
                                <Link href={`/admin/payments/${invoice.invoiceNo}`} className="flex justify-center">
                                    <EyeIcon className='w-5 h-5 text-slate-400' />
                                </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default LastedInvoicesAdminTable