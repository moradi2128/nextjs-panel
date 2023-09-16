import { getCategories } from '@/services/categoryService'
import { getProducts } from '@/services/productService'
import React from 'react'
import CategorySlider from './CategorySlider'
import queryString from "query-string"

import { cookies } from 'next/headers';
import { toStringCookies } from '@/utils/toStringCookies'

import SectionLayout from '@/Layout/SectionLayout'
import CardProduct from '@/components/Cards/CardProduct'
export const dynamic = "force-dynamic" // eq to {cache:"no-store"} or SSR in pages Dir

const Products = async ({ searchParams }) => {
  const cookieStore = cookies();
  const strCookie = toStringCookies(cookieStore)
  const { products } = await getProducts(queryString.stringify(searchParams), strCookie)
  const { categories } = await getCategories()
  return (
    <SectionLayout
      label="محصولات"
      className="container"
    >
      <div className='grid grid-cols-5 gap-10 items-start'>
        <CategorySlider categories={categories} />
        <div className='col-span-5 md:col-span-4 grid grid-cols-6 gap-4'>
          {(products || []).map((product) => {
            return <CardProduct key={product._id} product={product} />
          })}
        </div>
      </div>
    </SectionLayout>
  )
}



export default Products