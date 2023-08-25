"use client"
import { useAddToCart, useDecrementFromCart } from '@/hooks/useCart';
import { toPersianNumberWithComma } from '@/utils/toPersianNumber';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { toast } from 'react-hot-toast';

const Counter = ({ quantity, plusHandler, minusHandler, productId }) => {
    const iconContainerStyle = "cursor-pointer flex justify-center items-center w-[45px] h-full px-2";
    const iconStyle = "w-4 h-4"

    const queryClient = useQueryClient()
    const { mutateAsync: addMutateAsync } = useAddToCart()
    const { mutateAsync: decrementMutateAsync } = useDecrementFromCart()
    // === add to Cart ===
    const addToCartHandler = async () => {
        if (productId) {
            try {
                const { message } = await addMutateAsync(productId)
                toast.success(message)
                queryClient.invalidateQueries({ queryKey: "get-user" })
            } catch (error) {
                if (error?.response?.data) {
                    toast.error(error?.response?.data.message);
                }
            }
        }
    }
    // === decrement From Cart ===
    const decrementFromCartHandler = async () => {
        if (productId) {
            try {
                const { message } = await decrementMutateAsync(productId);
                toast.success(message)
                queryClient.invalidateQueries({ queryKey: "get-user" })
            } catch (error) {
                if (error?.response?.data) {
                    toast.error(error?.response?.data.message);
                }
            }
        }
    }
    return (
        <div className='flex gap-2 items-center bg-gray-100 rounded-[50px] h-[50px] shadow-light '>
            {/* === plusHandler === */}
            <span
                className={`${iconContainerStyle}`}
                onClick={plusHandler ? plusHandler : addToCartHandler}
            >
                <PlusIcon className={`${iconStyle}`} />
            </span>
            {/* === quantity === */}
            <span className='shadow-lg text-center text-white p-3 bg-primary-900/50 rounded-full w-[50px] h-[50px]'>{toPersianNumberWithComma(quantity)}</span>
            {/* === minusHandler === */}
            <span
                className={`${iconContainerStyle}`}
                onClick={minusHandler ? minusHandler : decrementFromCartHandler}>
                {quantity > 1 ? <MinusIcon className={`${iconStyle}`} /> : <TrashIcon className={`${iconStyle} text-red-500`} />}
            </span>
        </div>
    )
}
export default Counter