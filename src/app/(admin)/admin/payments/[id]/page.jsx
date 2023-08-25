"use client"
import Loading from '@/common/Loading';
import Avatar from '@/components/Avatar';
import CartComponent from '@/components/Cart';
import { useGetOnePayment } from '@/hooks/usePayments';
import clsxm from '@/lib/clsxm';
import { toLocalDateString, toLocalDateStringShort } from '@/utils/toLocalDate';
import { PersianNumbers, toPersianNumberWithComma } from '@/utils/toPersianNumber';
import { CreditCardIcon } from '@heroicons/react/24/outline';
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const { id } = useParams();
    const { isLoading, data } = useGetOnePayment(id)
    const { amount,
        createdAt,
        description,
        invoiceNumber,
        isPaid,
        paymentDate,
        paymentMethod,
        status,
        user,
        cart
    } = data?.payment[0] || {}

    const { coupon, payDetail, productDetail } = cart || []
    const { avatarUrl, email, name, phoneNumber } = user || []
    const headItemStyleLabel = "block font-bold text-[13px] mb-2 text-slate-400"
    const headItemStyleValue = "font-bold text-[15px] text-slate-600"
    if (isLoading) return <Loading />
    return (
        <div>
            <div className="flex flex-row flex-wrap justify-between items-center gap-6 mb-5 rounded-xl bg-gray-50 p-3">
                <div>
                    <label className={headItemStyleLabel}>نام کاربر</label>
                    <div className="flex flex-row items-center gap-2">
                        <Avatar avatarUrl={avatarUrl} alt={name} />
                        <span className="text-xs font-bold">{name}</span>
                    </div>
                </div>
                <div>
                    <label className={headItemStyleLabel}>شماره تماس </label>
                    <p className={headItemStyleValue}>
                        {PersianNumbers(phoneNumber)}
                    </p>
                </div>
                <div>
                    <label className={headItemStyleLabel}>وضعیت</label>
                    <p className={clsxm("badge badge__success")} >
                        {status === "COMPLETED" ? "پرداخت شده" : "پرداخت نشده"}
                    </p>
                </div>
                <div>
                    <label className={headItemStyleLabel}>تاریخ صورتحساب</label>
                    <p className={headItemStyleValue}>
                        {toLocalDateStringShort(new Date(Number(paymentDate)))}
                    </p>
                </div>
                <div>
                    <label className={headItemStyleLabel}>مبلغ پرداخت</label>
                    <p className={headItemStyleValue}>
                        {toPersianNumberWithComma(amount)}
                    </p>
                </div>
                <div>
                    <label className={headItemStyleLabel}>شیوه پرداخت</label>
                    <p className={headItemStyleValue}>
                        {paymentMethod === "ZARINPAL" ? "زرین پال" : "نقدی"}
                    </p>
                </div>

                {/* <h3 className='font-bold text-md'>مبلغ:{toPersianNumberWithComma(amount)} تومان</h3>
                {status === "COMPLETED" ? <span className='badge badge__success'>پرداخت شده</span> : <span className='badge badge__secondary'>پرداخت نشده</span>}
                <div className="flex flex-row items-center gap-2">
                    {avatarUrl}
                    <Avatar avatarUrl={avatarUrl} alt={name} />
                    <span className="text-xs font-bold">{name}</span>
                </div>
                <span className="text-xs font-bold block mb-2">تاریخ پرداخت :  {toLocalDateString(createdAt)}</span> */}
            </div>
            {/* === payment detail === */}
            <CartComponent cart={cart} readOnly={true} />
        </div>
    )
}


const CartSummary = ({ payDetail }) => {
    const { totalOffAmount, totalPrice, totalGrossPrice } = payDetail;

    const totalItemStyle = "flex items-center justify-between"
    return (
        <div className='border p-6 rounded-xl space-y-5 sticky top-[90px] shadow-card'>
            <h2 className='font-bold text-lg border-b pb-4 mb-2'>
                <CreditCardIcon className="w-5 h-5 inline ml-2" />
                اطلاعات پرداخت

            </h2>
            <div className={`${totalItemStyle} font-bold`}>
                <span >جمع کل</span>
                <span >{toPersianNumberWithComma(totalGrossPrice)} تومان</span>
            </div>

            <div className={totalItemStyle}>
                <span className=' font-bold'>تخفیف</span>
                <span className='font-bold text-red-400'>{toPersianNumberWithComma(totalOffAmount)} - </span>
            </div>
            <div className="divider" />
            <div className={`${totalItemStyle} font-bold `}>
                <span>مبلغ قابل پرداخت</span>
                <span className="text-lg">{toPersianNumberWithComma(totalPrice)} تومان</span>
            </div>
        </div>
    )
}
export default page