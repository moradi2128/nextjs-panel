"use client"
import React, { useCallback, useState } from 'react'
import CheckBox from '@/common/CheckBox'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const ProductFilter = ({ categories }) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category")
        ?.split(",") || [])

    const createQueryString = useCallback((name, value) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, value)
        return params.toString()

    }, [searchParams])
    const categoryHandler = (e) => {
        const { value } = e.target
        if (selectedCategory.includes(value)) {
            const categories = selectedCategory.filter((item) => item !== value)
            setSelectedCategory(categories)
            router.push(pathname + "?" + createQueryString("category", categories))

        } else {
            const categories = [...selectedCategory, value]
            setSelectedCategory(categories)
            router.push(pathname + "?" + createQueryString("category", categories))
        }
    }
    return (
        <div className="col-span-2 md:col-span-4">
            <h2 className='font-bold text-lg mb-5'>دسته بندی ها</h2>
            <ul className='space-y-6'>
                {
                    (categories || []).map((category) => {
                        return <CheckBox
                            key={category._id}
                            id={category._id}
                            value={category.englishTitle}
                            name="product-type"
                            label={category.title}
                            checked={selectedCategory.includes(category.englishTitle)}
                            onChange={categoryHandler}
                        />
                    })
                }
            </ul>
        </div>
    )
}

export default ProductFilter