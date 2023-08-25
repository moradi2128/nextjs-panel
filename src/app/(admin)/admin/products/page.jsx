"use client"
import Loading from '@/common/Loading'
import AddButton from '@/components/AddButton'
import { useGetAllProducts } from '@/hooks/useProduct'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import ProductTable from './ProductTable'

const Products = () => {
  const { data, isLoading } = useGetAllProducts();
  const { products } = data || {}

  if (isLoading) return <Loading />
  return (
    <div>
      <div className='flex justify-between items-center my-5'>
        <div />
        <AddButton href="/admin/products/add">
          اضافه کردن محصول
        </AddButton>
      </div>
      <div className='overflow-auto'>
        <ProductTable products={products} />
      </div>
    </div>
  )
}

export default Products