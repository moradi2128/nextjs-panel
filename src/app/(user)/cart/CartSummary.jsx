"use client"
import Button from '@/common/Button'
import TextField from '@/common/TextField';
import { createPayment } from '@/services/paymentService';
import { toPersianNumberWithComma } from '@/utils/toPersianNumber'
import { CreditCardIcon } from '@heroicons/react/24/outline';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import React from 'react'
import { toast } from 'react-hot-toast';

const CartSummary = ({ payDetail, readOnly }) => {
    const { totalOffAmount, totalPrice, totalGrossPrice } = payDetail;
    const { isLoading, mutateAsync } = useMutation({ mutationFn: createPayment })
    const queryClient = useQueryClient()
    const createPaymentHandler = async () => {
        try {
            const { message } = await mutateAsync()
            toast.success(message)
            queryClient.invalidateQueries({ queryKey: ["get-user"] })

        } catch (error) {
            toast.success(message.response.data.message)
        }
    }

    const totalItemStyle = "flex items-center justify-between"
    return (
        <div className='border dark:border-gray-600 p-6 rounded-xl space-y-5 sticky top-[90px] shadow-card'>
            <h2 className='font-bold text-lg border-b border-gray-600  pb-4 mb-2'>
                <CreditCardIcon className="w-5 h-5 inline ml-2" />
                اطلاعات پرداخت

            </h2>
            {!readOnly && <form className='flex flex-row  gap-2 border-b border-gray-600 ' >
                <TextField
                    value=""
                    placeholder="کد تخفیف"
                    className="h-[48px] flex-1"
                    containerStyle="flex-1"
                />
                <Button onClick={createPaymentHandler} isLoading={isLoading}>اعمال</Button>
            </form>}
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
            {!readOnly && <Button className="w-full" onClick={createPaymentHandler} isLoading={isLoading}>ثبت سفارش</Button>}
        </div>
    )
}

export default CartSummary