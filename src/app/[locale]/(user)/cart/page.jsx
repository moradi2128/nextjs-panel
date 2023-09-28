"use client"
import Loading from '@/common/Loading'
import CartComponent from '@/components/Cart'
import { useGetUser } from '@/hooks/useAuth'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import SectionLayout from '@/Layout/SectionLayout'

const Cart = () => {
  const { data, isLoading } = useGetUser()
  const { user, cart } = data || {}
  if (isLoading) return <div className='h-full flex justify-center items-center'>
    <Loading />
  </div>
  if (!user || !data) {
    return (
      <div className='grid place-content-center place-items-center h-full'>
        <h2 className='font-bold text-2xl mb-6'>برای مشاهده سبد خرید لطفا وارد حساب کاربری خود شوید</h2>
        <Link href="/auth" >ورود به حساب کاربری</Link>
      </div>
    )
  }
  if (!user.cart?.products || user.cart?.products.length === 0) {
    return (
      <div className='grid place-content-center place-items-center h-full'>
        <h2 className='font-bold text-2xl mb-6'>سبد خرید خالی است</h2>
        <Link href="/products" >رفتن به صفحه محصولات</Link>
      </div>
    )
  }
  return (
    <SectionLayout
      className="container"
      label="سبد خرید شما"
      LabelIcon={ShoppingCartIcon}
    >
      <CartComponent cart={cart} />
    </SectionLayout>
  )
}

export default Cart