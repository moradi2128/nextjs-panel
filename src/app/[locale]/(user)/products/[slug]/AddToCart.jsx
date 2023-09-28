"use client"
import Button from '@/common/Button'
import { useGetUser } from '@/hooks/useAuth'
import { useAddToCart } from '@/hooks/useCart'
import clsxm from '@/lib/clsxm'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useQueryClient, } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-hot-toast'

const AddToCart = (props) => {
    const { className, product } = props
    const { isLoading, mutateAsync } = useAddToCart()
    const queryClient = useQueryClient()
    const router = useRouter()
    const { data } = useGetUser()
    const { user } = data || {}

    const addToCartHandler = async () => {
        if (!user) {
            toast.error("لطفا ابتدا وارد شوید");
            router.push("/auth")
            return
        }
        try {
            const { message } = await mutateAsync(product._id)
            toast.success(message);
            queryClient.invalidateQueries({ queryKey: "get-user" })
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
    const idInCart = (user, product) => {
        if (!user) return false
        return user.cart?.products.some((p) => p.productId === product._id)
    }
    if (idInCart(user, product)) return <Link href={"/cart"} className={clsxm("btn btn__primary font-bold", className)}>ادامه سفارش</Link>
    return (
        <Button onClick={addToCartHandler} isLoading={isLoading} className={clsxm(className)}>
            <ShoppingCartIcon className="w-5 h-5 text-white" />
        </Button>

    )
}

export default AddToCart