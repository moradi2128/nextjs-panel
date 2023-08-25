"use client"
import Loading from '@/common/Loading'
import AddButton from '@/components/AddButton'
import { useGetAllCategories } from '@/hooks/useCagetories'
import Link from 'next/link'
import React from 'react'
import CategoryTable from './CategoryTable'

const Categories = () => {
  const { data, isLoading } = useGetAllCategories();
  const { categories } = data || {}

  if (isLoading) return <Loading />
  return (
    <div>
      <div className='flex justify-between items-center my-5'>
        <div />
        <AddButton href="/admin/categories/add">
          اضافه کردن دسته بندی
        </AddButton>
      </div>
      <div className='overflow-auto'>
        <CategoryTable categories={categories} />
      </div>
    </div>
  )
}

export default Categories